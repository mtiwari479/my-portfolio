import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      {/* Logo / Name on the left */}
      <div style={styles.logo}>Codermadhur</div>

      {/* Buttons on the right */}
      <div style={styles.buttonContainer}>
        {/* Visit MyRefrence Button with white border */}
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 4px 15px rgba(229, 9, 20, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ 
            ...styles.button, 
            backgroundColor: "#E50914", 
            color: "white",
            border: "1px solid red", // ✅ White border added
          }}
          onClick={() => window.open("https://myrefrence.com", "_blank")}
        >
          Visit MyRefrence
        </motion.button>

        {/* Journey Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            rotate: -3,
            boxShadow: "0px 4px 15px rgba(50, 11, 249, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            ...styles.button,
            color: "#320bf9",
            border: "1px solid black",
            backgroundColor: "white",
            marginRight: "20px",
          }}
          onClick={() => navigate("/journey")}
        >
          Journey
        </motion.button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(217 214 212)",
    zIndex: 1000,
    padding: "10px 20px",
    flexWrap: "wrap", // ✅ allows items to wrap on smaller screens
  },
  logo: {
    color: "#E50914",
    fontSize: "28px",
    fontWeight: "900",
    fontFamily: "'Bebas Neue', sans-serif",
    cursor: "pointer",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    marginRight: "10px",
  },
  button: {
    padding: "8px 20px",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "7px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

// ✅ Responsive styling using media query
const mobileStyles = `
@media (max-width: 600px) {
  nav {
    flex-direction: column !important;
    align-items: center !important;
    gap: 10px !important;
  }
  nav div {
    margin: 4px 0 !important;
  }
  nav button {
    font-size: 12px !important;
    padding: 6px 14px !important;
  }
  nav div:first-child {
    font-size: 22px !important;
  }
}
`;

// Inject media query globally
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mobileStyles;
document.head.appendChild(styleSheet);

export default Navbar;
