import React from "react";
import classes from "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  <div className={classes.Burger}>
    <BurgerIngredients type="bread-top" />
    <BurgerIngredients type="bread-bottom" />
    <BurgerIngredients type="cheese" />
  </div>;
};

export default burger;
