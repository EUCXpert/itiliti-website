// src/api/scheduleConsultation.js
// This would typically be implemented in your backend service (Node.js/Express)

import { createMeetingInvite } from './graphCalendarIntegration';
import nodemailer from 'nodemailer';
import ical from 'ical-generator';

// Configure email transport (you would use your SMTP settings)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

/**
 * Handle consultation scheduling requests
 * This demonstrates both approaches:
 * 1. Using Microsoft Graph API (primary)
 * 2. Fallback to email with iCalendar attachment
 */
export async function handleScheduleConsultation(req, res) {
  try {
    const formData = req.body;
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    
    // Format the meeting details
    const startDateTime = new Date(`${formData.date}T${convertTo24Hour(formData.time)}`);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 hour meeting
    
    let meetingResult;
    
    try {
      // Approach 1: Try to use Microsoft Graph API
      meetingResult = await createMeetingInvite(formData);
      console.log('Meeting scheduled successfully via Graph API');
    } catch (graphError) {
      console.error('Error with Graph API, falling back to email method:', graphError);
      
      // Approach 2: Fall back to email with iCalendar attachment
      meetingResult = await sendCalendarInviteEmail(formData, startDateTime, endDateTime);
    }
    
    // Store the meeting in your database (optional)
    // await storeConsultationInDatabase(formData, meetingResult);
    
    // Return success
    return res.status(200).json({ 
      message: 'Consultation scheduled successfully',
      meetingId: meetingResult.id || null
    });
    
  } catch (error) {
    console.error('Error scheduling consultation:', error);
    return res.status(500).json({ 
      message: 'An error occurred while scheduling your consultation'
    });
  }
}

/**
 * Send calendar invite via email with iCalendar attachment
 * This is a fallback method if Microsoft Graph API is not available
 */
async function sendCalendarInviteEmail(formData, startDateTime, endDateTime) {
  // Create iCalendar event
  const calendar = ical({
    domain: 'itiliti.io',
    prodId: { company: 'ITILITI', product: 'Scheduling' },
    name: 'ITILITI Consultation'
  });
  
  const event = calendar.createEvent({
    start: startDateTime,
    end: endDateTime,
    summary: `ITILITI Consultation - ${formData.name}`,
    description: formData.notes || 'Consultation meeting with ITILITI Technology Partners',
    location: 'Microsoft Teams Meeting',
    organizer: {
      name: 'ITILITI Sales Team',
      email: 'sales@itiliti.io'
    },
    attendees: [
      {
        name: formData.name,
        email: formData.email,
        rsvp: true,
        role: 'REQ-PARTICIPANT',
        status: 'NEEDS-ACTION'
      }
    ]
  });
  
  // Set up email with calendar attachment
  const mailOptions = {
    from: '"ITILITI Technology Partners" <sales@itiliti.io>',
    to: formData.email,
    cc: 'sales@itiliti.io',
    subject: `ITILITI Consultation - ${new Date(startDateTime).toLocaleDateString()}`,
    text: `
      Hi ${formData.name},
      
      Thank you for scheduling a consultation with ITILITI Technology Partners. We're looking forward to speaking with you.
      
      Date: ${new Date(startDateTime).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
      Time: ${formData.time}
      
      ${formData.notes ? `Notes: ${formData.notes}` : ''}
      
      Please find the calendar invitation attached. You can add this to your calendar by opening the attachment.
      
      Best regards,
      ITILITI Technology Partners
    `,
    html: `
      <p>Hi ${formData.name},</p>
      <p>Thank you for scheduling a consultation with ITILITI Technology Partners. We're looking forward to speaking with you.</p>
      <p><strong>Date:</strong> ${new Date(startDateTime).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}<br>
      <strong>Time:</strong> ${formData.time}</p>
      ${formData.notes ? `<p><strong>Notes:</strong> ${formData.notes}</p>` : ''}
      <p>Please find the calendar invitation attached. You can add this to your calendar by opening the attachment.</p>
      <p>Best regards,<br>ITILITI Technology Partners</p>
    `,
    alternatives: [
      {
        contentType: 'text/calendar',
        method: 'REQUEST',
        content: calendar.toString()
      }
    ],
    icalEvent: {
      method: 'REQUEST',
      content: calendar.toString()
    }
  };
  
  // Send the email
  const info = await transporter.sendMail(mailOptions);
  console.log('Calendar invite email sent:', info.messageId);
  
  return {
    id: `email-${Date.now()}`,
    emailId: info.messageId
  };
}

/**
 * Convert 12-hour time format to 24-hour format
 */
function convertTo24Hour(time12h) {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  
  if (hours === '12') {
    hours = '00';
  }
  
  if (modifier === 'PM' || modifier === 'pm') {
    hours = parseInt(hours, 10) + 12;
  }
  
  return `${hours}:${minutes}:00`;
}

export default handleScheduleConsultation;