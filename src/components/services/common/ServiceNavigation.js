import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';

const ServiceNavigation = ({ activeService }) => {
  const services = [
    { id: 'all-services', name: 'All Services', path: '/services' },
    { id: 'security-foundation', name: 'Security Foundation', path: '/security' },
    { id: 'microsoft-optimization', name: 'Microsoft Optimization', path: '/microsoft-optimization' },
    { id: 'cxo-services', name: 'CxO Advisory Services', path: '/cxo-services' },
    { id: 'ai-services', name: 'AI Solutions', path: '/ai-services' },
    { id: 'electronic-message-archiving', name: 'Electronic Message Archiving', path: '/electronic-message-archiving' },
    { id: 'private-msp', name: 'Private MSP', path: '/private-msp' },
    { id: 'regulatory-compliance', name: 'Regulatory Compliance', path: '/regulatory-compliance' }
  ];

  return (
    <>
      <Navigation />
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">{activeService}</span>
          </div>
          
          <div className="overflow-x-auto">
            <ul className="flex space-x-6 border-b border-gray-200 min-w-max">
              {services.map(service => (
                <li key={service.id}>
                  <Link 
                    to={service.path} 
                    className={`font-medium pb-3 inline-block whitespace-nowrap ${
                      activeService === service.name 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceNavigation;