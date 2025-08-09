import React from "react";
import "./AboutComp.css";
import aboutImage from "../../assets/aboutPage.svg";

const AboutComp = () => {
  return (
    <section className="aboutComp-section">
      <div className="aboutComp-content">
        <div className="aboutComp-text">
          <h1>
            Learn More <span className="purple">About Me</span>
          </h1>
          <p>
            Hi Everyone, I am <strong>Ammad Iftikhar</strong>,<br />a software
            engineer currently based in{" "}
            <span className="purple">Islamabad, Pakistan.</span>
          </p>
          <p>
            I have a Bachelor's degree in Software Engineering <br />
            from <strong>International Islamic University, Islamabad. </strong>
          </p>
          <p>My hobbies beyond programming:</p>
          <ul>
            <li className="aboutCompActivity">Playing Games</li>
            <li className="aboutCompActivity">Reading</li>
            <li className="aboutCompActivity">Travelling</li>
          </ul>
        </div>

        <div className="aboutComp-image">
          <img src={aboutImage} alt="About illustration" />
        </div>
      </div>
    </section>
  );
};

export default AboutComp;
