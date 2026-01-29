export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
}

export const analytics = {
  trackEvent: (event: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible(event.name, { props: event.properties });
    }
  },

  trackPageView: (pathname: string) => {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('pageview', { u: pathname });
    }
  },

  trackCTAClick: (cta: string) => {
    analytics.trackEvent({
      name: 'CTA Click',
      properties: { cta },
    });
  },

  trackFormSubmission: (formType: 'demo' | 'contact' | 'newsletter') => {
    analytics.trackEvent({
      name: 'Form Submission',
      properties: { form_type: formType },
    });
  },

  trackFeatureView: (feature: string) => {
    analytics.trackEvent({
      name: 'Feature Viewed',
      properties: { feature },
    });
  },

  trackScrollDepth: (percentage: number) => {
    analytics.trackEvent({
      name: 'Scroll Depth',
      properties: { depth_percentage: percentage },
    });
  },

  trackProductTourStart: () => {
    analytics.trackEvent({ name: 'Product Tour Started' });
  },

  trackProductTourComplete: () => {
    analytics.trackEvent({ name: 'Product Tour Completed' });
  },

  trackCalculatorInteraction: (calculatorName: string) => {
    analytics.trackEvent({
      name: 'Calculator Used',
      properties: { calculator: calculatorName },
    });
  },

  trackExitIntent: () => {
    analytics.trackEvent({ name: 'Exit Intent Triggered' });
  },
};

declare global {
  interface Window {
    plausible?: (event: string, options?: any) => void;
  }
}
