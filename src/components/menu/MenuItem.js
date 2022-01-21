import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MenuItem.module.css";
const MenuItem = (props) => {
  return (
    <div className={classes.menuItemContainer}>
      <div className={classes.menuItem}>
        <p>{props.name}</p>
        <span>{props.description}</span>
        <p> € {props.price}</p>
      </div>
      <div className={classes.menuItemPrice}>
        <MealItemForm />
      </div>
    </div>
  );
};

export default MenuItem;
