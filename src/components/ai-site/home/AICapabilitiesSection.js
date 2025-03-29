import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AICapabilitiesSection = () => {
  const [activeCapability, setActiveCapability] = useState(0);
  
  const capabilities = [
    {
      title: "Investment Research Enhancement",
      description: "Transform research productivity with AI that processes thousands of documents, earnings calls, and data sources to identify signals human analysts might miss.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
          <path d="M16.5 9.4 7.55 4.24"></path>
          <circle cx="18.5" cy="15.5" r="2.5"></circle>
          <path d="M20.27 17.27 22 19"></path>
        </svg>
      ),
      features: [
        "Processes 100+ page documents in seconds",
        "Detects sentiment patterns across earnings calls",
        "Identifies non-obvious connections between companies",
        "Synthesizes insights from multiple data sources"
      ],
      background: "bg-gradient-to-br from-blue-900 to-indigo-900"
    },
    {
      title: "Due Diligence Acceleration",
      description: "Streamline document-heavy due diligence by automatically extracting key data points from contracts, financial statements, and regulatory filings.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="14.5 2.5 19 7 14.5 11.5"></polyline>
          <rect x="3" y="2.5" width="12" height="9" rx="1"></rect>
          <path d="M3 16.5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H9"></path>
        </svg>
      ),
      features: [
        "Extracts key terms from legal documents",
        "Flags inconsistencies across deal documentation", 
        "Automates financial statement analysis",
        "Creates comprehensive risk assessment reports"
      ],
      background: "bg-gradient-to-br from-purple-900 to-indigo-900"
    },
    {
      title: "Portfolio Analytics",
      description: "Enhance portfolio insights with advanced analytics that discover hidden patterns, assess risk exposure, and identify optimization opportunities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <path d="m6 14 8-10 4 6"></path>
        </svg>
      ),
      features: [
        "Multi-factor correlation analysis",
        "Automated performance attribution",
        "Scenario modeling with ML predictions",
        "Custom benchmarking with adaptive metrics"
      ],
      background: "bg-gradient-to-br from-indigo-900 to-blue-900"
    },
    {
      title: "Market Trend Analysis",
      description: "Identify emerging trends before they're obvious with AI that processes news, social media, and alternative data to gain market insights.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
      features: [
        "Real-time sentiment analysis of news and social media",
        "Pattern detection across disparate data sources",
        "Sector rotation prediction with confidence scoring",
        "Automated alert system for anomaly detection"
      ],
      background: "bg-gradient-to-br from-sky-900 to-blue-900"
    },
    {
      title: "Regulatory Compliance AI",
      description: "Stay ahead of regulatory requirements with AI that monitors rule changes, identifies compliance gaps, and automates reporting.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
        </svg>
      ),
      features: [
        "Continuous monitoring of regulatory changes",
        "Automated gap analysis against current controls",
        "Pre-built templates for SEC, FINRA filings",
        "AI-powered document verification"
      ],
      background: "bg-gradient-to-br from-blue-900 to-sky-900"
    }
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Animation for data flow in SVG
  const dataPoints = Array(20).fill().map((_, i) => ({
    id: i,
    position: Math.random() * 100,
    speed: Math.random() * 2 + 1,
    size: Math.random() * 4 + 2
  }));
  
  const [flowPoints, setFlowPoints] = useState(dataPoints);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setFlowPoints(points => 
        points.map(point => ({
          ...point,
          position: (point.position + point.speed) % 100
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);