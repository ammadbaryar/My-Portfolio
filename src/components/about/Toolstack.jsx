import React from "react";
import {
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiNpm,
  SiGithub,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import "./Toolstack.css";


// const VSCodeIcon = () => (
//   <img
//     src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visualstudiocode.svg"
//     alt="Visual Studio Code"
//     style={{ width: "1em", height: "1em" }}
//   />
// );

const Toolstack = () => {
  return (
    <div className="toolstack-container">
      {/* <div className="tech-icons"><VSCodeIcon /></div> */}
      <div className="tech-icons"><SiFigma /></div>
      <div className="tech-icons"><SiNpm /></div>
      <div className="tech-icons"><SiGithub /></div>
      <div className="tech-icons"><DiGit /></div>
      <div className="tech-icons"><SiPostman /></div>
      <div className="tech-icons"><SiVercel /></div>
      <div className="tech-icons"><SiNetlify /></div>
    </div>
  );
};

export default Toolstack;
