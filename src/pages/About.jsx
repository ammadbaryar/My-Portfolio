import React from "react";

// import Particle from "../components/Particle";
// import Techstack from "../components/Skillset/Techstack";
// import Toolstack from "../components/Skillset/Toolstack";
// import Leetcode from "../components/Skillset/Leetcode";
// import Github from "../components/Skillset/Github";

import Particle from "../components/Particle";
import AboutComp from "../components/about/AboutComp";
import Techstack from "../components/about/Techstack";
import Toolstack from "../components/about/Toolstack";
import Github from "../components/about/Github";
import "./About.css"; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <div
      className="about-section"
    >
      <Particle />
 <div style={{ maxWidth: "1200px", width: "100%" }}>
        <AboutComp />
      </div>
      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <h1
          className="project-heading"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          Professional <strong style={{color : "#a855f7" }}>Skillset</strong>
        </h1>
        <Techstack />
      </div>

      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <h1
          className="project-heading"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          <strong style={{color : "#a855f7" }}>Tools</strong> I use
        </h1>
        <Toolstack />
      </div>


      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <Github />
      </div>
    </div>
  );
};

export default About;
