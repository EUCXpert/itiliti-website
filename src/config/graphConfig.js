// src/config/graphConfig.js

/**
 * Configuration for Microsoft Graph API
 * These values should be stored in environment variables
 */
export const graphConfig = {
    tenantId: process.env.MS_GRAPH_TENANT_ID,
    clientId: process.env.MS_GRAPH_CLIENT_ID,
    clientSecret: process.env.MS_GRAPH_CLIENT_SECRET,
    calendarUser: process.env.MS_GRAPH_CALENDAR_USER || 'sales@itiliti.io'
  };
  
  export default graphConfig;