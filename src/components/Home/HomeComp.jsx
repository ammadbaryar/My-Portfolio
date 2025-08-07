import React from "react";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./HomeComp.css";

const HomeComp = () => {
  return (
    <section className="home-about-section" id="about">
      <div className="about-container">
        <div className="about-main">
          <div className="about-description">
            <h1>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I'm a <strong>Frontend Engineer</strong> with a strong foundation in <b className="yellow">JavaScript, ReactJS, HTML, and WordPress. </b> I’ve also started exploring backend technologies like MongoDB, which has given me a broader understanding of full-stack development.
              <br />
              <br />
             My skills include building responsive, user-friendly web interfaces and integrating dynamic features to enhance user experience.
              <br />
              <br />
              As a motivated fresher, I’m eager to apply my knowledge to real-world projects, collaborate with skilled teams, and continuously grow in the ever-evolving field of web development.
              <br />
              <br />
              I'm interested in creating modern <b className="yellow">web applications and learning new technologies</b>to build better user experiences.
              
              <br />
            </p>
          </div>
          <div className="about-avatar">
            <Tilt>
              <img src={LaptopImg} className="avatar-img" alt="avatar" />
            </Tilt>
          </div>
        </div>
        <div className="about-social">
          <h1>FIND ME ON</h1>
          <p>
            Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="leetcode"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeComp;