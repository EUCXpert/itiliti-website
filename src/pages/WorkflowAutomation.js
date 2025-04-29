import React from 'react';
import ServicePage from '../components/services/layout/ServicePage';
import WorkflowAutomationSection from '../components/WorkflowAutomationSection';
import { Clock, ArrowRight, BarChart4, CheckSquare, Users, FileText } from 'lucide-react';

const WorkflowAutomation = () => {
  const pageData = {
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
        icon: <ArrowRight className="w-6 h-6 text-blue-600" />
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
    
//    caseStudy: {
//      title: "Private Equity Firm Transforms Deal Management",
//      firmType: "Mid-Market Private Equity",
//      profile: [
//        { icon: <Users className="w-4 h-4" />, text: "12-person investment team" },
//        { icon: <BarChart4 className="w-4 h-4" />, text: "$850M AUM" },
//        { icon: <Clock className="w-4 h-4" />, text: "Deal-intensive strategy" }
//      ],
//      challenge: "A mid-market private equity firm was struggling with an inefficient deal evaluation process that limited the number of opportunities they could assess. Manual document handling, inconsistent approval workflows, and fragmented communications created bottlenecks that prevented scaling.",
//      approach: [
//        "Implemented structured deal intake and evaluation workflow",
//        "Automated document collection and organization by deal stage",
//        "Created multi-stage approval process with notifications",
//        "Integrated due diligence checklist automation"
//      ],
//      results: [
//       { value: "40%", label: "Faster deal cycle time" },
//        { value: "3x", label: "More deals evaluated per analyst" },
//        { value: "Zero", label: "Missed opportunities due to process delays" }
//      ],
//      quote: "Workflow automation transformed our deal management process. What previously took weeks of manual coordination now happens in days with far less effort. Our team can focus on evaluating opportunities rather than managing paperwork, dramatically increasing our capacity without adding headcount.",
//      author: {
//        title: "Director of Operations",
//        company: "Mid-Market Private Equity Firm"
//      }
//    },
    
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
  };

  return (
    <>
      <ServicePage {...pageData} />
      <WorkflowAutomationSection />
    </>
  );
};

export default WorkflowAutomation;