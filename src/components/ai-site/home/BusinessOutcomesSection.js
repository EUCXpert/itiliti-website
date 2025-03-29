import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BusinessOutcomesSection = () => {
  const [activeTab, setActiveTab] = useState('research');
  
  // Business outcomes data
  const outcomes = {
    research: {
      title: "Investment Research Enhancement",
      stats: [
        { value: "40%", label: "Reduction in document analysis time" },
        { value: "3.5x", label: "More potential investments evaluated" },
        { value: "60%", label: "Increase in research coverage" }
      ],
      description: "Transform research productivity by automating document analysis, extracting key insights, and identifying signals that human analysts might miss across thousands of pages.",
      quote: "We're now able to cover 3x more companies with the same research team, giving us a significant edge in identifying opportunities.",
      author: "Director of Research, Quant Hedge Fund"
    },
    dueDisligence: {
      title: "Due Diligence Acceleration",
      stats: [
        { value: "65%", label: "Faster extraction of key information" },
        { value: "85%", label: "Reduction in manual document review" },
        { value: "2x", label: "More deals evaluated per analyst" }
      ],
      description: "Accelerate the deal evaluation process by automating document review, extracting key terms from legal documents, and highlighting risk factors and inconsistencies.",
      quote: "What previously took weeks of document review now takes hours, allowing us to evaluate twice as many potential investments and conduct deeper analysis on the most promising ones.",
      author: "Investment Director, Private Equity Firm"
    },
    portfolio: {
      title: "Portfolio Analytics",
      stats: [
        { value: "18%", label: "Improvement in risk-adjusted returns" },
        { value: "72%", label: "Reduction in reporting time" },
        { value: "90%", label: "Less manual data processing" }
      ],
      description: "Gain deeper insights into portfolio performance with advanced analytics that discover hidden patterns, identify risk exposures, and recommend optimization strategies.",
      quote: "The pattern recognition capabilities identified correlations in our portfolio that weren't obvious to our team, helping us reduce risk concentration and improve returns.",
      author: "Portfolio Manager, Multi-Strategy Fund"
    },
    marketTrends: {
      title: "Market Trend Analysis",
      stats: [
        { value: "2-3", label: "Weeks earlier trend identification" },
        { value: "8x", label: "More data sources analyzed" },
        { value: "45%", label: "Improved sentiment accuracy" }
      ],
      description: "Identify emerging trends before they're obvious with AI that processes news, social media, and alternative data to gain market insights that provide a competitive edge.",
      quote: "We're consistently identifying market shifts weeks before they become apparent to most investors, providing significant alpha generation opportunities.",
      author: "Chief Investment Officer, Long/Short Equity"
    }
  };
  
  // Count up animation
  const CountUpAnimation = ({ targetValue, duration = 2000, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0);
    const parsedTarget = parseInt(targetValue) || parseFloat(targetValue) || 0;
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
    
    useEffect(() => {
      if (inView) {
        let startTime;
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * parsedTarget));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    }, [inView, parsedTarget, duration]);
    
    // Handle percentage values, multipliers, etc.
    const displayValue = () => {
      if (typeof targetValue === 'string') {
        if (targetValue.includes('%')) {
          return `${count}%`;
        } else if (targetValue.includes('x')) {
          return `${count}x`;
        }
      }
      return `${prefix}${count}${suffix}`;
    };
    
    return <span ref={ref}>{displayValue()}</span>;
  };
  
  // ROI Calculator
  const ROICalculator = () => {
    const [values, setValues] = useState({
      teamSize: 10,
      hoursPerWeek: 20,
      avgSalary: 150000
    });
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
    };
    
    // Calculate results
    const hourlyRate = values.avgSalary / 2080; // 40 hours per week, 52 weeks
    const weeklyHours = values.teamSize * values.hoursPerWeek;
    const annualHours = weeklyHours * 52;
    const annualCost = annualHours * hourlyRate;
    
    // With AI (40% time savings)
    const aiSavings = annualCost * 0.40;
    const aiHoursSaved = annualHours * 0.40;
    
    return (
      <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white text-xl font-bold mb-4">ROI Calculator</h3>
        <p className="text-blue-200 mb-4">Estimate potential savings from AI-powered automation</p>
        
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-blue-300 text-sm mb-1">Research Team Size</label>
              <input
                type="range"
                min="1"
                max="30"
                name="teamSize"
                value={values.teamSize}
                onChange={handleChange}
                className="w-full"
              />
              <div className="flex justify-between text-gray-400 text-xs">
                <span>1</span>
                <span>15</span>
                <span>30</span>
              </div>
              <div className="text-center text-white font-medium mt-1">{values.teamSize} analysts</div>
            </div>
            
            <div>
              <label className="block text-blue-300 text-sm mb-1">Research Hours Per Week</label>
              <input
                type="range"
                min="5"
                max="40"
                name="hoursPerWeek"
                value={values.hoursPerWeek}
                onChange={handleChange}
                className="w-full"
              />
              <div className="flex justify-between text-gray-400 text-xs">
                <span>5</span>
                <span>20</span>
                <span>40</span>
              </div>
              <div className="text-center text-white font-medium mt-1">{values.hoursPerWeek} hrs/week</div>
            </div>
          </div>
          
          <div>
            <label className="block text-blue-300 text-sm mb-1">Avg. Analyst Salary</label>
            <input
              type="range"
              min="75000"
              max="250000"
              step="5000"
              name="avgSalary"
              value={values.avgSalary}
              onChange={handleChange}
              className="w-full"
            />
            <div className="flex justify-between text-gray-400 text-xs">
              <span>$75k</span>
              <span>$150k</span>
              <span>$250k</span>
            </div>
            <div className="text-center text-white font-medium mt-1">${(values.avgSalary / 1000).toFixed(0)}k / year</div>
          </div>
        </div>
        
        <div className="bg-blue-900 bg-opacity-20 rounded-lg p-4 border border-blue-800">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-blue-300 mb-1">Annual Hours Saved</div>
              <div className="text-2xl font-bold text-white">{aiHoursSaved.toFixed(0)} hours</div>
            </div>
            <div>
              <div className="text-sm text-blue-300 mb-1">Estimated Annual Savings</div>
              <div className="text-2xl font-bold text-green-400">${aiSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Implementation Timeline
  const ImplementationTimeline = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1
    });
    
    const containerControls = useAnimation();
    
    useEffect(() => {
      if (inView) {
        containerControls.start("visible");
      }
    }, [containerControls, inView]);
    
    const timelineItems = [
      { week: 1, title: "Discovery & Requirements", description: "Initial assessment and planning" },
      { week: 2, title: "Data Integration", description: "Connect to your existing systems" },
      { week: 4, title: "Initial Deployment", description: "First capabilities available" },
      { week: 6, title: "User Training", description: "Team onboarding and adoption" },
      { week: 8, title: "Full Implementation", description: "All capabilities operational" },
      { week: 12, title: "Optimization", description: "Refinement based on usage" }
    ];
    
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };
    
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    };
    
    return (
      <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white text-xl font-bold mb-4">Implementation Timeline</h3>
        <p className="text-blue-200 mb-6">From kickoff to measurable results in weeks, not months</p>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={containerControls}
          className="relative ml-4"
        >
          {/* Timeline track */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-blue-700"></div>
          
          {timelineItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="mb-6 relative pl-8"
            >
              {/* Timeline node */}
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-1/2"></div>
              
              {/* Week indicator */}
              <div className="absolute left-0 top-0 -translate-x-[calc(100%+12px)]">
                <div className="text-blue-400 text-sm font-medium">Week {item.week}</div>
              </div>
              
              <div className="bg-blue-900 bg-opacity-20 rounded-lg p-4 border border-blue-800">
                <h4 className="text-white font-medium">{item.title}</h4>
                <p className="text-blue-200 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };
  
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Measurable <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Business Outcomes</span></h2>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Our AI solutions deliver tangible ROI with rapid implementation timelines and proven results.
          </p>
        </motion.div>
        
        {/* Outcomes Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(outcomes).map(([key, outcome]) => (
            <motion.button
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`px-6 py-3 rounded-full transition-all duration-300 border ${
                activeTab === key
                  ? 'bg-gray-800 border-green-500 shadow-glow-green text-white'
                  : 'bg-gray-800 bg-opacity-50 border-gray-700 text-gray-400 hover:text-white hover:border-gray-500'
              }`}
              onClick={() => setActiveTab(key)}
            >
              {outcome.title}
            </motion.button>
          ))}
        </div>
        
        {/* Active Outcome Details */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Left Side - Stats & Description */}
          <div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700 p-8 h-full">
              <h3 className="text-3xl font-bold text-white mb-6">{outcomes[activeTab].title}</h3>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {outcomes[activeTab].stats.map((stat, index) => (
                  <div key={index} className="bg-gray-700 bg-opacity-40 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      <CountUpAnimation targetValue={stat.value} />
                    </div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <p className="text-blue-100 mb-8">{outcomes[activeTab].description}</p>
              
              {/* Quote */}
              <div className="bg-blue-900 bg-opacity-20 rounded-lg p-4 border border-blue-800">
                <blockquote className="text-white italic mb-3">"{outcomes[activeTab].quote}"</blockquote>
                <div className="text-blue-300 text-sm">— {outcomes[activeTab].author}</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - ROI Calculator and Timeline */}
          <div className="space-y-8">
            <ROICalculator />
            <ImplementationTimeline />
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Investment Processes?</h3>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300">
            Schedule a Personalized Demo
          </button>
          <p className="text-blue-200 mt-4">
            No commitment required. See how our AI solutions can address your specific challenges.
          </p>
        </motion.div>
      </div>
      
      {/* Custom styles */}
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
        }
        
        .shadow-glow-lg {
          box-shadow: 0 0 25px rgba(34, 197, 94, 0.4);
        }
        
        .shadow-glow-green {
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
        }
      `}</style>
    </div>
  );
};

export default BusinessOutcomesSection;