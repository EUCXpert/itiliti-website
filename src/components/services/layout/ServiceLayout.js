// src/components/services/layout/ServiceLayout.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';

// Import service data
import { getServiceById, SERVICE_IDS } from '../../../data/services/serviceData';
import { BASE_SERVICE_TABS } from '../../../data/services/serviceCategories';

// Import service components
import ServiceHero from './ServiceHero';
import ServiceTabs from './ServiceTabs';
import ServiceOverview from './ServiceOverview';
import ServiceSolutions from './ServiceSolutions';
import ServiceApproach from './ServiceApproach';
import ServiceCaseStudy from './ServiceCaseStudy';
import ServiceFAQ from './ServiceFAQ';
import ServiceNavigation from '../../services/common/ServiceNavigation';

// Import additional components
import MicrosoftBusinessValueSection from '../../MicrosoftBusinessValueSection';
import EnhancedSecurityValueSection from '../../EnhancedSecurityValueSection';
import WorkflowAutomationSection from '../../WorkflowAutomationSection';
import AiUseCasesSection from '../../AiUseCasesSection';
import IntegratedTechnologyStrategy from '../../IntegratedTechnologyStrategy';

const ServiceLayout = ({ serviceData }) => {
  // Get service ID from route params
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('overview');
  
  // Handle non-existent service
  useEffect(() => {
    if (!serviceData && SERVICE_IDS.length > 0) {
      navigate(`/services/${SERVICE_IDS[0]}`);
    }
  }, [serviceId, navigate, serviceData]);

  // If service data is not loaded yet, show loading
  if (!serviceData) {
    return <div className="p-12 text-center">Loading...</div>;
  }
  
  // Determine which tabs to show (required + optional if data exists)
  const availableTabs = BASE_SERVICE_TABS.filter(tab => {
    if (tab.required) return true;
    
    // Only show case study tab if case study data exists
    if (tab.id === 'casestudy') return !!serviceData.caseStudy;
    
    // Only show FAQs tab if FAQs data exists
    if (tab.id === 'faqs') return serviceData.faqs && serviceData.faqs.length > 0;
    
    return false;
  });

  // Manually map additional components based on service ID and tab
  const renderAdditionalComponents = () => {
    // Security Foundation components
    if (serviceId === 'security-foundation') {
      if (activeTab === 'overview') {
        return <EnhancedSecurityValueSection />;
      }
      if (activeTab === 'approach') {
        return <IntegratedTechnologyStrategy />;
      }
    }
    
    // Microsoft Optimization components
    if (serviceId === 'microsoft-optimization') {
      if (activeTab === 'overview') {
        return <MicrosoftBusinessValueSection />;
      }
      if (activeTab === 'solutions') {
        return <IntegratedTechnologyStrategy />;
      }
    }
    
    // Workflow Automation components
    if (serviceId === 'workflow-automation') {
      if (activeTab === 'overview') {
        return <WorkflowAutomationSection />;
      }
    }
    
    // AI Services components
    if (serviceId === 'ai-services') {
      if (activeTab === 'overview') {
        return <AiUseCasesSection />;
      }
    }
    
    return null;
  };
  
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <ServiceNavigation activeService={serviceData.title} />
      
      {/* Hero Section */}
      <ServiceHero 
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        description={serviceData.description}
        category={serviceData.category}
      />
      
      {/* Tab Navigation */}
      <ServiceTabs 
        tabs={availableTabs} 
        activeTab={activeTab} 
        onChange={setActiveTab} 
      />
      
      {/* Content Sections */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              <ServiceOverview 
                title={serviceData.title}
                challenges={serviceData.challenges}
                keyFeatures={serviceData.keyFeatures}
                metrics={serviceData.metrics}
              />
              {renderAdditionalComponents()}
            </>
          )}
          
          {/* Solutions Tab */}
          {activeTab === 'solutions' && (
            <>
              <ServiceSolutions 
                title={serviceData.title}
                serviceOfferings={serviceData.serviceOfferings}
                category={serviceData.category}
              />
              {renderAdditionalComponents()}
            </>
          )}
          
          {/* Approach Tab */}
          {activeTab === 'approach' && (
            <>
              <ServiceApproach 
                title={serviceData.title}
              />
              {renderAdditionalComponents()}
            </>
          )}
          
          {/* Case Study Tab */}
          {activeTab === 'casestudy' && serviceData.caseStudy && (
            <>
              <ServiceCaseStudy 
                title={serviceData.title}
                caseStudy={serviceData.caseStudy}
              />
              {renderAdditionalComponents()}
            </>
          )}
          
          {/* FAQs Tab */}
          {activeTab === 'faqs' && serviceData.faqs && serviceData.faqs.length > 0 && (
            <>
              <ServiceFAQ 
                title={serviceData.title}
                faqs={serviceData.faqs}
              />
              {renderAdditionalComponents()}
            </>
          )}
        </div>
      </div>
      
      {/* Sticky CTA Footer for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg md:hidden">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center">
          <Calendar className="w-5 h-5 mr-2" />
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default ServiceLayout;