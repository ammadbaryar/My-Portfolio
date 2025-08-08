import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css"; // Assuming you have a CSS file for styling

const Type = () => {
    return (
        <Typewriter
          options={{
           strings: [
  "Aspiring Full Stack Developer",
  "Frontend Engineer",
  "JavaScript & ReactJS Specialist",
  "Future Tech Innovator"
],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type