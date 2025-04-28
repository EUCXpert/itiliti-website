import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ROICalculator = ({ 
  serviceName = 'AI Solution',
  defaultValues = {
    teamSize: 10,
    hoursPerWeek: 20,
    avgSalary: 150000,
    efficiencyGain: 40, // percentage
    additionalRevenue: 15 // percentage
  },
  customMetrics = []
}) => {
  // State for form values
  const [values, setValues] = useState(defaultValues);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [calculatedResults, setCalculatedResults] = useState({});
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };
  
  // Calculate ROI metrics whenever values change
  useEffect(() => {
    // Base calculations
    const hourlyRate = values.avgSalary / 2080; // 40 hours per week, 52 weeks
    const weeklyHours = values.teamSize * values.hoursPerWeek;
    const annualHours = weeklyHours * 52;
    const annualCost = annualHours * hourlyRate;
    
    // Efficiency savings
    const efficiencySavingsPercent = values.efficiencyGain / 100;
    const hoursSaved = annualHours * efficiencySavingsPercent;
    const costSavings = annualCost * efficiencySavingsPercent;
    
    // Additional revenue impact
    const revenueGainPercent = values.additionalRevenue / 100;
    const additionalRevenue = values.revenue ? values.revenue * revenueGainPercent : 0;
    
    // Total ROI
    const totalBenefit = costSavings + additionalRevenue;
    const implementationCost = values.implementationCost || (values.teamSize * 5000);
    const yearOneROI = (totalBenefit - implementationCost) / implementationCost * 100;
    const paybackMonths = (implementationCost / (totalBenefit / 12));
    
    // Three-year projection
    const threeYearSavings = totalBenefit * 3 - implementationCost;
    
    setCalculatedResults({
      hoursSaved: Math.round(hoursSaved),
      costSavings: Math.round(costSavings),
      additionalRevenue: Math.round(additionalRevenue),
      totalBenefit: Math.round(totalBenefit),
      yearOneROI: Math.round(yearOneROI),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      threeYearSavings: Math.round(threeYearSavings)
    });
  }, [values]);

  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
      <h3 className="text-white text-xl font-bold mb-2">{serviceName} ROI Calculator</h3>
      <p className="text-blue-200 mb-6">Estimate your potential return on investment</p>
      
      <div className="space-y-6">
        {/* Basic Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-blue-300 text-sm mb-1">Team Size</label>
            <div className="flex items-center">
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                name="teamSize"
                value={values.teamSize}
                onChange={handleChange}
                className="w-full mr-3"
              />
              <div className="w-16 text-center text-white font-medium bg-gray-700 rounded-md py-1">
                {values.teamSize}
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-blue-300 text-sm mb-1">Hours Per Week on Research/Analysis</label>
            <div className="flex items-center">
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                name="hoursPerWeek"
                value={values.hoursPerWeek}
                onChange={handleChange}
                className="w-full mr-3"
              />
              <div className="w-16 text-center text-white font-medium bg-gray-700 rounded-md py-1">
                {values.hoursPerWeek}
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-blue-300 text-sm mb-1">Average Annual Salary ($)</label>
            <div className="flex items-center">
              <input
                type="range"
                min="75000"
                max="500000"
                step="5000"
                name="avgSalary"
                value={values.avgSalary}
                onChange={handleChange}
                className="w-full mr-3"
              />
              <div className="w-24 text-center text-white font-medium bg-gray-700 rounded-md py-1">
                ${(values.avgSalary).toLocaleString()}
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-blue-300 text-sm mb-1">Efficiency Gain (%)</label>
            <div className="flex items-center">
              <input
                type="range"
                min="10"
                max="70"
                step="5"
                name="efficiencyGain"
                value={values.efficiencyGain}
                onChange={handleChange}
                className="w-full mr-3"
              />
              <div className="w-16 text-center text-white font-medium bg-gray-700 rounded-md py-1">
                {values.efficiencyGain}%
              </div>
            </div>
          </div>
        </div>
        
        {/* Advanced Options Toggle */}
        <div className="flex items-center cursor-pointer" onClick={() => setShowAdvanced(!showAdvanced)}>
          <div className={`w-5 h-5 flex items-center justify-center rounded-full border mr-2 ${showAdvanced ? 'border-blue-500 text-blue-500' : 'border-gray-500 text-gray-500'}`}>
            {showAdvanced ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <span className="text-gray-400 text-sm">Advanced Options</span>
        </div>
        
        {/* Advanced Options */}
        {showAdvanced && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3 border-t border-gray-700 mt-3"
          >
            <div>
              <label className="block text-blue-300 text-sm mb-1">Annual Revenue ($)</label>
              <input
                type="text"
                name="revenue"
                value={values.revenue || ''}
                onChange={(e) => setValues({...values, revenue: e.target.value ? parseFloat(e.target.value.replace(/,/g, '')) : 0})}
                placeholder="Enter your annual revenue"
                className="w-full bg-gray-700 text-white rounded p-2 border border-gray-600"
              />
              <p className="text-gray-400 text-xs mt-1">Optional: For calculating revenue impact</p>
            </div>
            
            <div>
              <label className="block text-blue-300 text-sm mb-1">Additional Revenue Potential (%)</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="1"
                  name="additionalRevenue"
                  value={values.additionalRevenue}
                  onChange={handleChange}
                  className="w-full mr-3"
                />
                <div className="w-16 text-center text-white font-medium bg-gray-700 rounded-md py-1">
                  {values.additionalRevenue}%
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-blue-300 text-sm mb-1">Implementation Cost ($)</label>
              <input
                type="text"
                name="implementationCost"
                value={values.implementationCost || ''}
                onChange={(e) => setValues({...values, implementationCost: e.target.value ? parseFloat(e.target.value.replace(/,/g, '')) : 0})}
                placeholder="Enter implementation cost"
                className="w-full bg-gray-700 text-white rounded p-2 border border-gray-600"
              />
              <p className="text-gray-400 text-xs mt-1">Default is $5,000 per team member</p>
            </div>
            
            {/* Custom Metrics */}
            {customMetrics.map((metric, index) => (
              <div key={index}>
                <label className="block text-blue-300 text-sm mb-1">{metric.label}</label>
                <div className="flex items-center">
                  <input
                    type="range"
                    min={metric.min || 0}
                    max={metric.max || 100}
                    step={metric.step || 1}
                    name={metric.name}
                    value={values[metric.name] || metric.defaultValue}
                    onChange={handleChange}
                    className="w-full mr-3"
                  />
                  <div className="w-16 text-center text-white font-medium bg-gray-700 rounded-md py-1">
                    {values[metric.name] || metric.defaultValue}{metric.unit || '%'}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
        
        {/* Results Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-blue-900 bg-opacity-20 rounded-lg p-4 border border-blue-800">
            <div className="text-sm text-blue-300 mb-1">Annual Time Saved</div>
            <div className="text-2xl font-bold text-white">{calculatedResults.hoursSaved?.toLocaleString()} hours</div>
          </div>
          
          <div className="bg-blue-900 bg-opacity-20 rounded-lg p-4 border border-blue-800">
            <div className="text-sm text-blue-300 mb-1">Annual Cost Savings</div>
            <div className="text-2xl font-bold text-green-400">${calculatedResults.costSavings?.toLocaleString()}</div>
          </div>
          
          {values.revenue > 0 && (
            <div className="bg-blue-900 bg-opacity-20 rounded-lg p-4 border border-blue-800">
              <div className="text-sm text-blue-300 mb-1">Additional Revenue</div>
              <div className="text-2xl font-bold text-green-400">${calculatedResults.additionalRevenue?.toLocaleString()}</div>
            </div>
          )}
          
          <div className="bg-blue-900 bg-opacity-20 rounded-lg p-4 border border-blue-800">
            <div className="text-sm text-blue-300 mb-1">Year 1 ROI</div>
            <div className="text-2xl font-bold text-white">{calculatedResults.yearOneROI}%</div>
          </div>
          
          <div className="bg-blue-900 bg-opacity-20 rounded-lg p-4 border border-blue-800 md:col-span-2">
            <div className="text-sm text-blue-300 mb-1">3-Year Total Benefit</div>
            <div className="text-2xl font-bold text-green-400">${calculatedResults.threeYearSavings?.toLocaleString()}</div>
            <div className="mt-2 text-sm text-blue-200">Estimated payback period: <span className="font-semibold">{calculatedResults.paybackMonths} months</span></div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-6">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium rounded-lg hover:shadow-glow transition-all duration-300">
            Get Detailed ROI Analysis
          </button>
          <p className="text-gray-400 text-sm mt-2">
            Contact us for a customized analysis based on your specific business needs
          </p>
        </div>
      </div>
      
      {/* Custom styles */}
      <style jsx>{`
        .hover-shadow-glow:hover {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default ROICalculator;