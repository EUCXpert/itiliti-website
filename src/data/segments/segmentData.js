// src/data/segments/segmentData.js
import { 
    Shield, 
    BarChart4, 
    FileText, 
    Server, 
    Clock, 
    Users, 
    Briefcase, 
    Target, 
    Database, 
    Building,
    Rocket,
    ArrowRight,
    Eye,
    Calendar,
    AlertTriangle,
    Scale
  
  } from 'lucide-react';
  
  // Define all segments in a single export
  export const SEGMENTS = {
    "private-equity": {
      id: "private-equity",
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
    },

    "private-credit": {
  id: "private-credit",
  title: "Private Credit Firms",
  subtitle: "Technology Solutions",
  description: "Specialized technology solutions for boutique private credit firms that enhance deal pipeline management, streamline credit analysis, and provide sophisticated portfolio monitoring with institutional-grade compliance and security.",
  
  challenges: [
    {
      title: "Deal Pipeline Management",
      description: "Tracking and managing diverse lending opportunities across multiple sourcing channels and relationship networks.",
      icon: <Calendar className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Credit Analysis & Risk Assessment",
      description: "Performing sophisticated credit analysis and risk evaluation with limited specialized analytical resources.",
      icon: <AlertTriangle className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Documentation Management",
      description: "Organizing and tracking complex credit agreements, covenants, and amendments across diverse borrowers.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Portfolio Monitoring",
      description: "Maintaining visibility across diverse borrowers with different reporting requirements and covenant structures.",
      icon: <BarChart4 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Investor Reporting",
      description: "Creating timely, institutional-grade reporting for investors without specialized reporting teams.",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Regulatory Compliance",
      description: "Navigating complex regulatory requirements with lean compliance resources and evolving regulations.",
      icon: <Scale className="w-6 h-6 text-blue-600" />
    }
  ],
  
  keyFeatures: {
    description: "Boutique private credit firms need technology that accelerates deal evaluation and execution while providing sophisticated credit analysis and portfolio monitoring capabilities without requiring extensive specialized teams."
  },
  
  metrics: [
    { value: "40%", label: "Faster deal evaluation process" },
    { value: "21→3", label: "Days for quarterly portfolio review" },
    { value: "100%", label: "Covenant compliance monitoring" },
    { value: "Enhanced", label: "Investor confidence through transparent reporting" }
  ],
  
  recommendedServices: [
    {
      title: "CxO Advisory Services",
      description: "Strategic technology leadership that aligns with your specific lending strategy and portfolio requirements.",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      benefits: [
        "Integrated credit workflow architectures aligned with your lending strategy",
        "Credit analysis frameworks that standardize evaluation while supporting customization",
        "Documentation management strategies ensuring compliance while enhancing efficiency",
        "Portfolio monitoring systems providing early warning of potential issues"
      ]
    },
    {
      title: "Workflow Automation",
      description: "Streamlined lending processes from origination through monitoring and workout with appropriate controls.",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      benefits: [
        "Structured deal intake and evaluation workflow",
        "Automated document collection and covenant tracking",
        "Portfolio monitoring with customized early warning indicators",
        "Streamlined investor reporting capabilities meeting institutional requirements"
      ]
    },
    {
      title: "Microsoft Optimization",
      description: "Secure environments designed for efficient deal team collaboration with appropriate access controls for sensitive financial data.",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      benefits: [
        "Secure environments for deal team collaboration with external parties",
        "Implementation of appropriate credit evaluation tools and financial analysis systems",
        "Efficient document management for complex credit agreements",
        "Integrated workflow from origination through monitoring and workout"
      ]
    },
    {
      title: "Security Foundation",
      description: "Comprehensive protection for sensitive borrower information and proprietary credit models with regulatory compliance.",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      benefits: [
        "Security controls appropriate for sensitive financial information",
        "Data protection for proprietary credit models",
        "Documented policies satisfying regulatory requirements",
        "Vendor assessment frameworks for credit-specific applications"
      ]
    }
  ],
  
  caseStudy: {
    title: "Specialized Lender Transforms Portfolio Monitoring",
    firmType: "Boutique Private Credit Firm",
    profile: [
      { icon: <Briefcase className="w-4 h-4" />, text: "Lower middle-market focus" },
      { icon: <Users className="w-4 h-4" />, text: "15-person investment team" },
      { icon: <Target className="w-4 h-4" />, text: "32 diverse borrowers" }
    ],
    challenge: "A specialized 15-person private credit firm focused on lower middle-market lending was struggling with portfolio monitoring across 32 diverse borrowers. Their manual processes created significant operational inefficiency and limited their ability to identify potential issues early.",
    approach: [
      "Designed an integrated portfolio monitoring platform connecting borrower reporting with credit assessment",
      "Implemented automated covenant tracking and compliance monitoring",
      "Created customized early warning indicators based on their specific credit strategy",
      "Provided streamlined investor reporting capabilities meeting institutional requirements"
    ],
    results: [
      { value: "3 weeks→3 days", label: "Quarterly portfolio review process" },
      { value: "Prevention", label: "Identified potential covenant breaches early" },
      { value: "Enhanced", label: "Investor confidence through transparent reporting" }
    ],
    quote: "The integrated system transformed our portfolio monitoring capabilities. We've cut our quarterly review process from weeks to days while significantly improving our ability to identify potential issues early. The streamlined investor reporting has also enhanced our credibility with institutional allocators.",
    author: {
      title: "Managing Director",
      company: "Boutique Private Credit Firm"
    }
  }
},
  
    "venture-capital": {
      id: "venture-capital",
      title: "Venture Capital Firms",
      subtitle: "Technology Solutions",
      description: "Mobile-first technology solutions for early-stage venture capital firms that enhance relationship management, deal flow tracking, and knowledge sharing across investment teams.",
      
      challenges: [
        {
          title: "Relationship Management",
          description: "Tracking complex networks of founders, co-investors, and portfolio companies across the ecosystem.",
          icon: <Users className="w-6 h-6 text-blue-600" />
        },
        {
          title: "Deal Flow Tracking",
          description: "Managing and prioritizing large volumes of potential investments efficiently.",
          icon: <Database className="w-6 h-6 text-blue-600" />
        },
        {
          title: "Knowledge Management",
          description: "Capturing and sharing insights across small, often distributed investment teams.",
          icon: <FileText className="w-6 h-6 text-blue-600" />
        },
        {
          title: "Mobile Accessibility",
          description: "Providing secure access to critical information for partners constantly on the move.",
          icon: <BarChart4 className="w-6 h-6 text-blue-600" />
        },
        {
          title: "Security & Confidentiality",
          description: "Protecting sensitive deal information and intellectual property from threats.",
          icon: <Shield className="w-6 h-6 text-blue-600" />
        },
        {
          title: "Portfolio Support",
          description: "Extending limited resources to support the needs of portfolio companies.",
          icon: <Briefcase className="w-6 h-6 text-blue-600" />
        }
      ],
      
      keyFeatures: {
        description: "Early-stage venture capital firms need technology that enhances their deal flow management, provides meaningful insights from relationship data, and supports knowledge sharing across small teams while enabling mobility and portfolio company support."
      },
      
      metrics: [
        { value: "35%", label: "Increase in qualified deal flow" },
        { value: "Enhanced", label: "Follow-on funding coordination" },
        { value: "Improved", label: "Partner productivity during travel" },
        { value: "Strengthened", label: "Portfolio company support" }
      ],
      
      recommendedServices: [
        {
          title: "CxO Advisory Services",
          description: "Strategic guidance to develop relationship management strategies and knowledge sharing approaches that enhance pattern recognition.",
          icon: <Briefcase className="w-8 h-8 text-blue-600" />,
          benefits: [
            "CRM and relationship management strategies aligned with VC workflows",
            "Knowledge management approaches preserving insights across the investment team",
            "Mobile-first technology strategies supporting partners on the go",
            "Information architectures enhancing pattern recognition across investments"
          ]
        },
        {
          title: "AI for Deal Flow Analysis",
          description: "Advanced analytics and machine learning solutions to identify promising investment opportunities.",
          icon: <Target className="w-8 h-8 text-blue-600" />,
          benefits: [
            "Pattern recognition algorithms for screening investment opportunities",
            "Data enrichment services to enhance investment analysis",
            "Automated due diligence and market research capabilities",
            "Integration with existing CRM and deal management systems"
          ]
        },
        {
          title: "Microsoft Optimization",
          description: "Flexible environments supporting both office and remote work with maximum mobility and accessibility.",
          icon: <Server className="w-8 h-8 text-blue-600" />,
          benefits: [
            "Flexible environments supporting both office and remote work",
            "Cloud solutions optimized for maximum mobility",
            "Secure but accessible knowledge repositories",
            "Systems supporting the collaborative nature of VC decision-making"
          ]
        },
        {
          title: "Electronic Message Archiving",
          description: "Secure and compliant communication solutions that integrate with relationship management systems.",
          icon: <FileText className="w-8 h-8 text-blue-600" />,
          benefits: [
            "Integrated messaging that captures relationship intelligence",
            "Compliance solutions appropriate for financial services",
            "Mobile-friendly communication systems for partners on the move",
            "Automated insight extraction from communication data"
          ]
        }
      ],
      
      caseStudy: {
        title: "Enterprise Software VC Firm Enhances Deal Flow",
        firmType: "Early-Stage Venture Capital Firm",
        profile: [
          { icon: <Briefcase className="w-4 h-4" />, text: "Enterprise software focus" },
          { icon: <Users className="w-4 h-4" />, text: "15-person investment team" },
          { icon: <Target className="w-4 h-4" />, text: "Relationship-driven strategy" }
        ],
        challenge: "A 15-person early-stage venture capital firm focusing on enterprise software was struggling to manage relationships across hundreds of portfolio companies and thousands of potential investments while providing consistent support to founders.",
        approach: [
          "Designed an integrated relationship intelligence architecture",
          "Implemented appropriate CRM workflows for venture capital processes",
          "Created mobile-friendly knowledge management approaches",
          "Provided technology guidance for portfolio company support"
        ],
        results: [
          { value: "35%", label: "Increase in qualified deal flow" },
          { value: "Enhanced", label: "Follow-on funding coordination" },
          { value: "Improved", label: "Partner productivity during travel" }
        ],
        quote: "The relationship intelligence system transformed our ability to leverage our network. We're seeing more qualified deals, providing better support to portfolio companies, and our partners can access critical information anywhere. The pattern recognition capabilities have also helped us identify promising opportunities we might have missed.",
        author: {
          title: "Managing Partner",
          company: "Enterprise Software VC Firm"
        }
      }
    },
  
    "family-offices": {
      id: "family-offices",
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
          icon: <Eye className="w-5 h-5 text-blue-600" />
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
    },
  
    "real-estate": {
      id: "real-estate",
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
    }
  };
  
  // Export helper functions to get segments by ID
  export const getSegmentById = (id) => SEGMENTS[id] || null;
  
  // Export a list of all segment IDs for routing
  export const SEGMENT_IDS = Object.keys(SEGMENTS);