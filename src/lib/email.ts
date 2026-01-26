// Email API utility for sending messages via Resend
// This integrates with your backend API endpoint that calls Resend

// API endpoint for sending emails - configure this to your backend
const API_ENDPOINT = import.meta.env.VITE_EMAIL_API_ENDPOINT || '/api/send-email';

export interface EmailPayload {
  type: 'contact' | 'newsletter' | 'chat' | 'demo';
  email: string;
  name?: string;
  company?: string;
  message?: string;
  metadata?: Record<string, unknown>;
}

export interface EmailResponse {
  success: boolean;
  error?: string;
}

/**
 * Send an email via the backend API
 * The backend should be configured with Resend API key
 */
export async function sendEmail(payload: EmailPayload): Promise<EmailResponse> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        timestamp: new Date().toISOString(),
        source: window.location.href,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, ...data };
  } catch (error) {
    console.error('Failed to send email:', error);
    
    // For development/demo: simulate success if API endpoint not configured
    if (API_ENDPOINT === '/api/send-email') {
      console.log('Development mode: Email would be sent with payload:', payload);
      return { success: true };
    }
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

/**
 * Send contact form submission
 */
export async function sendContactForm(data: {
  email: string;
  company?: string;
  message: string;
}): Promise<EmailResponse> {
  return sendEmail({
    type: 'contact',
    ...data,
  });
}

/**
 * Subscribe to newsletter
 */
export async function subscribeNewsletter(email: string): Promise<EmailResponse> {
  return sendEmail({
    type: 'newsletter',
    email,
  });
}

/**
 * Send chat message notification
 */
export async function sendChatMessage(data: {
  email?: string;
  message: string;
  conversationHistory?: Array<{ text: string; isBot: boolean }>;
}): Promise<EmailResponse> {
  return sendEmail({
    type: 'chat',
    email: data.email || 'vilmer.frost@gmail.com',
    message: data.message,
    metadata: {
      conversationHistory: data.conversationHistory,
    },
  });
}

/**
 * Send demo booking request
 */
export async function bookDemo(data: {
  email: string;
  name?: string;
  company?: string;
  message?: string;
}): Promise<EmailResponse> {
  return sendEmail({
    type: 'demo',
    ...data,
  });
}
