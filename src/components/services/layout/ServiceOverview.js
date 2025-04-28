import React from 'react';
import { Shield } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../../data/services/serviceCategories';

const ServiceOverview = ({ title, challenges, keyFeatures, metrics }) => {
  // Determine color scheme based on service category
  const getColorClass = (category, element) => {
    const categoryData = Object.values(SERVICE_CATEGORIES).find(cat => cat.id === category);
    const color = categoryData?.colorScheme?.primary || 'blue';
    
    switch (element) {
      case 'bg':
        return `bg-${color}-100`;
      case 'text':
        return `text-${color}-600`;
      case 'border':
        return `border-${color}-100`;
      default:
        return '';
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6">The {title} Challenge</h2>
        <p className="text-xl text-gray-700 mb-8">
          Alternative investment firms face unique challenges that generic solutions fail to address. 
          Our specialized approach delivers enterprise-grade capabilities at a scale and cost appropriate for boutique firms.
        </p>
      </div>
      
      {/* Challenge Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex items-start gap-5">
            <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
              {challenge.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          </div>
        ))}
      </div>
                  
      {/* Key Metrics Section */}
      <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="p-4 bg-blue-600 rounded-full text-white flex-shrink-0">
            <Shield className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">{keyFeatures.title}</h3>
            <p className="text-gray-700 mb-6">{keyFeatures.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                  <div className="text-sm font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;