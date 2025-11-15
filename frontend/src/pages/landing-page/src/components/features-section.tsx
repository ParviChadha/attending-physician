import { Brain, Mic, MessageSquare, Clock, Target, Award, Workflow } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Mic,
      title: "Voice-to-Voice Interaction",
      description: "Engage naturally with AI using voice commands, simulating real patient interactions.",
      color: "purple"
    },
    {
      icon: MessageSquare,
      title: "Text-Based Chat",
      description: "Prefer typing? Use our text interface for detailed case presentations and feedback.",
      color: "cyan"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Train anytime, anywhere. No scheduling conflicts or instructor availability issues.",
      color: "green"
    },
    {
      icon: Brain,
      title: "RAG-Powered Medical Knowledge",
      description: "Our chatbot uses Retrieval-Augmented Generation (RAG) grounded in verified medical sources and clinical guidelines.",
      color: "blue"
    },
    {
      icon: Workflow,
      title: "Agentic AI Model",
      description: "Powered by an agentic workflow with expert medical knowledge that dynamically reasons through complex scenarios and provides contextual feedback.",
      color: "orange"
    }
  ];
  
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    cyan: "bg-cyan-100 text-cyan-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600"
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            How It Helps You Become a Triage Expert
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI medical coach provides comprehensive training to help nurses develop 
            the critical thinking and assessment skills needed for effective triage.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-all">
                  <div className={`w-12 h-12 rounded-lg ${colorMap[feature.color]} flex items-center justify-center`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.slice(3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index + 3} className="flex flex-col space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-all">
                  <div className={`w-12 h-12 rounded-lg ${colorMap[feature.color]} flex items-center justify-center`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}