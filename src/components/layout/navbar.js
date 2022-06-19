import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex row space-between vCenter">
      <img src="iku-studio-logo.png" alt="iku-studio-logo"></img>
      <div>
        <NavLink to="/" exact>
          <span>Portfolio</span>
        </NavLink>
        <NavLink to="/aboutme" exact>
          <span>À propos de moi</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
