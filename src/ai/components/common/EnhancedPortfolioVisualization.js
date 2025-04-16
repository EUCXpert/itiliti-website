import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const EnhancedPortfolioVisualization = ({ 
  portfolioData = [
    { name: 'Technology', value: 45, color: '#3b82f6' },
    { name: 'Healthcare', value: 25, color: '#8b5cf6' },
    { name: 'Financials', value: 10, color: '#ec4899' },
    { name: 'Consumer', value: 10, color: '#ef4444' },
    { name: 'Energy', value: 5, color: '#f59e0b' },
    { name: 'Other', value: 5, color: '#10b981' }
  ],
  riskMetrics = {
    totalRisk: 13.5,
    sharpeRatio: 1.4,
    maxDrawdown: 18.5,
    correlationToMarket: 0.85
  }
}) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-2 border border-gray-700 rounded-md shadow-lg">
          <p className="text-white font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {payload.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center">
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

  // Custom label renderer for showing percentages on the chart
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
        className="font-medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="text-white text-xl font-bold mb-6 text-center">Portfolio Allocation & Risk Analysis</h3>
      
      <div className="h-80 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={portfolioData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              blendStroke
            >
              {portfolioData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={renderLegend} />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Risk metrics in center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-gray-900 rounded-full p-4 w-32 h-32 flex flex-col items-center justify-center">
          <div className="text-white text-lg font-bold">Risk: {riskMetrics.totalRisk}%</div>
          <div className="text-blue-300 text-md">Sharpe: {riskMetrics.sharpeRatio}</div>
        </div>
      </div>
      
      {/* Additional risk metrics */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="text-gray-400 text-sm">Max Drawdown</div>
          <div className="text-white font-bold text-lg">{riskMetrics.maxDrawdown}%</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="text-gray-400 text-sm">Market Correlation</div>
          <div className="text-white font-bold text-lg">{riskMetrics.correlationToMarket}</div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPortfolioVisualization;