// src/components/TeamExpertiseVisual.js
import React from 'react';
import { Users, ArrowRight, Award, BarChart4, LightbulbIcon, Shield, Briefcase } from 'lucide-react';

const TeamExpertiseVisual = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Column - IT Team */}
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-bold mb-6">IT Team</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {Array(9).fill().map((_, index) => (
                    <div key={index} className="flex justify-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-5 h-5 text-blue-600">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor" />
                            <path d="M12 13C7.58172 13 4 16.5817 4 21H20C20 16.5817 16.4183 13 12 13Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-gray-700 text-sm">
                  Technical Implementation & Support
                </div>
              </div>
            </div>

            {/* Plus Sign */}
            <div className="flex items-center justify-center my-2 md:my-0">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 w-10 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full top-1/2 -translate-y-1/2"></div>
                <div className="absolute inset-0 h-10 w-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full left-1/2 -translate-x-1/2"></div>
              </div>
            </div>

            {/* Middle Column - CxO */}
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-bold mb-6">CxO</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 shadow-sm">
                {/* Executive figure */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor" />
                        <path d="M12 13C14.1217 13 16.1566 13.8429 17.6569 15.3431C19.1571 16.8434 20 18.8783 20 21H4C4 18.8783 4.84285 16.8434 6.34315 15.3431C7.84344 13.8429 9.87827 13 12 13Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1">
                      <Award className="w-8 h-8 text-yellow-500" stroke="currentColor" fill="rgb(255, 249, 219)" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Executive qualities */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm">
                    <BarChart4 className="w-5 h-5 text-blue-600 mb-1" />
                    <span className="text-xs font-medium">Strategic Vision</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm">
                    <LightbulbIcon className="w-5 h-5 text-amber-500 mb-1" />
                    <span className="text-xs font-medium">Leadership</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm">
                    <Shield className="w-5 h-5 text-green-600 mb-1" />
                    <span className="text-xs font-medium">Governance</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm">
                    <Briefcase className="w-5 h-5 text-purple-600 mb-1" />
                    <span className="text-xs font-medium">Experience</span>
                  </div>
                </div>
                <div className="mt-4 text-gray-700 text-sm">
                  Strategic Technology Leadership
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center my-2 md:my-0">
              <div className="w-16 h-12 relative">
                <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 -translate-y-1/2"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-purple-600 border-b-[8px] border-b-transparent"></div>
              </div>
            </div>

            {/* Right Column - ITILITI */}
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-bold mb-6">ITILITI</h3>
              <div className="bg-gradient-to-r from-black to-blue-900 rounded-xl p-8 shadow-lg">
                <div className="text-white text-3xl font-bold tracking-widest mb-3">
                  ITILITI
                </div>
                <div className="flex justify-center gap-2 mb-3">
                  {['Enterprise', 'Expertise', 'Security', 'Value'].map((word, i) => (
                    <div key={i} className="bg-white/10 text-xs text-white px-2 py-1 rounded">
                      {word}
                    </div>
                  ))}
                </div>
                <div className="w-16 h-1 bg-blue-400 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">The full-scale support of an embedded IT team, combined with executive-level expertise.</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our unique approach delivers the best of both worlds: comprehensive technical implementation and support paired with strategic CxO leadership, all calibrated precisely for alternative investment firms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamExpertiseVisual;