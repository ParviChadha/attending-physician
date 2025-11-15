import { AlertTriangle, Users, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

export function StatisticsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            The Healthcare Staffing Crisis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understaffing and lack of training contribute to critical issues in healthcare delivery. 
            Our AI coaching platform helps address these challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-white border-red-100 hover:border-red-200 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-5xl text-red-600">#3</div>
              <h3 className="text-xl text-gray-900">Leading Cause of Death</h3>
              <p className="text-gray-600">
                Medical errors are the <strong>third leading cause of death</strong> in the United States, 
                highlighting the critical need for better training.
              </p>
            </div>
          </Card>
          
          <Card className="p-8 bg-white border-orange-100 hover:border-orange-200 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-5xl text-orange-600">~20%</div>
              <h3 className="text-xl text-gray-900">Hospitals Understaffed</h3>
              <p className="text-gray-600">
                Approximately <strong>one-fifth of hospitals</strong> in the US are understaffed, 
                putting immense pressure on existing healthcare workers.
              </p>
            </div>
          </Card>
          
          <Card className="p-8 bg-white border-blue-100 hover:border-blue-200 transition-all hover:shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-5xl text-blue-600">Solution</div>
              <h3 className="text-xl text-gray-900">AI-Powered Training</h3>
              <p className="text-gray-600">
                Our platform provides <strong>accessible, scalable training</strong> to help nurses 
                develop critical triage skills without adding to staffing burden.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
