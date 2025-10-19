import './Hero.css';
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useNavigate} from 'react-router-dom';

function Hero() {
  const navigate= useNavigate(); //use navigate function

  return (  
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="content">
        <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  Madhur Tiwari
</motion.h1>
        <p><Typewriter
    words={['BTech in Computer Science Engineering','Android Developer', 'Tech Enthusiast',]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  /> </p>
        <button onClick={()=> navigate("/notes")}>
          study section- notes(CSE)
          </button>
      </div>
    </section>
  );
}

export default Hero;
