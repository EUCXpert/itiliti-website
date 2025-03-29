import React from 'react';
import { 
  Shield, 
  DollarSign, 
  Target, 
  Lock, 
  CheckSquare, 
  Building, 
  FileCheck, 
  Users 
} from 'lucide-react';

const EnhancedSecurityValueSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Beyond Defense: Security as Business Value</h2>
          <p className="text-xl text-gray-700 mb-10 text-center">
            Our security solutions deliver measurable business value beyond protection,
            directly impacting your firm's fundraising capabilities and operational efficiency.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Institutional Due Diligence Success</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Comprehensive security frameworks dramatically increase your success rate during institutional investor operational due diligence reviews.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">92%</div>
                  <div className="text-sm text-gray-600">ODD success rate with robust security</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">40-50%</div>
                  <div className="text-sm text-gray-600">Success rate with basic security</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <FileCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Regulatory Compliance Efficiency</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our framework streamlines regulatory compliance processes, reducing preparation time and deficiency findings during examinations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">65%</div>
                  <div className="text-sm text-gray-600">Reduction in audit preparation time</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-600">Reduction in deficiency findings</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Security Incident Cost Reduction</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Comprehensive security dramatically reduces both the frequency and impact of security incidents, creating substantial cost avoidance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">$4.35M</div>
                  <div className="text-sm text-gray-600">Average cost per financial services breach</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">75%</div>
                  <div className="text-sm text-gray-600">Fewer security incidents after implementation</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Intellectual Property Protection</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Safeguard your proprietary investment strategies, research, and trading algorithms - the core assets of your business.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-bold">Critical for:</span> Quantitative funds, systematic strategies, and proprietary research-driven investment firms where intellectual property represents the primary business value.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl shadow-md overflow-hidden">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Key Implementation Considerations</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold">Right-size for boutique scale</div>
                        <p className="text-sm">Enterprise security frameworks must be adapted for firms with limited specialized resources</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold">Documentation quality</div>
                        <p className="text-sm">Well-documented frameworks are as important as technical controls for investor due diligence</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold">Continuous monitoring</div>
                        <p className="text-sm">Sophisticated investors expect ongoing vigilance rather than point-in-time assessments</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold">Third-party risk management</div>
                        <p className="text-sm">Special attention to service providers, fund administrators, and technology vendors</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center">
              Schedule a Security Assessment
              <Shield className="w-5 h-5 ml-2" />
            </button>
            <p className="text-gray-600 mt-4">
              Discover how our security solutions can enhance your capital raising capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSecurityValueSection;