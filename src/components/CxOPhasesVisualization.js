import React from 'react';
import { Shield, Lightbulb, BrainCircuit, Users, ArrowRight, CheckSquare } from 'lucide-react';

const CxOPhasesVisualization = () => {
  // Define the phases
  const phases = [
    {
      title: "Phase 1",
      subtitle: "Foundation",
      icon: <Shield className="w-10 h-10 text-gray-700" />,
      color: "from-blue-500 to-blue-600",
      description: "Establish robust security infrastructure and ITSM maturity",
      cxoRole: "Security leadership and infrastructure planning to establish proper governance"
    },
    {
      title: "Phase 2",
      subtitle: "Capabilities",
      icon: <Lightbulb className="w-10 h-10 text-gray-700" />,
      color: "from-purple-500 to-purple-600",
      description: "Advance capabilities through AI readiness and compliance maturity",
      cxoRole: "Strategic license management and AI governance framework development"
    },
    {
      title: "Phase 3",
      subtitle: "Optimization",
      icon: <BrainCircuit className="w-10 h-10 text-gray-700" />,
      color: "from-indigo-500 to-indigo-600",
      description: "Focus on business optimization and intelligent automation",
      cxoRole: "Digital transformation leadership and workflow innovation strategy"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      {/* Title Section */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-blue-50 p-3 rounded-full">
            <Users className="w-10 h-10 text-blue-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">CxO Advisory Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our fractional executive leadership provides strategic guidance and implementation expertise across all three phases of your technology transformation
        </p>
      </div>

      {/* Connected Phases */}
      <div className="relative pb-8">
        {/* Connection Line */}
        <div className="absolute top-16 left-1/2 w-4/5 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-700 transform -translate-x-1/2 rounded-full"></div>

        {/* Phases */}
        <div className="flex justify-between relative">
          {phases.map((phase, index) => (
            <div key={index} className="w-1/3 px-2 relative z-10">
              <div className="flex flex-col items-center">
                {/* Phase Circle */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold mb-2`}>
                  {index + 1}
                </div>
                
                {/* Phase Content */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 w-full mt-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-50 p-2 mr-2 rounded-full">
                      {phase.icon}
                    </div>
                    <div>
                      <h3 className="font-bold">{phase.title}</h3>
                      <p className="text-sm text-gray-600">{phase.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CxO Services Overlapping All Phases */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100 mt-4">
        <h3 className="text-xl font-semibold mb-4 text-center">How CxO Services Drive Success Across All Phases</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold mr-3 mt-1 flex-shrink-0`}>
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{phase.subtitle}</h4>
                  <p className="text-sm text-gray-600 mb-2">{phase.cxoRole}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white p-4 rounded-lg mt-6">
          <div className="flex items-start">
            <CheckSquare className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium">Continuous Strategic Oversight</h4>
              <p className="text-sm opacity-90">
                Unlike typical project-based consulting, our CxO Advisory Services provide continuous strategic leadership across all phases, ensuring consistency, accountability, and long-term value creation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-medium text-gray-800 mb-2">Financial Benefits</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm text-gray-600">60-75% cost savings vs. full-time executive hire</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm text-gray-600">35% reduction in technology TCO</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-medium text-gray-800 mb-2">Strategic Benefits</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm text-gray-600">Consistent leadership across the transformation journey</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm text-gray-600">Enterprise expertise without enterprise complexity</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors">
          Learn More About CxO Services
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CxOPhasesVisualization;