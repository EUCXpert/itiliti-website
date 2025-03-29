// Enhanced business value section for Microsoft Optimization page
import { 
  Shield, 
  CheckSquare, 
  // Add other required icons...
} from 'lucide-react';
const MicrosoftBusinessValueSection = () => {
    return (
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Quantifiable Business Impact</h2>
            <p className="text-xl text-gray-700 mb-10 text-center">
              For boutique investment firms, Microsoft represents 65-80% of technology spend, making optimization particularly valuable.
            </p>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
              <div className="bg-purple-50 p-6 border-b border-purple-100">
                <h3 className="text-xl font-bold text-purple-800 mb-2">Direct Financial Benefits</h3>
                <p className="text-gray-700">
                  Our Microsoft optimization approach delivers substantial cost savings while enhancing capabilities.
                </p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-5 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700 mb-2">25-40%</div>
                    <div className="text-gray-700">Average reduction in total Microsoft spend through strategic license management, consolidation, and right-sizing</div>
                  </div>
                  <div className="bg-purple-50 p-5 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700 mb-2">$75K-$120K</div>
                    <div className="text-gray-700">Typical annual savings for a 50-person investment firm</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-purple-800 mb-3">Enhanced Security</h3>
                <p className="text-gray-700 mb-4">
                  Activate built-in Microsoft security controls that you already own but haven't properly configured.
                </p>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-purple-700">35%</div>
                  <div className="text-sm text-gray-600">Improvement in security posture</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-purple-800 mb-3">Operational Efficiency</h3>
                <p className="text-gray-700 mb-4">
                  Leverage purpose-built workflows and collaboration features aligned with investment activities.
                </p>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-purple-700">15-20%</div>
                  <div className="text-sm text-gray-600">Increase in team productivity</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-purple-800 mb-3">Vendor Consolidation</h3>
                <p className="text-gray-700 mb-4">
                  Reduce management overhead by consolidating multiple point solutions into the Microsoft ecosystem.
                </p>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-purple-700">70%</div>
                  <div className="text-sm text-gray-600">Reduction in vendor management</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-md overflow-hidden">
              <div className="p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Our Optimization Approach</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckSquare className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-1" />
                        <span>Comprehensive inventory assessment of all Microsoft assets</span>
                      </li>
                      <li className="flex items-start">
                        <CheckSquare className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-1" />
                        <span>Phased approach to minimize operational disruption</span>
                      </li>
                      <li className="flex items-start">
                        <CheckSquare className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-1" />
                        <span>Focus on investment-specific workflows rather than generic business processes</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckSquare className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-1" />
                        <span>Documented governance processes for ongoing management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckSquare className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-1" />
                        <span>Technical debt remediation before optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckSquare className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-1" />
                        <span>Knowledge transfer to internal teams for long-term value</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MicrosoftBusinessValueSection;