import React from 'react';
import ServicePage from './common/ServicePage';
import { 
  Shield, 
  LockKeyhole, 
  FileCheck, 
  Database, 
  Server, 
  BarChart4, 
  ArrowRight, 
  CheckSquare, 
  AlertTriangle, 
  Eye, 
  FileText, 
  Target, 
  Users, 
  Landmark 
} from 'lucide-react';

const SecurityFoundation = () => {
  const pageData = {
    title: "Security Foundation",
    subtitle: "for Boutique Alternative Investment",
    description: "Protect your assets, data, and reputation with security solutions specifically designed for hedge funds, private equity, venture capital, and family offices.",
    
    challenges: [
      {
        title: "Increasing Threats",
        description: "Alternative investment firms face a 43% increase in targeted attacks in 2024.",
        icon: <Target className="w-6 h-6 text-red-600" />
      },
      {
        title: "High Breach Costs",
        description: "Financial services breach costs average $4.35M, higher than the cross-industry average.",
        icon: <AlertTriangle className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Regulatory Scrutiny",
        description: "38% increase in SEC examinations focusing on cybersecurity practices.",
        icon: <Landmark className="w-6 h-6 text-blue-600" />
      },
      {
        title: "ODD Impact",
        description: "35% of firms lose allocations due to security deficiencies found during operational due diligence.",
        icon: <Eye className="w-6 h-6 text-purple-600" />
      }
    ],
    
    keyFeatures: {
      title: "Enterprise-Grade Security for Boutique Firms",
      description: "Our alternative investment security framework delivers comprehensive protection that satisfies institutional investors and regulatory requirements without excessive cost or complexity."
    },
    
    metrics: [
      { value: "100%", label: "ODD pass rate after implementation" },
      { value: "75%", label: "Reduction in security incidents" },
      { value: "98%", label: "Regulatory compliance score" },
      { value: "3.5x", label: "Return on security investment" }
    ],
    
    serviceOfferings: [
      {
        title: "Identity & Access Management",
        description: "Zero-trust identity protection with multi-factor authentication and privileged access management.",
        icon: <Users className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Enterprise-grade multifactor authentication",
          "Privileged account management",
          "Role-based access controls tailored for investment workflows",
          "Investor portal security and conditional access"
        ]
      },
      {
        title: "Endpoint Protection",
        description: "Advanced threat protection for workstations, servers, and mobile devices across your firm.",
        icon: <Server className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Investment-specific endpoint security policies",
          "Mobile device management for BYOD environments",
          "Advanced threat protection and EDR",
          "Remote access security and VPN solutions"
        ]
      },
      {
        title: "Data Protection",
        description: "Safeguard sensitive investment and investor data with advanced protection and governance.",
        icon: <Database className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Information protection for investment research",
          "Secure data sharing with investors and partners",
          "Email security and encryption",
          "Data loss prevention tailored for financial data"
        ]
      },
      {
        title: "GRC Excellence",
        description: "Governance, risk, and compliance capabilities designed for alternative investment requirements.",
        icon: <FileCheck className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "SEC and regulatory compliance frameworks",
          "Institutional investor due diligence preparation",
          "Security policies and documentation",
          "Risk assessment and management"
        ]
      }
    ],
    
    caseStudy: {
      title: "Emerging Hedge Fund Secures Institutional Capital",
      firmType: "Long/Short Equity Fund",
      profile: [
        { icon: <BarChart4 className="w-4 h-4" />, text: "$120M AUM" },
        { icon: <Users className="w-4 h-4" />, text: "8-person investment team" },
        { icon: <Target className="w-4 h-4" />, text: "Targeting institutional allocations" }
      ],
      challenge: "Failed multiple operational due diligence reviews due to security deficiencies. Lacked the internal expertise to implement institutional-grade security while maintaining operational efficiency.",
      approach: [
        "Performed comprehensive security assessment against ODD requirements",
        "Implemented tailored security stack focused on investment operations",
        "Established CISO as a Service model for ongoing governance",
        "Created comprehensive documentation for investor due diligence"
      ],
      results: [
        { value: "$75M", label: "New institutional allocation secured" },
        { value: "100%", label: "ODD pass rate after implementation" },
        { value: "65%", label: "Reduction in security incidents" }
      ],
      quote: "The security transformation was a game-changer for our firm. We not only passed ODD with flying colors but also discovered that robust security is now a competitive advantage in fundraising conversations.",
      author: {
        title: "Chief Operating Officer",
        company: "Long/Short Equity Hedge Fund"
      }
    }
  };

  return <ServicePage {...pageData} />;
};

export default SecurityFoundation;