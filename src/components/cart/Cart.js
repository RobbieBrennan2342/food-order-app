import React from "react";
import Modal from "../../UI/Modal";
import classes from "./Cart.module.css";

export const Cart = (props) => {
  return (
    <Modal>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>£0</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
