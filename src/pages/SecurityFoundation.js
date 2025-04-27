// src/pages/SecurityFoundation.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const SecurityFoundation = () => {
  // Redirect to the new dynamic route format
  return <Navigate to="/services/security-foundation" replace />;
};

export default SecurityFoundation;