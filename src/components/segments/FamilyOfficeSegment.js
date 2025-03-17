import React from 'react';
import SegmentPage from './common/SegmentPage';
import { Shield, FileText, Database, Server, Clock, Users, Briefcase, Target, Eye, Building } from 'lucide-react';
import HoverCard from '../HoverCard';

const FamilyOfficeSegment = () => {
  const pageData = {
    title: "Family Offices",
    subtitle: "Technology Solutions",
    description: "Tailored technology solutions for single and multi-family offices that provide comprehensive wealth visibility while maintaining exceptional privacy and security appropriate for ultra-high-net-worth individuals.",
    
    challenges: [
      {
        title: "Asset Aggregation",
        description: "Creating comprehensive visibility across extremely diverse investments and personal holdings.",
        icon: <Database className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Privacy & Security",
        description: "Protecting highly sensitive personal and financial information with advanced security measures.",
        icon: <Shield className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Multi-generational Reporting",
        description: "Customizing information access for family members with different needs and financial sophistication.",
        icon: <FileText className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Service Integration",
        description: "Bridging personal and financial services into a cohesive technology environment.",
        icon: <Users className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Documentation & Continuity",
        description: "Preserving critical information and processes for multi-generational wealth management.",
        icon: <Eye className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Access Control",
        description: "Implementing customized access based on complex family governance structures.",
        icon: <Clock className="w-6 h-6 text-blue-600" />
      }
    ],
    
    keyFeatures: {
      description: "Family offices require technology that provides holistic visibility across diverse asset types while maintaining exceptional privacy and security controls appropriate for managing personal and financial information for ultra-high-net-worth individuals."
    },
    
    metrics: [
      { value: "65%", label: "Reduction in quarterly reporting effort" },
      { value: "100%", label: "Prevention of sophisticated phishing attempts" },
      { value: "Complete", label: "Asset visibility across all holdings" },
      { value: "Enhanced", label: "Family engagement through personalized access" }
    ],
    
    recommendedServices: [
      {
        title: "Security Foundation",
        description: "Sophisticated security designed specifically for ultra-high-net-worth protection and privacy concerns.",
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Security controls appropriate for high-net-worth protection",
          "Monitoring for advanced security threats targeting wealthy individuals",
          "Documented security policies with privacy as a central concern",
          "Comprehensive disaster recovery and business continuity planning"
        ]
      },
      {
        title: "Private MSP",
        description: "White-glove support that matches family office service standards with proactive monitoring.",
        icon: <Building className="w-8 h-8 text-blue-600" />,
        benefits: [
          "White-glove support matching family office service standards",
          "Expertise in specialized family office applications",
          "Proactive monitoring to prevent service disruptions",
          "Support resources that scale based on family needs and activities"
        ]
      },
      {
        title: "Microsoft Optimization",
        description: "Secure environments designed to integrate diverse data sources while protecting sensitive family information.",
        icon: <Server className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Secure environments that protect highly sensitive information",
          "Appropriate data integration solutions across diverse assets",
          "Customized reporting solutions for different stakeholders",
          "Systems supporting both financial and personal service needs"
        ]
      },
      {
        title: "CxO Advisory Services",
        description: "Strategic guidance that bridges financial management and personal information needs with appropriate privacy frameworks.",
        icon: <Briefcase className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Comprehensive data strategies spanning personal and financial information",
          "Family-appropriate security and privacy frameworks",
          "Reporting approaches customized to different family members",
          "Technology governance aligned with family governance structures"
        ]
      }
    ],
    
    caseStudy: {
      title: "Multi-Family Office Enhances Asset Visibility and Security",
      firmType: "Multi-Family Office",
      profile: [
        { icon: <Briefcase className="w-4 h-4" />, text: "Serves five UHNW families" },
        { icon: <Target className="w-4 h-4" />, text: "$620M in combined assets" },
        { icon: <Shield className="w-4 h-4" />, text: "Enhanced privacy requirements" }
      ],
      challenge: "A multi-family office serving five families with combined assets of $620M was concerned about cybersecurity risks and privacy protection while struggling to provide comprehensive asset visibility across diverse holdings.",
      approach: [
        "Designed a comprehensive security architecture appropriate for ultra-high-net-worth protection",
        "Implemented appropriate data integration across diverse investment platforms",
        "Created customized reporting tailored to different stakeholders' needs",
        "Provided strategic guidance on technology governance aligned with family governance"
      ],
      results: [
        { value: "Prevented", label: "Sophisticated phishing attempt targeting a principal" },
        { value: "65%", label: "Reduction in quarterly reporting effort" },
        { value: "Enhanced", label: "Investment decision-making through comprehensive visibility" }
      ],
      quote: "The transformation gave us both enhanced security and significantly better visibility across our families' diverse assets. The customized reporting for different stakeholders has increased family engagement with their investments while maintaining appropriate privacy boundaries. Most importantly, we caught and prevented a sophisticated attack that could have been devastating.",
      author: {
        title: "Managing Director",
        company: "Multi-Family Office"
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
                  <h4 className="font-medium text-gray-800 mb-3">Why It Matters for Family Offices:</h4>
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

export default FamilyOfficeSegment;