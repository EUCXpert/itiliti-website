import React, { useState } from 'react';

const AIFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Would normally submit to newsletter service
    setIsSubscribed(true);
    setEmail('');
    
    // Reset the success message after a few seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };
  
  // Footer sections
  const footerSections = [
    {
      title: 'AI Solutions',
      links: [
        { name: 'Research Enhancement', href: '/solutions/research' },
        { name: 'Due Diligence Acceleration', href: '/solutions/due-diligence' },
        { name: 'Portfolio Analytics', href: '/solutions/portfolio' },
        { name: 'Market Trend Analysis', href: '/solutions/market-trends' },
        { name: 'Regulatory Compliance AI', href: '/solutions/compliance' }
      ]
    },
    {
      title: 'Technologies',
      links: [
        { name: 'Generative AI', href: '/technologies/generative-ai' },
        { name: 'Natural Language Processing', href: '/technologies/nlp' },
        { name: 'Computer Vision', href: '/technologies/computer-vision' },
        { name: 'Predictive Analytics', href: '/technologies/predictive-analytics' },
        { name: 'Machine Learning', href: '/technologies/machine-learning' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'White Papers', href: '/resources/white-papers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Webinars', href: '/resources/webinars' },
        { name: 'Partner Directory', href: '/partners' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' }
      ]
    }
  ];
  
  return (
    <footer className="bg-gray-900">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* Logo and contact info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <a href="/" className="flex items-center">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="text-white font-bold text-2xl">
                      ITILITI<span className="text-blue-400">.ai</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            
            <p className="text-gray-400 mb-6">
              Enterprise-grade AI solutions built specifically for boutique alternative investment firms.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-gray-400">156 East Main Street<br/>Port Jefferson, NY 11777</span>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:(631) 400-4299" className="text-gray-400 hover:text-blue-400 transition-colors">(631) 400-4299</a>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@itiliti.ai" className="text-gray-400 hover:text-blue-400 transition-colors">info@itiliti.ai</a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-900 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-900 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-900 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-900 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 hover:bg-blue-900 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Footer Link Sections */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-blue-400 transition-colors inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="max-w-md mx-auto">
            <h3 className="text-white font-semibold mb-4 text-center">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4 text-center">Stay updated with the latest AI advancements for alternative investment</p>
            
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            {isSubscribed && (
              <div className="mt-2 text-green-400 text-center">
                Thank you for subscribing!
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ITILITI.ai. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
              <a href="/terms" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
              <a href="/cookies" className="text-gray-500 hover:text-gray-400 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AIFooter;