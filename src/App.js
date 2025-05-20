import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import CourseDetailsPage from "./Pages/CourseDetailsPage";
import Terms from "./Pages/Terms";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import Disclaimer from "./Pages/Disclaimer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/course-details" element={<CourseDetailsPage />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
