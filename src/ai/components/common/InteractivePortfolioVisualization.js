import React, { useState } from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, 
  RadialBarChart, RadialBar, AreaChart, Area, XAxis, YAxis
} from 'recharts';

const EnhancedPortfolioVisualization = ({ 
  initialPortfolioData = [
    { name: 'Technology', value: 45, color: '#3b82f6' },
    { name: 'Healthcare', value: 25, color: '#8b5cf6' },
    { name: 'Financials', value: 10, color: '#ec4899' },
    { name: 'Consumer', value: 10, color: '#ef4444' },
    { name: 'Energy', value: 5, color: '#f59e0b' },
    { name: 'Other', value: 5, color: '#10b981' }
  ],
  initialRiskMetrics = {
    totalRisk: 13.5,
    sharpeRatio: 1.4,
    maxDrawdown: 18.5,
    correlationToMarket: 0.85
  }
}) => {
  const [portfolioData, setPortfolioData] = useState(initialPortfolioData);
  const [riskMetrics, setRiskMetrics] = useState(initialRiskMetrics);
  const [editMode, setEditMode] = useState(false);
  const [selectedSector, setSelectedSector] = useState(null);
  const [activeTab, setActiveTab] = useState('allocation');
  
  // Calculate new risk metrics based on allocation changes
  const recalculateRiskMetrics = (newPortfolio) => {
    // Calculate tech exposure percentage
    const techAllocation = newPortfolio.find(item => item.name === 'Technology')?.value || 0;
    
    // Simple models for risk calculations
    const newTotalRisk = 10 + (techAllocation * 0.15);
    const newSharpeRatio = 1.8 - (techAllocation * 0.01);
    const newMaxDrawdown = 15 + (techAllocation * 0.15);
    const newCorrelation = 0.7 + (techAllocation * 0.005);
    
    return {
      totalRisk: parseFloat(newTotalRisk.toFixed(1)),
      sharpeRatio: parseFloat(newSharpeRatio.toFixed(1)),
      maxDrawdown: parseFloat(newMaxDrawdown.toFixed(1)),
      correlationToMarket: parseFloat(newCorrelation.toFixed(2))
    };
  };
  
  // Update allocation for a sector
  const updateAllocation = (sectorName, newValue) => {
    // Ensure the value is within bounds
    newValue = Math.min(Math.max(newValue, 0), 100);
    
    // Get current value of the sector
    const currentValue = portfolioData.find(item => item.name === sectorName)?.value || 0;
    const difference = newValue - currentValue;
    
    // Don't proceed if there's no change
    if (difference === 0) return;
    
    // Adjust other sectors proportionally
    const newPortfolio = portfolioData.map(item => {
      if (item.name === sectorName) {
        return { ...item, value: newValue };
      }
      
      // Skip very small allocations when reducing
      if (difference > 0 && item.value <= 2) return item;
      
      // Calculate proportional adjustment for other sectors
      const otherSectors = portfolioData.filter(s => s.name !== sectorName);
      const otherSectorsTotal = otherSectors.reduce((sum, s) => sum + s.value, 0);
      const adjustmentFactor = (otherSectorsTotal - difference) / otherSectorsTotal;
      
      // Prevent negative values
      const adjustedValue = Math.max(item.value * adjustmentFactor, 1);
      
      return { ...item, value: Math.round(adjustedValue) };
    });
    
    // Ensure total equals 100%
    const total = newPortfolio.reduce((sum, item) => sum + item.value, 0);
    if (total !== 100) {
      // Adjust the largest sector to make total = 100
      const largestSector = [...newPortfolio]
        .filter(item => item.name !== sectorName)
        .sort((a, b) => b.value - a.value)[0];
      
      const adjustedPortfolio = newPortfolio.map(item => {
        if (item.name === largestSector.name) {
          return { ...item, value: item.value + (100 - total) };
        }
        return item;
      });
      
      setPortfolioData(adjustedPortfolio);
      setRiskMetrics(recalculateRiskMetrics(adjustedPortfolio));
    } else {
      setPortfolioData(newPortfolio);
      setRiskMetrics(recalculateRiskMetrics(newPortfolio));
    }
  };
  
  // Reset portfolio to initial state
  const resetPortfolio = () => {
    setPortfolioData(initialPortfolioData);
    setRiskMetrics(initialRiskMetrics);
    setSelectedSector(null);
    setEditMode(false);
  };
  
  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-3 border border-gray-700 rounded-md shadow-lg">
          <p className="text-white font-medium text-sm mb-1">{`${payload[0].name}: ${payload[0].value}%`}</p>
          {editMode && (
            <div className="text-blue-300 text-xs mt-1">Click to adjust allocation</div>
          )}
        </div>
      );
    }
    return null;
  };

  // Custom legend for allocation chart
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {payload.map((entry, index) => (
          <div 
            key={`legend-${index}`} 
            className={`flex items-center cursor-pointer p-1 px-2 rounded-full ${
              selectedSector === entry.value 
                ? 'bg-gray-700 ring-1 ring-blue-400' 
                : 'hover:bg-gray-800'
            }`}
            onClick={() => {
              if (editMode) {
                setSelectedSector(entry.value);
              }
            }}
          >
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-300 text-sm">{entry.value}: {entry.payload.value}%</span>
          </div>
        ))}
      </div>
    );
  };

  // Render donut chart labels
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = (innerRadius + outerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    // Only show label for segments that are large enough
    if (percent < 0.05) return null;
    
    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor="middle" 
        dominantBaseline="central"
        className="font-medium text-sm"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  // Handle click on pie segment
  const handlePieClick = (data, index) => {
    if (editMode) {
      setSelectedSector(data.name);
    }
  };

  // Risk indicators for the radial bars
  const getRiskIndicator = (metric, value) => {
    if (metric === 'sharpeRatio') {
      if (value >= 1.5) return 'Excellent';
      if (value >= 1.2) return 'Good';
      if (value >= 1.0) return 'Adequate';
      if (value >= 0.8) return 'Moderate';
      return 'Poor';
    }
    
    if (metric === 'totalRisk') {
      if (value <= 10) return 'Low';
      if (value <= 15) return 'Moderate';
      if (value <= 20) return 'High';
      return 'Very High';
    }
    
    if (metric === 'maxDrawdown') {
      if (value <= 15) return 'Low';
      if (value <= 25) return 'Moderate';
      if (value <= 35) return 'High';
      return 'Very High';
    }
    
    return 'Neutral';
  };

  // Sample historical data for the portfolio
  const historicalData = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 105 },
    { month: 'Mar', value: 102 },
    { month: 'Apr', value: 107 },
    { month: 'May', value: 110 },
    { month: 'Jun', value: 108 },
    { month: 'Jul', value: 112 },
    { month: 'Aug', value: 115 },
    { month: 'Sep', value: 120 },
    { month: 'Oct', value: 118 },
    { month: 'Nov', value: 122 },
    { month: 'Dec', value: 126 }
  ];

  // Prepare risk metrics data for RadialBarChart
  const riskMetricsData = [
    {
      name: 'Sharpe Ratio',
      uv: Math.min(riskMetrics.sharpeRatio / 2 * 100, 100),
      fill: '#10b981',
      value: riskMetrics.sharpeRatio,
      indicator: getRiskIndicator('sharpeRatio', riskMetrics.sharpeRatio),
      description: 'Risk-adjusted return'
    },
    {
      name: 'Risk',
      uv: Math.min(riskMetrics.totalRisk / 25 * 100, 100),
      fill: '#f59e0b',
      value: `${riskMetrics.totalRisk}%`,
      indicator: getRiskIndicator('totalRisk', riskMetrics.totalRisk),
      description: 'Portfolio volatility'
    },
    {
      name: 'Max Drawdown',
      uv: Math.min(riskMetrics.maxDrawdown / 35 * 100, 100),
      fill: '#ef4444',
      value: `${riskMetrics.maxDrawdown}%`,
      indicator: getRiskIndicator('maxDrawdown', riskMetrics.maxDrawdown),
      description: 'Largest peak-to-trough decline'
    }
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white text-xl font-bold">Portfolio Allocation & Risk Analysis</h3>
        
        {/* Tabs */}
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab('allocation')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              activeTab === 'allocation' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Allocation
          </button>
          <button 
            onClick={() => setActiveTab('risk')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              activeTab === 'risk' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Risk Metrics
          </button>
          <button 
            onClick={() => setActiveTab('performance')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              activeTab === 'performance' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Performance
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setEditMode(!editMode)} 
            className={`px-3 py-1.5 rounded-md text-sm ${
              editMode 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {editMode ? 'Editing' : 'Edit Allocations'}
          </button>
          {editMode && (
            <button 
              onClick={resetPortfolio}
              className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-md text-sm hover:bg-gray-600"
            >
              Reset
            </button>
          )}
        </div>
      </div>
      
      {/* Allocation View */}
      {activeTab === 'allocation' && (
        <div className="mb-6">
          <div className="h-80 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={portfolioData}
                  cx="50%"
                  cy="50%"
                  innerRadius={90}
                  outerRadius={140}
                  paddingAngle={2}
                  dataKey="value"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  blendStroke
                  onClick={handlePieClick}
                  isAnimationActive={true}
                  animationDuration={800}
                  animationEasing="ease-out"
                >
                  {portfolioData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      stroke={selectedSector === entry.name ? '#ffffff' : 'none'}
                      strokeWidth={selectedSector === entry.name ? 2 : 0}
                      style={{ filter: selectedSector === entry.name ? 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' : 'none' }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend content={renderLegend} verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Allocation adjustment controls (only shown in edit mode) */}
          {editMode && selectedSector && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">Adjust {selectedSector} allocation:</span>
                <span className="text-blue-300 text-sm">
                  {portfolioData.find(item => item.name === selectedSector)?.value}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                value={portfolioData.find(item => item.name === selectedSector)?.value || 0}
                onChange={(e) => updateAllocation(selectedSector, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>0%</span>
                <span>20%</span>
                <span>40%</span>
                <span>60%</span>
                <span>80%</span>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => updateAllocation(selectedSector, (portfolioData.find(item => item.name === selectedSector)?.value || 0) - 5)}
                  className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                >
                  -5%
                </button>
                <button
                  onClick={() => updateAllocation(selectedSector, (portfolioData.find(item => item.name === selectedSector)?.value || 0) + 5)}
                  className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                >
                  +5%
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Risk Metrics View */}
      {activeTab === 'risk' && (
        <div className="mb-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="20%" 
                outerRadius="90%" 
                barSize={14} 
                data={riskMetricsData} 
                startAngle={180} 
                endAngle={-180}
              >
                <RadialBar
                  minAngle={15}
                  background
                  clockWise
                  dataKey="uv"
                  cornerRadius={10}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-gray-800 p-3 border border-gray-700 rounded-md shadow-lg">
                          <p className="text-white font-medium text-sm mb-1">{data.name}</p>
                          <p className="text-gray-300 text-xs mb-1">{data.description}</p>
                          <p className="text-blue-300 font-medium">Value: {data.value}</p>
                          <p className="text-gray-300 text-xs">Status: {data.indicator}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Risk metrics cards */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {riskMetricsData.map((metric, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer flex flex-col items-center"
              >
                <div className="text-gray-400 text-sm mb-2">{metric.name}</div>
                <div className="text-white font-bold text-2xl mb-1">{metric.value}</div>
                <div 
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    metric.indicator === 'Excellent' || metric.indicator === 'Good' || metric.indicator === 'Low'
                      ? 'bg-green-900 text-green-300' 
                      : metric.indicator === 'Adequate' || metric.indicator === 'Moderate'
                        ? 'bg-yellow-900 text-yellow-300'
                        : 'bg-red-900 text-red-300'
                  }`}
                >
                  {metric.indicator}
                </div>
                <div className="text-gray-400 text-xs mt-2 text-center">{metric.description}</div>
              </div>
            ))}
          </div>
          
          {/* Additional risk metric */}
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mt-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="text-gray-400 text-sm">Market Correlation</div>
                <div className="text-white font-bold text-2xl">{riskMetrics.correlationToMarket}</div>
              </div>
              <div className="text-gray-400 text-sm">
                {riskMetrics.correlationToMarket > 0.8 ? 'High correlation with market movements' :
                 riskMetrics.correlationToMarket > 0.5 ? 'Moderate correlation with market' : 
                 'Low correlation with market'}
              </div>
            </div>
            <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 transition-all duration-500"
                style={{ 
                  width: `${riskMetrics.correlationToMarket * 100}%`,
                  background: 'linear-gradient(90deg, #10b981 0%, #f59e0b 50%, #ef4444 100%)'
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Performance View */}
      {activeTab === 'performance' && (
        <div className="mb-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={historicalData}
                margin={{
                  top: 20, right: 20, bottom: 20, left: 20,
                }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="month" 
                  stroke="#6b7280" 
                  tick={{fill: '#9ca3af'}} 
                />
                <YAxis 
                  stroke="#6b7280" 
                  tick={{fill: '#9ca3af'}} 
                  domain={['dataMin - 5', 'dataMax + 5']}
                />
                <Tooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-gray-800 p-3 border border-gray-700 rounded-md shadow-lg">
                          <p className="text-white font-medium text-sm">{`${label}: ${payload[0].value}`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorValue)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          {/* Performance stats */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="text-gray-400 text-sm mb-1">YTD Return</div>
              <div className="text-white font-bold text-2xl">+26.0%</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="text-gray-400 text-sm mb-1">1Y Alpha</div>
              <div className="text-white font-bold text-2xl">+3.8%</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="text-gray-400 text-sm mb-1">Beta</div>
              <div className="text-white font-bold text-2xl">0.92</div>
            </div>
          </div>
        </div>
      )}
      
      {/* Risk impact explanation when editing */}
      {editMode && (
        <div className="mt-4 p-4 bg-blue-900 bg-opacity-20 rounded-lg border border-blue-800">
          <h4 className="text-white font-medium mb-2">Risk Impact Analysis</h4>
          <p className="text-blue-200 text-sm mb-2">
            Adjusting your portfolio allocation affects your risk profile. Technology and high-growth sectors typically increase volatility.
          </p>
          {initialRiskMetrics.totalRisk !== riskMetrics.totalRisk && (
            <div className="text-xs text-gray-300">
              <span className={riskMetrics.totalRisk > initialRiskMetrics.totalRisk ? 'text-red-400' : 'text-green-400'}>
                {riskMetrics.totalRisk > initialRiskMetrics.totalRisk ? '↑' : '↓'} Risk has {riskMetrics.totalRisk > initialRiskMetrics.totalRisk ? 'increased' : 'decreased'} by {Math.abs(riskMetrics.totalRisk - initialRiskMetrics.totalRisk).toFixed(1)}%
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EnhancedPortfolioVisualization;