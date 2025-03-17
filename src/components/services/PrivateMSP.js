import React from 'react';
import ServicePage from './common/ServicePage';
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
  BarChart4
} from 'lucide-react';

const PrivateMSP = () => {
  const pageData = {
    title: "Private MSP",
    subtitle: "for Boutique Alternative Investment",
    description: "Experience the difference of truly personalized IT service tailored specifically for investment firms. All the expertise of an enterprise IT department, sized and scaled perfectly for your boutique operation.",
    
    challenges: [
      {
        title: "Your Team, Not a Call Center",
        description: "Our support is delivered by a dedicated team that knows your business, not anonymous call center agents reading from scripts.",
        icon: <Users className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Investment Operations Focus",
        description: "Our entire service delivery model is built around the unique needs and timelines of investment operations.",
        icon: <Database className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Institutional-Grade, Boutique Delivery",
        description: "Enterprise capabilities scaled appropriately for boutique firms, combining sophistication with personalized service.",
        icon: <Server className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Security Built-In, Not Bolted-On",
        description: "Security is integrated into every aspect of our service delivery, not treated as an optional add-on.",
        icon: <Lock className="w-6 h-6 text-blue-600" />
      }
    ],
    
    keyFeatures: {
      title: "IT Service That Actually Makes Sense for Investment Firms",
      description: "Traditional MSPs aren't built for the unique demands of investment operations. Our Private MSP approach delivers technology service that enhances rather than hinders your investment activities."
    },
    
    metrics: [
      { value: "15 min", label: "Average response time" },
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
          "Dedicated support team that knows your business and investment workflow",
          "Rapid response times with priority handling for trading hours and critical operations",
          "Direct access to senior engineers without frustrating tiers or outsourced staff",
          "Proactive monitoring and resolution before issues impact your operations"
        ]
      },
      {
        title: "Comprehensive Monitoring & Management",
        description: "24/7 proactive monitoring and management of your entire technology stack with special attention to investment-critical systems.",
        icon: <Settings className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Investment-aware monitoring prioritizing trading systems and market data",
          "Automated patch management and maintenance aligned with market hours",
          "Comprehensive inventory and asset lifecycle management",
          "Detailed reporting and analytics on system performance and health"
        ]
      },
      {
        title: "Embedded Security Operations",
        description: "Integrated security operations center (SOC) services with specialized focus on financial services threats.",
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "24/7 security monitoring with financial services-specific threat intelligence",
          "Continuous vulnerability assessment and remediation",
          "Security posture reporting for investor due diligence and regulatory compliance",
          "Incident response and remediation with investment workflow awareness"
        ]
      },
      {
        title: "Business Continuity & Disaster Recovery",
        description: "Robust business continuity and disaster recovery solutions ensuring your investment operations continue without disruption.",
        icon: <WifiOff className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Trading-specific recovery strategies with prioritized critical systems",
          "Regular testing and validation aligned with regulatory requirements",
          "Comprehensive documentation for investor due diligence",
          "Multiple recovery options including same-day trading capability restoration"
        ]
      }
    ],
    
    caseStudy: {
      title: "Hedge Fund Transitions from Generic MSP to Private Service",
      firmType: "Quantitative Hedge Fund",
      profile: [
        { icon: <Users className="w-4 h-4" />, text: "25-person investment team" },
        { icon: <BarChart4 className="w-4 h-4" />, text: "Sophisticated trading strategies" },
        { icon: <Clock className="w-4 h-4" />, text: "Critical market hours support" }
      ],
      challenge: "A 25-person quantitative hedge fund was struggling with their generic MSP's lack of understanding of trading operations and slow response times during market hours. Their transition to our Private MSP service transformed their technology operations with trading-hour aware support and specialized financial services expertise.",
      approach: [
        "Implemented dedicated support team with financial services expertise",
        "Established investment-aware monitoring with priority for trading systems",
        "Created proactive maintenance schedules aligned with market hours",
        "Developed custom security controls for sensitive trading data"
      ],
      results: [
        { value: "Zero", label: "Trading disruptions since implementation" },
        { value: "95%", label: "Reduction in IT-related productivity loss" },
        { value: "100%", label: "Success rate in operational due diligence" }
      ],
      quote: "The difference is night and day. Their team understands our trading operations and responds immediately during market hours. It's like having an enterprise-grade IT department that's perfectly tailored to our boutique operation.",
      author: {
        title: "Chief Operating Officer",
        company: "Quantitative Hedge Fund"
      }
    }
  };

  return <ServicePage {...pageData} />;
};

export default PrivateMSP;