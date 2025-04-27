import React from 'react';
import { CheckSquare, Target } from 'lucide-react';

/**
 * A reusable component for highlighting the enterprise-boutique gap
 * 
 * @param {Object} props
 * @param {string} props.title - The section title
 * @param {string} props.description - The main description text
 * @param {Object} props.challenge - The challenge section content
 * @param {string} props.challenge.title - Challenge section title
 * @param {Array} props.challenge.items - Array of challenge items to display
 * @param {Object} props.solution - The solution section content
 * @param {string} props.solution.title - Solution section title
 * @param {Array} props.solution.items - Array of solution items to display
 * @param {string} props.gradientFrom - Starting gradient color (default: "black")
 * @param {string} props.gradientTo - Ending gradient color (default: "blue-900")
 * @param {string} props.textColor - Text color (default: "white")
 * @param {string} props.accentColor - Accent color for solution icons (default: "green-400")
 * @param {string} props.className - Additional CSS classes
 */
const GapHighlightSection = ({
  title = "The Enterprise-Boutique Gap",
  description = "Boutique alternative investment firms face a fundamental challenge: they must satisfy the same institutional investor expectations and regulatory requirements as $50B+ firms, but with a fraction of the resources.",
  challenge = {
    title: "The Challenge",
    items: [
      "You need institutional-grade technology but can't justify enterprise costs",
      "Generic IT providers don't understand investment operations"
    ]
  },
  solution = {
    title: "Our Solution",
    items: [
      "Enterprise expertise adapted to boutique scale and budget",
      "Investment-specific technology solutions and methodologies"
    ]
  },
  gradientFrom = "black",
  gradientTo = "blue-900",
  textColor = "white",
  accentColor = "green-400",
  className = "",
  roundedCorners = true,
  shadow = true
}) => {
  // Compose the CSS classes for the main container
  const containerClasses = `
    bg-gradient-to-r from-${gradientFrom} to-${gradientTo} 
    text-${textColor} 
    ${roundedCorners ? 'rounded-xl' : ''} 
    overflow-hidden 
    ${shadow ? 'shadow-lg' : ''} 
    ${className}
  `;

  // CSS classes for the content panels
  const panelClasses = "bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm";

  return (
    <div className={containerClasses}>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-lg mb-6">
          {description}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Challenge Section */}
          <div className={panelClasses}>
            <h4 className="font-semibold text-lg mb-3">{challenge.title}</h4>
            <ul className="space-y-3">
              {challenge.items.map((item, index) => (
                <li key={`challenge-${index}`} className="flex items-start">
                  <Target className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Solution Section */}
          <div className={panelClasses}>
            <h4 className="font-semibold text-lg mb-3">{solution.title}</h4>
            <ul className="space-y-3">
              {solution.items.map((item, index) => (
                <li key={`solution-${index}`} className="flex items-start">
                  <CheckSquare className={`w-5 h-5 text-${accentColor} mr-3 flex-shrink-0 mt-1`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GapHighlightSection;