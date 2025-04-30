// src/components/segments/SegmentsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import HoverCard from '../HoverCard';
import ScheduleButton from '../ScheduleButton'; 
import { SEGMENT_IDS, getSegmentById } from '../../data/segments/segmentData';

import { 
  Building, 
  Briefcase, 
  ArrowRight,
  Users,
  Shield,
  DollarSign,
  Target,
  Clock,
  FileText,
  Rocket,
  Database,
  Scale
} from 'lucide-react';

const SegmentsPage = () => {
  // Get all segments from the data store
  const segments = SEGMENT_IDS.map(id => {
    const segmentData = getSegmentById(id);
    
    // Map segment ID to icon
    const getIconForSegment = (segmentId) => {
      switch (segmentId) {
        case 'private-equity':
          return <Building className="w-12 h-12 text-blue-600" />;
        case 'venture-capital':
          return <Rocket className="w-12 h-12 text-blue-600" />;
        case 'family-offices':
          return <Briefcase className="w-12 h-12 text-blue-600" />;
        case 'real-estate':
          return <Database className="w-12 h-12 text-blue-600" />;
        default:
          return <Building className="w-12 h-12 text-blue-600" />;
      }
    };
    
    // Get challenge highlights
    const challengeHighlights = segmentData.challenges
      .slice(0, 4)
      .map(challenge => challenge.title);
    
    // Get service highlights
    const serviceHighlights = segmentData.recommendedServices
      .slice(0, 4)
      .map(service => service.title);
    
    return {
      id: segmentData.id,
      title: segmentData.title,
      description: segmentData.description,
      icon: getIconForSegment(segmentData.id),
      challenges: challengeHighlights,
      services: serviceHighlights
    };
  });

  return (
    <div className="font-sans min-h-screen bg-gray-50">
    
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-blue-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Alternative Investment Segments</h1>
            <p className="text-xl mb-8">
              Specialized technology solutions for the unique challenges of different alternative investment strategies.
            </p>
            <ScheduleButton 
              text="Schedule a Segment-Specific Consultation" 
              variant="primary" 
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </div>
      
      {/* Segments Display */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Specialized for Your Investment Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique technology challenges facing each type of alternative investment firm.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {segments.map(segment => (
              <HoverCard 
                key={segment.id} 
                href={`/segments/${segment.id}`} 
                hoverEffect="both"
                className="h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-3">
                      {segment.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{segment.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{segment.description}</p>
                  
                  <div className="mt-auto">
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h4 className="font-medium text-gray-800 mb-3">Key Challenges:</h4>
                      <ul className="space-y-2">
                        {segment.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start">
                            <Target className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-gray-600 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-3">Recommended Services:</h4>
                      <ul className="space-y-2">
                        {segment.services.map((service, idx) => (
                          <li key={idx} className="flex items-start">
                            <Shield className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-gray-600 text-sm">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 text-blue-600 text-sm font-medium flex items-center justify-center">
                      Explore Solutions
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
      
      {/* Why Segment-Specific Approach Matters */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why a Segment-Specific Approach Matters</h2>
              <p className="text-xl text-gray-600">
                Different investment strategies create unique technology requirements that demand specialized solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Generic Solutions Fall Short</h3>
                  <p className="mb-6">
                    One-size-fits-all technology approaches fail to address the specific workflows, regulatory requirements, and operational needs of different investment strategies.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                      <span>Trading firms need real-time support during market hours</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                      <span>PE/VC firms need deal-centric data organization</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                      <span>Family offices need multi-generational planning</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Segment-Specific Advantage</h3>
                  <p className="text-gray-700 mb-6">
                    We've built specialized experience, methodologies, and solutions for each alternative investment segment.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <DollarSign className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Strategy-aligned technology investments</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Team members with direct industry experience</span>
                    </li>
                    <li className="flex items-start">
                      <FileText className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Segment-specific implementation playbooks</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Faster implementation with pre-built frameworks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-blue-50 border-t border-b border-blue-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to explore segment-specific solutions?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Schedule a consultation with our team members who specialize in your investment strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ScheduleButton 
              text="Schedule a Consultation" 
              variant="primary" 
              className="text-lg px-8 py-4"
            />
            <button 
              className="bg-white text-blue-700 border border-blue-300 shadow-sm px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Download Segment Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegmentsPage;