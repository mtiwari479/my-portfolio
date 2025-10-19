import React from "react";

function About() {
  return (
    <section style={{ 
        width: "100%",
      background: "white", 
      color: "#053f49",  
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>who i am ? 🤔 </h2>
      <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.2rem", color: "rgb(51 82 95)" }}>
        Hi, I'm <b>Madhur Tiwari</b>, an Android Developer, Web Enthusiast, and the founder of 
        <b> Vocalc</b>. I’m passionate about building apps and platforms that make life easier 
        and smarter. Currently, I’m also working on one of my project <b>MyRefrence</b> 🤷‍♂️.
      </p>
    </section>
  );
}

export default About;
