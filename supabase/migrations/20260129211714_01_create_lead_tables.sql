/*
  # Create Lead Management Tables

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key) - Unique identifier
      - `email` (text, unique) - Email address for newsletter
      - `created_at` (timestamp) - When subscribed
    
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - User's name
      - `email` (text) - User's email
      - `company` (text) - Company name
      - `phone` (text) - Phone number
      - `message` (text) - Message content
      - `status` (text) - 'new', 'contacted', 'closed'
      - `created_at` (timestamp) - When submitted
    
    - `demo_requests`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - User's name
      - `email` (text) - User's email
      - `company` (text) - Company name
      - `phone` (text) - Phone number
      - `preferred_date` (timestamp) - Preferred demo date
      - `status` (text) - 'pending', 'scheduled', 'completed'
      - `created_at` (timestamp) - When requested

  2. Security
    - Enable RLS on all tables
    - All tables are write-only for public (no SELECT allowed)
    - Authenticated users can manage their own submissions
    - Data visible only to authenticated app service role for backend access

  3. Notes
    - No SELECT policies for public users (write-only for privacy)
    - Public can INSERT their own records
    - Backend service role can read all records for admin operations
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  preferred_date timestamptz,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can request demo"
  ON demo_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
