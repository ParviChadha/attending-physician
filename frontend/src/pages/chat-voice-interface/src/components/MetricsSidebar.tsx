import { Card } from './ui/card';
import { Metrics } from '../App';
import { TrendingUp, CheckCircle2, Star } from 'lucide-react';

interface MetricsSidebarProps {
  metrics: Metrics;
}

const metricLabels = {
  focusedInformation: 'Focused, Relevant Information',
  workingDiagnosis: 'Clear Working Diagnosis',
  clinicalReasoning: 'Logical Organization + Reasoning',
  differentialDiagnosis: 'Differential Diagnosis',
  conciseness: 'Conciseness + Efficiency',
  diagnosticWorkup: 'Diagnostic Workup Plan',
  managementPlan: 'Management Plan + Disposition',
  hypothesisDriven: 'Hypothesis-Driven Inquiry',
  synthesis: 'Synthesis Ability'
};

const metricDescriptions = {
  focusedInformation: 'Only includes details supporting diagnosis, omits extraneous info',
  workingDiagnosis: 'States hypothesis early, justifies with structured data',
  clinicalReasoning: 'Explains symptom → reasoning → diagnosis connections',
  differentialDiagnosis: 'Provides prioritized alternative diagnoses logically',
  conciseness: 'Short, well-structured, purposeful delivery',
  diagnosticWorkup: 'Identifies prioritized tests with clear rationale',
  managementPlan: 'Ordered, justified management linked to diagnosis',
  hypothesisDriven: 'Shows clear hypothesis, knows what information matters',
  synthesis: 'Provides summary statements, distills key clues'
};

export default function MetricsSidebar({ metrics }: MetricsSidebarProps) {
  const getColorClass = (value: number) => {
    if (value >= 80) return 'text-green-600';
    if (value >= 60) return 'text-yellow-600';
    return 'text-orange-600';
  };

  const getProgressColor = (value: number) => {
    if (value >= 80) return 'bg-green-500';
    if (value >= 60) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const averageScore = Math.round(
    Object.values(metrics).reduce((a, b) => a + b, 0) / Object.keys(metrics).length
  );

  // Highlight most important metric
  const isMostImportant = (key: keyof Metrics) => key === 'focusedInformation';

  return (
    <div className="w-96 bg-white border-l border-blue-100 p-6 overflow-y-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="text-blue-900">Performance Metrics</h3>
        </div>
        <p className="text-blue-700/70">
          Real-time assessment of your clinical presentation skills
        </p>
      </div>

      <Card className="p-4 mb-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
        <p className="text-blue-700 mb-2">Overall Score</p>
        <div className="flex items-end gap-2">
          <span className={`text-blue-900 ${getColorClass(averageScore)}`}>
            {averageScore}%
          </span>
          {averageScore >= 80 && (
            <CheckCircle2 className="w-5 h-5 text-green-600 mb-1" />
          )}
        </div>
      </Card>

      <div className="space-y-5">
        {(Object.keys(metrics) as Array<keyof Metrics>).map((key, index) => (
          <div key={key} className={isMostImportant(key) ? 'p-3 bg-blue-50 rounded-lg border-2 border-blue-200' : ''}>
            <div className="flex items-start justify-between mb-2 gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-blue-900">
                    {index + 1}. {metricLabels[key]}
                  </p>
                  {isMostImportant(key) && (
                    <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                  )}
                </div>
                <p className="text-blue-700/60">
                  {metricDescriptions[key]}
                </p>
              </div>
              <span className={`flex-shrink-0 ${getColorClass(metrics[key])}`}>
                {metrics[key]}%
              </span>
            </div>
            <div className="relative h-2 bg-blue-100 rounded-full overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full ${getProgressColor(metrics[key])} transition-all duration-500 ease-out`}
                style={{ width: `${metrics[key]}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-blue-800">
          💡 Metrics update dynamically as the AI coach evaluates your responses
        </p>
      </div>
    </div>
  );
}
