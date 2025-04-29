import React from 'react';
import ServicePage from '../components/services/common/ServicePage';
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
  CheckSquare
} from 'lucide-react';

const CxOServices = () => {
  const pageData = {
    title: "CxO Advisory Services",
    subtitle: "for Specialized Alternative Investment",
    description: "Access fractional technology leadership that delivers enterprise expertise at Specialized-appropriate scale and cost. Our CxO services align your technology strategy with investment objectives while ensuring operational excellence and regulatory compliance.",
    
    challenges: [
      {
        title: "Executive Cost Limitations",
        description: "Specialized investment firms require C-suite technology leadership but cannot justify full-time executive compensation, creating strategic gaps in technology governance.",
        icon: <DollarSign className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Investment-Specific Technology Decisions",
        description: "Strategic technology choices demand specialized expertise aligned with alternative investment operations, which is increasingly difficult to find and retain.",
        icon: <Lightbulb className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Institutional Investor Requirements",
        description: "Growing institutional allocator and regulatory expectations demand sophisticated technology governance that most Specialized firms struggle to implement effectively.",
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
      description: "Our fractional CxO services deliver institutional-caliber technology leadership precisely scaled to your Specialized investment firm's needs, providing sophisticated guidance at a fraction of the cost of a full-time hire."
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
      
    faqs: [
      {
        id: 1,
        question: "How does your fractional CxO approach compare to hiring a full-time executive?",
        answer: "Our fractional model provides enterprise-caliber expertise at 60-75% less cost than a full-time executive hire. You receive scheduled strategic guidance, on-demand support during critical periods, and comprehensive expertise across multiple disciplines (CIO, CISO, CTO) rather than being limited to a single executive's skill set. This approach also eliminates recruitment costs, benefits expenses, and the challenges of retaining top executive talent at Specialized firms."
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
  };

  return <ServicePage {...pageData} />;
};

export default CxOServices;