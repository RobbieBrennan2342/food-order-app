import React, { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "./MealInput";
import MealInput from "./MealInput";

const MealItemForm = () => {
  const amountInputRef = useRef();

  const MealItemHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={MealItemHandler}>
      <Input ref={amountInputRef} type="number" min="1" default="1" />
    </form>
  );
};

export default MealItemForm;
