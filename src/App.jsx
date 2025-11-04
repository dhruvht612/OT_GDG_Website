import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout";
import Loading from "./components/Loading";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import TeamPage from "./pages/TeamPage";
import JoinPage from "./pages/JoinPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import { initGA, logPageView } from "./utils/analytics";

// Get Google Analytics Measurement ID from environment variable
// or set it directly here
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-N9799XHVMT";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Initialize Google Analytics
  useEffect(() => {
    initGA(GA_MEASUREMENT_ID);
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (!loading) {
      logPageView();
    }
  }, [location, loading]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
