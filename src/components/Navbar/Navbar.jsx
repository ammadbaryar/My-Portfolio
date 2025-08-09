import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-port.png";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";
import "./Navbar.css";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    }
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav className={`navbar ${navColour ? "sticky" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src={logo} className="logo" alt="brand" />
        </Link>
        <button
          className={`navbar-toggler${expand ? " open" : ""}`}
          onClick={() => setExpand(!expand)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`navbar-links${expand ? " expanded" : ""}`}>
          <Link to="/" onClick={() => setExpand(false)}>
            <AiOutlineHome /> Home
          </Link>
          <Link to="/about" onClick={() => setExpand(false)}>
            <GiSkills /> About
          </Link>
          <Link to="/project" onClick={() => setExpand(false)}>
            <AiOutlineFundProjectionScreen /> Projects
          </Link>
          <Link to="/resume" onClick={() => setExpand(false)}>
            <CgFileDocument /> Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
