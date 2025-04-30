// src/components/segments/layout/SegmentLayout.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';

// Import segment data
import { SEGMENT_IDS, getSegmentById } from '../../../data/segments/segmentData';
import { SEGMENT_BACKGROUND_IMAGES } from '../../../components/segments/segmentAssets';

// Import segment components
import SegmentHero from './SegmentHero';
import SegmentTabs from './SegmentTabs';
import SegmentOverview from './SegmentOverview';
import SegmentSolutions from './SegmentSolutions';
import SegmentCaseStudy from './SegmentCaseStudy';

// Define the base tabs for all segment pages
const BASE_SEGMENT_TABS = [
  {
    id: "overview",
    label: "Overview",
    required: true
  },
  {
    id: "solutions",
    label: "Recommended Solutions",
    required: true
  },
  {
    id: "casestudy",
    label: "Success Story",
    required: false
  }
];

const SegmentLayout = () => {
  // Get segment ID from route params
  const { segmentId } = useParams();
  const navigate = useNavigate();
  
  // Get segment data based on ID
  const segmentData = getSegmentById(segmentId);
  
  // Get background image for the current segment
  const backgroundImage = SEGMENT_BACKGROUND_IMAGES?.[segmentId] || '/images/hero-segment.png';
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('overview');
  
  // Handle non-existent segment
  useEffect(() => {
    if (!segmentData && SEGMENT_IDS.length > 0) {
      navigate(`/segments/${SEGMENT_IDS[0]}`);
    }
  }, [segmentId, navigate, segmentData]);

  // If segment data is not loaded yet, show loading
  if (!segmentData) {
    return <div className="p-12 text-center">Loading segment data...</div>;
  }
  
  // Determine which tabs to show (required + optional if data exists)
  const availableTabs = BASE_SEGMENT_TABS.filter(tab => {
    if (tab.required) return true;
    
    // Only show case study tab if case study data exists
    if (tab.id === 'casestudy') return !!segmentData.caseStudy;
    
    return false;
  });

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <SegmentHero 
        title={segmentData.title}
        subtitle={segmentData.subtitle}
        description={segmentData.description}
        backgroundImage={backgroundImage} // Pass the background image
      />
      
      {/* Tab Navigation */}
      <SegmentTabs 
        tabs={availableTabs} 
        activeTab={activeTab} 
        onChange={setActiveTab} 
      />
      
      {/* Content Sections */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <SegmentOverview 
              title={segmentData.title}
              challenges={segmentData.challenges}
              keyFeatures={segmentData.keyFeatures}
              metrics={segmentData.metrics}
            />
          )}
          
          {/* Solutions Tab */}
          {activeTab === 'solutions' && (
            <SegmentSolutions 
              title={segmentData.title}
              recommendedServices={segmentData.recommendedServices}
            />
          )}
          
          {/* Case Study Tab */}
          {activeTab === 'casestudy' && segmentData.caseStudy && (
            <SegmentCaseStudy 
              title={segmentData.title}
              caseStudy={segmentData.caseStudy}
            />
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

export default SegmentLayout;