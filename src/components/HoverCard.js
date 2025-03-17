import React from 'react';
import { Link } from 'react-router-dom';

// Reusable Card component with hover effects
const HoverCard = ({ 
  children, 
  className = "", 
  href = null, 
  onClick = null,
  hoverEffect = "scale", // Options: "scale", "lift", "both", "none"
}) => {
  // Base classes that all cards will have
  let baseClasses = "bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300";
  
  // Add hover effect classes based on the hoverEffect prop
  if (hoverEffect === "scale") {
    baseClasses += " hover:scale-105";
  } else if (hoverEffect === "lift") {
    baseClasses += " hover:-translate-y-1 hover:shadow-xl";
  } else if (hoverEffect === "both") {
    baseClasses += " hover:scale-105 hover:-translate-y-1 hover:shadow-xl";
  }
  
  // Merge with any additional classes passed as props
  const cardClasses = `${baseClasses} ${className}`;
  
  // If an href is provided, wrap in a Link component
  if (href) {
    return (
      <Link to={href} className={cardClasses}>
        {children}
      </Link>
    );
  }
  
  // If onClick is provided, make the card clickable
  if (onClick) {
    return (
      <div className={`${cardClasses} cursor-pointer`} onClick={onClick}>
        {children}
      </div>
    );
  }
  
  // Default case: just a regular card with no link/click behavior
  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default HoverCard;