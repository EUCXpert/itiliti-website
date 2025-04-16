import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';

const SegmentNavigation = ({ activeSegment }) => {
  const segments = [
    { id: 'private-equity', name: 'Private Equity' },
    { id: 'venture-capital', name: 'Venture Capital' },
    { id: 'family-offices', name: 'Family Offices' },
    { id: 'real-estate', name: 'Real Estate' }
  ];

  return (
    <>
      <Navigation />
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/segments" className="hover:text-blue-600">Segments</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">{activeSegment}</span>
          </div>
          
          <ul className="flex space-x-8 border-b border-gray-200">
            {segments.map(segment => (
              <li key={segment.id}>
                <Link 
                  to={`/segments/${segment.id}`} 
                  className={`font-medium pb-3 inline-block ${
                    activeSegment === segment.name 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {segment.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SegmentNavigation;