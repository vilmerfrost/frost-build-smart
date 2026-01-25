// Shared constants for the Frost Bygg website

// App URL for CTA links - points to the Next.js app at /app
export const PRODUCTION_URL = '/app';

// Full domain for external references (emails, etc.)
export const DOMAIN = 'https://frostsolutions.se';

// Animation timing constants for consistent motion
export const ANIMATION = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  delay: {
    stagger: 0.1,
  },
  ease: 'easeOut' as const,
};

// Viewport settings for scroll animations
export const VIEWPORT = {
  once: true,
  margin: '-100px',
};
