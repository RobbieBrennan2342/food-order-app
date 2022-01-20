import React, { Fragment } from "react";
import HeaderCartBtn from "./HeaderCartBtn";
import { Navbar } from "../navigation/Navbar";
import restaurantImage from "../../assets/headerImage.jpg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Your Restaurant Name</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes["main-image"]}>
        <img src={restaurantImage} alt="your restaurant image" />
      </div>
      <Navbar />
    </>
  );
};

export default Header;
