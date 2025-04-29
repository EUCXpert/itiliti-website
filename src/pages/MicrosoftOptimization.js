import React from 'react';
import ServicePage from '../components/services/common/ServicePage';
import MicrosoftBusinessValueSection from '../components/MicrosoftBusinessValueSection';
import { 
  Lightbulb, 
  Shield, 
  CloudCog, 
  Database, 
  DollarSign, 
  CheckSquare, 
  Target, 
  BookOpen, 
  Server,
  Users,
  Settings,
  Zap
} from 'lucide-react';

const MicrosoftOptimization = () => {
  const pageData = {
    title: "Microsoft Optimization",
    subtitle: "for Specialized Alternative Investment Firms",
    description: "Maximize your Microsoft investment ROI with strategic optimization specifically designed for hedge funds, private equity, venture capital, and family offices. Transform Microsoft from a necessary expense into a strategic advantage for your investment operations.",
    
    challenges: [
      {
        title: "Licensing Complexity",
        description: "Microsoft's licensing models are complex and frequently changing, creating significant cost optimization opportunities that require specialized expertise to identify.",
        icon: <BookOpen className="w-6 h-6 text-blue-600" />
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
    
//    caseStudy: {
//      title: "Private Equity Fund Achieves 35% Microsoft Cost Reduction",
//      firmType: "Private Equity Firm",
//      profile: [
//        { icon: <Users className="w-4 h-4" />, text: "35 employees" },
//        { icon: <DollarSign className="w-4 h-4" />, text: "$120,000 annual Microsoft spend" },
//        { icon: <Target className="w-4 h-4" />, text: "Significant waste and underutilization" }
//      ],
//      challenge: "A growing PE firm with 35 employees was spending over $120,000 annually on Microsoft services with significant waste across licenses, subscriptions, and cloud resources. Despite this spending, they weren't leveraging key security and productivity features that could enhance their investment operations.",
//      approach: [
//        "Conducted comprehensive assessment of Microsoft environment and usage patterns",
//       "Developed tailored optimization plan with clear ROI projections",
//        "Implemented right-sized licensing and eliminated redundant subscriptions",
//        "Enabled previously unused enterprise features to enhance security and productivity"
//      ],
//      results: [
//        { value: "$42,000", label: "Annual cost savings" },
//        { value: "35%", label: "Reduction in Microsoft spend" },
//        { value: "20+", label: "Hours saved weekly in manual tasks" }
//      ],
//      quote: "The optimization not only reduced our costs but actually improved our capabilities. We're now leveraging Microsoft tools we didn't even know we already owned, which has streamlined our deal management process and enhanced our security posture for investor due diligence.",
//      author: {
//        title: "CFO",
//        company: "Mid-Market Private Equity Fund"
//      }
//    },
    
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
  };

  return (
    <>
      <ServicePage {...pageData} />
      <MicrosoftBusinessValueSection /> {/* Add this line */}
    </>
  );
};

export default MicrosoftOptimization;