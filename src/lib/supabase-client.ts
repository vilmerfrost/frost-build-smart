import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface NewsletterSubscriber {
  id: string;
  email: string;
  created_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  created_at: string;
}

export interface DemoRequest {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  preferred_date?: string;
  status: 'pending' | 'scheduled' | 'completed';
  created_at: string;
}

export async function subscribeNewsletter(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);

    if (error) {
      if (error.code === '23505') {
        return { success: false, error: 'Email already subscribed' };
      }
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Newsletter subscription failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to subscribe'
    };
  }
}

export async function submitContact(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .insert([data]);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error('Contact submission failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit contact form'
    };
  }
}

export async function requestDemo(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  preferred_date?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('demo_requests')
      .insert([data]);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error('Demo request failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to request demo'
    };
  }
}
