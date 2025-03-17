import React from 'react';
import ServicePage from './common/ServicePage';
import { 
  Scale, 
  FileCheck, 
  BarChart4, 
  Landmark, 
  Users, 
  Clock, 
  Shield, 
  FileText, 
  CheckSquare
} from 'lucide-react';

const RegulatoryCompliance = () => {
  const pageData = {
    title: "Regulatory & Compliance Solutions",
    subtitle: "for Boutique Alternative Investment",
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
    }
  };

  return <ServicePage {...pageData} />;
};

export default RegulatoryCompliance;