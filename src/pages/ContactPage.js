// src/pages/ContactPage.js
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Send, 
  CheckCircle,
  Clock,
  User,
  Briefcase,
  ArrowRight,
  Download
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    firmType: 'Hedge Fund'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          firmType: 'Hedge Fund'
        });
      }, 5000);
    }, 1500);
  };
  
  // Contact options
  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Us",
      content: "info@itiliti.io",
      link: "mailto:info@itiliti.io"
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Call Us",
      content: "(631) 400-4299",
      link: "tel:6314004299"
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      title: "Schedule a Meeting",
      content: "Book a 30-minute consultation",
      link: "/schedule"
    }
  ];
  
  // Office locations from Footer.js
  const officeLocations = [
    {
      name: "Main Office",
      address: "156 East Main Street",
      city: "Port Jefferson, NY 11777",
      phone: "(631) 400-4299",
      email: "info@itiliti.io"
    },
    {
      name: "Satellite Office",
      city: "NYC",
      phone: "(631) 400-4299"
    },
    {
      name: "Satellite Office",
      city: "Charlotte, NC",
      phone: "(631) 552-5048"
    },
    {
      name: "Satellite Office",
      city: "Palm Beach, FL",
      phone: "(561) 701-1486"
    }
  ];
  
  // FAQ items
  const faqItems = [
    {
      question: "What services do you provide to alternative investment firms?",
      answer: "We provide a comprehensive suite of technology services tailored specifically for alternative investment firms, including managed security, Microsoft optimization, fractional CxO services, AI strategy and implementation, workflow automation, and regulatory compliance solutions."
    },
    {
      question: "How quickly can you respond to critical technology issues?",
      answer: "Our service level agreements (SLAs) for critical issues guarantee a response time of 15 minutes or less during market hours, with 24/7 emergency support available for our managed service clients."
    },
    {
      question: "Do you work with firms outside the United States?",
      answer: "Yes, we support alternative investment firms globally, with particular expertise in the regulatory environments of the US, UK, EU, Singapore, and Hong Kong."
    }
  ];

  // Static hero content for the page
  const heroContent = {
    title: "Contact Us",
    subtitle: "Investment Technology Partners",
    description: "Have questions about our services or want to discuss your firm's specific technology needs? Our team of investment technology experts is ready to help.",
    backgroundImage: "/images/hero-contact.png", // Replace with your actual image path
    gradient: "from-gray-900 to-blue-900" // Custom gradient for contact page
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section - Styled like Service/Segment Hero */}
      <div className="relative text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0" 
          style={{ 
            backgroundImage: `url("${heroContent.backgroundImage}")`,
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${heroContent.gradient} opacity-75 z-10`}></div>
        
        {/* Content */}
        <div className="container relative mx-auto px-6 py-20 z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full text-blue-200 text-sm font-medium mb-5">
              <MessageSquare className="w-4 h-4 mr-2" />
              We'd Love to Hear From You
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
              {heroContent.title}
              <br/>
              <span className="text-blue-300">{heroContent.subtitle}</span>
            </h1>
            
            <p className="text-xl mb-8 max-w-2xl text-shadow-md">{heroContent.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact-form"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send a Message
              </a>
              <a 
                href="#consultation"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Information Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactOptions.map((option, index) => (
              <a 
                key={index} 
                href={option.link}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
              >
                <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-gray-600">{option.content}</p>
              </a>
            ))}
          </div>
          
          {/* Contact Form Section */}
          <div id="contact-form" className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <p className="mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 text-blue-200 mt-1" />
                    <div>
                      <h4 className="font-medium text-lg">Business Hours</h4>
                      <p className="text-blue-100">Monday - Friday: 8am - 6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-blue-200 mt-1" />
                    <div>
                      <h4 className="font-medium text-lg">Main Office</h4>
                      <p className="text-blue-100">Port Jefferson, NY</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="mb-6 mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <div className="relative">
                          <div className="absolute left-3 top-3 text-gray-400">
                            <User className="w-5 h-5" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="John Smith"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                          <div className="absolute left-3 top-3 text-gray-400">
                            <Mail className="w-5 h-5" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <div className="relative">
                          <div className="absolute left-3 top-3 text-gray-400">
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Company"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <div className="relative">
                          <div className="absolute left-3 top-3 text-gray-400">
                            <Phone className="w-5 h-5" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="(555) 555-5555"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="firmType" className="block text-sm font-medium text-gray-700 mb-1">Firm Type</label>
                      <select
                        id="firmType"
                        name="firmType"
                        value={formData.firmType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="Hedge Fund">Hedge Fund</option>
                        <option value="Private Equity">Private Equity</option>
                        <option value="Venture Capital">Venture Capital</option>
                        <option value="Family Office">Family Office</option>
                        <option value="Real Estate">Real Estate Investment</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us about your needs or questions..."
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className={`w-full py-3 px-4 rounded-lg font-medium text-white ${
                          isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                        } transition-colors flex items-center justify-center`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="mr-2">Sending...</span>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Office Locations - Updated from Footer.js */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Offices</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {officeLocations.map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3">{location.name}</h3>
                <div className="flex items-start mb-3">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    {location.address && (
                      <p className="text-gray-700">
                        {location.address}<br/>
                        {location.city}
                      </p>
                    )}
                    {!location.address && (
                      <p className="text-gray-700">{location.city}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{location.phone}</p>
                </div>
                {location.email && (
                  <div className="flex items-start mt-3">
                    <Mail className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{location.email}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
            
      {/* Schedule Consultation CTA */}
      <div id="consultation" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your technology?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation with one of our investment technology experts.
          </p>
          <a 
            href="/schedule" 
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-lg inline-flex items-center transition-colors"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;