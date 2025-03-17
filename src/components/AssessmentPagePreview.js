import React from 'react';
import { Shield, BrainCircuit, CheckSquare, FileText, ArrowRight, Lock, Users, AlertTriangle, CheckCircle, XCircle, Briefcase } from 'lucide-react';

// This is a simplified version of the Assessment Hub main page
const AssessmentPagePreview = () => {
  const assessments = [
    {
      id: 'ai_readiness',
      title: 'AI Readiness Assessment',
      description: 'Evaluate your firm\'s preparedness to implement and benefit from artificial intelligence solutions in your investment operations.',
      icon: <BrainCircuit className="w-10 h-10 text-blue-600" />
    },
    {
      id: 'odd_readiness',
      title: 'Operational Due Diligence Assessment',
      description: 'Evaluate your readiness for institutional investor operational due diligence (ODD) and identify critical improvement areas.',
      icon: <Briefcase className="w-10 h-10 text-blue-600" />
    },
    {
      id: 'security_posture',
      title: 'Security Posture Assessment',
      description: 'Evaluate your firm\'s cybersecurity controls, governance, and resilience against financial services threats and regulatory requirements.',
      icon: <Shield className="w-10 h-10 text-blue-600" />
    }
  ];
  
  return (
    <div className="font-sans bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-8">Boutique Investment Assessment Hub</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {assessments.map((assessment) => (
          <div 
            key={assessment.id} 
            className="bg-white rounded-xl shadow-lg p-5 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                {assessment.icon}
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">{assessment.title}</h3>
            <p className="text-gray-600 text-center text-sm mb-4">{assessment.description}</p>
            <div className="text-blue-600 text-sm font-medium flex items-center justify-center">
              Start Assessment
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mt-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-2">Unlock Valuable Insights</h3>
          <p className="text-gray-700 mb-4">Complete these assessments to receive personalized recommendations for your investment firm.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPagePreview;