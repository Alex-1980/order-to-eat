import React, { useContext } from "react";
import Carticon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <Carticon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
