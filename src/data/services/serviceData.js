import { 
  Users, 
  DollarSign, 
  Calendar, 
  Briefcase, 
  Shield, 
  Lightbulb,
  BarChart4,
  Building,
  FileText,
  Target,
  CheckSquare,
  Archive, 
  MessageSquare, 
  FileCheck, 
  Scale, 
  AlertTriangle,
  Clock,
  Search,
  Smartphone,
  CheckCircle,
  CloudCog, 
  Database, 
  Server,
  Settings,
  Zap,
  Headphones, 
  WifiOff, 
  Lock, 
  PhoneCall,
  LockKeyhole, 
  Eye, 
  Landmark
} from 'lucide-react';

// Import common content blocks
import { STANDARD_APPROACH_STEPS, COMPETITIVE_ADVANTAGES } from './serviceConstants';
import { SERVICE_CATEGORIES } from './serviceCategories';

// Define all services in a single export
export const SERVICES = {
  "cxo-services": {
    id: "cxo-services",
    category: SERVICE_CATEGORIES.ADVISORY.id,
    title: "CxO Advisory Services",
    subtitle: "for Specialized Alternative Investment",
    description: "Access fractional technology leadership that delivers enterprise expertise at boutique-appropriate scale and cost. Our CxO services align your technology strategy with investment objectives while ensuring operational excellence and regulatory compliance.",
    
    challenges: [
      {
        title: "Executive Cost Limitations",
        description: "Boutique investment firms require C-suite technology leadership but cannot justify full-time executive compensation, creating strategic gaps in technology governance.",
        icon: <DollarSign className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Investment-Specific Technology Decisions",
        description: "Strategic technology choices demand specialized expertise aligned with alternative investment operations, which is increasingly difficult to find and retain.",
        icon: <Lightbulb className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Institutional Investor Requirements",
        description: "Growing institutional allocator and regulatory expectations demand sophisticated technology governance that most boutique firms struggle to implement effectively.",
        icon: <Shield className="w-6 h-6 text-blue-600" />
      },
      {
        title: "AUM Growth Transition Points",
        description: "Technology needs evolve rapidly as AUM grows, requiring strategic planning and foresight that's difficult to maintain without dedicated leadership.",
        icon: <Target className="w-6 h-6 text-blue-600" />
      }
    ],
    
    keyFeatures: {
      title: "Enterprise Leadership Without the Enterprise Cost",
      description: "Our fractional CxO services deliver institutional-caliber technology leadership precisely scaled to your boutique investment firm's needs, providing sophisticated guidance at a fraction of the cost of a full-time hire."
    },
    
    metrics: [
      { value: "60-75%", label: "Cost savings vs. full-time executive" },
      { value: "8-12 weeks", label: "Time to measurable business impact" },
      { value: "92%", label: "ODD success rate with CxO guidance" },
      { value: "32%", label: "Average AUM increase within 12 months" }
    ],
    
    serviceOfferings: [
      {
        title: "Virtual CIO",
        description: "Strategic technology leadership tailored to your firm's investment strategy and growth trajectory.",
        icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Technology roadmap development aligned with investment objectives",
          "IT budget optimization and strategic allocation",
          "Vendor management for investment-specific technologies",
          "Digital transformation leadership and execution"
        ]
      },
      {
        title: "CISO as a Service",
        description: "Expert security leadership to protect sensitive investor data and meet regulatory requirements.",
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Security strategy development aligned with institutional investor expectations",
          "Operational Due Diligence (ODD) preparation and support",
          "SEC and regulatory compliance oversight",
          "Incident response planning and management"
        ]
      },
      {
        title: "Technology Governance",
        description: "Navigate complex regulatory requirements with expert guidance and systematic oversight.",
        icon: <FileText className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Investment-specific IT governance frameworks",
          "Policy development and implementation",
          "Compliance monitoring and testing",
          "Regulatory examination preparation and support"
        ]
      },
      {
        title: "CTO Advisory",
        description: "Technical expertise to optimize your investment operations and technology stack.",
        icon: <BarChart4 className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Investment workflow optimization through technology",
          "Data integration and analytics strategy",
          "Technical architecture design and implementation",
          "Development team leadership and management"
        ]
      }
    ],
    
    caseStudy: {
      title: "Emerging Private Equity Fund Transforms Operations",
      firmType: "Private Equity Fund",
      profile: [
        { icon: <Building className="w-4 h-4" />, text: "$250M AUM Healthcare Focus" },
        { icon: <Users className="w-4 h-4" />, text: "14-person investment team" },
        { icon: <Target className="w-4 h-4" />, text: "Institutional investor focus" }
      ],
      challenge: "An emerging PE fund with $250M AUM was struggling with institutional investor operational due diligence, hampering fundraising efforts despite strong returns. Their lean team lacked the technology infrastructure and compliance expertise needed to meet allocator requirements.",
      approach: [
        "Deployed a virtual CIO and CISO service working 4 days monthly",
        "Developed and implemented a technology and security strategy aligned with institutional investor expectations",
        "Created comprehensive documentation for investor due diligence processes",
        "Implemented portfolio monitoring and deal flow automation solutions"
      ],
      results: [
        { value: "$50M", label: "New institutional allocation secured" },
        { value: "100%", label: "ODD pass rate after implementation" },
        { value: "3x", label: "Increase in deal evaluation capacity" }
      ],
      quote: "The virtual CIO and CISO services transformed our operational capabilities and investor perception. What we couldn't afford as full-time executives became our competitive advantage through this fractional model. The transformation in our technology operations directly led to a significant new allocation that would have been impossible previously.",
      author: {
        title: "Managing Partner",
        company: "Healthcare-focused PE Fund"
      }
    },
    
    faqs: [
      {
        id: 1,
        question: "How does your fractional CxO approach compare to hiring a full-time executive?",
        answer: "Our fractional model provides enterprise-caliber expertise at 60-75% less cost than a full-time executive hire. You receive scheduled strategic guidance, on-demand support during critical periods, and comprehensive expertise across multiple disciplines (CIO, CISO, CTO) rather than being limited to a single executive's skill set. This approach also eliminates recruitment costs, benefits expenses, and the challenges of retaining top executive talent at boutique firms."
      },
      {
        id: 2,
        question: "What is the typical time commitment for your fractional CxO services?",
        answer: "Our engagements are tailored to each client's specific needs, but typically range from 2-8 days per month. We structure the time allocation around your firm's investment cycle, with increased availability during critical periods like fundraising, operational due diligence, or regulatory examinations. The commitment can flex as your needs evolve, scaling up during strategic initiatives and scaling back during steady-state operations."
      },
      {
        id: 3,
        question: "How do you ensure seamless integration with our existing team?",
        answer: "Our integration approach includes joint planning sessions with key stakeholders, clearly defined roles and responsibilities, established communication rhythms, and shared collaboration tools. We adapt to your firm's existing processes rather than forcing new methodologies. Your team maintains day-to-day execution control while gaining strategic guidance and specialized expertise where needed. We position ourselves as an extension of your team, not external consultants."
      },
      {
        id: 4,
        question: "What specific alternative investment experience do your fractional executives bring?",
        answer: "Our fractional executives average 15+ years of experience specifically in alternative investment technology leadership. They've previously served as CIOs, CISOs, and CTOs at firms including hedge funds, private equity, venture capital, and family offices across various AUM ranges. This means they understand investment-specific challenges like operational due diligence requirements, trading infrastructure needs, deal management workflows, and portfolio analytics. They've also successfully guided firms through SEC examinations, institutional investor due diligence, and technology transformations."
      },
      {
        id: 5,
        question: "How quickly can we expect to see results from engaging your CxO services?",
        answer: "Most clients experience initial strategic benefits within 4-6 weeks through our rapid assessment and roadmap development. Operational improvements typically begin within 8-12 weeks as we implement high-priority initiatives. Institutional investor perception improvements often occur within a single due diligence cycle. For firms facing immediate challenges like upcoming investor ODD or regulatory exams, we can deploy targeted remediation within even shorter timeframes. Our approach prioritizes quick wins alongside strategic initiatives to demonstrate immediate value."
      }
    ]
  },

  "security-foundation": {
    id: "security-foundation",
    category: SERVICE_CATEGORIES.SECURITY.id,
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
    
//    caseStudy: {
//      title: "Emerging Hedge Fund Secures Institutional Capital",
//      firmType: "Long/Short Equity Fund",
//      profile: [
//        { icon: <BarChart4 className="w-4 h-4" />, text: "$120M AUM" },
//        { icon: <Users className="w-4 h-4" />, text: "8-person investment team" },
//        { icon: <Target className="w-4 h-4" />, text: "Targeting institutional allocations" }
//      ],
//      challenge: "An emerging long/short equity fund with $120M AUM failed multiple operational due diligence reviews due to security deficiencies. Despite strong investment performance, the firm lacked the internal expertise to implement institutional-grade security while maintaining operational efficiency.",
//      approach: [
//        "Conducted comprehensive security assessment against institutional investor requirements",
//        "Implemented tailored security stack focused on investment operations",
//        "Established CISO as a Service model for ongoing governance",
//        "Created comprehensive documentation for institutional investor due diligence"
//      ],
//      results: [
//        { value: "$75M", label: "New institutional allocation secured" },
//        { value: "100%", label: "ODD pass rate after implementation" },
//        { value: "65%", label: "Reduction in security incidents" }
//      ],
//      quote: "The security transformation was a game-changer for our firm. We not only passed ODD with flying colors but also discovered that robust security has become a competitive advantage in fundraising conversations. Institutional investors now view our technology infrastructure as a strength rather than a concern.",
//      author: {
//        title: "Chief Operating Officer",
//        company: "Long/Short Equity Hedge Fund"
//      }
//    },
    
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
  },

  "electronic-message-archiving": {
    id: "electronic-message-archiving",
    category: SERVICE_CATEGORIES.COMPLIANCE.id,
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
        description: "Tailored deployment and ongoing support specifically designed for boutique alternative investment firms.",
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
  },

  "microsoft-optimization": {
    id: "microsoft-optimization",
    category: SERVICE_CATEGORIES.INFRASTRUCTURE.id,
    title: "Microsoft Optimization",
    subtitle: "for Specialized Alternative Investment Firms",
    description: "Maximize your Microsoft investment ROI with strategic optimization specifically designed for hedge funds, private equity, venture capital, and family offices. Transform Microsoft from a necessary expense into a strategic advantage for your investment operations.",
    
    challenges: [
      {
        title: "Licensing Complexity",
        description: "Microsoft's licensing models are complex and frequently changing, creating significant cost optimization opportunities that require specialized expertise to identify.",
        icon: <FileText className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Technology Sprawl",
        description: "Most investment firms accumulate redundant tools and underutilized licenses across their Microsoft estate, creating unnecessary costs and operational inefficiencies.",
        icon: <Server className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Unrealized Capabilities",
        description: "Many firms only utilize 40-60% of their Microsoft capabilities, missing opportunities to enhance investment operations through advanced features already included in their licenses.",
        icon: <Zap className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Security Integration",
        description: "Firms struggle to implement a cohesive security strategy that fully leverages the Microsoft security ecosystem while meeting investment-specific requirements.",
        icon: <Shield className="w-6 h-6 text-blue-600" />
      }
    ],
    
    keyFeatures: {
      title: "The Microsoft Optimization Advantage",
      description: "Our optimization approach transforms Microsoft from a necessary expense into a strategic advantage for your investment operations, reducing costs while enhancing capabilities that directly impact your firm's performance."
    },
    
    metrics: [
      { value: "25-40%", label: "Average Microsoft spend reduction" },
      { value: "95%", label: "License utilization (vs. 65% industry average)" },
      { value: "45%", label: "Cost reduction through proper Azure sizing" },
      { value: "3.5x", label: "Return on optimization investment" }
    ],
    
    serviceOfferings: [
      {
        title: "Microsoft Licensing Optimization",
        description: "Strategic license management to reduce costs and enhance value from your Microsoft investments.",
        icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
        capabilities: [
          "Reduce Microsoft spend by 25-40% through right-sizing and consolidation",
          "Eliminate unused licenses and redundant subscriptions",
          "Align licensing with your firm's growth strategy and investment workflow",
          "Leverage financial services-specific licensing benefits"
        ]
      },
      {
        title: "Microsoft Security Stack Optimization",
        description: "Maximize protection with the comprehensive Microsoft security ecosystem, specifically tuned for alternative investment requirements.",
        icon: <Shield className="w-8 h-8 text-purple-600" />,
        capabilities: [
          "Implement defense-in-depth with integrated Microsoft security tools",
          "Meet SEC, FINRA and investor due diligence requirements",
          "Reduce security tool sprawl and vendor management overhead",
          "Achieve comprehensive protection at lower total cost"
        ]
      },
      {
        title: "Azure Cloud Optimization",
        description: "Optimize your Azure environment for cost, performance, and governance in support of investment operations.",
        icon: <CloudCog className="w-8 h-8 text-purple-600" />,
        capabilities: [
          "Implement reserved instances and hybrid benefits for maximum savings",
          "Right-size resources to eliminate waste without compromising performance",
          "Design optimal architecture for investment analytics and data processing",
          "Establish governance controls for cost management and compliance"
        ]
      },
      {
        title: "Dynamics & Power Platform Optimization",
        description: "Leverage Dynamics 365 and Power Platform to streamline deal flow, investor relations, and portfolio management.",
        icon: <Database className="w-8 h-8 text-purple-600" />,
        capabilities: [
          "Customize Dynamics 365 for alternative investment workflows",
          "Implement Power Apps for deal flow and portfolio monitoring",
          "Create automated reporting with Power BI for investors and internal teams",
          "Establish Power Automate workflows to reduce manual processes"
        ]
      }
    ],
    
    caseStudy: {
      title: "Private Equity Fund Achieves 35% Microsoft Cost Reduction",
      firmType: "Private Equity Firm",
      profile: [
        { icon: <Users className="w-4 h-4" />, text: "35 employees" },
        { icon: <DollarSign className="w-4 h-4" />, text: "$120,000 annual Microsoft spend" },
        { icon: <Target className="w-4 h-4" />, text: "Significant waste and underutilization" }
      ],
      challenge: "A growing PE firm with 35 employees was spending over $120,000 annually on Microsoft services with significant waste across licenses, subscriptions, and cloud resources. Despite this spending, they weren't leveraging key security and productivity features that could enhance their investment operations.",
      approach: [
        "Conducted comprehensive assessment of Microsoft environment and usage patterns",
        "Developed tailored optimization plan with clear ROI projections",
        "Implemented right-sized licensing and eliminated redundant subscriptions",
        "Enabled previously unused enterprise features to enhance security and productivity"
      ],
      results: [
        { value: "$42,000", label: "Annual cost savings" },
        { value: "35%", label: "Reduction in Microsoft spend" },
        { value: "20+", label: "Hours saved weekly in manual tasks" }
      ],
      quote: "The optimization not only reduced our costs but actually improved our capabilities. We're now leveraging Microsoft tools we didn't even know we already owned, which has streamlined our deal management process and enhanced our security posture for investor due diligence.",
      author: {
        title: "CFO",
        company: "Mid-Market Private Equity Fund"
      }
    },
    
    faqs: [
      {
        id: 1,
        question: "How do you identify optimization opportunities in our Microsoft environment?",
        answer: "We conduct a comprehensive assessment of your current Microsoft environment including license inventory, usage patterns, security configurations, and cloud resource utilization. We analyze this data against investment-specific benchmarks and best practices to identify optimization opportunities. This assessment typically reveals 25-40% in potential cost savings while also highlighting capability gaps that could enhance your investment operations."
      },
      {
        id: 2,
        question: "Can you optimize our environment without disrupting our investment operations?",
        answer: "Yes, our optimization approach is designed to be non-disruptive to your core investment activities. We implement changes in phases, starting with 'zero impact' optimizations like license consolidation and unutilized resource reclamation. More substantial changes are carefully planned around your investment cycle and implemented during low-activity periods. Throughout the process, we maintain full functionality for critical investment applications and workflows."
      },
      {
        id: 3,
        question: "How do you tailor Microsoft solutions for alternative investment workflows?",
        answer: "We have extensive experience customizing Microsoft tools for alternative investment workflows including deal management, investor relations, portfolio monitoring, and research management. We've developed industry-specific templates and configurations for SharePoint, Teams, Power BI, and Dynamics that align with investment processes. We also integrate Microsoft tools with industry-specific applications to create cohesive workflows tailored to your investment strategy."
      },
      {
        id: 4,
        question: "How does Microsoft optimization impact our security and compliance posture?",
        answer: "Our optimization approach includes security stack rationalization that enhances protection while reducing costs. We implement a defense-in-depth strategy using native Microsoft security tools that satisfies SEC requirements and institutional investor due diligence. This typically includes enabling advanced features like Microsoft Defender for Endpoint, Microsoft Information Protection, and Azure Identity Protection that are often included in existing licenses but not fully utilized."
      },
      {
        id: 5,
        question: "What ongoing support do you provide after the initial optimization?",
        answer: "We provide continuous optimization through quarterly reviews that identify new savings opportunities and capability enhancements. This includes monitoring license usage, analyzing cloud resource efficiency, and recommending adjustments as your firm grows. We also keep you updated on new Microsoft features relevant to your investment operations and help you adopt these capabilities. Our goal is to ensure your Microsoft environment continues to evolve alongside your investment strategy."
      }
    ]
  },

  "private-msp": {
    id: "private-msp",
    category: SERVICE_CATEGORIES.INFRASTRUCTURE.id,
    title: "Private MSP",
    subtitle: "for Specialized Alternative Investment",
    description: "Experience white-glove IT service tailored specifically for investment firms. Our high-touch, in-house service desk delivers enterprise-grade support at boutique scale, ensuring your team can focus on investment activities without technology distractions.",
    
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
    
    caseStudy: {
      title: "Hedge Fund Transitions from Generic MSP to Private Service",
      firmType: "Quantitative Hedge Fund",
      profile: [
        { icon: <Users className="w-4 h-4" />, text: "25-person investment team" },
        { icon: <BarChart4 className="w-4 h-4" />, text: "Sophisticated trading strategies" },
        { icon: <Clock className="w-4 h-4" />, text: "Critical market hours support" }
      ],
      challenge: "A 25-person quantitative hedge fund was experiencing productivity losses due to their generic MSP's lack of understanding of trading operations and slow response times during market hours. Their previous provider used offshore support teams unfamiliar with their investment applications and critical systems.",
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
    },
    
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
  },

  "regulatory-compliance": {
    id: "regulatory-compliance",
    category: SERVICE_CATEGORIES.COMPLIANCE.id,
    title: "Regulatory & Compliance Solutions",
    subtitle: "for Specialized Alternative Investment",
    description: "Navigate complex regulatory requirements with technology-powered compliance solutions tailored for hedge funds, private equity, venture capital, and family offices.",
    
    challenges: [
      {
        title: "Increasing Regulatory Scrutiny",
        description: "Alternative investment firms face intensifying examination frequency and depth from regulators at both federal and state levels.",
        icon: <Landmark className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Resource Constraints",
        description: "Boutique firms must manage comprehensive compliance programs with limited staff and technology resources.",
        icon: <Users className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Investor Due Diligence",
        description: "Institutional investors demand increasingly sophisticated compliance infrastructures before making allocations.",
        icon: <FileCheck className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Evolving Requirements",
        description: "Regulatory requirements continuously evolve, requiring constant monitoring and program adjustments.",
        icon: <Clock className="w-6 h-6 text-orange-600" />
      }
    ],
    
    keyFeatures: {
      title: "Microsoft-Powered Compliance for Alternative Investment",
      description: "Our approach leverages your Microsoft investments to create a comprehensive compliance program that satisfies regulators and investors without excessive cost or complexity."
    },
    
    metrics: [
      { value: "38%", label: "Increase in SEC examinations for boutique firms" },
      { value: "30%", label: "Average increase in Microsoft Compliance Manager score" },
      { value: "65%", label: "Reduction in audit preparation time" },
      { value: "85%", label: "Reduction in deficiency findings" }
    ],
    
    serviceOfferings: [
      {
        title: "Regulatory Compliance Framework",
        description: "Navigate complex regulatory requirements with a comprehensive framework tailored for boutique alternative investment firms.",
        icon: <Scale className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Key regulatory bodies and requirements (SEC, FINRA, CFTC, global equivalents)",
          "Registration types and compliance implications (RIA, CPO, CTA, AIF)",
          "Critical reporting requirements (Form ADV, Form PF, AIFMD, CRS)",
          "Microsoft Compliance Manager for centralized monitoring"
        ]
      },
      {
        title: "Policy Development & Management",
        description: "Develop and implement comprehensive policies that satisfy both regulators and institutional investors.",
        icon: <FileCheck className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Policy development aligned with regulatory requirements",
          "Customized procedures for alternative investment operations",
          "Automated policy distribution and attestation tracking",
          "Regular review and updates to match evolving regulations"
        ]
      },
      {
        title: "Compliance Monitoring & Testing",
        description: "Proactive monitoring and automated testing to ensure ongoing compliance with regulatory requirements.",
        icon: <BarChart4 className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Automated compliance monitoring alerts",
          "Regular testing of key compliance controls",
          "Microsoft 365 compliance features integration",
          "Real-time dashboard for compliance status"
        ]
      },
      {
        title: "Regulatory Exam Preparation",
        description: "Comprehensive support for regulatory examinations and investor due diligence reviews.",
        icon: <Landmark className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Mock examination and readiness assessment",
          "Document organization and presentation preparation",
          "Staff training for regulatory interactions",
          "Response support during actual examinations"
        ]
      }
    ],
    
    caseStudy: {
      title: "Emerging Hedge Fund Passes SEC Examination",
      firmType: "Quantitative Hedge Fund",
      profile: [
        { icon: <Users className="w-4 h-4" />, text: "$180M AUM" },
        { icon: <Landmark className="w-4 h-4" />, text: "First SEC examination" },
        { icon: <Shield className="w-4 h-4" />, text: "Limited compliance staff" }
      ],
      challenge: "A quantitative hedge fund with $180M AUM faced its first SEC examination after three years of operation. With limited compliance staff, they struggled to prepare for the extensive document requests and possible on-site review.",
      approach: [
        "Implemented comprehensive regulatory compliance framework",
        "Deployed Microsoft 365 compliance features for document management",
        "Created automated reporting systems for ongoing monitoring",
        "Provided mock examination and staff interview preparation"
      ],
      results: [
        { value: "Zero", label: "Significant findings in SEC examination" },
        { value: "75%", label: "Reduction in preparation time" },
        { value: "48hr", label: "Response time for all document requests" }
      ],
      quote: "The compliance framework transformed our examination readiness. What would have been months of stressful preparation was streamlined into a well-organized process. The SEC examiners specifically noted our documentation quality and responsiveness.",
      author: {
        title: "Chief Compliance Officer",
        company: "Quantitative Hedge Fund"
      }
    },
    
    faqs: [
      {
        id: 1,
        question: "How do you tailor compliance solutions for different types of alternative investment firms?",
        answer: "We customize our compliance approach based on your specific regulatory profile, investment strategy, and operational model. For example, hedge funds receive solutions focused on trading compliance and valuation policies, while private equity firms get specialized guidance on portfolio company oversight, capital raising, and fee disclosure. We also consider your firm's size, investor base, and registration status to develop proportionate compliance programs that satisfy requirements without excessive overhead."
      },
      {
        id: 2,
        question: "How do you leverage Microsoft tools for compliance management?",
        answer: "We use Microsoft's integrated compliance tools to create a cohesive compliance platform that eliminates the need for multiple point solutions. This includes Microsoft Compliance Manager for centralized policy management, Information Protection for data governance, Communication Compliance for communication surveillance, and SharePoint for secure document management with appropriate retention policies. This approach reduces costs while enhancing compliance capabilities."
      },
      {
        id: 3,
        question: "How do you stay current with regulatory changes?",
        answer: "Our dedicated regulatory intelligence team continuously monitors global regulatory developments affecting alternative investments, including SEC rule changes, enforcement actions, and examination priorities. We provide quarterly regulatory updates tailored to your firm's specific registration status and maintain your compliance program to reflect changing requirements. This proactive approach ensures you remain compliant with evolving regulations without dedicating internal resources to constant monitoring."
      },
      {
        id: 4,
        question: "Can you support international regulatory requirements?",
        answer: "Yes, our compliance solutions address global regulatory requirements including AIFMD, MiFID II, GDPR, and various local regimes. We have particular expertise in helping U.S.-based managers navigate international requirements when raising capital abroad, and we support international managers operating in U.S. markets. Our approach emphasizes identifying regulatory overlaps to create efficient compliance programs that satisfy multiple jurisdiction requirements simultaneously."
      },
      {
        id: 5,
        question: "What support do you provide during regulatory examinations?",
        answer: "We provide comprehensive support throughout the examination process, including preparation, document management, and response coordination. This starts with mock examinations to identify and address potential issues, followed by assistance with document requests, interview preparation, and finding management. Our team includes former regulators who understand examination protocols and can guide your team through the process while minimizing operational disruption and ensuring optimal outcomes."
      }
    ]
  },

  "ai-services": {
    id: "ai-services",
    category: SERVICE_CATEGORIES.ADVISORY.id,
    title: "AI Solutions",
    subtitle: "For Specialized Alternative Investment",
    description: "Transform your investment processes, unlock hidden insights, and create competitive advantage with AI solutions specifically designed for hedge funds, private equity, venture capital, and family offices.",
    
    challenges: [
      {
        title: "Data Quality & Integration Challenges",
        description: "Alternative investment firms often struggle with disparate data sources, incomplete datasets, and inconsistent formats, making it difficult to leverage AI effectively.",
        icon: <Database className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Technology Infrastructure Gaps",
        description: "Legacy systems and fragmented technology stacks create barriers to AI implementation, preventing boutique firms from capitalizing on advanced analytics.",
        icon: <Server className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Talent & Expertise Limitations",
        description: "Boutique firms face challenges attracting and retaining AI/ML talent alongside investment expertise, creating a significant competitive disadvantage.",
        icon: <Users className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Regulatory & Compliance Concerns",
        description: "Emerging AI regulations and data privacy considerations create complex compliance challenges that require specialized knowledge.",
        icon: <Shield className="w-6 h-6 text-blue-600" />
      }
    ],
    
    keyFeatures: {
      title: "AI That Enhances, Not Replaces, Investment Expertise",
      description: "Our approach focuses on augmenting your team's capabilities with responsible, transparent AI that delivers measurable business impact aligned with your investment strategy. We bring enterprise-grade AI capabilities scaled appropriately for boutique investment firms."
    },
    
    metrics: [
      { value: "40%", label: "Research efficiency improvement" },
      { value: "3.5x", label: "Deal evaluation capacity increase" },
      { value: "15%", label: "Performance enhancement" },
      { value: "98%", label: "Regulatory compliance" }
    ],
    
    serviceOfferings: [
      {
        title: "Investment Research Analysis",
        description: "Extract insights from vast amounts of financial documents, research reports, and market data to support investment decisions.",
        icon: <Search className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Summarize lengthy research reports to extract key insights",
          "Analyze earnings call transcripts to identify sentiment and trends",
          "Track specific company developments across multiple sources",
          "Process unstructured data for actionable investment signals"
        ]
      },
      {
        title: "Due Diligence Acceleration",
        description: "Streamline the document review process during deal evaluation and due diligence to identify risks and opportunities faster.",
        icon: <Target className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Extract key clauses from legal documents and contracts",
          "Identify inconsistencies across deal documentation",
          "Generate summaries of financial statements and performance data",
          "Flag potential risk factors across large document sets"
        ]
      },
      {
        title: "Investor Communication",
        description: "Create personalized investor communications, from routine updates to detailed responses for specific inquiries.",
        icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Draft customized investor updates based on performance data",
          "Generate responses to common LP inquiries",
          "Create executive summaries of portfolio performance",
          "Develop personalized communications for relationship management"
        ]
      },
      {
        title: "Portfolio Analytics",
        description: "Extract insights from portfolio data to identify trends, risks, and opportunities across investments.",
        icon: <BarChart4 className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Generate portfolio performance summaries from spreadsheet data",
          "Create comparative analyses across portfolio companies",
          "Identify correlation patterns among investments",
          "Develop predictive models for portfolio risk assessment"
        ]
      }
    ],
    
    caseStudy: {
      title: "Private Equity Firm Transforms Due Diligence Process",
      firmType: "Mid-Market Private Equity Fund",
      profile: [
        { icon: <Users className="w-4 h-4" />, text: "12-person investment team" },
        { icon: <BarChart4 className="w-4 h-4" />, text: "Limited research bandwidth" },
        { icon: <Clock className="w-4 h-4" />, text: "Time-intensive due diligence process" }
      ],
      challenge: "A mid-market private equity firm with a 12-person team was struggling to evaluate enough potential investments due to the manual nature of their due diligence process. Each potential deal required weeks of document review, limiting their capacity to explore new opportunities.",
      approach: [
        "Implemented AI-powered document analysis for deal review",
        "Developed custom models for financial statement analysis",
        "Created automated reporting for comparative deal assessment",
        "Integrated insights with existing investment workflow"
      ],
      results: [
        { value: "65%", label: "Faster extraction of insights from documents" },
        { value: "3.5x", label: "More potential investments evaluated per analyst" },
        { value: "40%", label: "Reduction in research time for investment analysis" }
      ],
      quote: "AI solutions have transformed how our investment team processes information. What used to take an analyst several hours of document review now takes minutes, allowing us to evaluate more opportunities and conduct deeper analysis on the most promising ones. The ROI has been exceptional.",
      author: {
        title: "Investment Director",
        company: "Mid-Market Private Equity Firm"
      }
    },
    
    faqs: [
      {
        id: 1,
        question: "How do AI solutions for alternative investment differ from generic AI tools?",
        answer: "Generic AI tools lack the specialized knowledge of investment workflows, financial terminology, and regulatory requirements that alternative investment firms demand. Our AI solutions are specifically built for investment use cases, trained on financial data, and designed to integrate with the unique workflows of hedge funds, PE firms, VC, and family offices. They incorporate financial domain expertise and understand the specific challenges of alternative investment data."
      },
      {
        id: 2,
        question: "Do we need to hire data scientists or AI specialists to use these solutions?",
        answer: "No. Our solutions are designed for investment professionals, not data scientists. We handle the technical complexity while delivering intuitive interfaces that your existing team can use effectively. Our implementation includes training tailored to your investment team, and our ongoing support ensures you maximize value without specialized AI talent on staff."
      },
      {
        id: 3,
        question: "How do you ensure AI-generated content meets compliance requirements?",
        answer: "Compliance is built into our AI solutions from the ground up. We incorporate regulatory guardrails specific to alternative investments, maintain detailed audit trails of AI-assisted processes, and implement appropriate human review workflows. Our solutions are designed with SEC, FINRA, and other regulatory requirements in mind, and we continuously update our compliance frameworks as regulations evolve."
      },
      {
        id: 4,
        question: "What kind of ROI can we expect from implementing AI solutions?",
        answer: "Our clients typically see ROI in three primary areas: efficiency gains (30-50% reduction in time spent on research and document processing), capacity increases (2-4x more deals or investments evaluated), and performance improvements (10-20% enhanced returns through better insights). The specific ROI depends on your current processes and how extensively you implement AI across your workflows."
      },
      {
        id: 5,
        question: "How do you ensure data privacy and security with AI implementations?",
        answer: "We implement a comprehensive security architecture specifically designed for sensitive investment data. This includes encrypted data storage, secure processing environments, strict access controls, and complete data segregation between clients. Our AI solutions operate within your security perimeter, and we never use your proprietary data to train models that would be used with other clients."
      }
    ]
  },

  "workflow-automation": {
    id: "workflow-automation",
    category: SERVICE_CATEGORIES.INFRASTRUCTURE.id,
    title: "Workflow Automation",
    subtitle: "for Specialized Alternative Investment",
    description: "Transform your investment operations with intelligent automation that enhances efficiency, reduces errors, and scales your capabilities without adding headcount.",
    
    challenges: [
      {
        title: "Manual Process Inefficiency",
        description: "Investment firms waste valuable analytical time on repetitive tasks that could be automated, reducing focus on investment decisions.",
        icon: <Clock className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Data Fragmentation",
        description: "Disparate systems and siloed data create integration barriers that slow down workflows and increase error rates across investment operations.",
        icon: <Database className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Scaling Limitations",
        description: "As AUM grows, manual processes create operational bottlenecks that prevent efficient scaling without proportional headcount increases.",
        icon: <BarChart4 className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Client Experience Constraints",
        description: "Manual investor communications and reporting reduce the quality and frequency of client interactions, limiting relationship development.",
        icon: <Users className="w-6 h-6 text-blue-600" />
      }
    ],
    
    keyFeatures: {
      title: "Intelligent Automation for Investment Workflows",
      description: "Our workflow automation solutions deliver quantifiable improvements to key processes, enhancing both operational efficiency and investment performance."
    },
    
    metrics: [
      { value: "40%", label: "Acceleration in deal cycle time" },
      { value: "70%", label: "Reduction in manual effort" },
      { value: "85%", label: "Decrease in process error rates" },
      { value: "3-4x", label: "More relationships managed per headcount" }
    ],
    
    serviceOfferings: [
      {
        title: "Investor Relationship Automation",
        description: "Streamline investor communications, capital calls, and reporting processes to enhance relationships while reducing manual effort.",
        icon: <Users className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Automated investor onboarding and KYC processes",
          "Streamlined capital call and distribution workflows",
          "Personalized investor reporting and communications",
          "Secure investor portal with document distribution"
        ]
      },
      {
        title: "Deal Flow Management",
        description: "Accelerate deal evaluation, document collection, and approval workflows to capitalize on more opportunities with the same team.",
        icon: <BarChart4 className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Structured deal intake and evaluation workflow",
          "Automated document collection and organization",
          "Multi-stage approval process with notifications",
          "Integrated due diligence checklist automation"
        ]
      },
      {
        title: "Portfolio Monitoring Automation",
        description: "Automate data collection, performance calculations, and exception alerts to maintain closer oversight of portfolio companies.",
        icon: <CheckSquare className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Automated KPI collection from portfolio companies",
          "Performance calculation and dashboard generation",
          "Exception-based alerting for covenant violations",
          "Board meeting preparation automation"
        ]
      },
      {
        title: "Regulatory Filing Automation",
        description: "Simplify compliance with automated data gathering, form population, and validation to ensure accuracy and timeliness.",
        icon: <FileText className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Automated Form ADV, PF, and D preparation",
          "Data validation and error checking",
          "Document collection for regulatory filings",
          "Audit trail for compliance verification"
        ]
      }
    ],
    
    caseStudy: {
      title: "Private Equity Firm Transforms Deal Management",
      firmType: "Mid-Market Private Equity",
      profile: [
        { icon: <Users className="w-4 h-4" />, text: "12-person investment team" },
        { icon: <BarChart4 className="w-4 h-4" />, text: "$850M AUM" },
        { icon: <Clock className="w-4 h-4" />, text: "Deal-intensive strategy" }
      ],
      challenge: "A mid-market private equity firm was struggling with an inefficient deal evaluation process that limited the number of opportunities they could assess. Manual document handling, inconsistent approval workflows, and fragmented communications created bottlenecks that prevented scaling.",
      approach: [
        "Implemented structured deal intake and evaluation workflow",
        "Automated document collection and organization by deal stage",
        "Created multi-stage approval process with notifications",
        "Integrated due diligence checklist automation"
      ],
      results: [
        { value: "40%", label: "Faster deal cycle time" },
        { value: "3x", label: "More deals evaluated per analyst" },
        { value: "Zero", label: "Missed opportunities due to process delays" }
      ],
      quote: "Workflow automation transformed our deal management process. What previously took weeks of manual coordination now happens in days with far less effort. Our team can focus on evaluating opportunities rather than managing paperwork, dramatically increasing our capacity without adding headcount.",
      author: {
        title: "Director of Operations",
        company: "Mid-Market Private Equity Firm"
      }
    },
    
    faqs: [
      {
        id: 1,
        question: "How do you design workflows that maintain our unique investment approach?",
        answer: "We begin with a thorough analysis of your current processes, understanding what makes your investment approach distinctive. Our workflow design maintains the intellectual core of your approach while automating mechanical aspects. We collaborate closely with your investment team to ensure the automation enhances rather than constrains your competitive advantages. The result is a workflow that embodies your investment philosophy while eliminating administrative burden."
      },
      {
        id: 2,
        question: "How long does implementation typically take?",
        answer: "Implementation timelines vary based on complexity, but typical projects follow a phased approach over 8-12 weeks. We begin with high-value, low-complexity workflows to deliver immediate ROI, then progressively implement more sophisticated automations. Each phase includes design, configuration, testing, and training components. We structure implementation to minimize disruption to your investment operations, often running parallel processes initially before full cutover."
      },
      {
        id: 3,
        question: "What technologies do you use for workflow automation?",
        answer: "We leverage several platforms depending on your existing technology stack and specific requirements. For Microsoft-centric environments, we utilize Power Automate, SharePoint, and Power Apps. For more complex requirements, we implement specialized investment workflow platforms like Dynamo Software or Allvue. We also build custom integrations between your core systems using middleware when appropriate. Our approach focuses on maximizing your existing technology investments rather than requiring wholesale platform changes."
      },
      {
        id: 4,
        question: "How do you integrate with our existing systems?",
        answer: "Our integration approach begins with an inventory of your current systems and data structures. We implement purpose-built connectors for common investment platforms, API-based integrations for modern systems, and data extraction techniques for legacy applications when necessary. We create a centralized data model that normalizes information across systems, enabling consistent workflow automation despite underlying system differences. This approach minimizes disruption while maximizing the value of your existing technology investments."
      },
      {
        id: 5,
        question: "How do you ensure user adoption after implementation?",
        answer: "User adoption is critical to realizing value from workflow automation. Our approach includes stakeholder involvement from design through implementation, ensuring the solution addresses actual user needs. We provide comprehensive training tailored to different user roles, create quick-reference guides for common tasks, and identify internal champions who can provide peer support. Post-implementation, we conduct regular check-ins to gather feedback and make refinements that enhance usability and address evolving requirements."
      }
    ]
  }
};

// Export helper functions to get services by ID or category
export const getServiceById = (id) => SERVICES[id] || null;

export const getServicesByCategory = (categoryId) => {
  return Object.values(SERVICES).filter(
    service => service.category === categoryId
  );
};

// Export a list of all service IDs for routing
export const SERVICE_IDS = Object.keys(SERVICES);