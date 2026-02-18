export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Custom events
export const trackFormView = () => trackEvent('view_contact_form');
export const trackFormSubmit = (success: boolean) => 
  trackEvent('contact_form_submit', { success });
export const trackOutboundClick = (destination: string) => 
  trackEvent('outbound_click', { destination });