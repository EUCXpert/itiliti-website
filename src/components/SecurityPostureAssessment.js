import React from 'react';
import { Shield } from 'lucide-react';
import AssessmentBase from './AssessmentBase';

const SecurityPostureAssessment = ({ onBackToHub }) => {
  const questions = [
    {
      id: 'security_governance',
      question: 'How would you describe your security governance structure?',
      options: [
        { text: 'No formal security governance or leadership', value: 1 },
        { text: 'Basic security responsibilities assigned but no formal program', value: 2 },
        { text: 'Defined security program with leadership but limited resources', value: 3 },
        { text: 'Comprehensive security program with executive oversight', value: 5 }
      ]
    },
    {
      id: 'endpoint_protection',
      question: 'What level of endpoint protection do you currently maintain?',
      options: [
        { text: 'Basic antivirus only', value: 1 },
        { text: 'Standard endpoint protection without advanced features', value: 2 },
        { text: 'Advanced endpoint protection with some EDR capabilities', value: 4 },
        { text: 'Comprehensive EDR with behavioral monitoring and response', value: 5 }
      ]
    },
    {
      id: 'identity_management',
      question: 'How mature is your identity and access management approach?',
      options: [
        { text: 'Basic password policies with minimal controls', value: 1 },
        { text: 'Standard password policies with some MFA implementation', value: 2 },
        { text: 'Comprehensive MFA with structured access reviews', value: 4 },
        { text: 'Zero-trust approach with comprehensive identity controls', value: 5 }
      ]
    },
    {
      id: 'data_security',
      question: 'How do you manage data security and protection?',
      options: [
        { text: 'Limited data security controls or classification', value: 1 },
        { text: 'Basic data protection for sensitive information only', value: 2 },
        { text: 'Structured data classification with defined protections', value: 4 },
        { text: 'Comprehensive data security with encryption and DLP', value: 5 }
      ]
    },
    {
      id: 'security_monitoring',
      question: 'What security monitoring capabilities do you maintain?',
      options: [
        { text: 'Minimal monitoring with reactive review only', value: 1 },
        { text: 'Basic logging with limited alert capabilities', value: 2 },
        { text: 'Comprehensive logging with some proactive monitoring', value: 3 },
        { text: 'Advanced SIEM implementation with 24/7 monitoring', value: 5 }
      ]
    },
    {
      id: 'incident_response',
      question: 'How would you characterize your incident response capabilities?',
      options: [
        { text: 'No formal incident response plan', value: 1 },
        { text: 'Basic plan but not tested or regularly updated', value: 2 },
        { text: 'Documented plan with defined roles and some testing', value: 3 },
        { text: 'Comprehensive plan with regular testing and refinement', value: 5 }
      ]
    },
    {
      id: 'third_party_security',
      question: 'How do you manage third-party security risks?',
      options: [
        { text: 'Limited vendor security assessment or oversight', value: 1 },
        { text: 'Basic security reviews for critical vendors only', value: 2 },
        { text: 'Structured security assessment process for most vendors', value: 4 },
        { text: 'Comprehensive vendor security program with ongoing monitoring', value: 5 }
      ]
    },
    {
      id: 'security_awareness',
      question: 'What level of security awareness training do you provide?',
      options: [
        { text: 'Minimal or ad-hoc security guidance', value: 1 },
        { text: 'Annual basic security awareness training', value: 2 },
        { text: 'Regular training with some phishing simulation', value: 4 },
        { text: 'Comprehensive program with targeted role-based training', value: 5 }
      ]
    },
    {
      id: 'compliance_security',
      question: 'How well are your security controls aligned with regulatory requirements?',
      options: [
        { text: 'Limited awareness of security compliance requirements', value: 1 },
        { text: 'Basic understanding but gaps in implementation', value: 2 },
        { text: 'Controls aligned to key regulations with some gaps', value: 3 },
        { text: 'Comprehensive regulatory alignment with regular validation', value: 5 }
      ]
    }
  ];

  const results = {
    high: {
      title: 'Strong Security Posture',
      summary: 'Your organization demonstrates a mature security program with comprehensive controls and monitoring capabilities.',
      findings: [
        'Strong governance and executive oversight',
        'Advanced endpoint and network protection',
        'Comprehensive identity and access management',
        'Mature incident response capabilities'
      ],
      strengths: [
        'Well-positioned to protect against sophisticated threats',
        'Strong compliance alignment',
        'Effective security awareness program',
        'Robust third-party risk management'
      ],
      recommendations: [
        'Continue enhancing monitoring capabilities',
        'Maintain regular security testing and validation',
        'Consider advanced threat hunting capabilities',
        'Expand automated security controls'
      ]
    },
    medium: {
      title: 'Developing Security Program',
      summary: 'Your security program has foundational elements but requires enhancement in several areas.',
      findings: [
        'Basic security controls in place',
        'Some monitoring capabilities',
        'Partial implementation of best practices',
        'Areas requiring maturity development'
      ],
      strengths: [
        'Basic security foundation established',
        'Awareness of key security risks',
        'Some proactive security measures',
        'Support for security improvements'
      ],
      recommendations: [
        'Strengthen endpoint protection',
        'Enhance monitoring capabilities',
        'Improve incident response readiness',
        'Expand security awareness training'
      ]
    },
    low: {
      title: 'Early Stage Security Program',
      summary: 'Your security program requires significant enhancement to meet industry standards.',
      findings: [
        'Limited security controls',
        'Minimal monitoring capabilities',
        'Gaps in basic security practices',
        'Reactive security approach'
      ],
      strengths: [
        'Recognition of security importance',
        'Opportunity to build robust program',
        'Ability to implement current best practices',
        'Potential for rapid security maturation'
      ],
      recommendations: [
        'Establish basic security controls',
        'Implement fundamental monitoring',
        'Develop incident response capabilities',
        'Create security awareness program'
      ]
    }
  };

  return (
    <AssessmentBase 
      title="Security Posture Assessment"
      description="Evaluate your firm's cybersecurity controls, governance, and resilience against financial services threats and regulatory requirements."
      icon={<Shield className="w-12 h-12 text-blue-600" />}
      questions={questions}
      results={results}
      onBackToHub={onBackToHub}
    />
  );
};

export default SecurityPostureAssessment;