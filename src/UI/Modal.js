import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backDrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      {/* <button onClick={props.onClose}>Close Modal</button> */}
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
