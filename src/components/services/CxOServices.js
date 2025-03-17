import React from 'react';
import ServicePage from './common/ServicePage';
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
    subtitle: "for Boutique Alternative Investment",
    description: "Enterprise-grade executive leadership with boutique flexibility and deep alternative investment expertise. Access fractional CIO, CISO, and technology leadership aligned with your firm's growth.",
    
    challenges: [
      {
        title: "Executive Cost Constraints",
        description: "Boutique firms need C-suite technology leadership but cannot justify full-time executive salaries, leading to strategic gaps in technology guidance.",
        icon: <DollarSign className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Complex Technology Decisions",
        description: "Strategic technology decisions require experienced guidance to align with investment operations, but finding expertise specific to alternative investments is challenging.",
        icon: <Lightbulb className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Regulatory & Security Oversight",
        description: "Growing regulatory and investor expectations demand sophisticated technology governance that most boutique firms struggle to implement effectively.",
        icon: <Shield className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Growth Transition Points",
        description: "Technology needs evolve rapidly as AUM grows, requiring strategic planning and foresight that's difficult to maintain without dedicated leadership.",
        icon: <Target className="w-6 h-6 text-blue-600" />
      }
    ],
    
    keyFeatures: {
      title: "Executive Leadership Without the Executive Price Tag",
      description: "Our fractional CxO services deliver enterprise-caliber leadership precisely scaled to your boutique investment firm's needs and budget, providing sophisticated guidance at a fraction of the cost of a full-time hire."
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
        description: "Strategic technology leadership tailored to your firm's investment strategy and growth objectives.",
        icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Technology roadmap development aligned with fund strategy",
          "IT budget optimization and strategic allocation",
          "Vendor selection and management for investment technology",
          "Digital transformation leadership and execution"
        ]
      },
      {
        title: "CISO as a Service",
        description: "Expert security leadership to protect sensitive investor data and meet regulatory requirements.",
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Security strategy development and implementation",
          "Operational Due Diligence (ODD) preparation and support",
          "Regulatory compliance oversight (SEC, FINRA, etc.)",
          "Incident response planning and management"
        ]
      },
      {
        title: "Compliance/Governance Officer",
        description: "Navigate complex regulatory requirements with expert guidance and systematic oversight.",
        icon: <FileText className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Regulatory filing management and oversight",
          "Policy development and implementation",
          "Compliance monitoring and testing",
          "Regulatory exam preparation and support"
        ]
      },
      {
        title: "CTO Advisory",
        description: "Technical expertise to optimize your investment operations and technology stack.",
        icon: <BarChart4 className="w-8 h-8 text-blue-600" />,
        capabilities: [
          "Technology stack optimization for investment workflows",
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
      challenge: "An emerging PE fund with $250M AUM was struggling with institutional investor operational due diligence, hampering fundraising efforts despite strong returns. Their lean team lacked the technology infrastructure and compliance expertise needed to meet investor requirements.",
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
  };

  return <ServicePage {...pageData} />;
};

export default CxOServices;