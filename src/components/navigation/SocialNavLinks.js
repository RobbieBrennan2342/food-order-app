import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

import classes from "./SocialNavLinks.module.css";
const SocialNavLinks = () => {
  return (
    <ul className={classes.socialNavLinks}>
      <li>
        <a href="https://facebook.com " target="_blank">
          <BsFacebook style={{ fontSize: "1.3rem", color: "#3b5998" }} />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" target="_blank">
          <BsInstagram style={{ fontSize: "1.3rem", color: "#833AB4" }} />
        </a>
      </li>
    </ul>
  );
};

export default SocialNavLinks;
