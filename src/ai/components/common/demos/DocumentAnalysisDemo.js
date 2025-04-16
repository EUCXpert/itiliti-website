import React, { useState } from 'react';

const DocumentAnalysisDemo = () => {
  const [documentAnalysis, setDocumentAnalysis] = useState({
    progress: 0,
    status: 'idle',
    insights: []
  });

  // Mock document details
  const documentDetails = {
    name: "Q3_2024_Investor_Report.pdf",
    pages: 42,
    sections: ["Executive Summary", "Financial Results", "Market Analysis", "Risk Factors", "Future Outlook"],
    lastModified: "March 15, 2025"
  };

  // Simulate document analysis
  const simulateDocumentAnalysis = () => {
    setDocumentAnalysis({
      ...documentAnalysis,
      status: 'processing',
      progress: 0,
      insights: []
    });
    
    const interval = setInterval(() => {
      setDocumentAnalysis(prev => {
        if (prev.progress >= 100) {
          clearInterval(interval);
          return {
            ...prev,
            status: 'complete',
            insights: [
              { type: 'risk', text: 'Supply chain disruption risk identified on page 27', confidence: 92 },
              { type: 'financial', text: 'Revenue growth projections inconsistent with market expansion details', confidence: 87 },
              { type: 'regulatory', text: 'Potential compliance issues with new EU regulations', confidence: 79 },
              { type: 'opportunity', text: 'Untapped market segment identified in emerging markets', confidence: 84 },
              { type: 'sentiment', text: 'Negative executive sentiment regarding Q4 outlook', confidence: 89 }
            ]
          };
        } else {
          return {
            ...prev,
            progress: prev.progress + 5
          };
        }
      });
    }, 200);
    
    return () => clearInterval(interval);
  };

  // Render document preview (simplified version)
  const renderDocumentPreview = () => {
    return (
      <div className="bg-gray-700 bg-opacity-50 rounded-lg border border-gray-600 overflow-hidden">
        {/* Document header */}
        <div className="bg-gray-800 p-3 border-b border-gray-600 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-purple-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            <span className="text-white font-medium">{documentDetails.name}</span>
          </div>
          <span className="text-gray-400 text-sm">{documentDetails.pages} pages</span>
        </div>
        
        {/* Document preview content */}
        <div className="p-4">
          <div className="mb-4">
            <h5 className="text-purple-400 text-sm font-medium mb-2">Document Sections</h5>
            <div className="space-y-2">
              {documentDetails.sections.map((section, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-50 rounded p-2 text-gray-300 text-sm flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  {section}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-purple-400 text-sm font-medium mb-2">Document Preview</h5>
            <div className="bg-gray-800 bg-opacity-50 rounded p-3 text-gray-400 text-sm">
              <p className="mb-2">
                <span className="text-purple-300">Executive Summary:</span> This quarterly report outlines our financial performance, market position, and strategic initiatives...
              </p>
              <p className="mb-2">
                <span className="text-purple-300">Financial Results:</span> Revenue increased by 12% year-over-year, with EBITDA margins expanding to 28%...
              </p>
              <p>
                <span className="text-purple-300">Risk Factors:</span> Supply chain constraints, regulatory changes in European markets, and technological disruption remain key risks...
              </p>
              <div className="mt-2 text-center text-gray-500 text-xs">
                [Document preview truncated]
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-right">
            <span className="text-gray-400 text-xs">Last modified: {documentDetails.lastModified}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700">
      <div className="p-4 bg-gradient-to-r from-purple-900 to-indigo-900 border-b border-gray-700 flex items-center">
        <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
          <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <h3 className="text-white font-medium">Intelligent Document Analysis</h3>
      </div>
      
      <div className="p-6">
        {documentAnalysis.status === 'idle' ? (
          <div>
            <div className="mb-6">
              <h4 className="text-white text-xl font-medium mb-4">Document Ready for Analysis</h4>
              <p className="text-gray-400 mb-6">
                The AI will automatically extract insights, identify risks, and uncover opportunities from the investor report.
              </p>
              
              {/* Document preview */}
              {renderDocumentPreview()}
              
              <div className="mt-6 text-center">
                <button
                  onClick={simulateDocumentAnalysis}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-900/30 flex items-center mx-auto"
                >
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  Analyze Document
                </button>
              </div>
            </div>
          </div>
        ) : documentAnalysis.status === 'processing' ? (
          <div className="py-10">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 relative mb-4">
                <div className="absolute w-16 h-16 border-4 border-purple-500 opacity-20 rounded-full animate-ping"></div>
                <div className="w-16 h-16 border-4 border-l-purple-500 border-r-purple-500 border-b-transparent border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h4 className="text-white text-xl font-medium mb-2">Analyzing {documentDetails.name}</h4>
              <p className="text-blue-300">Extracting insights with AI...</p>
            </div>
            
            <div className="max-w-lg mx-auto">
              <div className="flex justify-between text-gray-400 text-xs mb-2">
                <span>Processing document</span>
                <span>{documentAnalysis.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-500 transition-all duration-300 ease-out"
                  style={{ width: `${documentAnalysis.progress}%` }}
                ></div>
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="bg-gray-700 bg-opacity-50 rounded p-3 border border-gray-600 flex items-center animate-pulse">
                  <div className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                    <svg className="h-3 w-3 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-300">Analyzing document structure...</span>
                </div>
                {documentAnalysis.progress > 30 && (
                  <div className="bg-gray-700 bg-opacity-50 rounded p-3 border border-gray-600 flex items-center animate-pulse">
                    <div className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                    <span className="text-gray-300">Identifying risk factors...</span>
                  </div>
                )}
                {documentAnalysis.progress > 60 && (
                  <div className="bg-gray-700 bg-opacity-50 rounded p-3 border border-gray-600 flex items-center animate-pulse">
                    <div className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                      </svg>
                    </div>
                    <span className="text-gray-300">Extracting key financial metrics...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="py-6">
            <div className="flex items-center mb-6">
              <div className="bg-green-500 bg-opacity-20 p-3 rounded-full mr-4">
                <svg className="h-8 w-8 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="text-white text-xl font-medium">Analysis Complete</h4>
                <p className="text-gray-400">5 key insights extracted from {documentDetails.name} in 8.3 seconds</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <h5 className="text-white font-medium flex items-center">
                <svg className="h-5 w-5 text-purple-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                Key Findings
              </h5>
              
              <div className="grid md:grid-cols-2 gap-4">
                {documentAnalysis.insights.map((insight, index) => {
                  const typeColors = {
                    risk: { bg: 'bg-red-900', border: 'border-red-700', text: 'text-red-400' },
                    financial: { bg: 'bg-blue-900', border: 'border-blue-700', text: 'text-blue-400' },
                    regulatory: { bg: 'bg-amber-900', border: 'border-amber-700', text: 'text-amber-400' },
                    opportunity: { bg: 'bg-green-900', border: 'border-green-700', text: 'text-green-400' },
                    sentiment: { bg: 'bg-purple-900', border: 'border-purple-700', text: 'text-purple-400' }
                  };
                  
                  const colorSet = typeColors[insight.type] || typeColors.risk;
                  
                  return (
                    <div 
                      key={index} 
                      className={`${colorSet.bg} bg-opacity-20 rounded-lg p-4 border ${colorSet.border} animate-fadeIn`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-start">
                        <div className={`rounded-full p-1 ${colorSet.bg} bg-opacity-30 mr-3 flex-shrink-0 mt-1`}>
                          <svg className={`h-3 w-3 ${colorSet.text}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-white text-sm mb-1">{insight.text}</div>
                          <div className="flex justify-between text-xs">
                            <span className={colorSet.text}>{insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}</span>
                            <span className="text-gray-400">Confidence: {insight.confidence}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
              <h5 className="text-white font-medium mb-3 flex items-center">
                <svg className="h-5 w-5 text-purple-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10H3M16 2v16M8 2v16"></path>
                </svg>
                Actions
              </h5>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center px-4 py-2 bg-purple-900 bg-opacity-30 text-purple-300 border border-purple-800 rounded-lg hover:bg-opacity-50 transition-colors">
                  <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Report
                </button>
                <button className="flex items-center justify-center px-4 py-2 bg-purple-900 bg-opacity-30 text-purple-300 border border-purple-800 rounded-lg hover:bg-opacity-50 transition-colors">
                  <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                  Share Analysis
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentAnalysisDemo;