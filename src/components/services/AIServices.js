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
  Users,
  FileText,
  Lightbulb
} from 'lucide-react';

const AIServices = () => {
  const pageData = {
    title: "AI Solutions",
    subtitle: "for Specialized Alternative Investment",
    description: "Transform your investment processes, unlock hidden insights, and create competitive advantage with AI solutions specifically designed for hedge funds, private equity, venture capital, and family offices. Our approach enhances rather than replaces your team's expertise and judgment.",
    
    challenges: [
      {
        title: "Data Architecture Challenges",
        description: "Alternative investment firms often struggle with disparate data sources, inconsistent formats, and fragmented data ecosystems, making effective AI implementation difficult.",
        icon: <Database className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Technology Infrastructure Limitations",
        description: "Legacy systems and fragmented technology stacks create barriers to AI adoption that boutique firms lack the resources to address effectively.",
        icon: <Server className="w-6 h-6 text-orange-600" />
      },
      {
        title: "AI Talent Constraints",
        description: "Boutique firms face significant challenges attracting and retaining AI/ML specialists alongside investment expertise in a competitive talent market.",
        icon: <Users className="w-6 h-6 text-orange-600" />
      },
      {
        title: "AI Governance & Regulatory Complexity",
        description: "Emerging AI regulations and compliance considerations pose complex challenges that require specialized knowledge of both AI and financial regulatory frameworks.",
        icon: <Shield className="w-6 h-6 text-orange-600" />
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
          "Analyze earnings call transcripts for sentiment and trends",
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
        title: "Investor Communication Enhancement",
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
        title: "Portfolio Analytics Augmentation",
        description: "Extract insights from portfolio data to identify trends, risks, and opportunities across investments.",
        icon: <BarChart4 className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Generate portfolio performance summaries from complex data",
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
      quote: "The AI solution has transformed how our investment team processes information. What used to take an analyst several hours of document review now takes minutes, allowing us to evaluate more opportunities and conduct deeper analysis on the most promising ones. The ROI has been exceptional.",
      author: {
        title: "Investment Director",
        company: "Mid-Market Private Equity Firm"
      }
    },
    
    faqs: [
      {
        id: 1,
        question: "How do your AI solutions specifically address alternative investment needs?",
        answer: "Our AI solutions are designed specifically for investment workflows including research analysis, due diligence, portfolio monitoring, and investor communications. We've trained our models on financial data relevant to alternative investments and designed interfaces that integrate with your existing investment processes. Our team includes both AI specialists and investment professionals who understand the nuances of alternative strategies, ensuring solutions that address real pain points rather than generic AI applications."
      },
      {
        id: 2,
        question: "What kind of data do we need to implement your AI solutions?",
        answer: "While more data generally leads to better results, our solutions can work with various levels of data maturity. For firms with structured data repositories, we can integrate directly with your existing systems. For those with less organized data, we begin with data discovery and organization before implementing AI capabilities. We can work with financial statements, investment memoranda, legal documents, portfolio company reports, market data, investor communications, and other investment-relevant information sources."
      },
      {
        id: 3,
        question: "How does your AI approach address regulatory and compliance concerns?",
        answer: "Our AI implementation includes comprehensive governance frameworks designed specifically for financial services regulatory requirements. This includes transparency in AI decision-making, explainability of outputs, appropriate human oversight, data privacy controls, and audit trails. We stay current on emerging AI regulations affecting financial services and ensure our implementations align with regulatory expectations. We also collaborate with your compliance team to document AI usage for regulatory examinations."
      },
      {
        id: 4,
        question: "How long does implementation take and what's the expected ROI?",
        answer: "Implementation timelines range from 4-12 weeks depending on the specific solution and your data readiness. We focus on quick wins first, often delivering initial capabilities within 4-6 weeks to demonstrate value. Most clients see ROI within the first quarter through efficiency gains, enhanced analysis capabilities, and improved decision quality. Our phased approach ensures you realize value throughout the implementation rather than waiting for a lengthy project to complete."
      },
      {
        id: 5,
        question: "How do your AI solutions integrate with our existing systems?",
        answer: "Our solutions are designed to integrate seamlessly with your existing investment technology stack, including research management systems, deal tracking tools, portfolio monitoring platforms, and investor communications systems. We use API-based connections where available and build custom integrations where needed. The goal is to enhance your current workflow rather than forcing adoption of new platforms. This approach minimizes disruption while maximizing the value of both your existing systems and our AI capabilities."
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default AIServices;