// src/components/services/ServiceHero.js
import React from 'react';

const ServiceHero = ({ title, subtitle, description, category }) => {
  return (
    <div className="bg-gradient-to-r from-black to-blue-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}<br/><span className="text-blue-300">{subtitle}</span></h1>
          <p className="text-xl mb-8 max-w-2xl">{description}</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Schedule Consultation
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
              Download Service Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;