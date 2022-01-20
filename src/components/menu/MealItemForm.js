import React from "react";
// import classes from "MealItemform.module.css";
const MealItemForm = () => {
  return (
    <form>
      <div>
        <input type="number" min="1"></input>
      </div>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
