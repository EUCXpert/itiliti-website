import React from 'react';
import ServicePage from '../components/services/common/ServicePage';
import { 
  Headphones, 
  Settings, 
  Shield, 
  WifiOff, 
  Server, 
  Users, 
  Clock, 
  Database, 
  Lock, 
  BarChart4,
  Zap,
  CheckCircle,
  PhoneCall
} from 'lucide-react';

const PrivateMSP = () => {
  const pageData = {
    title: "Private MSP",
    subtitle: "for Specialized Alternative Investment",
    description: "Experience white-glove IT service tailored specifically for investment firms. Our high-touch, in-house service desk delivers enterprise-grade support at Boutique scale, ensuring your team can focus on investment activities without technology distractions.",
    
    challenges: [
      {
        title: "Investment-Specific Support Needs",
        description: "Generic IT providers lack understanding of alternative investment workflows, causing delays and ineffective support during critical investment activities.",
        icon: <Users className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Trading Hour Criticality",
        description: "Investment operations demand heightened responsiveness during market hours and critical investment periods that standard IT services can't provide.",
        icon: <Clock className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Impersonal Outsourced Support",
        description: "Traditional MSPs offer anonymous call centers with multiple tiers and outsourced technicians who lack understanding of your firm's investment operations.",
        icon: <Headphones className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Hybrid Work Environment",
        description: "Alternative investment firms require seamless technology experiences across office, home, and mobile environments with appropriate security controls.",
        icon: <Server className="w-6 h-6 text-blue-600" />
      }
    ],
    
    keyFeatures: {
      title: "IT Service Tailored for Investment Operations",
      description: "Our Private MSP approach delivers technology service that enhances rather than hinders your investment activities, with trading-hour aware support, investment-specific expertise, and white-glove service delivery."
    },
    
    metrics: [
      { value: "<15 min", label: "Average response time" },
      { value: "93%", label: "Issues resolved within SLA" },
      { value: "99.99%", label: "Uptime for trading-critical systems" },
      { value: "98%", label: "Client satisfaction score" }
    ],
    
    serviceOfferings: [
      {
        title: "White-Glove Service Desk",
        description: "Experience truly personalized IT support with our in-house, high-touch service desk dedicated to your investment operations.",
        icon: <Headphones className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Dedicated support team that knows your investment workflow",
          "Rapid response with priority handling during market hours",
          "Direct access to senior engineers without frustrating tiers",
          "Proactive monitoring and resolution before issues impact operations"
        ]
      },
      {
        title: "Comprehensive Monitoring & Management",
        description: "24/7 proactive monitoring and management of your entire technology stack with special attention to investment-critical systems.",
        icon: <Settings className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Investment-aware monitoring prioritizing trading systems",
          "Automated maintenance aligned with market hours",
          "Comprehensive asset lifecycle management",
          "Detailed reporting on system performance and security"
        ]
      },
      {
        title: "Secure Workforce Enablement",
        description: "Empower your team with secure access to investment resources from any location on any device.",
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Secure connectivity to investment applications and data",
          "Seamless user onboarding and offboarding processes",
          "Advanced endpoint monitoring and management",
          "Managed voice and collaboration services"
        ]
      },
      {
        title: "Business Continuity & Disaster Recovery",
        description: "Ensure uninterrupted investment operations with robust business continuity and disaster recovery solutions.",
        icon: <WifiOff className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Trading-specific recovery strategies with prioritized systems",
          "Regular testing aligned with regulatory requirements",
          "Comprehensive documentation for investor due diligence",
          "Multiple recovery options including same-day trading capability"
        ]
      }
    ],
    
    faqs: [
      {
        id: 1,
        question: "How does your service differ from traditional MSPs?",
        answer: "Unlike traditional MSPs, we provide a dedicated support team that intimately understands your investment operations rather than anonymous call centers. We offer trading-hour aware support with accelerated response during market hours, in-house expertise on investment-specific applications, and white-glove service that feels like an extension of your team. Our approach eliminates tiered support structures, offshore resources, and the 'break-fix' mentality common to generic MSPs."
      },
      {
        id: 2,
        question: "What support is provided during trading hours?",
        answer: "During market hours, we provide heightened support with accelerated response times, dedicated resources, and prioritization of trading-critical systems. This includes specialized monitoring of market data feeds, trading platforms, and research tools with rapid intervention for any issues. Our team understands the time-sensitivity of trading operations and provides direct access to senior engineers who can quickly resolve complex issues without escalation delays."
      },
      {
        id: 3,
        question: "How do you support hybrid work environments?",
        answer: "We enable secure, seamless experiences across office, home, and mobile environments through centralized management of endpoint devices, secure remote access solutions, and cloud-based collaboration tools. Our approach includes comprehensive device management, secure connectivity to investment applications, consistent user experience across locations, and appropriate security controls for sensitive data. We ensure your team maintains productivity regardless of location while satisfying regulatory requirements."
      },
      {
        id: 4,
        question: "What onboarding and offboarding processes do you provide?",
        answer: "We implement rigorous onboarding and offboarding processes aligned with financial services requirements. For onboarding, this includes pre-configured workstations, automated account provisioning across systems, comprehensive security training, and personalized orientation to your firm's technology. For offboarding, we provide immediate access revocation, data preservation, device sanitization, and detailed documentation for compliance purposes."
      },
      {
        id: 5,
        question: "How do you handle regulatory compliance requirements?",
        answer: "We incorporate regulatory compliance requirements directly into our service delivery model, including SEC and FINRA guidelines for financial services firms. This includes maintaining comprehensive documentation of your technology environment for regulatory examinations, implementing required security controls for financial data, supporting electronic communication archiving, and providing detailed audit trails of system access. Our team stays current on regulatory changes affecting alternative investment technology."
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default PrivateMSP;