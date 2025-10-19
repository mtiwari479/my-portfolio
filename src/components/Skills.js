import React from "react";

function Skills() {
  const skills = [
    "Kotlin", "Java", "XML", "Firebase", "Flutter",
    "React.js", "Node.js", "MongoDB", "AWS", "Git", "Android App Development"
  ];

  return (
    <>
      <section style={{
        background: "rgb(237 237 213)",
        color: "#0f0e0eff",
        padding: "10px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>
          ⚡ what i bring to the table
        </h2>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center"
        }}>
          {skills.map((skill, index) => (
            <span
              key={index}
              style={{
                padding: "10px 20px",
                marginBottom: "20px",
                background: "#faf6f6ff",
                borderRadius: "20px",
                fontSize: "1rem",
                border: "1px solid #0890ebff"
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{
        background: "#ffffffff",
        color: "#0c0b0bff",
        textAlign: "center",
        padding: "15px 0",
        fontSize: "0.9rem",
        marginBottom: "20px",
        letterSpacing: "0.5px"
      }}>
        © {new Date().getFullYear()} myrefrence All Rights Reserved | Developed by <span style={{ color: "#e50914", fontWeight: "bold" }}>MT</span>
      </footer>
    </>
  );
}

export default Skills;
