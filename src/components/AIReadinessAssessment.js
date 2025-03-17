import React from 'react';
import { BrainCircuit } from 'lucide-react';
import AssessmentBase from './AssessmentBase';

const AIReadinessAssessment = ({ onBackToHub }) => {
  const questions = [
    {
      id: 'data_quality',
      question: 'How would you rate the quality and organization of your firm\'s data?',
      options: [
        { text: 'Our data is disorganized, inconsistent, and spread across multiple disparate systems', value: 1 },
        { text: 'We have some organized data, but significant quality and integration issues remain', value: 2 },
        { text: 'Our data is reasonably well-organized but could benefit from further standardization', value: 3 },
        { text: 'We have highly structured, well-maintained data across most of our organization', value: 5 }
      ]
    },
    {
      id: 'existing_tech',
      question: 'What is your current level of technology infrastructure?',
      options: [
        { text: 'Mostly legacy systems with minimal cloud adoption', value: 1 },
        { text: 'Some modern systems but significant technical debt remains', value: 2 },
        { text: 'Modernized infrastructure with some cloud-based solutions', value: 3 },
        { text: 'Fully cloud-enabled environment with modern architecture', value: 5 }
      ]
    },
    {
      id: 'ai_knowledge',
      question: 'What is your team\'s current level of AI/ML knowledge?',
      options: [
        { text: 'Minimal understanding of AI technologies and applications', value: 1 },
        { text: 'Some awareness but limited practical experience', value: 2 },
        { text: 'Good theoretical understanding with some practical application', value: 3 },
        { text: 'Strong expertise with successful implementation experience', value: 5 }
      ]
    },
    {
      id: 'investment_process',
      question: 'How well-defined are your investment processes and decision workflows?',
      options: [
        { text: 'Largely ad-hoc with significant variation between team members', value: 1 },
        { text: 'Some standardization but many exceptions and manual steps', value: 2 },
        { text: 'Well-defined processes with some areas that could be more structured', value: 4 },
        { text: 'Highly structured, documented processes with clear decision criteria', value: 5 }
      ]
    },
    {
      id: 'use_cases',
      question: 'Have you identified specific AI use cases for your investment operations?',
      options: [
        { text: 'No specific use cases identified', value: 1 },
        { text: 'General ideas but no detailed evaluation', value: 2 },
        { text: 'Several specific use cases identified but not prioritized', value: 3 },
        { text: 'Well-defined use cases with clear business value identified', value: 5 }
      ]
    },
    {
      id: 'regulatory_compliance',
      question: 'How prepared is your organization to address AI regulatory and compliance considerations?',
      options: [
        { text: 'We haven\'t considered AI-specific regulatory issues', value: 1 },
        { text: 'Basic awareness but no specific preparations', value: 2 },
        { text: 'Some preparations but gaps in our compliance approach remain', value: 3 },
        { text: 'Comprehensive understanding with controls already being implemented', value: 5 }
      ]
    },
    {
      id: 'executive_support',
      question: 'What level of executive support exists for AI adoption?',
      options: [
        { text: 'Limited interest from leadership', value: 1 },
        { text: 'Some interest but no committed resources', value: 2 },
        { text: 'Strong interest with initial resource allocation', value: 4 },
        { text: 'Full executive commitment with dedicated budget and resources', value: 5 }
      ]
    },
    {
      id: 'analytics_capability',
      question: 'What is your firm\'s current level of data analytics capabilities?',
      options: [
        { text: 'Basic reporting with limited analytical tools', value: 1 },
        { text: 'Standard analytics but largely retrospective analysis', value: 2 },
        { text: 'Advanced analytics with some predictive capabilities', value: 4 },
        { text: 'Sophisticated analytics integrated throughout investment processes', value: 5 }
      ]
    }
  ];

  const results = {
    high: {
      title: 'Advanced AI Readiness',
      summary: 'Your organization demonstrates strong AI readiness with well-structured data, defined processes, and executive support. You\'re well-positioned to implement sophisticated AI solutions that can deliver significant value to your investment operations.',
      findings: [
        'Well-organized data infrastructure ready for AI applications',
        'Strong executive support and resource commitment',
        'Clear use cases identified with business value potential',
        'Existing analytics capabilities that can be extended with AI'
      ],
      strengths: [
        'Your organization has the foundational elements for successful AI implementation',
        'Your data maturity positions you for rapid AI adoption',
        'Executive support will help overcome implementation challenges',
        'Well-defined processes allow for targeted AI enhancements'
      ],
      recommendations: [
        'Begin with high-value use cases that can demonstrate quick wins',
        'Develop an AI governance framework to ensure responsible implementation',
        'Consider a center of excellence model to scale AI capabilities',
        'Build on existing analytics with advanced AI capabilities'
      ]
    },
    medium: {
      title: 'Developing AI Readiness',
      summary: 'Your organization has some key elements for AI adoption but needs further development in several areas. With targeted improvements to data quality, infrastructure, and process definition, you can significantly enhance your readiness for AI implementation.',
      findings: [
        'Partial data organization with some quality challenges',
        'Modernizing infrastructure but gaps remain',
        'Some AI use cases identified but need refinement',
        'Emerging executive interest that needs to be strengthened'
      ],
      strengths: [
        'You have the foundation to build upon for AI implementation',
        'Some defined processes that can be enhanced with AI',
        'Growing executive awareness of AI potential',
        'Specific areas where AI could deliver immediate value'
      ],
      recommendations: [
        'Focus first on data quality and integration improvements',
        'Develop a clear AI roadmap with prioritized use cases',
        'Build internal AI knowledge through training and pilot projects',
        'Enhance process documentation to prepare for AI augmentation'
      ]
    },
    low: {
      title: 'Early Stage AI Readiness',
      summary: 'Your organization is in the early stages of AI readiness with significant opportunities for development. Focusing on fundamental improvements to data quality, technology infrastructure, and process standardization will be essential before implementing advanced AI solutions.',
      findings: [
        'Substantial data quality and organization challenges',
        'Legacy systems limiting AI implementation potential',
        'Limited AI knowledge within the organization',
        'Undefined or highly variable processes making automation difficult'
      ],
      strengths: [
        'Recognition of AI\'s potential value to your business',
        'Opportunity to design AI-ready systems from the ground up',
        'Potential for significant efficiency gains through basic automation',
        'Ability to learn from industry best practices rather than trial and error'
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