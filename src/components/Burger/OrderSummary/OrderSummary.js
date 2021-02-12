import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li>
        {igKey} : {props.ingredients[igKey]} = 0
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your burger includes the following ingredients:</p>
      <ul></ul>
    </Aux>
  );
};

export default orderSummary;
