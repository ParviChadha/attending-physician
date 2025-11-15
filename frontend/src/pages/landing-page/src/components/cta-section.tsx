import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-12 space-y-6">
              <h2 className="text-4xl text-gray-900">
                Ready to Build Your Triage Skills?
              </h2>
              <p className="text-xl text-gray-600">
                Join hundreds of nurses who are improving their clinical decision-making 
                and patient assessment skills with AI-powered coaching.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
                  <Link to="/chat">
                    Launch Training Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 pt-4">
                <CheckIcon />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckIcon />
                <span>Start training immediately</span>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMxNjE5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Healthcare technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
