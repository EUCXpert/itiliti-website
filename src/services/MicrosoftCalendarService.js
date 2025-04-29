// src/services/MicrosoftCalendarService.js

import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';

/**
 * Service for integrating with Microsoft Graph Calendar API
 * This allows for creating calendar events and sending meeting invites
 */
class MicrosoftCalendarService {
  constructor() {
    this.isInitialized = false;
    this.client = null;
  }

  /**
   * Initialize the Microsoft Graph client with credentials
   * This should be called once when your application starts
   */
  initialize(config) {
    try {
      // Create a credential using client secret
      const credential = new ClientSecretCredential(
        config.tenantId,
        config.clientId,
        config.clientSecret
      );
      
      // Create an auth provider
      const authProvider = new TokenCredentialAuthenticationProvider(credential, {
        scopes: ['https://graph.microsoft.com/.default']
      });
      
      // Initialize Graph client
      this.client = Client.init({
        authProvider: authProvider,
        debugLogging: process.env.NODE_ENV !== 'production'
      });
      
      this.calendarUser = config.calendarUser || 'sales@itiliti.io';
      this.isInitialized = true;
      
      console.log('Microsoft Graph Calendar service initialized successfully');
      
      return true;
    } catch (error) {
      console.error('Failed to initialize Microsoft Graph client:', error);
      this.isInitialized = false;
      throw error;
    }
  }

  /**
   * Create a calendar event with meeting details
   * @param {Object} meetingDetails - Meeting information from the consultation form
   * @returns {Promise<Object>} - Created event object
   */
  async createMeeting(meetingDetails) {
    if (!this.isInitialized || !this.client) {
      throw new Error('Microsoft Graph client not initialized. Call initialize() first.');
    }

    try {
      // Parse the date and time from the form
      const startDateTime = this.parseDateTime(meetingDetails.date, meetingDetails.time);
      const endDateTime = new Date(startDateTime);
      endDateTime.setMinutes(endDateTime.getMinutes() + 60); // 1 hour meeting
      
      // Create the event object
      const event = {
        subject: `ITILITI Consultation - ${meetingDetails.name}`,
        body: {
          contentType: 'HTML',
          content: this.generateEmailContent(meetingDetails)
        },
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: 'Eastern Standard Time' // Change to your timezone
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: 'Eastern Standard Time' // Change to your timezone
        },
        location: {
          displayName: 'Microsoft Teams Meeting'
        },
        attendees: [
          {
            emailAddress: {
              address: meetingDetails.email,
              name: meetingDetails.name
            },
            type: 'required'
          }
        ],
        // Enable online meeting for Microsoft Teams
        isOnlineMeeting: true,
        onlineMeetingProvider: 'teamsForBusiness'
      };
      
      // Create the event and send invitations
      const createdEvent = await this.client
        .api(`/users/${this.calendarUser}/calendar/events`)
        .post(event);
        
      console.log('Meeting created successfully:', createdEvent.id);
      
      return createdEvent;
    } catch (error) {
      console.error('Error creating meeting:', error);
      throw error;
    }
  }
  
  /**
   * Parse date string and time string into a Date object
   * @param {string} dateStr - Date in YYYY-MM-DD format
   * @param {string} timeStr - Time in "10:00 AM" format
   * @returns {Date} - Parsed date object
   */
  parseDateTime(dateStr, timeStr) {
    // Handle time format like "10:00 AM"
    const [timePart, period] = timeStr.split(' ');
    let [hours, minutes] = timePart.split(':').map(num => parseInt(num, 10));
    
    // Convert to 24-hour format
    if (period === 'PM' && hours < 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }
    
    // Create date object
    const date = new Date(dateStr);
    date.setHours(hours, minutes, 0, 0);
    
    return date;
  }
  
  /**
   * Generate HTML content for the meeting invitation
   * @param {Object} meetingDetails - Form data
   * @returns {string} - HTML content
   */
  generateEmailContent(meetingDetails) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">ITILITI Technology Partners - Consultation</h2>
        <p>Hello ${meetingDetails.name},</p>
        <p>Thank you for scheduling a consultation with ITILITI Technology Partners. 
          We're looking forward to discussing how we can help ${meetingDetails.company} 
          with your technology needs.</p>
        
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Company:</strong> ${meetingDetails.company}</p>
          ${meetingDetails.notes ? `<p style="margin: 5px 0;"><strong>Topics to discuss:</strong> ${meetingDetails.notes}</p>` : ''}
        </div>
        
        <p>You can join this meeting using Microsoft Teams. A link to join the meeting is included in this calendar invitation.</p>
        
        <p>If you need to reschedule or have any questions before our meeting, 
        please contact us at <a href="mailto:sales@itiliti.io">sales@itiliti.io</a>.</p>
        
        <p>Best regards,<br>
        ITILITI Technology Partners</p>
      </div>
    `;
  }
  
  /**
   * Get a list of available time slots from the calendar
   * This helps prevent double-booking
   * @param {string} date - Date to check in YYYY-MM-DD format
   * @returns {Promise<Array>} - Array of available time slots
   */
  async getAvailableTimeSlots(date) {
    if (!this.isInitialized || !this.client) {
      throw new Error('Microsoft Graph client not initialized. Call initialize() first.');
    }
    
    try {
      // Business hours (9 AM to 5 PM)
      const businessHours = {
        start: 9, // 9 AM
        end: 17,  // 5 PM
        durationMinutes: 60 // 1 hour meetings
      };
      
      // Create date objects for start and end of the day
      const startTime = new Date(date);
      startTime.setHours(businessHours.start, 0, 0, 0);
      
      const endTime = new Date(date);
      endTime.setHours(businessHours.end, 0, 0, 0);
      
      // Get events for the calendar user on this date
      const events = await this.client
        .api(`/users/${this.calendarUser}/calendar/calendarView`)
        .query({
          startDateTime: startTime.toISOString(),
          endDateTime: endTime.toISOString()
        })
        .select('subject,start,end')
        .get();
      
      // Generate all possible time slots
      const allTimeSlots = [];
      for (let hour = businessHours.start; hour < businessHours.end; hour++) {
        allTimeSlots.push(this.formatTimeSlot(hour));
      }
      
      // Filter out booked time slots
      const bookedTimeSlots = events.value.map(event => {
        const startHour = new Date(event.start.dateTime).getHours();
        return this.formatTimeSlot(startHour);
      });
      
      const availableTimeSlots = allTimeSlots.filter(slot => 
        !bookedTimeSlots.includes(slot)
      );
      
      return availableTimeSlots;
    } catch (error) {
      console.error('Error getting available time slots:', error);
      throw error;
    }
  }
  
  /**
   * Format hour number to time slot string
   * @param {number} hour - Hour in 24-hour format
   * @returns {string} - Formatted time string
   */
  formatTimeSlot(hour) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
    return `${hour12}:00 ${period}`;
  }
}

export default new MicrosoftCalendarService();