import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedPortfolioVisualization from './EnhancedPortfolioVisualization';

const VisualDataDemo = ({ 
  title = 'AI Feature Demo',
  demoType = 'sentiment', // sentiment, document, portfolio, market
  interactive = true
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeDemo, setActiveDemo] = useState(demoType);
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState(null);
  const canvasRef = useRef(null);
  
  // Demo configurations
  const demoConfigs = {
    sentiment: {
      title: 'Sentiment Analysis',
      placeholder: 'Enter text from an earnings call or financial news...',
      presets: [
        'We are pleased to report strong quarterly earnings, exceeding analyst expectations by 15%. Our new product line has gained significant market traction.',
        'Despite challenging market conditions, we managed to minimize losses and maintain adequate liquidity. We expect recovery in the next quarter.'
      ],
      resultRenderer: (result) => renderSentimentResults(result)
    },
    document: {
      title: 'Document Analysis',
      placeholder: 'Upload a financial document or enter text from a report...',
      presets: [
        'RISK FACTORS: The company faces potential disruption from emerging technologies. Regulatory changes in European markets could impact revenue by 5-8%. Supply chain constraints may continue through Q3.',
        'FINANCIAL HIGHLIGHTS: Revenue increased by 12% year-over-year. EBITDA margin improved to 28%. Cash reserves increased to $342M, providing stability against identified market risks.'
      ],
      resultRenderer: (result) => renderDocumentResults(result)
    },
    portfolio: {
      title: 'Portfolio Risk Analysis',
      placeholder: 'Enter portfolio details or select a sample portfolio...',
      presets: [
        'Technology: 35%, Healthcare: 20%, Financials: 15%, Consumer Discretionary: 10%, Energy: 10%, Materials: 5%, Cash: 5%',
        'US Equities: 45%, International Developed: 25%, Emerging Markets: 10%, Corporate Bonds: 10%, Government Bonds: 5%, Alternatives: 5%'
      ],
      resultRenderer: (result) => renderPortfolioResults(result)
    },
    market: {
      title: 'Market Trend Prediction',
      placeholder: 'Enter market sector or specific assets to analyze...',
      presets: [
        'Semiconductor industry, next 3 months',
        'Renewable energy sector, ESG impact'
      ],
      resultRenderer: (result) => renderMarketResults(result)
    }
  };
  
  // Handle tab change
  const handleTabChange = (demoType) => {
    setActiveDemo(demoType);
    setResults(null);
    setInputText('');
  };
  
  // Handle preset selection
  const handlePresetClick = (preset) => {
    setInputText(preset);
  };
  
  // Handle analysis submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Generate mock results based on demo type
      const mockResults = generateMockResults(activeDemo, inputText);
      setResults(mockResults);
      setIsLoading(false);
      
      // If canvas visualizations are needed
      if (activeDemo === 'market') {
        setTimeout(() => {
          drawMarketCanvas(mockResults);
        }, 100);
      }
    }, 1500);
  };
  
  // Generate mock results based on demo type and input
  const generateMockResults = (type, input) => {
    switch (type) {
      case 'sentiment':
        const hasPositive = input.toLowerCase().includes('strong') || 
                           input.toLowerCase().includes('exceed') || 
                           input.toLowerCase().includes('gain') ||
                           input.toLowerCase().includes('increase');
                           
        const hasNegative = input.toLowerCase().includes('loss') || 
                           input.toLowerCase().includes('challenge') || 
                           input.toLowerCase().includes('risk') ||
                           input.toLowerCase().includes('despite');
        
        const sentimentScore = hasPositive 
          ? (hasNegative ? 65 : 85) 
          : (hasNegative ? 35 : 55);
            
        return {
          overallSentiment: sentimentScore,
          confidence: Math.floor(Math.random() * 20) + 75,
          aspects: [
            { name: 'Financial Performance', score: sentimentScore + Math.floor(Math.random() * 10) - 5 },
            { name: 'Market Position', score: sentimentScore + Math.floor(Math.random() * 10) - 5 },
            { name: 'Future Outlook', score: sentimentScore + Math.floor(Math.random() * 10) - 5 },
            { name: 'Leadership', score: sentimentScore + Math.floor(Math.random() * 10) - 5 }
          ],
          keywords: {
            positive: hasPositive 
              ? ['growth', 'strong', 'exceed', 'gain', 'innovation'] 
              : ['stable', 'maintain', 'adequate', 'recovery'],
            negative: hasNegative 
              ? ['challenge', 'loss', 'risk', 'disruption', 'constraint'] 
              : ['uncertainty', 'competitive', 'pressure']
          }
        };
        
      case 'document':
        const hasRisk = input.toLowerCase().includes('risk') || 
                        input.toLowerCase().includes('disruption') || 
                        input.toLowerCase().includes('constraints');
                        
        const hasFinancial = input.toLowerCase().includes('revenue') || 
                            input.toLowerCase().includes('margin') || 
                            input.toLowerCase().includes('ebitda');
        
        const entities = [];
        if (input.toLowerCase().includes('european')) entities.push({ name: 'European Markets', type: 'Location', relevance: 0.87 });
        if (input.toLowerCase().includes('technology')) entities.push({ name: 'Technology', type: 'Industry', relevance: 0.92 });
        if (input.toLowerCase().includes('supply chain')) entities.push({ name: 'Supply Chain', type: 'Concept', relevance: 0.85 });
        if (input.toLowerCase().includes('regulatory')) entities.push({ name: 'Regulatory', type: 'Concept', relevance: 0.91 });
        if (input.toLowerCase().includes('q3')) entities.push({ name: 'Q3', type: 'Time Period', relevance: 0.82 });
        
        return {
          documentType: hasRisk ? 'Risk Assessment' : (hasFinancial ? 'Financial Report' : 'General Document'),
          confidence: Math.floor(Math.random() * 15) + 80,
          keyFindings: hasRisk 
            ? [
                'Identified potential regulatory risks in European markets',
                'Technology disruption highlighted as primary concern',
                'Supply chain constraints expected to persist'
              ]
            : [
                'Strong financial performance with growth across key metrics',
                'Increased cash reserves improve company stability',
                'Margin improvements indicate operational efficiency'
              ],
          entities: entities.length > 0 ? entities : [
            { name: 'Financial Markets', type: 'Concept', relevance: 0.85 },
            { name: 'Corporate Performance', type: 'Concept', relevance: 0.79 }
          ],
          riskScore: hasRisk ? (Math.floor(Math.random() * 20) + 65) : (Math.floor(Math.random() * 20) + 35)
        };
        
      case 'portfolio':
        // Parse allocation from input (simplified)
        const allocations = [];
        const allocationStrings = input.split(',');
        
        allocationStrings.forEach(alloc => {
          const parts = alloc.trim().split(':');
          if (parts.length === 2) {
            const name = parts[0].trim();
            const percentage = parseInt(parts[1].replace('%', '').trim());
            allocations.push({ name, percentage });
          }
        });
        
        // If parsing failed, generate random allocations
        if (allocations.length < 2) {
          const defaultAllocations = [
            { name: 'Technology', percentage: 45 },
            { name: 'Healthcare', percentage: 25 },
            { name: 'Financials', percentage: 10 },
            { name: 'Consumer', percentage: 10 },
            { name: 'Energy', percentage: 5 },
            { name: 'Other', percentage: 5 }
          ];
          return {
            allocations: defaultAllocations,
            riskMetrics: {
              totalRisk: 13.5,
              sharpeRatio: 1.4,
              maxDrawdown: 18.5,
              correlationToMarket: 0.85
            },
            recommendations: [
              'Consider reducing Technology allocation by 5-8%',
              'Increase exposure to defensive sectors',
              'Add uncorrelated alternatives to reduce volatility'
            ]
          };
        }
        
        // Technology-heavy portfolios get different recommendations
        const isTechHeavy = allocations.some(a => a.name.toLowerCase().includes('tech') && a.percentage > 30);
        
        return {
          allocations,
          riskMetrics: {
            totalRisk: isTechHeavy ? 16.8 : 13.5,
            sharpeRatio: isTechHeavy ? 1.2 : 1.4,
            maxDrawdown: isTechHeavy ? 22.5 : 17.8,
            correlationToMarket: isTechHeavy ? 0.92 : 0.82
          },
          recommendations: isTechHeavy 
            ? [
                'Reduce Technology exposure by 7-10%',
                'Increase diversification with uncorrelated assets',
                'Implement downside protection strategies'
              ]
            : [
                'Current allocation is well diversified',
                'Consider small increase in growth sectors',
                'Review international exposure for opportunities'
              ]
        };
        
      case 'market':
        const isSemiconductor = input.toLowerCase().includes('semiconductor');
        const isRenewable = input.toLowerCase().includes('renewable') || input.toLowerCase().includes('esg');
        const isShortTerm = input.toLowerCase().includes('month') || input.toLowerCase().includes('quarter');
        
        const trendStrength = Math.floor(Math.random() * 30) + 60;
        const confidence = Math.floor(Math.random() * 20) + 75;
        
        const trends = [];
        if (isSemiconductor) {
          trends.push(
            { name: 'AI Chip Demand', direction: 'Increasing', strength: 85, timeframe: '3-6 months' },
            { name: 'Supply Chain Constraints', direction: 'Decreasing', strength: 65, timeframe: '2-4 months' },
            { name: 'Manufacturing Capacity', direction: 'Stable', strength: 60, timeframe: '6-12 months' }
          );
        } else if (isRenewable) {
          trends.push(
            { name: 'ESG Investment Flows', direction: 'Increasing', strength: 78, timeframe: '6-12 months' },
            { name: 'Policy Support', direction: 'Increasing', strength: 72, timeframe: '12-18 months' },
            { name: 'Technology Cost Curves', direction: 'Decreasing', strength: 82, timeframe: '3-5 years' }
          );
        } else {
          trends.push(
            { name: 'Market Sentiment', direction: 'Cautiously Positive', strength: 65, timeframe: '1-3 months' },
            { name: 'Volatility', direction: 'Increasing', strength: 70, timeframe: '2-4 months' },
            { name: 'Correlation Patterns', direction: 'Shifting', strength: 75, timeframe: '3-6 months' }
          );
        }
        
        return {
          trendStrength,
          confidence,
          trends,
          catalysts: isSemiconductor
            ? [
                'Artificial intelligence demand acceleration',
                'New product cycles from major manufacturers',
                'Geopolitical factors affecting supply chains'
              ]
            : isRenewable
              ? [
                  'Increasing institutional ESG mandate adoption',
                  'Regulatory incentives for clean energy',
                  'Cost parity achievements in key technologies'
                ]
              : [
                  'Monetary policy developments',
                  'Corporate earnings trends',
                  'Geopolitical developments'
                ],
          timeHorizon: isShortTerm ? 'Short-term (1-3 months)' : 'Medium-term (3-12 months)'
        };
        
      default:
        return null;
    }
  };
  
  // Draw market trends on canvas
  const drawMarketCanvas = (results) => {
    if (!canvasRef.current || !results) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    
    for (let x = 0; x < canvas.width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    for (let y = 0; y < canvas.height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    
    // Draw trend lines
    const trends = results.trends;
    if (trends.length === 0) return;
    
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];
    const height = canvas.height;
    const width = canvas.width;
    
    trends.forEach((trend, i) => {
      const y = 50 + i * 40;
      ctx.strokeStyle = colors[i % colors.length];
      ctx.lineWidth = 3;
      
      ctx.beginPath();
      ctx.moveTo(0, y);
      
      if (trend.direction === 'Increasing') {
        // Upward trend with noise
        for (let x = 0; x < width; x += 10) {
          const noise = Math.random() * 10 - 5;
          const progress = x / width;
          const curveHeight = 50 * trend.strength / 100;
          ctx.lineTo(x, y - (progress * curveHeight) + noise);
        }
      } else if (trend.direction === 'Accelerating') {
        // Exponential trend
        for (let x = 0; x < width; x += 10) {
          const noise = Math.random() * 8 - 4;
          const progress = (x / width) * (x / width);
          const curveHeight = 80 * trend.strength / 100;
          ctx.lineTo(x, y - (progress * curveHeight) + noise);
        }
      } else {
        // Stabilizing/flat trend with noise
        for (let x = 0; x < width; x += 10) {
          const noise = Math.random() * 15 - 7.5;
          ctx.lineTo(x, y + noise);
        }
      }
      
      ctx.stroke();
      
      // Add label
      ctx.fillStyle = colors[i % colors.length];
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(trend.name, 10, y - 10);
    });
    
    // Add signal indicators
    results.catalysts.forEach((signal, i) => {
      const x = 150 + i * 100;
      const y = height - 50;
      
      // Draw alert symbol
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
      ctx.fill();
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Add exclamation mark
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 15px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('!', x, y);
    });
  };
  
  // Render sentiment analysis results
  const renderSentimentResults = (results) => {
    if (!results) return null;
    
    // Determine sentiment category
    const getSentimentCategory = (score) => {
      if (score >= 75) return { label: 'Very Positive', color: 'bg-green-500' };
      if (score >= 60) return { label: 'Positive', color: 'bg-green-400' };
      if (score >= 45) return { label: 'Neutral', color: 'bg-blue-400' };
      if (score >= 30) return { label: 'Negative', color: 'bg-red-400' };
      return { label: 'Very Negative', color: 'bg-red-500' };
    };
    
    const sentimentCategory = getSentimentCategory(results.overallSentiment);
    
    return (
      <div className="space-y-6">
        {/* Overall Sentiment */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white font-medium">Overall Sentiment</h4>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${sentimentCategory.color} text-white`}>
              {sentimentCategory.label}
            </div>
          </div>
          
          <div className="relative h-6 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 transition-all duration-1000 ease-out"
              style={{ 
                width: `${results.overallSentiment}%`,
                background: 'linear-gradient(90deg, #ef4444 0%, #f59e0b 25%, #3b82f6 50%, #22c55e 75%, #16a34a 100%)'
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs font-medium">Score: {results.overallSentiment}</span>
            </div>
          </div>
          
          <div className="mt-2 text-gray-400 text-xs">
            Confidence: {results.confidence}%
          </div>
        </div>
        
        {/* Aspect Analysis */}
        <div>
          <h4 className="text-white font-medium mb-3">Aspect Breakdown</h4>
          <div className="space-y-3">
            {results.aspects.map((aspect, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded p-3 border border-gray-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-blue-200">{aspect.name}</span>
                  <span className="text-white font-medium">{aspect.score}</span>
                </div>
                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${aspect.score}%`,
                      background: aspect.score >= 60 
                        ? 'linear-gradient(90deg, #3b82f6 0%, #22c55e 100%)' 
                        : 'linear-gradient(90deg, #ef4444 0%, #f59e0b 100%)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Keywords */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 bg-opacity-50 rounded p-3 border border-gray-700">
            <h5 className="text-green-400 text-sm font-medium mb-2">Positive Keywords</h5>
            <div className="flex flex-wrap gap-2">
              {results.keywords.positive.map((keyword, index) => (
                <span key={index} className="px-2 py-1 rounded-full text-xs bg-green-900 bg-opacity-50 text-green-300 border border-green-800">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 rounded p-3 border border-gray-700">
            <h5 className="text-red-400 text-sm font-medium mb-2">Negative Keywords</h5>
            <div className="flex flex-wrap gap-2">
              {results.keywords.negative.map((keyword, index) => (
                <span key={index} className="px-2 py-1 rounded-full text-xs bg-red-900 bg-opacity-50 text-red-300 border border-red-800">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Render document analysis results
  const renderDocumentResults = (results) => {
    if (!results) return null;
    
    return (
      <div className="space-y-6">
        {/* Document Type & Confidence */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-white font-medium">Document Classification</h4>
            <div className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
              {results.documentType}
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            Confidence: {results.confidence}%
          </div>
        </div>
        
        {/* Key Findings */}
        <div>
          <h4 className="text-white font-medium mb-3">Key Findings</h4>
          <div className="space-y-2">
            {results.keyFindings.map((finding, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded p-3 border border-gray-700 flex items-start">
                <div className="bg-blue-500 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-blue-200 text-sm">{finding}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Entities */}
        <div>
          <h4 className="text-white font-medium mb-3">Identified Entities</h4>
          <div className="flex flex-wrap gap-2">
            {results.entities.map((entity, index) => (
              <div key={index} className="px-3 py-2 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-700">
                <div className="text-white text-sm font-medium">{entity.name}</div>
                <div className="flex justify-between mt-1">
                  <span className="text-gray-400 text-xs">{entity.type}</span>
                  <span className="text-blue-400 text-xs">Relevance: {Math.round(entity.relevance * 100)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Risk Score */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
          <h4 className="text-white font-medium mb-2">Risk Assessment</h4>
          <div className="flex items-center">
            <div className="relative flex-grow h-6 bg-gray-700 rounded-full overflow-hidden mr-4">
              <div 
                className="absolute inset-y-0 left-0 transition-all duration-1000 ease-out"
                style={{ 
                  width: `${results.riskScore}%`,
                  background: 'linear-gradient(90deg, #22c55e 0%, #f59e0b 50%, #ef4444 100%)'
                }}
              ></div>
            </div>
            <div className="text-white font-medium">{results.riskScore}%</div>
          </div>
          
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>Low Risk</span>
            <span>Moderate Risk</span>
            <span>High Risk</span>
          </div>
        </div>
      </div>
    );
  };
  
  // Render portfolio analysis results
  const renderPortfolioResults = (results) => {
    if (!results) return null;
    
    // Convert allocations to portfolio data format
    const portfolioData = results.allocations.map((alloc, index) => {
      const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#ef4444', '#f59e0b', '#10b981', '#6366f1', '#a855f7'];
      return {
        name: alloc.name,
        value: alloc.percentage,
        color: colors[index % colors.length]
      };
    });
    
    return (
      <div className="space-y-6">
        {/* Portfolio visualization */}
        <EnhancedPortfolioVisualization 
          portfolioData={portfolioData}
          riskMetrics={results.riskMetrics}
        />
        
        {/* Recommendations */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
          <h4 className="text-white font-medium mb-3">AI Recommendations</h4>
          <div className="space-y-2">
            {results.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-green-500 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-gray-300 text-sm">{rec}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // Render market trend analysis results
  const renderMarketResults = (results) => {
    if (!results) return null;
    
    return (
      <div className="space-y-6">
        {/* Trend Strength */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
          <div className="flex justify-between mb-2">
            <h4 className="text-white font-medium">Trend Strength</h4>
            <div className="text-gray-400 text-sm">Confidence: {results.confidence}%</div>
          </div>
          
          <div className="relative h-6 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 transition-all duration-1000 ease-out"
              style={{ 
                width: `${results.trendStrength}%`,
                background: 'linear-gradient(90deg, #3b82f6 0%, #22c55e 100%)'
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs font-medium">{results.trendStrength}%</span>
            </div>
          </div>
          
          <div className="mt-2 text-gray-400 text-sm">
            Time Horizon: {results.timeHorizon}
          </div>
        </div>
        
        {/* Trend Visualization */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
          <h4 className="text-white font-medium mb-3">Trend Visualization</h4>
          <canvas 
            ref={canvasRef} 
            width="400" 
            height="250" 
            className="w-full h-auto"
          />
        </div>
        
        {/* Trends Detail */}
        <div>
          <h4 className="text-white font-medium mb-3">Identified Trends</h4>
          <div className="space-y-3">
            {results.trends.map((trend, index) => {
              const isPositive = trend.direction.toLowerCase().includes('increas');
              const isNegative = trend.direction.toLowerCase().includes('decreas');
              const color = isPositive ? 'green' : (isNegative ? 'red' : 'yellow');
              
              return (
                <div key={index} className="bg-gray-800 bg-opacity-50 rounded p-3 border border-gray-700">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white">{trend.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${color}-900 bg-opacity-50 text-${color}-300 border border-${color}-800`}>
                      {trend.direction}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Timeframe: {trend.timeframe}</span>
                    <span className="text-gray-400">Strength: {trend.strength}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Catalysts */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
          <h4 className="text-white font-medium mb-3">Key Catalysts</h4>
          <div className="space-y-2">
            {results.catalysts.map((catalyst, index) => (
              <div key={index} className="flex items-start">
                <div className="text-blue-500 mr-2 mt-0.5">•</div>
                <div className="text-gray-300 text-sm">{catalyst}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700 overflow-hidden">
      {/* Demo Tabs */}
      {interactive && (
        <div className="flex bg-gray-900 border-b border-gray-700">
          {Object.entries(demoConfigs).map(([key, config]) => (
            <button
              key={key}
              className={`px-4 py-3 text-sm font-medium ${
                activeDemo === key
                  ? 'text-blue-400 border-b-2 border-blue-500'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => handleTabChange(key)}
            >
              {config.title}
            </button>
          ))}
        </div>
      )}
      
      {/* Demo Content */}
      <div className="p-6">
        <h3 className="text-white text-xl font-bold mb-4">
          {interactive ? demoConfigs[activeDemo].title : title}
        </h3>
        
        {/* Input Form */}
        {interactive && (
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={demoConfigs[activeDemo].placeholder}
                className="w-full h-24 bg-gray-700 text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            
            {/* Quick Presets */}
            {demoConfigs[activeDemo].presets && (
              <div>
                <div className="text-blue-300 text-sm mb-2">Quick examples:</div>
                <div className="flex flex-wrap gap-2">
                  {demoConfigs[activeDemo].presets.map((preset, index) => (
                    <button
                      key={index}
                      type="button"
                      className="text-xs px-3 py-1 bg-blue-900 bg-opacity-30 text-blue-300 border border-blue-800 rounded-full hover:bg-opacity-50 transition-colors"
                      onClick={() => handlePresetClick(preset)}
                    >
                      {preset.length > 30 ? preset.substring(0, 30) + '...' : preset}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className={`px-4 py-2 rounded-lg font-medium flex items-center ${
                  isLoading || !inputText.trim()
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  <>
                    Run Analysis
                    <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
        
        {/* Results */}
        <AnimatePresence mode="wait">
          {results && (
            <motion.div
              key={activeDemo + '-results'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-white text-lg font-medium mb-4">Analysis Results</h4>
                {demoConfigs[activeDemo].resultRenderer(results)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VisualDataDemo;