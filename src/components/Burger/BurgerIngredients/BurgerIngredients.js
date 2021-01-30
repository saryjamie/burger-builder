import React from "react";
import classes from "./BurgerIngredient.css";

const burgerIngredients = (props) => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = <div className={classes.BreadTop}></div>;
  }
};

export default burgerIngredients;
