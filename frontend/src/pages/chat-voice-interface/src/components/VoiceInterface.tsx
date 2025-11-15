import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { CaseInfo, Metrics } from '../App';
import MetricsSidebar from './MetricsSidebar';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';

interface Message {
  id: string;
  role: 'user' | 'coach';
  content: string;
  timestamp: Date;
}

interface VoiceInterfaceProps {
  caseInfo: CaseInfo;
  initialPresentation: string;
  metrics: Metrics;
  onMetricsUpdate: (metrics: Metrics) => void;
  onBack: () => void;
}

export default function VoiceInterface({
  caseInfo,
  initialPresentation,
  metrics,
  onMetricsUpdate,
  onBack
}: VoiceInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const questionCount = useRef(0);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        if (finalTranscript) {
          setTranscript(prev => prev + finalTranscript);
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }

    // Initialize speech synthesis
    synthRef.current = window.speechSynthesis;

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

    setTimeout(() => {
      generateCoachResponse(initialPresentation, 0);
      setIsInitialized(true);
    }, 1000);

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const speak = (text: string) => {
    if (synthRef.current) {
      synthRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      synthRef.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const generateCoachResponse = (userMessage: string, currentQuestionCount: number) => {
    setTimeout(() => {
      let response = '';
      let metricsUpdate = { ...metrics };

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
        response = "Very thorough. Now, how would you communicate this situation to the attending physician during a handoff? Try presenting it using the SBAR format.";
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
        response = "Outstanding work! You've demonstrated significant improvement in your presentation. Your organization is much clearer, you're thinking through the clinical reasoning systematically, and your communication has become more concise and professional. Keep practicing these techniques!";
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
      speak(response);
    }, 1500);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      
      // Send the transcript as a message
      if (transcript.trim()) {
        const userMessage: Message = {
          id: Date.now().toString(),
          role: 'user',
          content: transcript.trim(),
          timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        
        questionCount.current += 1;
        generateCoachResponse(transcript, questionCount.current);
        setTranscript('');
      }
    } else {
      recognitionRef.current.start();
      setIsListening(true);
      setTranscript('');
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
              <h2 className="text-blue-900">AI Medical Coach - Voice Mode</h2>
              <p className="text-blue-700/70">{caseInfo.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isListening && (
              <Badge className="bg-red-500">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse mr-2" />
                Listening
              </Badge>
            )}
            {isSpeaking && (
              <Badge className="bg-blue-500">
                <Volume2 className="w-3 h-3 mr-1" />
                Speaking
              </Badge>
            )}
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
                      {message.role === 'coach' && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => speak(message.content)}
                          className="flex-shrink-0"
                        >
                          <Volume2 className="w-4 h-4 text-blue-600" />
                        </Button>
                      )}
                    </div>
                  </Card>
                </div>
              ))}
              
              {transcript && isListening && (
                <div className="flex justify-end">
                  <Card className="max-w-[80%] p-4 bg-blue-100 border-blue-200">
                    <p className="text-blue-900 italic">{transcript}</p>
                  </Card>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="border-t border-blue-100 bg-white p-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-4">
                <Button
                  onClick={toggleListening}
                  disabled={isSpeaking || !isInitialized}
                  className={`w-20 h-20 rounded-full ${
                    isListening
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isListening ? (
                    <MicOff className="w-8 h-8" />
                  ) : (
                    <Mic className="w-8 h-8" />
                  )}
                </Button>
                <div className="text-center">
                  <p className="text-blue-900">
                    {isListening ? 'Listening... Click to stop' : 'Click to speak your response'}
                  </p>
                  {isSpeaking && (
                    <Button
                      variant="outline"
                      onClick={stopSpeaking}
                      className="mt-2 border-blue-300 text-blue-700 hover:bg-blue-50"
                    >
                      <VolumeX className="w-4 h-4 mr-2" />
                      Stop AI Speech
                    </Button>
                  )}
                </div>
              </div>
              
              {!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-center">
                    ⚠️ Voice recognition is not supported in your browser. Please use Chrome or Edge for voice features.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <MetricsSidebar metrics={metrics} />
      </div>
    </div>
  );
}
