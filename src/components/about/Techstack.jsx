import React from "react";
import "../../pages/About.css";
import "./Techstack.css";

import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import {
  SiGraphql,
  SiSolidity,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiExpress,
} from "react-icons/si";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Techstack = () => {
  return (
    <div className="techstack-container">
      <div className="tech-icons">
        <SiHtml5 />
      </div>
      <div className="tech-icons">
        <SiCss3 />
      </div>
      <div className="tech-icons">
        <DiJavascript1 />
      </div>
      <div className="tech-icons">
        <DiNodejs />
      </div>
      <div className="tech-icons">
        <SiExpress />
      </div>
      <div className="tech-icons">
        <DiReact />
      </div>
      <div className="tech-icons">
        <SiRedux />
      </div>
      <div className="tech-icons">
        <SiMongodb />
      </div>
      <div className="tech-icons">
        <AutoAwesomeIcon fontSize="inherit" />
      </div>
      <div className="tech-icons">
        <DiGit />
      </div>
    </div>
  );
};

export default Techstack;
