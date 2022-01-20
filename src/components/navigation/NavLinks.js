import React from "react";
import { NavLink } from "react-router-dom";
import SocialNavLinks from "./SocialNavLinks";
import classes from "./NavLinks.module.css";
const NavLinks = () => {
  return (
    <>
      <ul className={classes.navLinks}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/location">Find Us</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
      </ul>
      <SocialNavLinks />
    </>
  );
};

export default NavLinks;
