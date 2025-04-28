// src/components/services/ServiceComponentRegistry.js
import React from 'react';
import MicrosoftBusinessValueSection from '../MicrosoftBusinessValueSection';
import EnhancedSecurityValueSection from '../EnhancedSecurityValueSection';
import WorkflowAutomationSection from '../WorkflowAutomationSection';
import AiUseCasesSection from '../AiUseCasesSection';
import IntegratedTechnologyStrategy from '../IntegratedTechnologyStrategy';

// Registry of service components that can be mapped to services and tabs
const SERVICE_COMPONENTS = {
  // Security Foundation components
  'security-foundation': {
    overview: [EnhancedSecurityValueSection],
    approach: [IntegratedTechnologyStrategy]
  },
  
  // Microsoft Optimization components
  'microsoft-optimization': {
    overview: [MicrosoftBusinessValueSection],
    solutions: [IntegratedTechnologyStrategy]
  },
  
  // Workflow Automation components
  'workflow-automation': {
    overview: [WorkflowAutomationSection],
    solutions: []
  },
  
  // AI Services components
  'ai-services': {
    overview: [AiUseCasesSection],
    approach: []
  }
};

// Helper function to get components for a service and tab
export const getServiceComponents = (serviceId, tabId) => {
  if (!SERVICE_COMPONENTS[serviceId]) {
    return [];
  }
  
  return SERVICE_COMPONENTS[serviceId][tabId] || [];
};

export default { SERVICE_COMPONENTS, getServiceComponents };