import React from 'react';
import ServicePage from './common/ServicePage';
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
  Users
} from 'lucide-react';

const MicrosoftOptimization = () => {
  const pageData = {
    title: "Microsoft Optimization",
    subtitle: "for Boutique Alternative Investment Firms",
    description: "Maximize your Microsoft investment ROI with strategic optimization specifically designed for hedge funds, private equity, venture capital, and family offices.",
    
    challenges: [
      {
        title: "Licensing Complexity",
        description: "Microsoft's licensing models are complex and frequently changing, creating significant optimization opportunities but requiring specialized expertise.",
        icon: <BookOpen className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Technology Sprawl",
        description: "Most firms accumulate redundant tools and underutilized licenses, creating unnecessary costs and operational friction.",
        icon: <Server className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Value Realization",
        description: "Many firms only utilize 40-60% of their Microsoft capabilities, missing opportunities to transform investment operations.",
        icon: <Target className="w-6 h-6 text-blue-600" />
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
          "Leverage special financial services licensing benefits"
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
      challenge: "A growing PE firm with 35 employees was spending over $120,000 annually on Microsoft services with significant waste and underutilization. Their optimization program implemented right-sized licensing, consolidated subscriptions, and enabled enterprise features that improved security and productivity.",
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
      quote: "The optimization not only reduced our costs but actually improved our capabilities. We're now leveraging Microsoft tools we didn't even know we already owned.",
      author: {
        title: "CFO",
        company: "Mid-Market Private Equity Fund"
      }
    }
  };

  return <ServicePage {...pageData} />;
};

export default MicrosoftOptimization;