import React from "react";
import Carticon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";

const HeaderCartButton = ({onClick}) => {
  return (
    <button className={classes.button} onClick={onClick} >
      <span className={classes.icon}>
        <Carticon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
