import React from 'react';
import SegmentPage from './common/SegmentPage';
import { Shield, BarChart4, FileText, Server, Clock, BookOpen, Target, Briefcase, Users, Database } from 'lucide-react';
import HoverCard from '../HoverCard';

const HedgeFundSegment = () => {
  const pageData = {
    title: "Hedge Funds",
    subtitle: "Technology Solutions",
    description: "Enterprise-grade technology infrastructure designed specifically for emerging and established hedge funds. Meet institutional investor expectations while preserving capital for investment operations.",
    
    challenges: [
      {
        title: "Institutional Due Diligence",
        description: "Meeting the rigorous security and infrastructure standards of institutional investors despite limited resources and staff.",
        icon: <FileText className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Trading Infrastructure",
        description: "Implementing reliable trading systems that can handle sophisticated strategies without enterprise-level budgets.",
        icon: <BarChart4 className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Market Data Management",
        description: "Efficiently processing market data from multiple sources for analysis and decision-making.",
        icon: <Database className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Business Continuity",
        description: "Ensuring uninterrupted trading operations during system disruptions or external events.",
        icon: <Clock className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Cybersecurity",
        description: "Protecting sensitive investment IP and trade data from increasingly sophisticated threats.",
        icon: <Shield className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Regulatory Compliance",
        description: "Supporting compliance requirements without dedicated compliance staff or excessive overhead.",
        icon: <BookOpen className="w-6 h-6 text-blue-600" />
      }
    ],
    
    keyFeatures: {
      description: "Emerging hedge funds need technology infrastructure that satisfies institutional investor due diligence while preserving capital for investment operations and avoiding premature fixed costs."
    },
    
    metrics: [
      { value: "92%", label: "ODD success rate after implementation" },
      { value: "35-40%", label: "Reduction in technology TCO" },
      { value: "65%", label: "Reduction in security incidents" },
      { value: "Zero", label: "Trading disruptions during market hours" }
    ],
    
    recommendedServices: [
      {
        title: "Security Foundation",
        description: "Security and compliance controls that meet institutional standards without compromising trading performance.",
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Security controls aligned with institutional investor expectations",
          "Threat monitoring designed for financial services environments",
          "Documented security policies that satisfy investor due diligence",
          "Incident response protocols appropriate for trading operations"
        ]
      },
      {
        title: "Electronic Message Archiving",
        description: "Compliant email and messaging solutions that satisfy regulatory requirements with minimal user friction.",
        icon: <FileText className="w-8 h-8 text-blue-600" />,
        benefits: [
          "SEC and FINRA compliant archiving solutions",
          "Integrated workflow for easy discovery and retrieval",
          "Comprehensive coverage across all communication channels",
          "Minimal impact on trader productivity"
        ]
      },
      {
        title: "Private MSP",
        description: "Support model designed around trading hours with accelerated response times during market operations.",
        icon: <Users className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Trading-hour aware support with accelerated market hours response",
          "On-demand expertise for specialized trading technologies",
          "Proactive monitoring to prevent trading disruptions",
          "Support resources that scale based on trading activity"
        ]
      },
      {
        title: "CxO Advisory Services",
        description: "Strategic guidance to develop a technology roadmap that aligns with your fund's growth trajectory and investment strategy.",
        icon: <Briefcase className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Technology roadmap development aligned with fund growth projections",
          "Infrastructure investment prioritization based on investor requirements",
          "Documentation frameworks for institutional due diligence",
          "Governance appropriate for small but sophisticated investment operations"
        ]
      }
    ],
    
    caseStudy: {
      title: "Emerging Quant Fund Secures Institutional Allocation",
      firmType: "Quantitative Hedge Fund",
      profile: [
        { icon: <BarChart4 className="w-4 h-4" />, text: "$120M AUM Quantitative Strategy" },
        { icon: <Users className="w-4 h-4" />, text: "8-person investment team" },
        { icon: <Target className="w-4 h-4" />, text: "Targeting institutional allocations" }
      ],
      challenge: "An emerging quantitative hedge fund with $120M AUM was struggling with institutional investor due diligence. Their existing infrastructure lacked the documentation and controls required by institutional allocators, but they couldn't justify hiring a full IT team or implementing enterprise systems.",
      approach: [
        "Created a technology roadmap prioritizing investments based on investor requirements",
        "Implemented appropriate cloud infrastructure with trading-specific security controls",
        "Developed comprehensive documentation satisfying institutional due diligence requirements",
        "Provided trading-hour aware support with specialized expertise"
      ],
      results: [
        { value: "$50M", label: "New institutional allocation secured" },
        { value: "100%", label: "ODD pass rate after implementation" },
        { value: "<2%", label: "Technology expenses as percentage of budget" }
      ],
      quote: "The technology transformation was a game-changer for our fund. We passed operational due diligence with a major endowment, secured a significant allocation, and maintained our lean expense structure. Their understanding of both hedge fund operations and institutional investor requirements made all the difference.",
      author: {
        title: "Chief Operating Officer",
        company: "Quantitative Hedge Fund"
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
                  <h4 className="font-medium text-gray-800 mb-3">Why It Matters for Hedge Funds:</h4>
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

export default HedgeFundSegment;