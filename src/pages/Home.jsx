import React from "react";
import homeLogo from "../assets/about.png";
import Particle from "../components/Particle";
import HomeComp from "../components/Home/HomeComp";
import Type from "../components/Home/Type";

import "./Home.css";

const Home = () => {
  return (
    <section>
      <div className="home-section" id="home">
        <Particle />
        <div className="home-content">
          <div className="home-row">
            <div className="home-col home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Ammad Iftikhar</strong>
              </h1>
              <div className="type-container">
                <Type />
              </div>
            </div>
            <div className="home-col home-image-col">
              <img src={homeLogo} alt="home pic" className="home-img" />
            </div>
          </div>
        </div>
      </div>
      <HomeComp />
    </section>
  );
};

export default Home;
