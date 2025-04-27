// Define service categories to group similar services
export const SERVICE_CATEGORIES = {
    ADVISORY: {
      id: "advisory",
      name: "Advisory Services",
      description: "Strategic guidance and expertise to optimize your alternative investment operations.",
      colorScheme: {
        primary: "blue",
        secondary: "blue"
      }
    },
    SECURITY: {
      id: "security",
      name: "Security Services",
      description: "Comprehensive protection for your investment data and operations.",
      colorScheme: {
        primary: "red",
        secondary: "blue"
      }
    },
    COMPLIANCE: {
      id: "compliance",
      name: "Compliance Services",
      description: "Navigate regulatory requirements with technology-powered solutions.",
      colorScheme: {
        primary: "orange",
        secondary: "blue"
      }
    },
    INFRASTRUCTURE: {
      id: "infrastructure",
      name: "Infrastructure Services",
      description: "Reliable and scalable technology foundation for your investment operations.",
      colorScheme: {
        primary: "purple",
        secondary: "blue"
      }
    }
  };
  
  // Map service IDs to their categories
  export const SERVICE_CATEGORY_MAP = {
    "cxo-services": SERVICE_CATEGORIES.ADVISORY,
    "electronic-message-archiving": SERVICE_CATEGORIES.COMPLIANCE,
    "microsoft-optimization": SERVICE_CATEGORIES.INFRASTRUCTURE,
    "private-msp": SERVICE_CATEGORIES.INFRASTRUCTURE,
    "regulatory-compliance": SERVICE_CATEGORIES.COMPLIANCE,
    "security-foundation": SERVICE_CATEGORIES.SECURITY,
    "ai-services": SERVICE_CATEGORIES.ADVISORY,
    "workflow-automation": SERVICE_CATEGORIES.INFRASTRUCTURE
  };
  
  // Define base tabs that appear on all service pages
  export const BASE_SERVICE_TABS = [
    {
      id: "overview",
      label: "Overview",
      required: true
    },
    {
      id: "solutions",
      label: "Our Solutions",
      required: true
    },
    {
      id: "approach",
      label: "Our Approach",
      required: false
    },
    {
      id: "casestudy",
      label: "Case Study",
      required: false
    },
    {
      id: "faqs",
      label: "FAQs",
      required: false
    }
  ];