import React from "react";
import classes from "../MealItem/MealItem.module.css";

const MealItem = ({ name, description, price }) => {
  const priceInCurrent = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceInCurrent}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
