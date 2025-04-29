// src/api/routes.js

import express from 'express';
import { scheduleConsultation, getAvailableTimeSlots } from './consultationController';

const router = express.Router();

// Consultation scheduling endpoints
router.post('/schedule-consultation', scheduleConsultation);
router.get('/available-time-slots/:date', getAvailableTimeSlots);

export default router;