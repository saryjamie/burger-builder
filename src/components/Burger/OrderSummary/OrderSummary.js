import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      {/* creating the modal */}
      <h3>Your Order</h3>
      <p>Your burger includes the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
    </Aux>
  );
};

export default orderSummary;
