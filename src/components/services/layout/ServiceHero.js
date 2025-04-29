// src/components/services/layout/ServiceHero.js
import React from 'react';
import { Calendar, Download } from 'lucide-react';

const ServiceHero = ({ 
  title, 
  subtitle, 
  description, 
  category,
  backgroundImage = "/images/default-hero-bg.jpg", // Default background
  gradient = "from-black to-blue-900" // Default gradient
}) => {
  return (
    <div className="relative text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0" 
        style={{ 
          backgroundImage: `url("${backgroundImage}")`,
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-75 z-10`}></div>
      
      {/* Content */}
      <div className="container relative mx-auto px-6 py-20 z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
            {title}
            {subtitle && <><br/><span className="text-blue-300">{subtitle}</span></>}
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-shadow-md">{description}</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download Service Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;