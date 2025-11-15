import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Send } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import CasePresentation from '@/components/CasePresentation';
import MetricsSidebar from '@/components/MetricsSidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? '';
const SESSION_KEY = 'ap-chat-session';

type Stage = 'case-presentation' | 'interaction';

export interface Metrics {
  focusedInformation: number;
  workingDiagnosis: number;
  clinicalReasoning: number;
  differentialDiagnosis: number;
  conciseness: number;
  diagnosticWorkup: number;
  managementPlan: number;
  hypothesisDriven: number;
  synthesis: number;
}

export interface CaseInfo {
  title: string;
  patientDetails: string;
  chiefComplaint: string;
  vitals: string;
  initialAssessment: string;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  variant?: 'question' | 'evaluation' | 'answer' | 'initial';
  content: string;
  timestamp: Date;
  meta?: any;
}

const mockCase: CaseInfo = {
  title: "Emergency Department Presentation",
  patientDetails: "45-year-old male, John Smith",
  chiefComplaint: "Chest pain and shortness of breath for 2 hours",
  vitals: "BP: 145/92, HR: 105, RR: 22, Temp: 37.2°C, SpO2: 94% on room air",
  initialAssessment: "Patient appears anxious, diaphoretic, clutching chest"
};

export default function NewChat() {
  const backendConfigured = Boolean(API_BASE_URL);
  const [stage, setStage] = useState<Stage>('case-presentation');
  const [sessionId, setSessionId] = useState(() => localStorage.getItem(SESSION_KEY) ?? '');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState('');
  const [metrics, setMetrics] = useState<Metrics>({
    focusedInformation: 0,
    workingDiagnosis: 0,
    clinicalReasoning: 0,
    differentialDiagnosis: 0,
    conciseness: 0,
    diagnosticWorkup: 0,
    managementPlan: 0,
    hypothesisDriven: 0,
    synthesis: 0
  });
  const [sessionComplete, setSessionComplete] = useState(false);
  const [isMobileMetricsOpen, setIsMobileMetricsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!sessionId || !backendConfigured) return;
    fetchSession(sessionId);
  }, [sessionId, backendConfigured]);

  const fetchSession = async (id: string) => {
    if (!backendConfigured || !id) return;
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat/sessions/${id}`);
      if (!response.ok) {
        if (response.status === 404) {
          handleResetSession();
          throw new Error('Session expired. Start a new one to continue.');
        }
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.detail ?? 'Unable to load session.');
      }

      const payload = await response.json();
      hydrateFromSession(payload);
      setError('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const metricKeyMap: Record<keyof Metrics, string[]> = {
    focusedInformation: ['focused_relevant_information', '1'],
    workingDiagnosis: ['clear_working_diagnosis', '2'],
    clinicalReasoning: ['logical_organization_reasoning', '3'],
    differentialDiagnosis: ['differential_diagnosis', '4'],
    conciseness: ['conciseness_efficiency', '5'],
    diagnosticWorkup: ['diagnostic_workup_plan', '6'],
    managementPlan: ['management_plan_disposition', '7'],
    hypothesisDriven: ['hypothesis_driven_inquiry', '8'],
    synthesis: ['synthesis_ability', '9'],
  };

  const deriveMetricScore = (metricsData: any, keys: string[]) => {
    for (const key of keys) {
      const entry = metricsData?.[key];
      if (!entry) continue;

      if (typeof entry === 'number') {
        return Math.round(entry);
      }

      if (typeof entry?.confidence === 'number') {
        return Math.round(entry.confidence * 100);
      }

      if (typeof entry?.score === 'number') {
        return Math.round(entry.score);
      }
    }
    return 0;
  };

  const hydrateFromSession = (payload: any) => {
    const state = payload.state;
    if (!state) return;

    // Convert backend messages to UI messages
    const newMessages: Message[] = [];

    if (state.initial_evaluation) {
      newMessages.push({
        id: 'initial-eval',
        role: 'assistant',
        variant: 'initial',
        content: state.initial_evaluation.overall_assessment ?? "Let's explore your clinical reasoning.",
        timestamp: new Date(),
        meta: {
          priorityGaps: state.initial_evaluation.priority_gaps,
        },
      });
    }

    const history = state.conversation_history ?? [];
    history.forEach((turn: any, index: number) => {
      newMessages.push({
        id: `assistant-question-${index}`,
        role: 'assistant',
        variant: 'question',
        content: turn.question,
        timestamp: new Date(),
        meta: {
          metricTarget: turn.question_obj?.metric_target,
          followUpHint: turn.question_obj?.follow_up_hint,
          acceptableCriteria: turn.question_obj?.acceptable_criteria,
        },
      });

      if (turn.answer) {
        newMessages.push({
          id: `user-answer-${index}`,
          role: 'user',
          variant: 'answer',
          content: turn.answer,
          timestamp: new Date(),
        });
      }

      if (turn.evaluation) {
        newMessages.push({
          id: `assistant-eval-${index}`,
          role: 'assistant',
          variant: 'evaluation',
          content: turn.evaluation.feedback,
          timestamp: new Date(),
          meta: {
            metricTarget: turn.evaluation.metric,
            status: turn.evaluation.status,
            strengths: turn.evaluation.strengths,
            weaknesses: turn.evaluation.weaknesses,
            nextAction: turn.evaluation.next_action,
          },
        });
      }
    });

    setMessages(newMessages);

    // Update metrics from backend
    if (state.metrics_status) {
      const metricsData = state.metrics_status;
      setMetrics({
        focusedInformation: deriveMetricScore(metricsData, metricKeyMap.focusedInformation),
        workingDiagnosis: deriveMetricScore(metricsData, metricKeyMap.workingDiagnosis),
        clinicalReasoning: deriveMetricScore(metricsData, metricKeyMap.clinicalReasoning),
        differentialDiagnosis: deriveMetricScore(metricsData, metricKeyMap.differentialDiagnosis),
        conciseness: deriveMetricScore(metricsData, metricKeyMap.conciseness),
        diagnosticWorkup: deriveMetricScore(metricsData, metricKeyMap.diagnosticWorkup),
        managementPlan: deriveMetricScore(metricsData, metricKeyMap.managementPlan),
        hypothesisDriven: deriveMetricScore(metricsData, metricKeyMap.hypothesisDriven),
        synthesis: deriveMetricScore(metricsData, metricKeyMap.synthesis),
      });
    }

    setSessionComplete(payload.status !== 'active');
  };

  const handlePresentationSubmit = async (presentation: string) => {
    if (!backendConfigured) {
      setError('Set VITE_API_BASE_URL to your FastAPI deployment first.');
      return;
    }

    if (!presentation.trim()) {
      setError('Please enter a case presentation.');
      return;
    }

    if (presentation.trim().length < 40) {
      setError('Please provide at least 40 characters so the coach can evaluate the case.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ presentation }),
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload?.detail ?? 'Unable to start a session.');
      }

      localStorage.setItem(SESSION_KEY, payload.session_id);
      setSessionId(payload.session_id);
      setStage('interaction');
    } catch (err: any) {
      setError(err.message ?? 'Failed to reach the backend.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!sessionId) {
      setError('Start a session first.');
      return;
    }

    if (!input.trim()) {
      setError('Please enter your response.');
      return;
    }

    // Add user message to UI immediately
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat/sessions/${sessionId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer: input }),
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload?.detail ?? 'Unable to process that answer.');
      }

      // Refresh session to get updated state
      await fetchSession(sessionId);

      const completed = payload?.response?.data?.type === 'session_complete';
      if (completed) {
        setSessionComplete(true);
      }
    } catch (err: any) {
      setError(err.message ?? 'Something went wrong.');
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetSession = () => {
    setSessionId('');
    localStorage.removeItem(SESSION_KEY);
    setMessages([]);
    setInput('');
    setMetrics({
      focusedInformation: 0,
      workingDiagnosis: 0,
      clinicalReasoning: 0,
      differentialDiagnosis: 0,
      conciseness: 0,
      diagnosticWorkup: 0,
      managementPlan: 0,
      hypothesisDriven: 0,
      synthesis: 0
    });
    setSessionComplete(false);
    setStage('case-presentation');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {stage === 'case-presentation' && (
        <CasePresentation
          caseInfo={mockCase}
          onSubmit={handlePresentationSubmit}
          onBack={() => window.location.href = '/'}
          error={error}
          isLoading={isLoading}
        />
      )}

      {stage === 'interaction' && (
        <div className="flex h-screen">
          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link to="/" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                  <ArrowLeft size={20} />
                  Back to Home
                </Link>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">AI Medical Coach</h1>
                  <p className="text-sm text-gray-600">Interactive Training Session</p>
                </div>
              </div>
              <Button variant="outline" onClick={handleResetSession}>
                Reset Session
              </Button>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-6">
              <div className="max-w-4xl mx-auto space-y-4">
                {isLoading && messages.length === 0 && (
                  <div className="text-center text-gray-500">Loading session...</div>
                )}

                {messages.map((message) => (
                  <Card key={message.id} className={`p-4 ${message.role === 'user' ? 'bg-blue-50 ml-12' : 'bg-gray-50 mr-12'}`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${message.role === 'user' ? 'bg-blue-600' : 'bg-gray-600'}`}>
                        {message.role === 'user' ? 'You' : 'AI'}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm mb-1">
                          {message.role === 'user' ? 'You' : 'AI Coach'}
                          {message.meta?.metricTarget && (
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {message.meta.metricTarget}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-800">{message.content}</p>
                      </div>
                    </div>
                  </Card>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-gray-500">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                    </div>
                    <span className="text-sm">AI is thinking...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="bg-white border-t border-gray-200 p-4">
              <div className="max-w-4xl mx-auto">
                {error && (
                  <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm">
                    {error}
                  </div>
                )}

                {sessionComplete ? (
                  <div className="text-center p-4 bg-green-50 border border-green-200 rounded">
                    <p className="text-green-800 font-semibold">Session Complete!</p>
                    <p className="text-sm text-green-700">Check your metrics on the right. Click "Reset Session" to try another case.</p>
                  </div>
                ) : (
                  <>
                    <Textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your response..."
                      className="min-h-[100px] resize-none"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <div className="mt-3 flex justify-between items-center">
                      <p className="text-sm text-gray-500">Press Enter to send, Shift+Enter for new line</p>
                      <Button onClick={handleSendMessage} disabled={isTyping || !input.trim()}>
                        <Send size={16} className="mr-2" />
                        Send
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Metrics Sidebar */}
          <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
            <MetricsSidebar metrics={metrics} />
          </div>
        </div>
      )}
    </div>
  );
}
