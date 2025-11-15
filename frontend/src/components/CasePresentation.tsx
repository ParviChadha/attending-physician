import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { ArrowLeft, ClipboardList } from 'lucide-react';

export interface CaseInfo {
  title: string;
  patientDetails: string;
  chiefComplaint: string;
  vitals: string;
  initialAssessment: string;
}

interface CasePresentationProps {
  caseInfo: CaseInfo;
  onSubmit: (presentation: string) => void;
  onBack: () => void;
  error?: string;
  isLoading?: boolean;
}

const buildDefaultPresentation = (info: CaseInfo) =>
  `${info.title}: ${info.patientDetails} presenting with ${info.chiefComplaint}. Vitals: ${info.vitals}. Initial assessment: ${info.initialAssessment}.`;

export default function CasePresentation({ caseInfo, onSubmit, onBack, error, isLoading }: CasePresentationProps) {
  const [presentation, setPresentation] = useState(() => buildDefaultPresentation(caseInfo));

  const handleSubmit = () => {
    if (presentation.trim()) {
      onSubmit(presentation);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-blue-700 hover:text-blue-900 hover:bg-blue-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Mode Selection
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-blue-900">Nurse Case Presentation</h1>
          </div>
          <p className="text-blue-700/70">
            As a nurse, you have a patient case to present. Share your clinical assessment and reasoning with the AI medical coach. 
            This will be the starting point for your coaching session to enhance your triage and presentation skills.
          </p>
        </div>

        <Card className="p-8 border-2 border-blue-100">
          <h3 className="text-blue-900 mb-4">Your Clinical Presentation</h3>
          <p className="text-blue-700/70 mb-4">
            Present your case as you would to a physician or during handoff. Include your assessment, working diagnosis, clinical reasoning, and proposed plan.
          </p>
          
          <Textarea
            value={presentation}
            onChange={(e) => setPresentation(e.target.value)}
            placeholder="Begin your presentation here... (e.g., 'I have a 45-year-old male presenting with chest pain. My assessment is...')"
            className="min-h-[200px] mb-4 border-blue-200 focus:border-blue-400"
          />

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm">
              {error}
            </div>
          )}

          <Button
            onClick={handleSubmit}
            disabled={!presentation.trim() || isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Starting session...' : 'Continue to Coaching Session'}
          </Button>
        </Card>
      </div>
    </div>
  );
}
