import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-flex">
        <div className="footer-section footer-center">
          <span>Copyright © {year} by Ammad Iftikhar</span>
        </div>
        <div className="footer-section">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href= "https://www.linkedin.com/in/ammad-iftikhar-b46515234"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/ammadbaryar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://leetcode.com/u/ammadbaryar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="leetcode"
              >
                <SiLeetcode />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/AmmadBaryar?s=09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
