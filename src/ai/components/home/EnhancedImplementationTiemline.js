import React from 'react';
import { motion } from 'framer-motion';

const EnhancedImplementationTimeline = () => {
  // Timeline steps data
  const timelineSteps = [
    { 
      week: "Week 1", 
      title: "Discovery & Requirements", 
      description: "Initial assessment and planning" 
    },
    { 
      week: "Week 2", 
      title: "Data Integration", 
      description: "Connect to your existing systems" 
    },
    { 
      week: "Week 4", 
      title: "Initial Deployment", 
      description: "First capabilities available" 
    },
    { 
      week: "Week 6", 
      title: "User Training", 
      description: "Team onboarding and adoption" 
    },
    { 
      week: "Week 8", 
      title: "Full Implementation", 
      description: "All capabilities operational" 
    },
    { 
      week: "Week 12", 
      title: "Optimization", 
      description: "Refinement based on usage" 
    }
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
      <h2 className="text-3xl font-bold text-white mb-3">
        Implementation <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">Timeline</span>
      </h2>
      <p className="text-blue-200 mb-8">
        From kickoff to measurable results in weeks, not months
      </p>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative pl-12 md:pl-0"
      >
        {/* Timeline track */}
        <div className="absolute top-2 bottom-0 left-4 md:left-1/2 w-1 bg-blue-700 transform md:-translate-x-1/2"></div>
        
        {/* Timeline items */}
        <div className="space-y-12">
          {timelineSteps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Week label */}
              <div className="absolute left-0 md:left-1/2 -translate-x-12 md:-translate-x-24 top-0 bg-blue-900 rounded-md px-3 py-1 border border-blue-700">
                <div className="text-blue-300 text-sm font-medium">{step.week}</div>
              </div>
              
              {/* Timeline node */}
              <div className="absolute left-4 md:left-1/2 top-2 w-4 h-4 rounded-full bg-blue-600 border-2 border-blue-800 -translate-x-2 md:-translate-x-2 z-10"></div>
              
              {/* Content card */}
              <div className={`md:w-5/12 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}>
                <motion.div 
                  className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700 hover:border-blue-600 transition-colors shadow-md"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                  }}
                >
                  <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedImplementationTimeline;