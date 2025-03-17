import React from 'react';
import SegmentPage from './common/SegmentPage';
import { Shield, BarChart4, FileText, Server, Clock, Users, Briefcase, Target, Database, ArrowRight } from 'lucide-react';
import HoverCard from '../HoverCard';

const VentureCapitalSegment = () => {
  const pageData = {
    title: "Venture Capital Firms",
    subtitle: "Technology Solutions",
    description: "Mobile-first technology solutions for early-stage venture capital firms that enhance relationship management, deal flow tracking, and knowledge sharing across investment teams.",
    
    challenges: [
      {
        title: "Relationship Management",
        description: "Tracking complex networks of founders, co-investors, and portfolio companies across the ecosystem.",
        icon: <Users className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Deal Flow Tracking",
        description: "Managing and prioritizing large volumes of potential investments efficiently.",
        icon: <Database className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Knowledge Management",
        description: "Capturing and sharing insights across small, often distributed investment teams.",
        icon: <FileText className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Mobile Accessibility",
        description: "Providing secure access to critical information for partners constantly on the move.",
        icon: <BarChart4 className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Security & Confidentiality",
        description: "Protecting sensitive deal information and intellectual property from threats.",
        icon: <Shield className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Portfolio Support",
        description: "Extending limited resources to support the needs of portfolio companies.",
        icon: <Briefcase className="w-6 h-6 text-blue-600" />
      }
    ],
    
    keyFeatures: {
      description: "Early-stage venture capital firms need technology that enhances their deal flow management, provides meaningful insights from relationship data, and supports knowledge sharing across small teams while enabling mobility and portfolio company support."
    },
    
    metrics: [
      { value: "35%", label: "Increase in qualified deal flow" },
      { value: "Enhanced", label: "Follow-on funding coordination" },
      { value: "Improved", label: "Partner productivity during travel" },
      { value: "Strengthened", label: "Portfolio company support" }
    ],
    
    recommendedServices: [
      {
        title: "CxO Advisory Services",
        description: "Strategic guidance to develop relationship management strategies and knowledge sharing approaches that enhance pattern recognition.",
        icon: <Briefcase className="w-8 h-8 text-blue-600" />,
        benefits: [
          "CRM and relationship management strategies aligned with VC workflows",
          "Knowledge management approaches preserving insights across the investment team",
          "Mobile-first technology strategies supporting partners on the go",
          "Information architectures enhancing pattern recognition across investments"
        ]
      },
      {
        title: "AI for Deal Flow Analysis",
        description: "Advanced analytics and machine learning solutions to identify promising investment opportunities.",
        icon: <Target className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Pattern recognition algorithms for screening investment opportunities",
          "Data enrichment services to enhance investment analysis",
          "Automated due diligence and market research capabilities",
          "Integration with existing CRM and deal management systems"
        ]
      },
      {
        title: "Microsoft Optimization",
        description: "Flexible environments supporting both office and remote work with maximum mobility and accessibility.",
        icon: <Server className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Flexible environments supporting both office and remote work",
          "Cloud solutions optimized for maximum mobility",
          "Secure but accessible knowledge repositories",
          "Systems supporting the collaborative nature of VC decision-making"
        ]
      },
      {
        title: "Electronic Message Archiving",
        description: "Secure and compliant communication solutions that integrate with relationship management systems.",
        icon: <FileText className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Integrated messaging that captures relationship intelligence",
          "Compliance solutions appropriate for financial services",
          "Mobile-friendly communication systems for partners on the move",
          "Automated insight extraction from communication data"
        ]
      }
    ],
    
    caseStudy: {
      title: "Enterprise Software VC Firm Enhances Deal Flow",
      firmType: "Early-Stage Venture Capital Firm",
      profile: [
        { icon: <Briefcase className="w-4 h-4" />, text: "Enterprise software focus" },
        { icon: <Users className="w-4 h-4" />, text: "15-person investment team" },
        { icon: <Target className="w-4 h-4" />, text: "Relationship-driven strategy" }
      ],
      challenge: "A 15-person early-stage venture capital firm focusing on enterprise software was struggling to manage relationships across hundreds of portfolio companies and thousands of potential investments while providing consistent support to founders.",
      approach: [
        "Designed an integrated relationship intelligence architecture",
        "Implemented appropriate CRM workflows for venture capital processes",
        "Created mobile-friendly knowledge management approaches",
        "Provided technology guidance for portfolio company support"
      ],
      results: [
        { value: "35%", label: "Increase in qualified deal flow" },
        { value: "Enhanced", label: "Follow-on funding coordination" },
        { value: "Improved", label: "Partner productivity during travel" }
      ],
      quote: "The relationship intelligence system transformed our ability to leverage our network. We're seeing more qualified deals, providing better support to portfolio companies, and our partners can access critical information anywhere. The pattern recognition capabilities have also helped us identify promising opportunities we might have missed.",
      author: {
        title: "Managing Partner",
        company: "Enterprise Software VC Firm"
      }
    }
  };

  // Custom rendering for challenges with hover effect
  const renderChallenges = () => {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {pageData.challenges.map((challenge, index) => (
          <HoverCard
            key={index}
            hoverEffect="scale"
            className="h-full"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{challenge.title}</h3>
                </div>
              </div>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          </HoverCard>
        ))}
      </div>
    );
  };

  // Custom rendering for recommended services with hover effect
  const renderRecommendedServices = () => {
    return (
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {pageData.recommendedServices.map((service, index) => (
          <HoverCard
            key={index}
            hoverEffect="both"
            className="h-full"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="border-t border-gray-200 pt-4 mt-4 mt-auto">
                  <h4 className="font-medium text-gray-800 mb-3">Why It Matters for Venture Capital Firms:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-green-500 mr-2 flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 11 12 14 22 4"></polyline>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                          </svg>
                        </div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </HoverCard>
        ))}
      </div>
    );
  };

  // Extend pageData with custom renders
  const extendedPageData = {
    ...pageData,
    renderChallenges,
    renderRecommendedServices
  };

  return <SegmentPage {...extendedPageData} />;
};

export default VentureCapitalSegment;