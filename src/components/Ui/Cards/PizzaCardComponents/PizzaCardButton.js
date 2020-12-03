import React from "react";
import { Button } from "react-bootstrap";
import Strings from "../../../../constants/constants";

function PizzaCardButton(props) {
  return (
    <div className="pizza-card-add-div">
      <Button
        size="sm"
        className="pizza-card-add"
        variant="outline-success"
        type="submit"
      >
        {Strings.ADD_TO_CART}
      </Button>
    </div>
  );
}

export default PizzaCardButton;
