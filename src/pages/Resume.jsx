import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../components/Particle";
import pdf from "../assets/Frontend_resume.pdf";



import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = `https://raw.githubusercontent.com/19sajib/portfolio/main/src/assets/sajib.pdf`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume-section" style={{ position: "relative", minHeight: "100vh" }}>
      <Particle />

      {/* Top Button */}
      <div style={styles.flexCenter}>
        <a href={pdf} target="_blank" rel="noopener noreferrer" style={styles.button}>
          <AiOutlineDownload />
          &nbsp;Download Resume
        </a>
      </div>

      {/* Resume Viewer */}
      <div style={styles.flexCenter}>
        <Document file={resumeLink}>
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>

      {/* Bottom Button */}
      <div style={styles.flexCenter}>
        <a href={pdf} target="_blank" rel="noopener noreferrer" style={styles.button}>
          <AiOutlineDownload />
          &nbsp;Download Resume
        </a>
      </div>
    </div>
  );
};

const styles = {
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d6efd",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    maxWidth: "250px",
    transition: "background 0.3s ease",
  },
};

export default Resume;
