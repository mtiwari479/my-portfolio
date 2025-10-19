import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Journey() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#f0f4f8" }}>
      {/* Sticky Back Button */}
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#f0f4f8",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "#E50914",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          ← Back
        </motion.button>
      </motion.div>

      {/* Page Content */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "50px 20px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "3rem", color: "#E50914", marginBottom: "20px" }}
        >
          🚀 Welcome to My Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ fontSize: "1.2rem", color: "#333", maxWidth: "600px" }}
        >
          Here you will see my growth story, achievements, challenges. Every step counts !
        </motion.p>
      </section>
    </div>
  );
}

export default Journey;
