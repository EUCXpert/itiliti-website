import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lightbulb, 
  BrainCircuit, 
  ArrowRight, 
  CheckSquare, 
  Users, 
  Database, 
  Server, 
  Lock, 
  FileText, 
  Target, 
  Settings,
  BarChart4,
  Archive,
  Cloud,
  Zap,
  PieChart
} from 'lucide-react';

const ConsolidatedApproachVisualization = () => {
  const [activePhase, setActivePhase] = useState(null);
  
  // Define the phases with their respective services
  const phases = [
    {
      id: 'foundation',
      title: "Phase 1: Foundation",
      subtitle: "Security, Availability & Productivity",
      description: "Ensure core systems are secure, highly available, and productive with ITSM maturity to support new capabilities.",
      color: "blue",
      lightColor: "blue-50",
      mediumColor: "blue-100",
      darkColor: "blue-600",
      icon: <Shield className="w-10 h-10 text-blue-700" />,
      metrics: [
        { value: "92%", label: "ODD success rate" },
        { value: "Zero", label: "Trading disruptions" }
      ],
      services: [
        { 
          name: 'Security Foundation', 
          description: 'Enterprise-grade security infrastructure meeting regulatory and investor requirements',
          icon: <Shield className="w-6 h-6 text-blue-600" /> 
        },
        { 
          name: 'Electronic Message Archiving', 
          description: 'SEC-compliant text message archiving solution with white-glove implementation',
          icon: <Archive className="w-6 h-6 text-blue-600" /> 
        },
        { 
          name: 'Private MSP', 
          description: 'Support tailored for investment firms with trading-hour aware service',
          icon: <Server className="w-6 h-6 text-blue-600" /> 
        },
        { 
          name: 'Core System Optimization', 
          description: 'Ensuring foundational systems run efficiently and reliably',
          icon: <Settings className="w-6 h-6 text-blue-600" /> 
        }
      ],
      cxoRole: {
        title: "CxO Foundation Leadership",
        duties: [
          "Security strategy development",
          "Infrastructure planning",
          "Technology roadmap creation",
          "IT Service Management framework"
        ]
      }
    },
    {
      id: 'capabilities',
      title: "Phase 2: Capabilities",
      subtitle: "Advanced Tools & Frameworks",
      description: "Advance your capabilities through AI readiness, enhanced security frameworks, and mature compliance practices.",
      color: "purple",
      lightColor: "purple-50",
      mediumColor: "purple-100",
      darkColor: "purple-600",
      icon: <Lightbulb className="w-10 h-10 text-purple-700" />,
      metrics: [
        { value: "25-40%", label: "Cost reduction" },
        { value: "3.5x", label: "ROI on investment" }
      ],
      services: [
        { 
          name: 'Microsoft Optimization', 
          description: 'Strategic license management and platform utilization to reduce costs',
          icon: <Cloud className="w-6 h-6 text-purple-600" /> 
        },
        { 
          name: 'AI Readiness', 
          description: 'Prepare your organization for implementing and benefiting from AI',
          icon: <Database className="w-6 h-6 text-purple-600" /> 
        },
        { 
          name: 'Copilot Integration', 
          description: 'Implementing Microsoft Copilot and Copilot for M365 effectively',
          icon: <Zap className="w-6 h-6 text-purple-600" /> 
        },
        { 
          name: 'Advanced Security Framework', 
          description: 'Formalize your cybersecurity program to meet institutional standards',
          icon: <Lock className="w-6 h-6 text-purple-600" /> 
        },
        { 
          name: 'Regulatory Compliance', 
          description: 'Mature audit, risk, and compliance frameworks for investment firms',
          icon: <FileText className="w-6 h-6 text-purple-600" /> 
        }
      ],
      cxoRole: {
        title: "CxO Capability Leadership",
        duties: [
          "Microsoft licensing strategy",
          "AI governance framework",
          "Compliance program leadership",
          "Technology stack optimization"
        ]
      }
    },
    {
      id: 'optimization',
      title: "Phase 3: Optimization",
      subtitle: "Workflow & Intelligence",
      description: "Focus on business optimization through advanced AI integration, intelligent automation, and tailored investment solutions.",
      color: "indigo",
      lightColor: "indigo-50",
      mediumColor: "indigo-100",
      darkColor: "indigo-600",
      icon: <BrainCircuit className="w-10 h-10 text-indigo-700" />,
      metrics: [
        { value: "40%", label: "Research efficiency" },
        { value: "3x", label: "Deal evaluation capacity" }
      ],
      services: [
        { 
          name: 'Advanced AI Solutions', 
          description: 'Segment-specific AI integrations for specialized investment workflows',
          icon: <BrainCircuit className="w-6 h-6 text-indigo-600" /> 
        },
        { 
          name: 'Business Workflow Automation', 
          description: 'Streamline critical investment processes through intelligent automation',
          icon: <Target className="w-6 h-6 text-indigo-600" /> 
        },
        { 
          name: 'Investment Analytics', 
          description: 'Enhanced data analysis and visualization for better decision-making',
          icon: <BarChart4 className="w-6 h-6 text-indigo-600" /> 
        },
        { 
          name: 'Strategic Technology Optimization', 
          description: 'Aligning technology capabilities with strategic business goals',
          icon: <PieChart className="w-6 h-6 text-indigo-600" /> 
        }
      ],
      cxoRole: {
        title: "CxO Optimization Leadership",
        duties: [
          "Digital transformation leadership",
          "Technology-enabled business strategy",
          "Investment workflow innovation",
          "Strategic vendor management"
        ]
      }
    }
  ];

  // Track mouse over phase
  const handlePhaseHover = (phaseId) => {
    setActivePhase(phaseId);
  };

  // Clear hover state
  const handlePhaseLeave = () => {
    setActivePhase(null);
  };

  return (
    <div className="bg-white p-6 rounded-xl">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Three-Phase Transformation Approach</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
          A comprehensive methodology that transforms your investment firm's technology 
          from a necessary expense into a strategic advantage.
        </p>
        {/* Moved value proposition text up here */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
          Creating value by moving from reactive to proactive, aligning with AUM growth, and focusing on investment alpha.
        </p>
        <div className="flex items-center justify-center mb-6 mt-4">
          <div className="px-4 py-2 bg-blue-50 rounded-lg border border-blue-100 inline-flex items-center">
            <Users className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">CxO Advisory Services span all three phases</span>
          </div>
        </div>
      </div>
      
      {/* Visualization of phases with CxO advisory spanning across */}
      <div className="relative mb-12">
        {/* CxO Advisory Bar - Spans all phases */}
        <div className="relative z-20 mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 text-white shadow-lg">
            <div className="flex items-center">
              <div className="bg-white/20 p-2 rounded-lg mr-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold">CxO Advisory Services</h3>
                <p className="text-sm opacity-90">Strategic technology leadership spanning all phases of your transformation journey</p>
              </div>
              <Link 
                to="/cxo-services" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            
            {/* Always visible CxO panel */}
            <div className="mt-4">
              <div className="grid md:grid-cols-3 gap-4 mt-2">
                {phases.map((phase) => (
                  <div key={phase.id} className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">{phase.cxoRole.title}</h4>
                    <ul className="space-y-1">
                      {phase.cxoRole.duties.map((duty, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckSquare className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-white/10 p-4 rounded-lg">
                <div className="flex items-start">
                  <CheckSquare className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Continuous Strategic Oversight</h4>
                    <p className="text-sm opacity-90">
                      Unlike typical project-based consulting, our CxO Advisory Services provide continuous strategic leadership across all phases, ensuring consistency, accountability, and long-term value creation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Financial Benefits</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">60-75%</span>
                    <span className="text-xs opacity-80">Cost savings vs. full-time hire</span>
                  </div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Technology Benefits</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">35%</span>
                    <span className="text-xs opacity-80">Reduction in technology TCO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connection Path */}
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transform -translate-y-1/2 z-0"></div>
        
        {/* Three Phases */}
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {phases.map((phase) => (
            <div 
              key={phase.id}
              className={`transition-all duration-300 h-full ${
                activePhase && activePhase !== phase.id ? 'opacity-70 scale-98' : ''
              }`}
              onMouseEnter={() => handlePhaseHover(phase.id)}
              onMouseLeave={handlePhaseLeave}
            >
              {/* Phase Circle */}
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-full bg-${phase.lightColor} flex items-center justify-center border-4 border-${phase.darkColor} shadow-lg`}>
                  {phase.icon}
                </div>
              </div>
              
              {/* Phase Card */}
              <div className={`bg-white rounded-xl shadow-md border border-${phase.darkColor} overflow-hidden h-full flex flex-col`}>
                {/* Header */}
                <div className={`bg-${phase.lightColor} px-4 py-3 border-b border-${phase.color}-200`}>
                  <h3 className={`text-lg font-bold text-${phase.darkColor}`}>{phase.title}</h3>
                  <p className="text-sm text-gray-600">{phase.subtitle}</p>
                </div>
                
                {/* Content */}
                <div className="p-4 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-4">{phase.description}</p>
                  
                  {/* Key metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {phase.metrics.map((metric, idx) => (
                      <div key={idx} className={`bg-${phase.lightColor} p-3 rounded-lg text-center`}>
                        <div className={`text-xl font-bold text-${phase.darkColor}`}>{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Services section */}
                  <div className="mb-3 flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-800">Key Services</h4>
                    </div>
                    
                    {/* Always visible services */}
                    <div className="space-y-3">
                      {phase.services.map((service, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            {service.icon}
                          </div>
                          <div>
                            <div className="text-sm text-gray-700">{service.name}</div>
                            <p className="text-xs text-gray-600">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA link */}
                  <div className={`text-${phase.darkColor} text-sm font-medium flex items-center justify-center mt-3 pt-3 border-t border-gray-100`}>
                    <Link to="/cxo-services" className="flex items-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Value Proposition Cards section removed and content incorporated into the title section */}
    </div>
  );
};

export default ConsolidatedApproachVisualization;