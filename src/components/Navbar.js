import React from "react";
import { NavLink, Link } from "react-router-dom";
import CV from "../Assets/Deng_CV.pdf";

function NavBar() {
  return (
    <header className="site-header">
      <Link to="/" className="site-title">
        Audrey Deng
      </Link>
      <nav className="site-nav" aria-label="Main">
        <NavLink to="/" end>About</NavLink>
        <NavLink to="/writing">Writing</NavLink>
        <NavLink to="/illustration">Illustration</NavLink>
        <a href={CV} target="_blank" rel="noreferrer">
          Download CV
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
