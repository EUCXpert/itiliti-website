// src/pages/AboutUsPage.js
import React from 'react';
import { 
  Users, 
  Building, 
  Award, 
  CheckSquare, 
  ArrowRight, 
  BrainCircuit, 
  Shield,
  Globe,
  BarChart4
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Michael Thompson",
      title: "Founder & CEO",
      bio: "Former CTO of a $2B hedge fund with 20+ years of financial technology leadership experience across alternative investment strategies.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Sarah Chen",
      title: "Chief Technology Officer",
      bio: "15+ years designing resilient technology solutions for boutique investment firms with expertise in security architecture and infrastructure optimization.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "David Rodriguez",
      title: "Head of Advisory Services",
      bio: "Former CISO at a multi-strategy investment firm with extensive regulatory compliance and institutional investor due diligence experience.",
      image: "/api/placeholder/400/400"
    }
  ];

  // Core values data
  const coreValues = [
    {
      title: "Investment-First Thinking",
      description: "Every technology decision is evaluated through the lens of its impact on investment operations and performance.",
      icon: <BarChart4 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Boutique-Scale Solutions",
      description: "Enterprise capabilities delivered at a scale and cost appropriate for sub-billion-dollar AUM firms.",
      icon: <Building className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Security as Foundation",
      description: "Security integrated as a fundamental element rather than an afterthought or add-on.",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Technology as Leverage",
      description: "Focus on solutions that allow small teams to effectively manage growing AUM without proportional headcount increases.",
      icon: <BrainCircuit className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white relative">
        <div className="absolute inset-0 bg-blue-900 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full text-blue-200 text-sm font-medium mb-5">
              <Users className="w-4 h-4 mr-2" />
              Built by Investment Technology Veterans
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ITILITI Technology Partners</h1>
            
            <p className="text-xl mb-8 max-w-2xl leading-relaxed">
              We're a team of former investment firm technology leaders who understand the unique needs of boutique alternative investment firms. Our mission is to provide enterprise-grade technology solutions tailored specifically for sub-billion dollar AUM managers.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#team-section"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </a>
              <a 
                href="#values-section"
                className="bg-transparent border border-white hover:bg-white hover:bg-opacity-10 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
              >
                <Award className="w-5 h-5 mr-2" />
                Our Values
              </a>
            </div>
          </div>
        </div>
      </div>
            
      {/* Team Section */}
      <div id="team-section" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-4">{member.title}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div id="values-section" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-start">
              <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
                {value.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;