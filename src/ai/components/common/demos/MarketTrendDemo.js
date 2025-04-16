import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Scatter, ReferenceLine, BarChart, Bar
} from 'recharts';

const MarketTrendDemo = () => {
  const [marketInsights, setMarketInsights] = useState({
    trends: [],
    signals: [],
    status: 'idle'
  });
  
  // Simulate market analysis
  const simulateMarketAnalysis = () => {
    setMarketInsights({
      ...marketInsights,
      status: 'processing',
      trends: [],
      signals: []
    });
    
    setTimeout(() => {
      setMarketInsights({
        status: 'complete',
        trends: [
          { name: 'Healthcare AI', direction: 'Increasing', strength: 87, timeframe: '3-6 months' },
          { name: 'Semiconductor Supply', direction: 'Stabilizing', strength: 74, timeframe: '1-3 months' },
          { name: 'Financial Services Disruption', direction: 'Accelerating', strength: 83, timeframe: '6-12 months' },
          { name: 'Renewable Energy Adoption', direction: 'Increasing', strength: 91, timeframe: '12-24 months' }
        ],
        signals: [
          { type: 'divergence', description: 'Unusual divergence between growth and value metrics', impact: 'High', confidence: 82 },
          { type: 'correlation', description: 'Decreasing correlation between traditional asset classes', impact: 'Medium', confidence: 78 },
          { type: 'anomaly', description: 'Statistical anomaly in trading patterns for technology sector', impact: 'High', confidence: 88 }
        ]
      });
    }, 3000);
  };

  // Generate chart data for trends
  const generateTrendData = () => {
    if (!marketInsights.trends.length) return [];
    
    // Create 12 data points for each trend (representing 12 months or time periods)
    const trendData = [];
    
    for (let i = 0; i < 12; i++) {
      const dataPoint = { month: `M${i+1}` };
      
      marketInsights.trends.forEach(trend => {
        // Generate data pattern based on trend direction
        if (trend.direction === 'Increasing') {
          // Upward trend with noise
          const noise = Math.random() * 5 - 2.5;
          const progress = i / 11; // 0 to 1
          const baseValue = 50 + (progress * 50 * trend.strength / 100);
          dataPoint[trend.name] = Math.round(baseValue + noise);
        } 
        else if (trend.direction === 'Accelerating') {
          // Exponential trend
          const noise = Math.random() * 4 - 2;
          const progress = (i / 11) * (i / 11); // Squared for exponential
          const baseValue = 50 + (progress * 60 * trend.strength / 100);
          dataPoint[trend.name] = Math.round(baseValue + noise);
        } 
        else if (trend.direction === 'Decreasing') {
          // Downward trend with noise
          const noise = Math.random() * 5 - 2.5;
          const progress = i / 11; // 0 to 1
          const baseValue = 100 - (progress * 50 * trend.strength / 100);
          dataPoint[trend.name] = Math.round(baseValue + noise);
        }
        else {
          // Stabilizing/flat trend with noise
          const noise = Math.random() * 10 - 5;
          dataPoint[trend.name] = Math.round(75 + noise);
        }
      });
      
      trendData.push(dataPoint);
    }
    
    return trendData;
  };

  // Generate data for market signals
  const generateSignalData = () => {
    if (!marketInsights.signals.length) return [];
    
    return marketInsights.signals.map(signal => {
      // Place signals at different points along the timeline
      const month = `M${Math.floor(Math.random() * 11) + 1}`;
      const value = 50 + Math.floor(Math.random() * 50); // Random position
      
      return {
        month,
        value,
        type: signal.type,
        impact: signal.impact,
        description: signal.description,
        confidence: signal.confidence
      };
    });
  };

  // Custom tooltip for trend lines
  const TrendTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-2 border border-gray-700 rounded-md shadow-lg">
          <p className="text-white font-medium text-sm">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // We're handling tooltips directly inside the chart components

  // Generate colors for trends
  const getTrendColor = (index) => {
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899', '#6366f1'];
    return colors[index % colors.length];
  };
  
  // Generate trend strength data for bar chart
  const getTrendStrengthData = () => {
    return marketInsights.trends.map(trend => ({
      name: trend.name,
      strength: trend.strength,
      timeframe: trend.timeframe,
      direction: trend.direction
    }));
  };
  
  // Trend data for charts
  const trendData = generateTrendData();
  const signalData = generateSignalData();
  const trendStrengthData = getTrendStrengthData();

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700">
      <div className="p-4 bg-gradient-to-r from-emerald-900 to-blue-900 border-b border-gray-700 flex items-center">
        <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
          <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <h3 className="text-white font-medium">Market Trend Analysis</h3>
      </div>
      
      <div className="p-6">
        {marketInsights.status === 'idle' ? (
          <div className="text-center py-6">
            <div className="mb-6">
              <svg className="mx-auto h-16 w-16 text-emerald-500 opacity-75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h4 className="text-white text-xl font-medium mb-2">Market Trend Analysis</h4>
            <p className="text-gray-400 mb-6">Identify emerging trends weeks before they become obvious in the market. Analyze patterns across news, social media, and alternative data sources.</p>
            
            <div className="max-w-md mx-auto mb-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4 border border-gray-600">
                <div className="flex justify-center items-center mb-2">
                  <svg className="h-8 w-8 text-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <h5 className="text-white text-center">Early Detection</h5>
                <p className="text-xs text-gray-400 text-center">2-3 weeks ahead of markets</p>
              </div>
              
              <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4 border border-gray-600">
                <div className="flex justify-center items-center mb-2">
                  <svg className="h-8 w-8 text-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h5 className="text-white text-center">Diverse Sources</h5>
                <p className="text-xs text-gray-400 text-center">10,000+ daily sources</p>
              </div>
            </div>
            
            <button
              onClick={simulateMarketAnalysis}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/30 flex items-center mx-auto"
            >
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              Run Market Analysis
            </button>
          </div>
        ) : marketInsights.status === 'processing' ? (
          <div className="py-10">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 relative mb-4">
                <div className="absolute w-16 h-16 border-4 border-emerald-500 opacity-20 rounded-full animate-ping"></div>
                <div className="w-16 h-16 border-4 border-l-emerald-500 border-r-emerald-500 border-b-transparent border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h4 className="text-white text-xl font-medium mb-2">Analyzing Market Trends</h4>
              <p className="text-emerald-300">Processing data from multiple sources...</p>
            </div>
            
            <div className="max-w-lg mx-auto">
              <div className="mt-6 space-y-2">
                <div className="bg-gray-700 bg-opacity-50 rounded p-3 border border-gray-600 flex items-center animate-pulse">
                  <div className="w-6 h-6 rounded-full bg-emerald-900 flex items-center justify-center mr-3">
                    <svg className="h-3 w-3 text-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">Scanning news and social media...</span>
                </div>
                
                <div className="bg-gray-700 bg-opacity-50 rounded p-3 border border-gray-600 flex items-center animate-pulse">
                  <div className="w-6 h-6 rounded-full bg-emerald-900 flex items-center justify-center mr-3">
                    <svg className="h-3 w-3 text-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <span className="text-gray-300">Analyzing alternative data sources...</span>
                </div>
                
                <div className="bg-gray-700 bg-opacity-50 rounded p-3 border border-gray-600 flex items-center animate-pulse">
                  <div className="w-6 h-6 rounded-full bg-emerald-900 flex items-center justify-center mr-3">
                    <svg className="h-3 w-3 text-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">Identifying emerging patterns...</span>
                </div>
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
                <p className="text-gray-400">4 trends and 3 market signals identified</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h5 className="text-white font-medium mb-3 flex items-center">
                <svg className="h-5 w-5 text-emerald-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                Market Trend Visualization
              </h5>
              
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendData}>
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <Tooltip content={<TrendTooltip />} />
                    <Legend wrapperStyle={{ paddingTop: 10 }} />
                    
                    {marketInsights.trends.map((trend, index) => (
                      <Line 
                        key={trend.name}
                        type="monotone" 
                        dataKey={trend.name} 
                        stroke={getTrendColor(index)} 
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 6 }}
                      />
                    ))}
                    
                    {/* Overlay ScatterChart for signals */}
                    {signalData.map((signal, idx) => (
                      <Scatter
                        key={`signal-${idx}`}
                        name={signal.type}
                        data={[signal]}
                        fill={signal.impact === 'High' ? '#ef4444' : '#f59e0b'}
                        shape={(props) => {
                          const { cx, cy } = props;
                          return (
                            <g>
                              <circle cx={cx} cy={cy} r={8} fill="rgba(0,0,0,0.3)" stroke={signal.impact === 'High' ? '#ef4444' : '#f59e0b'} />
                              <text x={cx} y={cy} textAnchor="middle" fill="#fff" fontSize="10" dy=".3em">!</text>
                            </g>
                          );
                        }}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="text-white font-medium mb-3 flex items-center">
                  <svg className="h-5 w-5 text-emerald-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  Emerging Trends
                </h5>
                
                <div className="space-y-3">
                  {marketInsights.trends.map((trend, index) => {
                    const directionColor = 
                      trend.direction === 'Increasing' || trend.direction === 'Accelerating' 
                        ? 'text-green-400' 
                        : trend.direction === 'Decreasing' 
                          ? 'text-red-400' 
                          : 'text-yellow-400';
                    
                    return (
                      <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-3 border border-gray-700">
                        <div className="flex justify-between mb-1">
                          <span className="text-white font-medium">{trend.name}</span>
                          <span className={`${directionColor}`}>{trend.direction}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Timeframe: {trend.timeframe}</span>
                          <span className="text-gray-400">Strength: {trend.strength}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <h5 className="text-white font-medium mb-3 flex items-center">
                  <svg className="h-5 w-5 text-emerald-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  Market Signals
                </h5>
                
                <div className="space-y-3">
                  {marketInsights.signals.map((signal, index) => {
                    const impactColor = 
                      signal.impact === 'High' 
                        ? 'text-red-400' 
                        : signal.impact === 'Medium' 
                          ? 'text-yellow-400' 
                          : 'text-blue-400';
                    
                    return (
                      <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-3 border border-gray-700">
                        <div className="flex justify-between mb-1">
                          <span className="text-white font-medium capitalize">{signal.type}</span>
                          <span className={`${impactColor}`}>{signal.impact} Impact</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-1">{signal.description}</p>
                        <div className="text-xs text-gray-400">
                          Confidence: {signal.confidence}%
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h5 className="text-white font-medium mb-3 flex items-center">
                <svg className="h-5 w-5 text-emerald-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10M12 20V4M6 20v-6"></path>
                </svg>
                Trend Strength Comparison
              </h5>
              
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={trendStrengthData}>
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" domain={[0, 100]} />
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <Tooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-gray-800 p-3 border border-gray-700 rounded-md shadow-lg">
                              <p className="text-white font-medium">{data.name}</p>
                              <p className="text-emerald-400">Strength: {data.strength}%</p>
                              <p className="text-gray-300 text-sm">Direction: {data.direction}</p>
                              <p className="text-gray-300 text-sm">Timeframe: {data.timeframe}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="strength" fill="#10b981" radius={[4, 4, 0, 0]} />
                    <ReferenceLine y={75} stroke="#f59e0b" strokeDasharray="3 3" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
              <h5 className="text-white font-medium mb-3 flex items-center">
                <svg className="h-5 w-5 text-emerald-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10H3M16 2v16M8 2v16"></path>
                </svg>
                Recommended Actions
              </h5>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center px-4 py-2 bg-emerald-900 bg-opacity-30 text-emerald-300 border border-emerald-800 rounded-lg hover:bg-opacity-50 transition-colors">
                  <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    <polyline points="17 21 17 13 7 13 7 21"></polyline>
                    <polyline points="7 3 7 8 15 8"></polyline>
                  </svg>
                  Generate Full Report
                </button>
                <button className="flex items-center justify-center px-4 py-2 bg-emerald-900 bg-opacity-30 text-emerald-300 border border-emerald-800 rounded-lg hover:bg-opacity-50 transition-colors">
                  <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 11a9 9 0 0 1 9 9"></path>
                    <path d="M4 4a16 16 0 0 1 16 16"></path>
                    <circle cx="5" cy="19" r="2"></circle>
                  </svg>
                  Set Up Alerts
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketTrendDemo;