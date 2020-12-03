import React from "react";
import { Card } from "react-bootstrap";
/**
 * @description:Custom component for Toppings checkbox
 * @param {object} props
 */
function CustomCheckbox(props) {
  const { title, Topping, setFunc } = props;
  const top = [];
  const func = (e) => {
    setFunc(e.target.value, e.target.checked);
  };
  return (
    <div>
      <Card.Title>{title}</Card.Title>
      <div className="toppings-div">
        {Topping.map((topping, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="topping"
              value={topping.name}
              onChange={(e) => {
                func(e);
              }}
            />
            <h5 className="customise-topping-selector">{topping.name}</h5>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CustomCheckbox;
