import React from 'react';
import { Briefcase } from 'lucide-react';
import AssessmentBase from './AssessmentBase';

const OperationalDueDiligenceAssessment = ({ onBackToHub }) => {
  const questions = [
    {
      id: 'bcp_dr',
      question: 'How would you rate your Business Continuity and Disaster Recovery capabilities?',
      options: [
        { text: 'No formal BCP/DR plan exists or documentation is severely outdated', value: 1 },
        { text: 'Basic documented plan but not tested within the past 12 months', value: 2 },
        { text: 'Comprehensive plan with annual testing and validation', value: 4 },
        { text: 'Advanced plan with regular testing, continuous improvement, and integration with investment operations', value: 5 }
      ]
    },
    {
      id: 'documentation',
      question: 'How comprehensive is your documentation of policies, procedures, and controls?',
      options: [
        { text: 'Minimal documentation with significant gaps in critical areas', value: 1 },
        { text: 'Basic documentation covering some key areas but lacking consistency', value: 2 },
        { text: 'Well-documented for most areas with minor inconsistencies', value: 3 },
        { text: 'Comprehensive, current documentation covering all areas required for institutional due diligence', value: 5 }
      ]
    },
    {
      id: 'vendor_management',
      question: 'What is your approach to third-party vendor management and oversight?',
      options: [
        { text: 'Ad-hoc with no formal vendor assessment or review process', value: 1 },
        { text: 'Basic vendor reviews but inconsistent monitoring and oversight', value: 2 },
        { text: 'Structured process for critical vendors with regular assessments', value: 3 },
        { text: 'Comprehensive vendor management program with risk-based approach and ongoing monitoring', value: 5 }
      ]
    },
    {
      id: 'cybersecurity',
      question: 'How mature are your cybersecurity controls and monitoring capabilities?',
      options: [
        { text: 'Basic security with minimal controls and limited visibility', value: 1 },
        { text: 'Standard security measures but lacking in advanced protection', value: 2 },
        { text: 'Robust security program with comprehensive controls and monitoring', value: 4 },
        { text: 'Enterprise-grade security with continuous monitoring, testing, and improvement', value: 5 }
      ]
    },
    {
      id: 'data_management',
      question: 'How would you describe your data management and governance practices?',
      options: [
        { text: 'Minimal data governance with no formal classification or controls', value: 1 },
        { text: 'Basic data management but limited controls and ownership definition', value: 2 },
        { text: 'Structured approach for critical data with defined ownership and protection', value: 4 },
        { text: 'Comprehensive data governance framework with controls aligned to sensitivity', value: 5 }
      ]
    },
    {
      id: 'compliance_oversight',
      question: 'What level of compliance oversight and testing do you maintain?',
      options: [
        { text: 'Reactive compliance approach with minimal proactive monitoring', value: 1 },
        { text: 'Basic compliance monitoring but limited formal testing', value: 2 },
        { text: 'Regular compliance reviews with structured testing program', value: 3 },
        { text: 'Comprehensive compliance program with risk-based testing and independent validation', value: 5 }
      ]
    },
    {
      id: 'operational_controls',
      question: 'How robust are your operational controls for investment activities?',
      options: [
        { text: 'Minimal controls with heavy reliance on manual processes', value: 1 },
        { text: 'Basic controls but numerous exceptions and workarounds', value: 2 },
        { text: 'Structured controls for critical processes with some automation', value: 3 },
        { text: 'Comprehensive, automated controls with exception reporting and reconciliation', value: 5 }
      ]
    },
    {
      id: 'segregation_duties',
      question: 'How effectively have you implemented segregation of duties?',
      options: [
        { text: 'Limited segregation due to team size constraints', value: 1 },
        { text: 'Basic segregation for critical functions only', value: 2 },
        { text: 'Well-defined segregation for most areas with some exceptions', value: 3 },
        { text: 'Comprehensive segregation with compensating controls where needed', value: 5 }
      ]
    },
    {
      id: 'previous_odd',
      question: 'What has been your experience with previous operational due diligence (ODD) reviews?',
      options: [
        { text: 'Significant deficiencies identified resulting in lost allocations', value: 1 },
        { text: 'Several material findings requiring substantial remediation', value: 2 },
        { text: 'Minor findings with straightforward remediation paths', value: 4 },
        { text: 'Successfully passed ODD reviews with minimal or no findings', value: 5 }
      ]
    }
  ];

  const results = {
    high: {
      title: 'Institutional-Ready Operations',
      summary: 'Your firm demonstrates operational excellence that would satisfy the most rigorous institutional investor due diligence. Your robust controls, comprehensive documentation, and governance framework position you well for institutional capital raising.',
      findings: [
        'Comprehensive documentation and controls across all critical areas',
        'Enterprise-grade business continuity and disaster recovery capabilities',
        'Mature cybersecurity program with continuous monitoring',
        'Effective compliance oversight with regular testing and validation'
      ],
      strengths: [
        'Your operational infrastructure is a competitive advantage for institutional capital raising',
        'Well-positioned to pass even the most stringent institutional ODD reviews',
        'Strong risk management through comprehensive controls and governance',
        'Operational stability that enhances investment performance and credibility'
      ],
      recommendations: [
        'Leverage your operational excellence as a differentiator in fundraising materials',
        'Develop proactive ODD preparation packages for prospective investors',
        'Consider further automation to improve operational efficiency',
        'Maintain documentation currency through regular review cycles'
      ]
    },
    medium: {
      title: 'ODD Readiness with Improvement Opportunities',
      summary: 'Your firm has established solid operational foundations but has several areas that would benefit from enhancement prior to institutional investor due diligence. With targeted improvements, you can significantly strengthen your ODD readiness.',
      findings: [
        'Adequate documentation with some areas requiring enhancement',
        'Basic business continuity capabilities that need further development',
        'Cybersecurity controls in place but monitoring gaps exist',
        'Compliance oversight that would benefit from more formal testing'
      ],
      strengths: [
        'Existing operational framework provides a good foundation',
        'Awareness of key operational risk areas',
        'Core controls in place for critical investment processes',
        'Basic documentation framework established'
      ],
      recommendations: [
        'Prioritize documentation enhancements in areas most scrutinized by institutional investors',
        'Formalize and test your business continuity capabilities',
        'Strengthen cybersecurity monitoring and controls to meet institutional standards',
        'Implement regular compliance testing and oversight',
        'Consider a mock ODD review to identify specific improvement areas'
      ]
    },
    low: {
      title: 'Significant ODD Preparation Needed',
      summary: 'Your current operational infrastructure would likely face substantial challenges during institutional investor due diligence. Significant enhancement across multiple areas is recommended before engaging in formal ODD processes with sophisticated allocators.',
      findings: [
        'Limited formal documentation of policies, procedures and controls',
        'Inadequate business continuity and disaster recovery capabilities',
        'Basic cybersecurity without comprehensive monitoring or controls',
        'Informal compliance oversight with minimal testing or validation'
      ],
      strengths: [
        'Recognition of operational importance to institutional investors',
        'Opportunity to design best-practice controls from the ground up',
        'Ability to leverage industry standards rather than developing from scratch',
        'Potential to differentiate from peers through operational improvements'
      ],
      recommendations: [
        'Begin with a comprehensive gap assessment against institutional standards',
        'Prioritize documentation of core policies and procedures',
        'Develop and test a formal business continuity plan',
        'Implement baseline cybersecurity controls and monitoring',
        'Establish formal compliance oversight and testing program',
        'Consider specialized ODD preparation assistance'
      ]
    }
  };

  return (
    <AssessmentBase 
      title="Operational Due Diligence Readiness"
      description="Evaluate your firm's readiness for institutional investor operational due diligence (ODD) and identify critical improvement areas to enhance your capital raising capabilities."
      icon={<Briefcase className="w-12 h-12 text-blue-600" />}
      questions={questions}
      results={results}
      onBackToHub={onBackToHub}
    />
  );
};

export default OperationalDueDiligenceAssessment;