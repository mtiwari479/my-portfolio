import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Notes from "./components/Notes";

function AppWrapper() {
  const location = useLocation();

  // Hide Navbar on /journey and /notes
  const showNavbar = !["/journey", "/notes"].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
            </>
          }
        />
        <Route path="/journey" element={<Journey />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
