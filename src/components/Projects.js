import React from "react";
import { motion } from "framer-motion";
import MyRefrenceImg from "../assets/myrefrence.jpg";
import VocalcImg from "../assets/calc.jpg";
import PortfolioImg from "../assets/profile.jpg";

function Projects() {
  const projects = [
    { 
      title: "Vocalc", 
      desc: "Voice assistant calculator app (Patent pending)", 
      img: VocalcImg
    },
    { 
      title: "MyRefrence", 
      desc: "Referral platform for jobs & admissions (Patent published)", 
      img: MyRefrenceImg
    },
    { 
      title: "Portfolio", 
      desc: "This website, built with React", 
      img: PortfolioImg
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>projects</h2>
      <div style={styles.projectsContainer}>
        {projects.map((project, index) => ( 
          <motion.div
            key={index}
            style={styles.projectCard}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.img}
              alt={project.title}
              style={styles.projectImage}
            />
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.desc}>{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  heading: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#ee31afff",
  },
  projectsContainer: {
    display: "flex",
    gap: "20px",
    overflowX: "auto",        // ✅ horizontal scroll
    paddingBottom: "10px",
    scrollbarWidth: "none",   // Firefox
    msOverflowStyle: "none",  // IE 10+
  },
  projectCard: {
    flex: "0 0 auto",         // ✅ prevents shrinking
    backgroundColor: "rgb(102 145 141)",
    padding: "10px",
    borderRadius: "8px",
    color: "white",
    width: "250px",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  projectImage: {
    width: "100%",
    objectFit: "cover",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "700",
    margin: "5px 0",
  },
  desc: {
    fontSize: "14px",
    color: "white",
  },
};

// Hide scrollbar for Chrome, Edge, Safari
const styleSheet = document.createElement("style");
styleSheet.innerText = `
.projectsContainer::-webkit-scrollbar {
  display: none;
}
`;
document.head.appendChild(styleSheet);

export default Projects;
