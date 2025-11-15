import { MessageSquare, Mic } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mode } from '../App';

interface ModeSelectionProps {
  onSelect: (mode: Mode) => void;
}

export default function ModeSelection({ onSelect }: ModeSelectionProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
            <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h1 className="text-blue-900 mb-3">AI Medical Coach</h1>
          <p className="text-blue-700/70 max-w-2xl mx-auto">
            Improve your triage and presentation skills through AI-guided practice sessions.
            Choose your preferred interaction method to begin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            className="p-8 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group"
            onClick={() => onSelect('chat')}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center mb-4 transition-colors">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Chat Mode</h3>
              <p className="text-blue-700/70 mb-6">
                Type your presentation and receive text-based feedback and coaching questions
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Start Chat Session
              </Button>
            </div>
          </Card>

          <Card 
            className="p-8 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group"
            onClick={() => onSelect('voice')}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center mb-4 transition-colors">
                <Mic className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Voice Mode</h3>
              <p className="text-blue-700/70 mb-6">
                Speak your presentation naturally and have a voice conversation with the AI coach
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Start Voice Session
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-blue-800 text-center">
            💡 Both modes provide real-time metrics tracking to help you improve your clinical presentation skills
          </p>
        </div>
      </div>
    </div>
  );
}
