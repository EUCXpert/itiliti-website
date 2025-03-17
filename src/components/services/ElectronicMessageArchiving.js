import React from 'react';
import ServicePage from './common/ServicePage';
import { 
  Archive, 
  Shield, 
  MessageSquare, 
  FileCheck, 
  Scale, 
  DollarSign, 
  Users, 
  AlertTriangle 
} from 'lucide-react';

const ElectronicMessageArchiving = () => {
  const pageData = {
    title: "Electronic Message Archiving",
    subtitle: "for Boutique Alternative Investment",
    description: "SEC-compliant text and mobile communication archiving solution designed specifically for hedge funds, private equity, venture capital, and family offices.",
    
    challenges: [
      {
        title: "SEC Rule 17a-4",
        description: "Requires broker-dealers to preserve electronic communications in a non-rewriteable, non-erasable format for at least three years.",
        icon: <Scale className="w-6 h-6 text-orange-600" />
      },
      {
        title: "FINRA Regulatory Notice 17-18",
        description: "Mandates the retention of communications related to business as such, including text messages on both company and personal devices.",
        icon: <FileCheck className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Recordkeeping Violations",
        description: "The SEC has imposed fines exceeding $1.8 billion on financial firms for electronic communication recordkeeping failures.",
        icon: <DollarSign className="w-6 h-6 text-orange-600" />
      },
      {
        title: "BYOD Complexity",
        description: "Personal device usage creates significant compliance challenges in capturing and retaining business communications.",
        icon: <MessageSquare className="w-6 h-6 text-orange-600" />
      }
    ],
    
    keyFeatures: {
      title: "Complete SEC-Compliant Message Archiving",
      description: "Our solution provides comprehensive archiving of mobile communications in a fully SEC-compliant format, helping alternative investment firms avoid costly regulatory penalties while maintaining operational flexibility."
    },
    
    metrics: [
      { value: "$1.8B+", label: "In fines avoided by proper archiving" },
      { value: "100%", label: "SEC compliance for electronic communications" },
      { value: "15 min", label: "Average support response time" },
      { value: "95%", label: "Reduction in compliance monitoring effort" }
    ],
    
    serviceOfferings: [
      {
        title: "SEC-Compliant Text Archiving",
        description: "Comprehensive archiving solution that captures and preserves mobile communications in a fully SEC-compliant format.",
        icon: <Archive className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Capture and preserve text messages in non-rewriteable, non-erasable format",
          "Support for both company-issued and personal devices (BYOD)",
          "Automated retention policy enforcement",
          "Comprehensive coverage across all communication channels"
        ]
      },
      {
        title: "Communication Supervision",
        description: "Advanced monitoring and oversight capabilities to ensure regulatory compliance and reduce risk.",
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Policy-based monitoring of communications",
          "AI-powered surveillance for compliance violations",
          "Custom lexicons for financial services terminology",
          "Streamlined review workflows for compliance teams"
        ]
      },
      {
        title: "eDiscovery & Legal Hold",
        description: "Powerful search and legal hold capabilities to support regulatory inquiries, investigations, and litigation.",
        icon: <FileCheck className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Advanced search across all archived communications",
          "One-click legal hold implementation",
          "Defensible chain of custody documentation",
          "Export capabilities for regulatory requests"
        ]
      },
      {
        title: "White-Glove Implementation",
        description: "Tailored deployment and ongoing support specifically designed for boutique alternative investment firms.",
        icon: <Users className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Dedicated implementation team with financial services expertise",
          "Customized rollout plan minimizing operational disruption",
          "Comprehensive user training and adoption support",
          "Ongoing compliance advisory services"
        ]
      }
    ],
    
    caseStudy: {
      title: "Hedge Fund Avoids Regulatory Penalties",
      firmType: "Quantitative Hedge Fund",
      profile: [
        { icon: <Users className="w-4 h-4" />, text: "45 employees" },
        { icon: <AlertTriangle className="w-4 h-4" />, text: "SEC examination imminent" },
        { icon: <MessageSquare className="w-4 h-4" />, text: "High text message volume" }
      ],
      challenge: "A quantitative hedge fund with 45 employees was facing an upcoming SEC examination without adequate text message archiving. Their traders frequently used text messaging for time-sensitive communications, creating significant regulatory exposure.",
      approach: [
        "Implemented comprehensive text archiving solution within 14 days",
        "Deployed both company-issued and BYOD device coverage",
        "Established appropriate supervision and compliance workflows",
        "Provided thorough documentation for regulatory examination"
      ],
      results: [
        { value: "100%", label: "Communication compliance achieved" },
        { value: "Zero", label: "Deficiency findings in SEC examination" },
        { value: "$750K+", label: "Potential penalties avoided" }
      ],
      quote: "The implementation was remarkably smooth considering our tight timeline. Their team understood the regulatory requirements deeply and provided exactly what we needed before our examination. The SEC examiners specifically noted the completeness of our text archiving solution.",
      author: {
        title: "Chief Compliance Officer",
        company: "Quantitative Hedge Fund"
      }
    }
  };

  return <ServicePage {...pageData} />;
};

export default ElectronicMessageArchiving;