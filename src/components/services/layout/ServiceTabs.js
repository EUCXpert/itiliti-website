// src/components/services/ServiceTabs.js
import React from 'react';

const ServiceTabs = ({ tabs, activeTab, onChange }) => {
  if (!tabs || !Array.isArray(tabs)) {
    console.error('ServiceTabs: tabs prop is missing or not an array', tabs);
    return null;
  }
  
  return (
    <div className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-6">
        <div className="flex overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-6 py-4 font-medium text-lg whitespace-nowrap transition-colors ${
                activeTab === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => onChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;