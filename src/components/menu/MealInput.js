import React from "react";
import classes from "./MealItemForm.module.css";

const MealInput = React.forwardRef((props, ref) => {
  return (
    <div className={classes.mealItemForm}>
      <input
        ref={ref}
        type={props.type}
        min={props.min}
        defaultValue={props.default}
      ></input>
      <button className={classes.mealItemBtn}>+ Add</button>
    </div>
  );
});

export default MealInput;
