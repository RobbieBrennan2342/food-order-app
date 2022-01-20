import React from "react";
import { BsBasket2 } from "react-icons/bs";
import classes from "./HeaderCartBtn.module.css";
const HeaderCartBtn = () => {
  return (
    <button className={classes.cartBtn}>
      <span className={classes.cartBtnIcon}>
        <BsBasket2 />
      </span>
      <span className={classes.cartBtnTotal}>0</span>
    </button>
  );
};

export default HeaderCartBtn;
