      {/* Three-Phase Approach Overview */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Three-Phase Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive methodology that transforms your investment firm's technology from a necessary expense into a strategic advantage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Shield className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold">Phase 1:<br />Security Foundation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Establish robust security infrastructure and operational stability to protect sensitive investment data and meet regulatory requirements.
              </p>
              <div className="border-t border-blue-100 pt-4 mt-4">
                <Link to="/security" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                  Explore Security Solutions <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Phase 2 */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <Lightbulb className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold">Phase 2:<br />Optimization</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Maximize your technology investments through strategic optimization of licensing, architecture, and implementation to create a scalable foundation.
              </p>
              <div className="border-t border-purple-100 pt-4 mt-4">
                <Link to="/microsoft-optimization" className="text-purple-600 font-medium flex items-center hover:text-purple-800">
                  Explore Optimization Solutions <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Phase 3 */}
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                  <BrainCircuit className="w-8 h-8 text-indigo-700" />
                </div>
                <h3 className="text-xl font-semibold">Phase 3:<br />Transformation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Leverage strategic technology leadership and advanced capabilities like AI to transform core investment workflows for maximum efficiency and competitive advantage.
              </p>
              <div className="border-t border-indigo-100 pt-4 mt-4">
                <Link to="/cxo-services" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  Explore Transformation Solutions <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>