import React from 'react';
import { Shield } from 'lucide-react';
import AssessmentBase from './AssessmentBase';

const SecurityPostureAssessment = ({ onBackToHub }) => {
  const questions = [
    {
      id: 'security_governance',
      question: 'How would you describe your security governance structure?',
      options: [
        { text: 'No formal security governance or leadership defined', value: 1 },
        { text: 'Basic security responsibilities assigned but no formal program', value: 2 },
        { text: 'Defined security program with leadership but limited resources', value: 3 },
        { text: 'Comprehensive security program with executive oversight and dedicated resources', value: 5 }
      ]
    },
    {
      id: 'endpoint_protection',
      question: 'What level of endpoint protection do you currently maintain?',
      options: [
        { text: 'Basic antivirus only with minimal management', value: 1 },
        { text: 'Standard endpoint protection without advanced threat capabilities', value: 2 },
        { text: 'Advanced endpoint protection with EDR capabilities on critical systems', value: 4 },
        { text: 'Comprehensive EDR with behavioral monitoring across all endpoints', value: 5 }
      ]
    },
    {
      id: 'identity_management',
      question: 'How mature is your identity and access management approach?',
      options: [
        { text: 'Basic password policies with minimal additional controls', value: 1 },
        { text: 'Standard password policies with partial MFA implementation', value: 2 },
        { text: 'Comprehensive MFA with regular access reviews', value: 4 },
        { text: 'Zero-trust architecture with risk-based authentication across all systems', value: 5 }
      ]
    },
    {
      id: 'data_security',
      question: 'How do you manage data security and protection?',
      options: [
        { text: 'Limited data security controls or classification', value: 1 },
        { text: 'Basic data protection for highly sensitive information only', value: 2 },
        { text: 'Structured data classification with appropriate protection measures', value: 4 },
        { text: 'Comprehensive data security with encryption, DLP, and automated controls', value: 5 }
      ]
    },
    {
      id: 'security_monitoring',
      question: 'What security monitoring capabilities do you maintain?',
      options: [
        { text: 'Minimal monitoring with reactive review only', value: 1 },
        { text: 'Basic logging with limited alert capabilities', value: 2 },
        { text: 'Comprehensive logging with proactive monitoring during business hours', value: 3 },
        { text: 'Advanced SIEM implementation with 24/7 monitoring and threat hunting', value: 5 }
      ]
    },
    {
      id: 'incident_response',
      question: 'How would you characterize your incident response capabilities?',
      options: [
        { text: 'No formal incident response plan or process', value: 1 },
        { text: 'Basic plan but not tested or regularly updated', value: 2 },
        { text: 'Documented plan with defined roles and periodic testing', value: 3 },
        { text: 'Comprehensive plan with regular testing, automation, and continuous improvement', value: 5 }
      ]
    },
    {
      id: 'third_party_security',
      question: 'How do you manage third-party security risks?',
      options: [
        { text: 'Limited vendor security assessment or oversight', value: 1 },
        { text: 'Basic security reviews for critical vendors only', value: 2 },
        { text: 'Structured assessment process for all vendors with ongoing monitoring', value: 4 },
        { text: 'Comprehensive vendor security program with risk-based approach and continuous validation', value: 5 }
      ]
    },
    {
      id: 'security_awareness',
      question: 'What level of security awareness training do you provide?',
      options: [
        { text: 'Minimal or ad-hoc security guidance', value: 1 },
        { text: 'Annual basic security awareness training', value: 2 },
        { text: 'Regular training with phishing simulation and specialized modules', value: 4 },
        { text: 'Comprehensive program with targeted role-based training, regular reinforcement, and effectiveness measurement', value: 5 }
      ]
    },
    {
      id: 'compliance_security',
      question: 'How well are your security controls aligned with regulatory requirements and investor expectations?',
      options: [
        { text: 'Limited awareness of security compliance requirements', value: 1 },
        { text: 'Basic understanding but gaps in implementation', value: 2 },
        { text: 'Controls aligned to key regulations with some gaps', value: 3 },
        { text: 'Comprehensive regulatory alignment with regular validation and investor-ready documentation', value: 5 }
      ]
    }
  ];

  const results = {
    high: {
      title: 'Institutional-Grade Security Posture',
      summary: 'Your organization demonstrates a mature security program with comprehensive controls, monitoring capabilities, and governance that would satisfy institutional investor requirements and regulatory scrutiny.',
      findings: [
        'Strong security governance with executive oversight',
        'Advanced endpoint and network protection across the environment',
        'Comprehensive identity and access management with zero-trust principles',
        'Mature incident response capabilities with regular testing'
      ],
      strengths: [
        'Well-positioned to protect against sophisticated threats targeting investment firms',
        'Strong alignment with SEC and regulatory compliance expectations',
        'Effective security awareness across the organization',
        'Robust third-party risk management program'
      ],
      recommendations: [
        'Continue enhancing threat detection and hunting capabilities',
        'Maintain regular security validation through penetration testing',
        'Consider implementing advanced deception technologies',
        'Expand automation of security controls and responses'
      ]
    },
    medium: {
      title: 'Developing Security Program',
      summary: 'Your security program has established foundational elements but requires enhancement in several areas to meet institutional investor expectations and provide comprehensive protection.',
      findings: [
        'Basic security controls established across core systems',
        'Functional monitoring capabilities with some visibility gaps',
        'Partial implementation of security best practices',
        'Several areas requiring maturity development'
      ],
      strengths: [
        'Basic security foundation established',
        'Awareness of key security risks facing investment firms',
        'Some proactive security measures in place',
        'Support for security improvements from leadership'
      ],
      recommendations: [
        'Strengthen endpoint protection with EDR capabilities',
        'Enhance monitoring coverage and 24/7 detection capabilities',
        'Improve incident response readiness through formal testing',
        'Expand security awareness training with phishing simulation',
        'Develop comprehensive documentation for investor due diligence'
      ]
    },
    low: {
      title: 'Early Stage Security Program',
      summary: 'Your security program requires significant enhancement to meet institutional investor expectations and protect against threats targeting alternative investment firms.',
      findings: [
        'Limited security controls with significant gaps',
        'Minimal monitoring capabilities',
        'Gaps in basic security practices',
        'Reactive security approach'
      ],
      strengths: [
        'Recognition of security importance to business operations',
        'Opportunity to build robust program aligned with industry standards',
        'Ability to implement current best practices without legacy constraints',
        'Potential for rapid security maturation with proper focus'
      ],
      recommendations: [
        'Establish formal security governance structure',
        'Implement fundamental security controls across environment',
        'Deploy comprehensive monitoring capabilities',
        'Develop incident response and business continuity capabilities',
        'Create baseline security policies and procedures',
        'Consider security leadership assistance through virtual CISO services'
      ]
    }
  };

  return (
    <AssessmentBase 
      title="Security Posture Assessment"
      description="Evaluate your firm's cybersecurity controls, governance, and resilience against financial services threats and regulatory requirements to enhance investor confidence and protect critical assets."
      icon={<Shield className="w-12 h-12 text-blue-600" />}
      questions={questions}
      results={results}
      onBackToHub={onBackToHub}
    />
  );
};

export default SecurityPostureAssessment;