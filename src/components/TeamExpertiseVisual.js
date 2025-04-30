// src/components/TeamExpertiseVisual.js
import React from 'react';
import { Users, BarChart4, Shield, Briefcase, LightbulbIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamExpertiseVisual = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center justify-center mb-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
          >
            OUR MODEL
          </motion.div>
          
          <h2 className="relative inline-block">
            <span className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              The ITILITI
            </span>
            <motion.span 
              className="relative z-10 block md:inline text-4xl md:text-5xl font-bold text-gray-800 mt-1 md:mt-0 md:ml-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Difference
            </motion.span>
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-3 left-0 h-3 bg-blue-200 opacity-50 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connection lines - Desktop */}
          <div className="hidden md:block">
            <div className="absolute top-1/2 left-[22%] right-[22%] h-1 bg-gradient-to-r from-blue-600 to-blue-900 transform -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 right-[22%] h-4 w-4 border-t-2 border-r-2 border-blue-900 transform rotate-45 translate-x-1/2 -translate-y-1/2 z-0"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* IT Support Team */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl relative z-10">
              <div className="text-center mb-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Technical Support</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="bg-blue-50 p-1 rounded-full mr-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Comprehensive implementation</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-50 p-1 rounded-full mr-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Day-to-day troubleshooting</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-50 p-1 rounded-full mr-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>Systems maintenance</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-50 p-1 rounded-full mr-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>User support & training</span>
                </li>
              </ul>
            </div>

            {/* CxO Leadership */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 border border-blue-200 transition-all hover:shadow-xl transform md:translate-y-[-20px] relative z-20">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Executive Expertise</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-center">
                  <LightbulbIcon className="w-5 h-5 text-amber-500 mb-1" />
                  <span className="text-sm font-medium">Strategic Vision</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-center">
                  <BarChart4 className="w-5 h-5 text-blue-600 mb-1" />
                  <span className="text-sm font-medium">Leadership</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-center">
                  <Shield className="w-5 h-5 text-green-600 mb-1" />
                  <span className="text-sm font-medium">Governance</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-center">
                  <Briefcase className="w-5 h-5 text-purple-600 mb-1" />
                  <span className="text-sm font-medium">Experience</span>
                </div>
              </div>
            </div>

            {/* ITILITI Result */}
            <div className="bg-gradient-to-r from-black to-blue-900 rounded-xl shadow-lg p-8 transition-all hover:shadow-xl text-white relative z-10">
              <div className="text-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold">ITILITI</div>
                </div>
                <h3 className="text-xl font-bold">Complete Solution</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="bg-blue-400 p-1 rounded-full mr-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Enterprise-grade security</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-400 p-1 rounded-full mr-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Boutique-scale solutions</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-400 p-1 rounded-full mr-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Investment-specific expertise</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-400 p-1 rounded-full mr-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Aligned technology strategy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile connection indicators - only visible on mobile */}
          <div className="flex flex-col items-center md:hidden">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-900 my-2"></div>
            <div className="w-1 h-8 bg-gradient-to-b from-blue-900 to-blue-600 my-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamExpertiseVisual;