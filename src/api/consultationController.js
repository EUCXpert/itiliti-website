// src/api/consultationController.js

import MicrosoftCalendarService from '../services/MicrosoftCalendarService';

/**
 * Controller for handling consultation scheduling requests
 */
export const scheduleConsultation = async (req, res) => {
  try {
    // Extract form data from request body
    const { name, email, company, date, time, notes, employeeCount } = req.body;
    
    // Validate required fields
    if (!name || !email || !company || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields. Please provide name, email, company, date, and time.'
      });
    }
    
    // Create meeting using Microsoft Calendar Service
    const meeting = await MicrosoftCalendarService.createMeeting({
      name,
      email,
      company,
      date,
      time,
      notes,
      employeeCount
    });
    
    // Save consultation data to your database (optional)
    // await saveConsultationToDatabase({
    //   name,
    //   email,
    //   company,
    //   date,
    //   time,
    //   notes,
    //   employeeCount,
    //   meetingId: meeting.id,
    //   joinUrl: meeting.onlineMeeting?.joinUrl
    // });
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Consultation scheduled successfully',
      data: {
        meetingId: meeting.id,
        meetingLink: meeting.onlineMeeting?.joinUrl,
        scheduledTime: meeting.start.dateTime
      }
    });
    
  } catch (error) {
    console.error('Consultation scheduling error:', error);
    
    // Return appropriate error response
    return res.status(500).json({
      success: false,
      message: 'Failed to schedule consultation. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * Controller for getting available time slots
 */
export const getAvailableTimeSlots = async (req, res) => {
  try {
    const { date } = req.params;
    
    // Validate date format (YYYY-MM-DD)
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid date format. Please use YYYY-MM-DD format.'
      });
    }
    
    // Get available time slots from calendar
    const timeSlots = await MicrosoftCalendarService.getAvailableTimeSlots(date);
    
    return res.status(200).json({
      success: true,
      data: {
        date,
        availableTimeSlots: timeSlots
      }
    });
    
  } catch (error) {
    console.error('Error fetching available time slots:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch available time slots. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};