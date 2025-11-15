import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MessageSquare } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>AI-Powered Medical Training</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl text-gray-900">
              Master Triage Skills with AI Coaching
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Train nurses to become confident triage professionals through realistic case scenarios 
              and personalized AI feedback. Voice and text interactions available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6" asChild>
                <Link to="/chat">
                  Start Training
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl text-blue-600">1000+</div>
                <div className="text-gray-600">Nurses Trained</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl text-blue-600">50+</div>
                <div className="text-gray-600">Case Scenarios</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl text-blue-600">24/7</div>
                <div className="text-gray-600">Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-20 blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1517120026326-d87759a7b63b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbnVyc2UlMjBob3NwaXRhbHxlbnwxfHx8fDE3NjMyNDMxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Medical professional using technology"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
