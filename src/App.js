import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import CourseDetailsPage from "./Pages/CourseDetailsPage";
import AzureCourse from "./Pages/AzureCourse";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/course-details" element={<CourseDetailsPage />} />
        <Route path="/AzureCourse" element={<AzureCourse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
