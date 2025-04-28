import React from 'react';
import ServicePage from '../components/services/common/ServicePage';
import { 
  Archive, 
  Shield, 
  MessageSquare, 
  FileCheck, 
  Scale, 
  DollarSign, 
  Users, 
  AlertTriangle,
  Clock,
  Search,
  Smartphone,
  CheckCircle
} from 'lucide-react';

const ElectronicMessageArchiving = () => {
  const pageData = {
    title: "Electronic Message Archiving",
    subtitle: "for Specialized Alternative Investment",
    description: "Deploy a comprehensive SEC-compliant text and mobile communication archiving solution, designed specifically for hedge funds, private equity, venture capital, and family offices. Our white-glove implementation ensures regulatory compliance without disrupting investment operations.",
    
    challenges: [
      {
        title: "SEC Rule 17a-4 Compliance",
        description: "Regulatory requirements mandate preservation of electronic communications in a non-rewriteable, non-erasable format for at least three years, with significant penalties for non-compliance.",
        icon: <Scale className="w-6 h-6 text-orange-600" />
      },
      {
        title: "FINRA Regulatory Notice 17-18",
        description: "Financial firms must retain all business-related communications regardless of the device or platform used, including text messages on both company and personal devices.",
        icon: <FileCheck className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Substantial Financial Penalties",
        description: "The SEC has imposed fines exceeding $1.8 billion on financial firms for electronic communication recordkeeping failures, with increasing focus on alternative investment managers.",
        icon: <DollarSign className="w-6 h-6 text-orange-600" />
      },
      {
        title: "BYOD Complexity",
        description: "Personal device usage creates significant compliance challenges in capturing and retaining business communications without compromising privacy.",
        icon: <Smartphone className="w-6 h-6 text-orange-600" />
      }
    ],
    
    keyFeatures: {
      title: "Complete SEC-Compliant Mobile Communication Archiving",
      description: "Our end-to-end solution provides comprehensive archiving of mobile communications in a fully SEC-compliant format, helping alternative investment firms avoid costly regulatory penalties while maintaining operational flexibility."
    },
    
    metrics: [
      { value: "$1.8B+", label: "In potential penalties avoided" },
      { value: "100%", label: "SEC compliance for text messaging" },
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
        title: "Communication Surveillance",
        description: "Advanced monitoring and oversight capabilities to ensure regulatory compliance and reduce compliance risk.",
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Policy-based monitoring of communications",
          "AI-powered surveillance for compliance violations",
          "Custom lexicons for investment terminology",
          "Streamlined review workflows for compliance teams"
        ]
      },
      {
        title: "eDiscovery & Legal Hold",
        description: "Powerful search and legal hold capabilities to support regulatory inquiries, investigations, and litigation.",
        icon: <Search className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Advanced search across all archived communications",
          "One-click legal hold implementation",
          "Defensible chain of custody documentation",
          "Export capabilities for regulatory requests"
        ]
      },
      {
        title: "White-Glove Implementation",
        description: "Tailored deployment and ongoing support specifically designed for Specialized alternative investment firms.",
        icon: <Users className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Corporate device procurement and carrier negotiation",
          "Seamless integration with Smarsh/TeleMessage platforms",
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
        "Established appropriate surveillance and compliance workflows",
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
    },
    
    faqs: [
      {
        id: 1,
        question: "What types of communications does your solution archive?",
        answer: "Our solution archives all forms of mobile communications including SMS/MMS text messages, WhatsApp, WeChat, Signal, and other messaging platforms. We also ensure coverage across both corporate-issued devices and personal devices used for business purposes (BYOD scenarios), which is critical for regulatory compliance with SEC and FINRA requirements."
      },
      {
        id: 2,
        question: "How disruptive is the implementation process?",
        answer: "We've designed our implementation to be minimally disruptive to your investment operations. We manage the entire process, including device procurement, carrier negotiations, application installation, and user training. For existing devices, the archiving solution runs in the background with no impact on performance. For new corporate devices, we handle the full deployment process including configuration, testing, and delivery to your team members."
      },
      {
        id: 3,
        question: "How does your solution handle personal devices (BYOD)?",
        answer: "Our solution provides compliant archiving for personal devices while maintaining appropriate privacy boundaries. We implement containerization technologies that separate business and personal communications, only archiving business-related content. This approach satisfies regulatory requirements while respecting privacy concerns. We work closely with your compliance team to establish clear policies and provide user training on appropriate communication practices."
      },
      {
        id: 4,
        question: "How quickly can you implement before an SEC examination?",
        answer: "For firms facing imminent regulatory examination, we can implement our solution in as little as 10-14 days through our accelerated deployment process. This includes corporate device procurement, application deployment, policy configuration, and production of required documentation. We prioritize critical components to ensure core compliance requirements are satisfied quickly, with additional features implemented in subsequent phases."
      },
      {
        id: 5,
        question: "What ongoing support do you provide after implementation?",
        answer: "Our service includes comprehensive ongoing support including 24/7 technical assistance, regular system health checks, monthly compliance reports, and proactive monitoring for any issues. We also provide advisory services for regulatory changes affecting electronic communication requirements, ensuring your solution remains compliant as regulations evolve. Additionally, we conduct quarterly reviews with your compliance team to optimize the system based on your specific needs."
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default ElectronicMessageArchiving;