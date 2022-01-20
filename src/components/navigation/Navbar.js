import React from "react";
import NavLinks from "./NavLinks";
import { MdRestaurant } from "react-icons/md";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <span>
        <MdRestaurant style={{ fontSize: "1.3rem", color: "red" }} />
      </span>
      <NavLinks />
    </nav>
  );
};
