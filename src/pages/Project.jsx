import React from "react";
// import ProjectCard from "../components/project/ProjectCard.jsx";
import Particle from "../components/Particle";
import weather from "../assets/projects/weather.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import blog from "../assets/projects/blog.png";
import kickstart from "../assets/projects/kickstart.png";
import ProjectCard from "../components/project/ProjectCard.jsx";
import "./Project.css"; // Assuming you have a CSS file for styling

const Project = () => {
  return (
    <div className="project-section">
      <Particle />
      <div className="container">
        <h1 className="project-heading">
          Recent Top <strong style={{color : "#a855f7" }}>Works </strong>
        </h1>
        <p className="project-para">
          Here are a few projects I've worked on recently.
        </p>

     
        <div
          className="projects-container"
        >
          <div className="project-card" >
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Restaurant Meanu App"
              description="Restaurant Menu app that fetches restaurant menu data from an API and displays food items by category with images, descriptions, and prices. It features a responsive design and dynamic content loading using React hooks."
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </div>

          <div className="project-card" >
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Social Media"
              description="This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD activities. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. Users can only view posts from their followed users and can only engage in chat with those they follow. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              ghLink="https://github.com/19sajib/social-media"
            />
          </div>

          <div className="project-card" >
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            />
          </div>

          <div className="project-card" >
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A weather app made using OpenWeatherMap API in ReactJs. The app tells the current temperature and some additional information like Air Quality Index, Humidity, Wind Speed, Pressure, Sunrise and Sunset."
              ghLink="https://github.com/ammadbaryar/Weather-App"
            />
          </div>

          <div className="project-card" >
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Mega Blog"
              description="A modern blogging platform built with React, TinyMCE, React Hook Form, and Appwrite for backend services. Create, edit, and manage posts with rich text and media support."
              ghLink="https://github.com/ammadbaryar/mega-blog"
              demoLink="https://mega-blog-sigma-eight.vercel.app/"
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
