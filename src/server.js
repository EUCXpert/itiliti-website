// src/server.js (Express application setup)

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './api/routes';
import MicrosoftCalendarService from './services/MicrosoftCalendarService';
import graphConfig from './config/graphConfig';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Microsoft Calendar Service
try {
  MicrosoftCalendarService.initialize(graphConfig);
  console.log('Microsoft Calendar Service initialized successfully');
} catch (error) {
  console.error('Failed to initialize Microsoft Calendar Service:', error);
  // Continue running the server even if calendar service fails
  // You could implement a fallback method for scheduling consultations
}

// API Routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'An unexpected error occurred',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});