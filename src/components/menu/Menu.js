import { useState } from "react";
import Card from "../../UI/Card";
import MenuItem from "./MenuItem";
import MenuList from "./MenuList";
import Modal from "../../UI/Modal";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <Card>
      <div className={classes.mealDetails}>
        <p>Dish</p>
        <p>Quantity</p>
      </div>
      {MenuList.map((items) => (
        <MenuItem
          key={items.id}
          name={items.name}
          price={items.amount}
          description={items.description}
        />
      ))}
    </Card>
  );
};

export default Menu;
