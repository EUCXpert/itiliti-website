import React from 'react';
import { BrainCircuit } from 'lucide-react';
import AssessmentBase from './AssessmentBase';

const AIReadinessAssessment = ({ onBackToHub }) => {
  const questions = [
    {
      id: 'data_quality',
      question: 'How would you rate the quality and organization of your firm\'s data architecture?',
      options: [
        { text: 'Our data is fragmented across disparate systems with significant inconsistencies', value: 1 },
        { text: 'We have some organized data repositories, but face integration and quality challenges', value: 2 },
        { text: 'Our data is reasonably well-structured but requires further standardization', value: 3 },
        { text: 'We maintain highly curated, well-governed data across our organization', value: 5 }
      ]
    },
    {
      id: 'existing_tech',
      question: 'What is the current state of your technology infrastructure?',
      options: [
        { text: 'Predominantly legacy systems with minimal cloud adoption', value: 1 },
        { text: 'Some modernized systems but significant technical debt remains', value: 2 },
        { text: 'Hybrid infrastructure with selective cloud-based solutions', value: 3 },
        { text: 'Fully cloud-enabled environment with modern architecture', value: 5 }
      ]
    },
    {
      id: 'ai_knowledge',
      question: 'How would you characterize your team\'s AI/ML expertise?',
      options: [
        { text: 'Limited understanding of AI technologies and investment applications', value: 1 },
        { text: 'Basic awareness but minimal practical implementation experience', value: 2 },
        { text: 'Sound theoretical understanding with some pilot implementations', value: 3 },
        { text: 'Deep expertise with successful AI deployment in investment workflows', value: 5 }
      ]
    },
    {
      id: 'investment_process',
      question: 'How well-defined and documented are your investment processes and decision workflows?',
      options: [
        { text: 'Largely intuitive with significant variation between team members', value: 1 },
        { text: 'Partially standardized with numerous exceptions and manual interventions', value: 2 },
        { text: 'Well-defined processes with some opportunities for further structuring', value: 4 },
        { text: 'Highly structured, documented workflows with clear decision criteria', value: 5 }
      ]
    },
    {
      id: 'use_cases',
      question: 'Have you identified specific AI use cases for your investment operations?',
      options: [
        { text: 'No specific use cases identified', value: 1 },
        { text: 'General concepts but no detailed evaluation', value: 2 },
        { text: 'Several specific use cases identified but not prioritized', value: 3 },
        { text: 'Well-defined use cases with quantified business value', value: 5 }
      ]
    },
    {
      id: 'regulatory_compliance',
      question: 'How prepared is your organization to address AI governance and regulatory considerations?',
      options: [
        { text: 'We haven\'t specifically considered AI regulatory implications', value: 1 },
        { text: 'Basic awareness but no formal preparation', value: 2 },
        { text: 'Some preparation but gaps in our compliance approach remain', value: 3 },
        { text: 'Comprehensive AI governance framework with controls being implemented', value: 5 }
      ]
    },
    {
      id: 'executive_support',
      question: 'What level of executive sponsorship exists for AI adoption?',
      options: [
        { text: 'Limited interest from leadership', value: 1 },
        { text: 'Some interest but no committed resources', value: 2 },
        { text: 'Strong interest with initial resource allocation', value: 4 },
        { text: 'Full executive commitment with dedicated budget and strategy', value: 5 }
      ]
    },
    {
      id: 'analytics_capability',
      question: 'What is your firm\'s current advanced analytics maturity?',
      options: [
        { text: 'Basic reporting with limited analytical capabilities', value: 1 },
        { text: 'Standard analytics primarily focused on retrospective analysis', value: 2 },
        { text: 'Advanced analytics with some predictive capabilities', value: 4 },
        { text: 'Sophisticated analytics embedded throughout investment processes', value: 5 }
      ]
    }
  ];

  const results = {
    high: {
      title: 'Advanced AI Readiness',
      summary: 'Your firm demonstrates strong AI readiness with well-structured data, defined investment processes, and executive sponsorship. You\'re well-positioned to implement sophisticated AI solutions that can deliver measurable alpha to your investment operations.',
      findings: [
        'Enterprise-grade data architecture ready for AI applications',
        'Strong executive sponsorship and resource commitment',
        'Clear use cases with quantifiable business value',
        'Mature analytics capabilities that can be extended with AI'
      ],
      strengths: [
        'Your organization has the foundation for successful AI implementation',
        'Your data maturity positions you for rapid AI adoption',
        'Executive sponsorship will accelerate implementation timelines',
        'Well-defined investment processes enable targeted AI enhancements'
      ],
      recommendations: [
        'Prioritize high-value use cases that demonstrate quick ROI',
        'Develop a comprehensive AI governance framework',
        'Establish a center of excellence model to scale AI capabilities',
        'Extend existing analytics with advanced AI/ML models'
      ]
    },
    medium: {
      title: 'Developing AI Readiness',
      summary: 'Your organization has established some key elements for AI adoption but requires further development in several areas. With targeted improvements to data quality, infrastructure, and process definition, you can significantly enhance your readiness for AI implementation.',
      findings: [
        'Partial data organization with quality and integration challenges',
        'Modernizing infrastructure but gaps remain',
        'Some AI use cases identified but requiring refinement',
        'Growing executive interest that needs to be strengthened'
      ],
      strengths: [
        'Existing foundation to build upon for AI implementation',
        'Some defined investment processes that can be enhanced with AI',
        'Growing awareness of AI potential among leadership',
        'Specific domains where AI could deliver immediate value'
      ],
      recommendations: [
        'Prioritize data quality and integration improvements',
        'Develop a clear AI roadmap with prioritized use cases',
        'Build internal AI capabilities through targeted training',
        'Enhance investment process documentation to prepare for AI augmentation'
      ]
    },
    low: {
      title: 'Early Stage AI Readiness',
      summary: 'Your organization is in the initial phases of AI readiness with significant opportunities for development. Focusing on fundamental improvements to data architecture, technology infrastructure, and investment process standardization will be essential before implementing advanced AI solutions.',
      findings: [
        'Significant data quality and organization challenges',
        'Legacy systems limiting AI implementation potential',
        'Limited AI expertise within the organization',
        'Undefined or highly variable investment processes'
      ],
      strengths: [
        'Recognition of AI\'s potential value to your investment strategy',
        'Opportunity to design AI-ready systems from first principles',
        'Potential for significant efficiency gains through initial automation',
        'Ability to leverage industry best practices rather than trial and error'
      ],
      recommendations: [
        'Begin with a comprehensive data strategy and governance framework',
        'Modernize key infrastructure components to support future AI capabilities',
        'Develop structured investment processes before attempting automation',
        'Build internal knowledge through education and assessment of simple use cases'
      ]
    }
  };

  return (
    <AssessmentBase 
      title="AI Readiness Assessment"
      description="Evaluate your firm's preparedness to implement and benefit from artificial intelligence solutions in your investment operations."
      icon={<BrainCircuit className="w-12 h-12 text-blue-600" />}
      questions={questions}
      results={results}
      onBackToHub={onBackToHub}
    />
  );
};

export default AIReadinessAssessment;