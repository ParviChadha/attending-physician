import { useState } from 'react';
import ModeSelection from './components/ModeSelection';
import CasePresentation from './components/CasePresentation';
import ChatInterface from './components/ChatInterface';
import VoiceInterface from './components/VoiceInterface';

export type Mode = 'chat' | 'voice' | null;
export type Stage = 'mode-selection' | 'case-presentation' | 'interaction';

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

const mockCase: CaseInfo = {
  title: "Emergency Department Presentation",
  patientDetails: "45-year-old male, John Smith",
  chiefComplaint: "Chest pain and shortness of breath for 2 hours",
  vitals: "BP: 145/92, HR: 105, RR: 22, Temp: 37.2°C, SpO2: 94% on room air",
  initialAssessment: "Patient appears anxious, diaphoretic, clutching chest"
};

function App() {
  const [stage, setStage] = useState<Stage>('mode-selection');
  const [mode, setMode] = useState<Mode>(null);
  const [initialPresentation, setInitialPresentation] = useState('');
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

  const handleModeSelect = (selectedMode: Mode) => {
    setMode(selectedMode);
    setStage('case-presentation');
  };

  const handlePresentationSubmit = (presentation: string) => {
    setInitialPresentation(presentation);
    setStage('interaction');
  };

  const handleBack = () => {
    if (stage === 'interaction') {
      setStage('case-presentation');
    } else if (stage === 'case-presentation') {
      setStage('mode-selection');
      setMode(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {stage === 'mode-selection' && (
        <ModeSelection onSelect={handleModeSelect} />
      )}
      
      {stage === 'case-presentation' && (
        <CasePresentation
          caseInfo={mockCase}
          onSubmit={handlePresentationSubmit}
          onBack={handleBack}
        />
      )}
      
      {stage === 'interaction' && mode === 'chat' && (
        <ChatInterface
          caseInfo={mockCase}
          initialPresentation={initialPresentation}
          metrics={metrics}
          onMetricsUpdate={setMetrics}
          onBack={handleBack}
        />
      )}
      
      {stage === 'interaction' && mode === 'voice' && (
        <VoiceInterface
          caseInfo={mockCase}
          initialPresentation={initialPresentation}
          metrics={metrics}
          onMetricsUpdate={setMetrics}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;
