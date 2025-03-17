import React from 'react';
import SegmentPage from './common/SegmentPage';
import { Shield, BarChart4, FileText, Server, Clock, Users, Briefcase, Target, Database, Building } from 'lucide-react';
import HoverCard from '../HoverCard';

const RealEstateSegment = () => {
  const pageData = {
    title: "Real Estate Investment Firms",
    subtitle: "Technology Solutions",
    description: "Integrated technology solutions for niche real estate investment firms that bridge property management operations with institutional-grade investment analytics.",
    
    challenges: [
      {
        title: "System Integration",
        description: "Bridging the gap between operational property management systems and investment reporting.",
        icon: <Server className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Property Data Management",
        description: "Centralizing and standardizing data from diverse properties and management systems.",
        icon: <Database className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Investor Reporting",
        description: "Meeting institutional investor reporting requirements with limited staff and resources.",
        icon: <BarChart4 className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Document Management",
        description: "Organizing and controlling access to leases, contracts, and compliance materials.",
        icon: <FileText className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Financial Analysis",
        description: "Creating comprehensive analytics across diverse property types and investment structures.",
        icon: <Building className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Mobile Property Management",
        description: "Supporting on-site inspection and management activities with mobile-friendly systems.",
        icon: <Users className="w-6 h-6 text-blue-600" />
      }
    ],
    
    keyFeatures: {
      description: "Niche real estate investment firms need technology that bridges the gap between property-level operations and institutional-grade investment analytics without requiring separate specialized teams to manage each domain."
    },
    
    metrics: [
      { value: "22 → 7", label: "Days in reporting cycle reduction" },
      { value: "Eliminated", label: "Data discrepancies in investor reporting" },
      { value: "Improved", label: "Investment decision-making with analytics" },
      { value: "Enhanced", label: "Property team productivity" }
    ],
    
    recommendedServices: [
      {
        title: "CxO Advisory Services",
        description: "Strategic guidance to develop integration strategies and data architectures that connect property management with analytics.",
        icon: <Briefcase className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Integration strategies connecting property management and investment systems",
          "Data architecture approaches enabling comprehensive analytics",
          "Reporting frameworks satisfying institutional investors",
          "Document management strategies for complex real estate documentation"
        ]
      },
      {
        title: "Microsoft Optimization",
        description: "Integrated environments that connect operational and investment systems with appropriate data warehousing.",
        icon: <Server className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Integrated environments connecting operational and investment systems",
          "Data warehousing solutions for real estate analytics",
          "Mobile-friendly systems supporting on-site property activities",
          "Systems managing the unique document requirements of real estate"
        ]
      },
      {
        title: "Portfolio Analytics",
        description: "Custom reporting and analytics solutions for real estate investment firms.",
        icon: <BarChart4 className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Custom dashboards for property performance analysis",
          "Integrated reporting across diverse property management systems",
          "Investor-ready presentations and reporting packages",
          "Real-time analytics for acquisition and disposition decisions"
        ]
      },
      {
        title: "Regulatory Compliance",
        description: "Security controls and disaster recovery planning appropriate for both property operations and financial information.",
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        benefits: [
          "Appropriate controls for financial and property information",
          "Disaster recovery planning for critical property management systems",
          "Documented policies satisfying institutional requirements",
          "Vendor management for property-specific applications"
        ]
      }
    ],
    
    caseStudy: {
      title: "Multifamily Investment Firm Transforms Reporting Capabilities",
      firmType: "Multifamily Real Estate Investment Firm",
      profile: [
        { icon: <Building className="w-4 h-4" />, text: "42 properties across three states" },
        { icon: <Users className="w-4 h-4" />, text: "28-person team" },
        { icon: <Target className="w-4 h-4" />, text: "Institutional investor focus" }
      ],
      challenge: "A 28-person multifamily real estate investment firm managing 42 properties across three states was struggling to produce consistent, accurate investor reporting from their diverse property management systems, damaging investor confidence and limiting growth.",
      approach: [
        "Designed an integrated data architecture connecting property operations with investment analytics",
        "Implemented appropriate data transformation processes to standardize information",
        "Created institutional-grade reporting capabilities satisfying investor requirements",
        "Provided guidance on document management for property documentation"
      ],
      results: [
        { value: "22 → 7", label: "Days in reporting cycle reduction" },
        { value: "100%", label: "Elimination of data discrepancies" },
        { value: "Enhanced", label: "Decision-making through analytics" }
      ],
      quote: "The integrated system transformed our reporting capabilities and investor relations. We've cut our reporting time by two-thirds while eliminating discrepancies that used to damage our credibility. The property teams also love having mobile access to the central systems, which has improved their productivity and responsiveness to issues.",
      author: {
        title: "Chief Investment Officer",
        company: "Multifamily Investment Firm"
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
                  <h4 className="font-medium text-gray-800 mb-3">Why It Matters for Real Estate Investment Firms:</h4>
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

export default RealEstateSegment;