import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { ArrowLeft, Send } from 'lucide-react';
import { CaseInfo, Metrics } from '../App';
import MetricsSidebar from './MetricsSidebar';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  id: string;
  role: 'user' | 'coach';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  caseInfo: CaseInfo;
  initialPresentation: string;
  metrics: Metrics;
  onMetricsUpdate: (metrics: Metrics) => void;
  onBack: () => void;
}

export default function ChatInterface({
  caseInfo,
  initialPresentation,
  metrics,
  onMetricsUpdate,
  onBack
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const questionCount = useRef(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize conversation with user's presentation
    const initialMessages: Message[] = [
      {
        id: '1',
        role: 'user',
        content: initialPresentation,
        timestamp: new Date()
      }
    ];
    setMessages(initialMessages);

    // AI responds with first coaching question
    setTimeout(() => {
      generateCoachResponse(initialPresentation, 0);
    }, 1000);
  }, []);

  const generateCoachResponse = (userMessage: string, currentQuestionCount: number) => {
    setIsTyping(true);

    setTimeout(() => {
      let response = '';
      let metricsUpdate = { ...metrics };

      // Generate contextual responses based on conversation flow
      if (currentQuestionCount === 0) {
        response = "Thank you for that presentation. I can see you've covered the basic information. Let me ask you some clarifying questions. Can you tell me more about the patient's cardiac risk factors? What specific details would be important to know given his presentation?";
        metricsUpdate = {
          focusedInformation: 40,
          workingDiagnosis: 35,
          clinicalReasoning: 45,
          differentialDiagnosis: 30,
          conciseness: 48,
          diagnosticWorkup: 25,
          managementPlan: 28,
          hypothesisDriven: 38,
          synthesis: 35
        };
      } else if (currentQuestionCount === 1) {
        response = "Good. Now, walk me through your differential diagnosis. What are the top three life-threatening conditions you need to rule out immediately, and why?";
        metricsUpdate = {
          focusedInformation: metrics.focusedInformation + 12,
          workingDiagnosis: metrics.workingDiagnosis + 10,
          clinicalReasoning: metrics.clinicalReasoning + 8,
          differentialDiagnosis: metrics.differentialDiagnosis + 15,
          conciseness: metrics.conciseness + 7,
          diagnosticWorkup: metrics.diagnosticWorkup + 8,
          managementPlan: metrics.managementPlan + 5,
          hypothesisDriven: metrics.hypothesisDriven + 10,
          synthesis: metrics.synthesis + 8
        };
      } else if (currentQuestionCount === 2) {
        response = "Excellent thinking. What immediate interventions and diagnostic tests would you order, and in what sequence? Remember to prioritize based on the ABCs and critical time-sensitive conditions.";
        metricsUpdate = {
          focusedInformation: metrics.focusedInformation + 10,
          workingDiagnosis: metrics.workingDiagnosis + 8,
          clinicalReasoning: metrics.clinicalReasoning + 12,
          differentialDiagnosis: metrics.differentialDiagnosis + 8,
          conciseness: metrics.conciseness + 8,
          diagnosticWorkup: metrics.diagnosticWorkup + 15,
          managementPlan: metrics.managementPlan + 12,
          hypothesisDriven: metrics.hypothesisDriven + 10,
          synthesis: metrics.synthesis + 10
        };
      } else if (currentQuestionCount === 3) {
        response = "Very thorough. Now, how would you communicate this situation to the attending physician during a handoff? Try presenting it using the SBAR format (Situation, Background, Assessment, Recommendation).";
        metricsUpdate = {
          focusedInformation: metrics.focusedInformation + 8,
          workingDiagnosis: metrics.workingDiagnosis + 10,
          clinicalReasoning: metrics.clinicalReasoning + 10,
          differentialDiagnosis: metrics.differentialDiagnosis + 8,
          conciseness: metrics.conciseness + 12,
          diagnosticWorkup: metrics.diagnosticWorkup + 10,
          managementPlan: metrics.managementPlan + 12,
          hypothesisDriven: metrics.hypothesisDriven + 8,
          synthesis: metrics.synthesis + 12
        };
      } else {
        response = "Outstanding work! You've demonstrated significant improvement in your presentation. Your organization is much clearer, you're thinking through the clinical reasoning systematically, and your communication has become more concise and professional. Key strengths I noticed: structured approach, consideration of critical differentials, and appropriate prioritization. Keep practicing these techniques!";
        metricsUpdate = {
          focusedInformation: Math.min(95, metrics.focusedInformation + 15),
          workingDiagnosis: Math.min(92, metrics.workingDiagnosis + 12),
          clinicalReasoning: Math.min(96, metrics.clinicalReasoning + 10),
          differentialDiagnosis: Math.min(90, metrics.differentialDiagnosis + 12),
          conciseness: Math.min(94, metrics.conciseness + 10),
          diagnosticWorkup: Math.min(88, metrics.diagnosticWorkup + 12),
          managementPlan: Math.min(90, metrics.managementPlan + 12),
          hypothesisDriven: Math.min(93, metrics.hypothesisDriven + 12),
          synthesis: Math.min(91, metrics.synthesis + 14)
        };
      }

      const newMessage: Message = {
        id: Date.now().toString(),
        role: 'coach',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newMessage]);
      onMetricsUpdate(metricsUpdate);
      setIsTyping(false);
    }, 1500);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    questionCount.current += 1;
    generateCoachResponse(input, questionCount.current);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-white border-b border-blue-100 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-blue-700 hover:text-blue-900 hover:bg-blue-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h2 className="text-blue-900">AI Medical Coach - Chat Mode</h2>
              <p className="text-blue-700/70">{caseInfo.title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 p-6">
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <Card
                    className={`max-w-[80%] p-4 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white border-blue-100'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {message.role === 'coach' && (
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600">AI</span>
                        </div>
                      )}
                      <div className="flex-1">
                        <p className={message.role === 'user' ? 'text-white' : 'text-blue-900'}>
                          {message.content}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <Card className="max-w-[80%] p-4 bg-white border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600">AI</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </Card>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="border-t border-blue-100 bg-white p-4">
            <div className="max-w-4xl mx-auto flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your response..."
                className="min-h-[60px] border-blue-200 focus:border-blue-400 resize-none"
                disabled={isTyping}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 px-6"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <MetricsSidebar metrics={metrics} />
      </div>
    </div>
  );
}
