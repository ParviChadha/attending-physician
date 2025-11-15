import { FileText, MessageCircle, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Present to AI Coach",
      description: "Use voice or text to present your assessment and triage decision to the AI medical coach.",
      step: "01"
    },
    {
      icon: CheckCircle,
      title: "Get Expert Feedback",
      description: "Receive immediate, personalized feedback on your decision-making process and clinical reasoning.",
      step: "02"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Simple, effective training in two steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl opacity-50">{step.step}</div>
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl mb-3">{step.title}</h3>
                  <p className="text-blue-100">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-white/40"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
