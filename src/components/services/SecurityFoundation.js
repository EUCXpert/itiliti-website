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
    subtitle: "for Specialized Alternative Investment",
    description: "Protect your assets, intellectual property, and investor confidence with security solutions specifically designed for hedge funds, private equity, venture capital, and family offices. Our approach satisfies institutional investor due diligence while maintaining operational efficiency.",
    
    challenges: [
      {
        title: "Targeted Threats",
        description: "Alternative investment firms face a 43% increase in sophisticated attacks targeting proprietary investment strategies and sensitive investor data.",
        icon: <Target className="w-6 h-6 text-red-600" />
      },
      {
        title: "Significant Financial Impact",
        description: "Financial services breach costs average $4.35M, with additional indirect costs including potential investor redemptions and reputational damage.",
        icon: <AlertTriangle className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Regulatory Scrutiny",
        description: "38% increase in SEC examinations focusing on cybersecurity controls, governance, and incident response capabilities.",
        icon: <Landmark className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Operational Due Diligence Impact",
        description: "35% of firms lose allocations due to security deficiencies identified during institutional investor operational due diligence reviews.",
        icon: <Eye className="w-6 h-6 text-purple-600" />
      }
    ],
    
    keyFeatures: {
      title: "Institutional-Grade Security for Boutique Firms",
      description: "Our alternative investment security framework delivers comprehensive protection that satisfies institutional allocators and regulatory requirements without excessive complexity or operational disruption."
    },
    
    metrics: [
      { value: "100%", label: "ODD pass rate after implementation" },
      { value: "75%", label: "Reduction in security incidents" },
      { value: "98%", label: "Regulatory compliance score" },
      { value: "3.5x", label: "Return on security investment" }
    ],
    
    serviceOfferings: [
      {
        title: "Identity & Access Governance",
        description: "Zero-trust identity architecture with multi-factor authentication and privileged access management tailored for investment workflows.",
        icon: <Users className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Enterprise-grade MFA aligned with SEC requirements",
          "Privileged access management for critical systems",
          "Role-based access controls customized for investment operations",
          "Secure investor portal access with conditional policies"
        ]
      },
      {
        title: "Advanced Endpoint Protection",
        description: "Comprehensive threat protection for workstations, servers, and mobile devices across your investment operations.",
        icon: <Server className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Investment-specific endpoint security policies",
          "Mobile device management for BYOD environments",
          "Advanced threat detection with behavioral monitoring",
          "Secure remote access for trading and research activities"
        ]
      },
      {
        title: "Data Protection & Governance",
        description: "Safeguard sensitive investment and investor information with advanced protection and granular controls.",
        icon: <Database className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Information protection for proprietary investment research",
          "Secure data sharing with investors and counterparties",
          "Email security and encryption for sensitive communications",
          "Data loss prevention customized for financial data"
        ]
      },
      {
        title: "Regulatory Compliance & GRC",
        description: "Governance, risk, and compliance frameworks designed specifically for alternative investment requirements.",
        icon: <FileCheck className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "SEC and FINRA regulatory compliance frameworks",
          "Institutional investor due diligence preparation",
          "Comprehensive security policies and documentation",
          "Risk assessment and management aligned with investment operations"
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
      challenge: "An emerging long/short equity fund with $120M AUM failed multiple operational due diligence reviews due to security deficiencies. Despite strong investment performance, the firm lacked the internal expertise to implement institutional-grade security while maintaining operational efficiency.",
      approach: [
        "Conducted comprehensive security assessment against institutional investor requirements",
        "Implemented tailored security stack focused on investment operations",
        "Established CISO as a Service model for ongoing governance",
        "Created comprehensive documentation for institutional investor due diligence"
      ],
      results: [
        { value: "$75M", label: "New institutional allocation secured" },
        { value: "100%", label: "ODD pass rate after implementation" },
        { value: "65%", label: "Reduction in security incidents" }
      ],
      quote: "The security transformation was a game-changer for our firm. We not only passed ODD with flying colors but also discovered that robust security has become a competitive advantage in fundraising conversations. Institutional investors now view our technology infrastructure as a strength rather than a concern.",
      author: {
        title: "Chief Operating Officer",
        company: "Long/Short Equity Hedge Fund"
      }
    },
    
    faqs: [
      {
        id: 1,
        question: "How does your security approach differ for alternative investment firms?",
        answer: "Our security framework is specifically designed for the unique workflows, data sensitivity, and regulatory requirements of alternative investment firms. We focus on protecting proprietary investment strategies, investor data, and trading infrastructure while ensuring compliance with SEC regulations and meeting institutional investor due diligence requirements. Unlike generic security providers, we understand the specific threat landscape targeting alternative investments and design controls that enhance rather than hinder investment operations."
      },
      {
        id: 2,
        question: "What should we expect during the implementation process?",
        answer: "Our implementation follows a phased approach designed to minimize disruption to your investment operations. We begin with a comprehensive assessment against institutional investor requirements, then implement critical controls first to address highest-priority risks. A typical implementation takes 8-12 weeks and includes policy development, technology deployment, and staff training. Throughout the process, we maintain regular communication with your team and provide clear documentation for future due diligence reviews."
      },
      {
        id: 3,
        question: "How do you help prepare us for operational due diligence?",
        answer: "We've supported hundreds of alternative investment firms through institutional investor due diligence. Our approach includes developing comprehensive documentation that explicitly addresses common ODD requirements, implementing the specific controls institutional investors expect, preparing your team for ODD interviews, and providing direct support during the due diligence process. Our clients achieve a 100% ODD pass rate for security after implementing our recommendations."
      },
      {
        id: 4,
        question: "Can you support our firm through regulatory examinations?",
        answer: "Yes, we provide comprehensive support through SEC and FINRA examinations. This includes preparing required documentation, conducting readiness assessments, supporting your team during examination interviews, and assisting with response to any findings. Our team includes former regulators and compliance experts who understand exactly what examiners are looking for and how to demonstrate your firm's commitment to security and compliance."
      },
      {
        id: 5,
        question: "How do you maintain security while allowing the flexibility our investment team needs?",
        answer: "We design security controls that enhance rather than hinder investment activities. This includes implementing risk-based access policies that provide appropriate flexibility during critical investment periods, deploying security technologies that work seamlessly with investment research and trading applications, and creating governance frameworks that align with your investment strategy. Our goal is to make security a competitive advantage, not an operational burden."
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default SecurityFoundation;