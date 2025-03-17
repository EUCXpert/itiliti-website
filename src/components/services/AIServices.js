import React from 'react';
import ServicePage from './common/ServicePage';
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

const AIServices = () => {
  const pageData = {
    title: "AI Solutions",
    subtitle: "for Boutique Alternative Investment",
    description: "Transform your investment processes, unlock hidden insights, and create competitive advantage with AI solutions specifically designed for hedge funds, private equity, venture capital, and family offices.",
    
    challenges: [
      {
        title: "Data Quality & Integration Challenges",
        description: "Alternative investment firms often struggle with disparate data sources, incomplete datasets, and inconsistent formats.",
        icon: <Database className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Technology Infrastructure Gaps",
        description: "Legacy systems and fragmented technology stacks create barriers to AI implementation.",
        icon: <Server className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Talent & Expertise Limitations",
        description: "Boutique firms face challenges attracting and retaining AI/ML talent alongside investment expertise.",
        icon: <Users className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Regulatory & Compliance Concerns",
        description: "Emerging AI regulations and data privacy considerations create complex compliance challenges.",
        icon: <Shield className="w-6 h-6 text-orange-600" />
      }
    ],
    
    keyFeatures: {
      title: "AI That Enhances, Not Replaces, Investment Expertise",
      description: "Our approach focuses on augmenting your team's capabilities with responsible, transparent AI that delivers measurable business impact aligned with your investment strategy."
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
      quote: "Copilot has transformed how our investment team processes information. What used to take an analyst several hours of document review now takes minutes, allowing us to evaluate more opportunities and conduct deeper analysis on the most promising ones. The ROI has been exceptional.",
      author: {
        title: "Investment Director",
        company: "Mid-Market Private Equity Firm"
      }
    }
  };

  return <ServicePage {...pageData} />;
};

export default AIServices;