import React from 'react';
import { CheckSquare } from 'lucide-react';

const AiUseCasesSection = () => {
  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">AI Applications for Investment Excellence</h2>
          <p className="text-xl text-gray-700 mb-10 text-center">
            Our AI solutions deliver measurable impact across the investment lifecycle,
            enhancing your team's capabilities rather than replacing human expertise.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Investment Research Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Investment Research Enhancement</h3>
              <p className="text-gray-700 mb-4">
                Process thousands of documents, earnings calls, and alternative data sources to identify valuable insights that human analysts might miss.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold mb-2">Impact Metrics:</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">40% reduction in document analysis time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">3.5x more potential investments evaluated</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Identify non-obvious connections between companies and trends</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Due Diligence Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Due Diligence Acceleration</h3>
              <p className="text-gray-700 mb-4">
                Transform document-heavy due diligence processes by extracting key information from contracts, financial statements, and regulatory filings.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold mb-2">Impact Metrics:</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">65% faster document review process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Identify contract inconsistencies and risk factors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Focus deal teams on high-value assessment activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Implementation Approach</h3>
            <p className="text-gray-700 mb-6">
              Successful AI implementation requires a thoughtful approach that addresses data quality, maintains appropriate human oversight, and focuses on specific high-value use cases.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Data Integration</h4>
                <p className="text-sm text-gray-700">
                  We establish strong data foundations, integrating both proprietary and third-party sources to ensure high-quality AI outputs.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Human-AI Balance</h4>
                <p className="text-sm text-gray-700">
                  Our solutions enhance analyst capabilities rather than replacing judgment, maintaining humans as the ultimate decision authority.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Focused Use Cases</h4>
                <p className="text-sm text-gray-700">
                  We begin with targeted, high-value applications rather than attempting comprehensive transformation all at once.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiUseCasesSection;