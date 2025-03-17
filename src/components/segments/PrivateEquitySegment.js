import React from 'react';
import SegmentPage from './common/SegmentPage';
import { Shield, BarChart4, FileText, Server, Clock, Users, Briefcase, Target, Database, ArrowRight } from 'lucide-react';
import HoverCard from '../HoverCard';

const PrivateEquitySegment = () => {
  const pageData = {
    title: "Private Equity Firms",
    subtitle: "Technology Solutions",
    description: "Specialized technology solutions designed for boutique private equity firms that enhance deal flow, facilitate secure collaboration, and support thorough due diligence processes.",
    
    challenges: [
      {
        title: "Secure Collaboration",
        description: "Managing secure information sharing with external parties during deals and due diligence processes.",
        icon: <Users className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Data Management",
        description: "Organizing and analyzing large volumes of data across diverse portfolio companies and investment opportunities.",
        icon: <Database className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Document Control",
        description: "Maintaining version control and appropriate access for sensitive transaction information.",
        icon: <FileText className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Reporting Efficiency",
        description: "Creating timely, accurate reports for investors and internal decision-making processes.",
        icon: <BarChart4 className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Limited Tech Expertise",
        description: "Managing sophisticated technology needs with small teams that lack dedicated IT resources.",
        icon: <Users className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Security vs. Flexibility",
        description: "Balancing robust security with the need for flexible access during time-sensitive deals.",
        icon: <Shield className="w-6 h-6 text-blue-600" />
      }
    ],
    
    keyFeatures: {
      description: "Specialized private equity firms need technology that enhances their deal flow, facilitates secure collaboration with external parties, and supports thorough due diligence processes without requiring significant internal technical expertise."
    },
    
    metrics: [
      { value: "40%", label: "Acceleration in deal cycle time" },
      { value: "100%", label: "Confidentiality maintenance during deals" },
      { value: "65%", label: "Reduction in information management time" },
      { value: "3x", label: "Increase in deal evaluation capacity" }
    ],
    
    recommendedServices: [
      {
        title: "CxO Advisory Services",
        description: "Strategic guidance to develop secure collaboration architectures and document management strategies aligned with private equity workflows.",
        icon: <Briefcase className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Secure collaboration architectures aligned with deal processes",
          "Technology evaluation frameworks for assessing potential acquisitions",
          "Document management strategies balancing security with accessibility",
          "Information governance appropriate for private equity operations"
        ]
      },
      {
        title: "Microsoft Optimization",
        description: "Secure environments that support both in-office and on-site due diligence activities with appropriate access controls.",
        icon: <Server className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Secure environments for deal team collaboration with external parties",
          "Appropriate access controls for highly sensitive transaction data",
          "Efficient data storage strategies for due diligence documentation",
          "Systems supporting both in-office and on-site due diligence activities"
        ]
      },
      {
        title: "Security Foundation",
        description: "Security controls and policies designed specifically for sensitive financial transactions and deal information.",
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Security controls appropriate for sensitive financial transactions",
          "Data loss prevention implementation for deal information",
          "Documented security policies that protect transaction data",
          "Vendor assessment frameworks for technology due diligence"
        ]
      },
      {
        title: "Due Diligence Acceleration",
        description: "Support model designed around deal cycles with accelerated response during critical transaction phases.",
        icon: <Target className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Accelerated response during critical deal phases",
          "On-demand expertise for deal-specific technology needs",
          "Secure collaboration support for external parties",
          "Support resources that scale based on transaction activity"
        ]
      }
    ],
    
    caseStudy: {
      title: "Healthcare-Focused PE Firm Accelerates Deal Process",
      firmType: "Specialized Private Equity Firm",
      profile: [
        { icon: <Briefcase className="w-4 h-4" />, text: "Healthcare-focused PE fund" },
        { icon: <Users className="w-4 h-4" />, text: "14-person investment team" },
        { icon: <Target className="w-4 h-4" />, text: "Multiple simultaneous deals" }
      ],
      challenge: "A specialized healthcare-focused private equity firm with a 14-person team was struggling with secure document management during complex deals. They needed to conduct simultaneous due diligence on multiple acquisition targets while maintaining strict confidentiality.",
      approach: [
        "Designed a secure collaboration architecture that protected sensitive information",
        "Implemented appropriate access controls for different stakeholder groups",
        "Created efficient workflows for organizing and analyzing due diligence materials",
        "Provided on-demand support during critical transaction phases"
      ],
      results: [
        { value: "3", label: "Simultaneous due diligence processes" },
        { value: "40%", label: "Acceleration in deal cycle time" },
        { value: "100%", label: "Confidentiality maintained throughout" }
      ],
      quote: "The secure deal environment transformed our ability to evaluate multiple opportunities simultaneously. We maintained complete confidentiality while dramatically accelerating our deal process. The system's organization of due diligence materials also improved our decision quality by making critical information readily accessible.",
      author: {
        title: "Managing Director",
        company: "Healthcare-Focused PE Fund"
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
                  <h4 className="font-medium text-gray-800 mb-3">Why It Matters for Private Equity Firms:</h4>
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

export default PrivateEquitySegment;