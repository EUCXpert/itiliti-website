import React, { useState } from 'react';
import Navigation from './Navigation';
import { MapPin, Phone, Mail, Clock, Calendar, ArrowRight, MessageSquare, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'general'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here in a production environment
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        service: 'general'
      });
    }, 5000);
  };

  const locations = [
    {
      title: "Main Office",
      address: "156 East Main Street",
      city: "Port Jefferson, NY 11777",
      phone: "(631) 400-4299",
      email: "info@itiliti.io"
    },
    {
      title: "Satellite Office",
      address: "Charlotte, NC",
      phone: "(631) 552-5048"
    },
    {
      title: "Satellite Office",
      address: "Palm Beach, FL",
      phone: "(561) 701-1486"
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-blue-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Reach out to discuss how our boutique approach to enterprise technology can transform your alternative investment firm's operations.
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">{location.title}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">Address</div>
                        <address className="not-italic text-gray-600">
                          {location.address}<br />
                          {location.city && location.city}
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="text-blue-600 hover:text-blue-800">
                          {location.phone}
                        </a>
                      </div>
                    </div>
                    
                    {location.email && (
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">Email</div>
                          <a href={`mailto:${location.email}`} className="text-blue-600 hover:text-blue-800">
                            {location.email}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">Thank You!</h3>
                  <p className="text-gray-700">
                    Your message has been received. A member of our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="security">Security Foundation</option>
                      <option value="microsoft">Microsoft Optimization</option>
                      <option value="cxo">CxO Advisory Services</option>
                      <option value="ai">AI Solutions</option>
                      <option value="archiving">Electronic Message Archiving</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange} 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">How We Can Help</h2>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
                <h3 className="text-xl font-semibold mb-4">Schedule a Consultation</h3>
                <p className="text-gray-700 mb-4">
                  Request a complimentary consultation to discuss your firm's specific challenges and how our specialized approach can help.
                </p>
                <button className="flex items-center text-blue-600 font-medium">
                  Schedule Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Quick Response</h3>
                      <p className="text-gray-600 text-sm">
                        We pride ourselves on responsive communication. Expect a reply to your inquiry within one business day.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Assessments</h3>
                      <p className="text-gray-600 text-sm">
                        Request a complimentary assessment of your security posture, AI readiness, or operational due diligence preparedness.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        After-hours support available for clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default ContactPage;