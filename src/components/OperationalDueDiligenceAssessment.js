import React from 'react';
import { Briefcase } from 'lucide-react';
import AssessmentBase from './AssessmentBase';

const OperationalDueDiligenceAssessment = ({ onBackToHub }) => {
  const questions = [
    {
      id: 'bcp_dr',
      question: 'How would you rate your Business Continuity and Disaster Recovery capabilities?',
      options: [
        { text: 'No formal BCP/DR plan in place', value: 1 },
        { text: 'Basic documented plan but not recently tested', value: 2 },
        { text: 'Comprehensive plan with annual testing', value: 4 },
        { text: 'Advanced plan with regular testing and continuous improvement', value: 5 }
      ]
    },
    {
      id: 'documentation',
      question: 'How comprehensive is your documentation of policies, procedures, and controls?',
      options: [
        { text: 'Minimal documentation with significant gaps', value: 1 },
        { text: 'Basic documentation covering some key areas', value: 2 },
        { text: 'Well-documented for most areas but some inconsistencies', value: 3 },
        { text: 'Comprehensive, current documentation covering all critical areas', value: 5 }
      ]
    },
    {
      id: 'vendor_management',
      question: 'What is your approach to vendor management and oversight?',
      options: [
        { text: 'Ad-hoc with no formal vendor review process', value: 1 },
        { text: 'Basic vendor reviews but inconsistent monitoring', value: 2 },
        { text: 'Structured process for critical vendors only', value: 3 },
        { text: 'Comprehensive vendor management program with regular assessments', value: 5 }
      ]
    },
    {
      id: 'cybersecurity',
      question: 'How mature are your cybersecurity controls and monitoring capabilities?',
      options: [
        { text: 'Basic security with minimal monitoring and controls', value: 1 },
        { text: 'Standard security measures but limited advanced protections', value: 2 },
        { text: 'Robust security program with some advanced capabilities', value: 4 },
        { text: 'Comprehensive security program with continuous monitoring and testing', value: 5 }
      ]
    },
    {
      id: 'data_management',
      question: 'How would you describe your data management and governance practices?',
      options: [
        { text: 'Minimal data governance with no formal classification', value: 1 },
        { text: 'Basic data management but limited controls and governance', value: 2 },
        { text: 'Structured approach for critical data with defined ownership', value: 4 },
        { text: 'Comprehensive data governance framework with strong controls', value: 5 }
      ]
    },
    {
      id: 'compliance_oversight',
      question: 'What level of compliance oversight and testing do you maintain?',
      options: [
        { text: 'Reactive compliance approach with minimal testing', value: 1 },
        { text: 'Basic compliance monitoring but limited proactive oversight', value: 2 },
        { text: 'Regular compliance reviews with some testing', value: 3 },
        { text: 'Comprehensive compliance program with regular testing and audit', value: 5 }
      ]
    },
    {
      id: 'operational_controls',
      question: 'How robust are your operational controls for investment activities?',
      options: [
        { text: 'Minimal controls with significant manual processes', value: 1 },
        { text: 'Basic controls but many exceptions and workarounds', value: 2 },
        { text: 'Structured controls for critical processes with some automation', value: 3 },
        { text: 'Comprehensive, automated controls with exception reporting', value: 5 }
      ]
    },
    {
      id: 'segregation_duties',
      question: 'How effectively have you implemented segregation of duties?',
      options: [
        { text: 'Limited segregation due to team size and resource constraints', value: 1 },
        { text: 'Basic segregation for critical functions only', value: 2 },
        { text: 'Well-defined segregation for most areas with some exceptions', value: 3 },
        { text: 'Comprehensive segregation with compensating controls where needed', value: 5 }
      ]
    },
    {
      id: 'previous_odd',
      question: 'What has been your experience with previous operational due diligence (ODD) reviews?',
      options: [
        { text: 'Significant deficiencies identified resulting in lost opportunities', value: 1 },
        { text: 'Several issues found requiring remediation', value: 2 },
        { text: 'Minor findings with straightforward remediation paths', value: 4 },
        { text: 'Successfully passed ODD reviews with minimal findings', value: 5 }
      ]
    }
  ];

  const results = {
    high: {
      title: 'ODD Excellence',
      summary: 'Your firm demonstrates operational excellence that would satisfy the most rigorous institutional investor due diligence. Your robust controls, documentation, and governance place you in an elite category of operational maturity for your size.',
      findings: [
        'Comprehensive documentation and controls across critical areas',
        'Strong business continuity and disaster recovery capabilities',
        'Mature cybersecurity program with continuous monitoring',
        'Effective compliance oversight with regular testing'
      ],
      strengths: [
        'Your operational infrastructure is a competitive advantage for capital raising',
        'Well-positioned to pass the most stringent institutional ODD reviews',
        'Strong risk management through comprehensive controls and oversight',
        'Operational stability that enhances investment performance'
      ],
      recommendations: [
        'Leverage your operational excellence as a differentiator in fundraising',
        'Consider proactive ODD preparation materials for prospective investors',
        'Continuously enhance automation to improve operational efficiency',
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
        'Enhance documentation in key areas flagged by institutional investors',
        'Formalize and test your business continuity capabilities',
        'Strengthen cybersecurity monitoring and controls',
        'Implement regular compliance testing and oversight',
        'Consider a mock ODD review to identify specific improvement areas'
      ]
    },
    low: {
      title: 'Significant ODD Preparation Needed',
      summary: 'Your current operational infrastructure would likely face substantial challenges during institutional investor due diligence. Significant enhancement across multiple areas is recommended before engaging in formal ODD processes with sophisticated allocators.',
      findings: [
        'Limited formal documentation of policies and procedures',
        'Inadequate business continuity and disaster recovery capabilities',
        'Basic cybersecurity without comprehensive monitoring',
        'Informal compliance oversight with minimal testing'
      ],
      strengths: [
        'Recognition of operational importance to investors',
        'Opportunity to design best-practice controls from the ground up',
        'Ability to leverage industry standards rather than developing from scratch',
        'Potential to differentiate from peers through operational improvements'
      ],
      recommendations: [
        'Prioritize documentation of core policies and procedures',
        'Develop and test a formal business continuity plan',
        'Implement baseline cybersecurity controls and monitoring',
        'Establish formal compliance oversight and testing',
        'Consider engaging specialized ODD preparation assistance'
      ]
    }
  };

  return (
    <AssessmentBase 
      title="Operational Due Diligence Assessment"
      description="Evaluate your readiness for institutional investor operational due diligence (ODD) and identify critical improvement areas."
      icon={<Briefcase className="w-12 h-12 text-blue-600" />}
      questions={questions}
      results={results}
      onBackToHub={onBackToHub}
    />
  );
};

export default OperationalDueDiligenceAssessment;