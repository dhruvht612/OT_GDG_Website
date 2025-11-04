import ReactGA from "react-ga4";

// Initialize Google Analytics
export const initGA = (measurementId) => {
  if (measurementId) {
    ReactGA.initialize(measurementId);
  }
};

// Track page views
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
};

// Track custom events
export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

