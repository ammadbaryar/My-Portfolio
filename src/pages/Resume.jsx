import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-section">
      <h2 className="resume-title">My Resume</h2>
      <div className="resume">
        <div className="resume-side"></div>
        <div className="resume-center">
          <iframe
            src="/Frontend_resume.pdf"
            width="100%"
            height="600px"
            title="Resume"
            style={{ border: "1px solid #ccc", marginBottom: "20px" }}
          />
          <div className="center-btn">
            <a href="/Frontend_resume.pdf" download>
              <button className="btn-download">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="resume-side"></div>
      </div>
    </div>
  );
};

export default Resume;
