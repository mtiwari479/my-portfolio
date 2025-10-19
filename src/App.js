import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Notes from "./components/Notes";

function AppWrapper() {
  const location = useLocation();

  // Show Navbar on all pages except Journey
  const showNavbar = location.pathname !== "/journey";

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
            <Skills />
          </>
        } />

        <Route path="/journey" element={<Journey />} />
      </Routes>
       <Route path="/notes" element={<Notes />} />
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
