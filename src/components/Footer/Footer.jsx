import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import logo from "../../assets/sLogo.png";
import "./Footer.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-flex">
        <div className="footer-section">
          <span>Dedicated to creating impactful solutions!</span>
        </div>
        <div className="footer-section footer-center">
          <span>Copyright © {year}</span>
          <img src={logo} className="logo" alt="brand" />
        </div>
        <div className="footer-section">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="leetcode"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;