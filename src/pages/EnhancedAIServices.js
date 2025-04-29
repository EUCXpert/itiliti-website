import React from 'react';
import { 
  BrainCircuit, 
  Search, 
  Target, 
  MessageSquare, 
  BarChart4, 
  Database, 
  Server, 
  Shield, 
  Clock, 
  ArrowUpRight,
  Users
} from 'lucide-react';
import ServicePage from '../components/services/common/ServicePage';
import AiUseCasesSection from '../components/AiUseCasesSection';

const EnhancedAIServices = () => {
  const pageData = {
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
        description: "Legacy systems and fragmented technology stacks create barriers to AI implementation, preventing Specialized firms from capitalizing on advanced analytics.",
        icon: <Server className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Talent & Expertise Limitations",
        description: "Specialized firms face challenges attracting and retaining AI/ML talent alongside investment expertise, creating a significant competitive disadvantage.",
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
      description: "Our approach focuses on augmenting your team's capabilities with responsible, transparent AI that delivers measurable business impact aligned with your investment strategy. We bring enterprise-grade AI capabilities scaled appropriately for specialized investment firms."
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
    
//    caseStudy: {
//      title: "Private Equity Firm Transforms Due Diligence Process",
//      firmType: "Mid-Market Private Equity Fund",
//      profile: [
//        { icon: <Users className="w-4 h-4" />, text: "12-person investment team" },
//        { icon: <BarChart4 className="w-4 h-4" />, text: "Limited research bandwidth" },
//        { icon: <Clock className="w-4 h-4" />, text: "Time-intensive due diligence process" }
//      ],
//      challenge: "A mid-market private equity firm with a 12-person team was struggling to evaluate enough potential investments due to the manual nature of their due diligence process. Each potential deal required weeks of document review, limiting their capacity to explore new opportunities.",
//      approach: [
//        "Implemented AI-powered document analysis for deal review",
//        "Developed custom models for financial statement analysis",
//        "Created automated reporting for comparative deal assessment",
//        "Integrated insights with existing investment workflow"
//      ],
//      results: [
//        { value: "65%", label: "Faster extraction of insights from documents" },
//        { value: "3.5x", label: "More potential investments evaluated per analyst" },
//        { value: "40%", label: "Reduction in research time for investment analysis" }
//      ],
//      quote: "AI solutions have transformed how our investment team processes information. What used to take an analyst several hours of document review now takes minutes, allowing us to evaluate more opportunities and conduct deeper analysis on the most promising ones. The ROI has been exceptional.",
//      author: {
//        title: "Investment Director",
//        company: "Mid-Market Private Equity Firm"
//      }
//    },
    
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
  };

  return (
  <>
    <ServicePage {...pageData} />
    <AiUseCasesSection /> 
  </>
);
};

export default EnhancedAIServices;