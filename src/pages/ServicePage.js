// src/pages/ServicePage.js
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ServiceLayout from '../components/services/layout/ServiceLayout';
import { getServiceById, SERVICE_IDS } from '../data/services/serviceData';
import { getServiceComponents } from '../components/services/ServiceComponentRegistry';

const ServicePage = () => {
  const { serviceId } = useParams();
  const serviceData = getServiceById(serviceId);
  
  // If service ID doesn't exist, redirect to services page
  if (!serviceData && SERVICE_IDS.length > 0) {
    return <Navigate to="/services" replace />;
  }
  
  // If service data is still loading, show loading indicator
  if (!serviceData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold">Loading service data...</h2>
        </div>
      </div>
    );
  }
  
  return <ServiceLayout serviceData={serviceData} />;
};

export default ServicePage;