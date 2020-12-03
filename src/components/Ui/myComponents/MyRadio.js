import React, { useState } from "react";
import { Card } from "react-bootstrap";
/**
 * @description:Custom component for Size and Crust
 * @param {object} props
 */
function CustomRadio(props) {
  const { title, Modalpizza, setDataCrust, setDataSize } = props;
  const [size, setSize] = useState("small");
  const [crust, setCrust] = useState("FreshPan");
  if (title === "Size") {
    return (
      <div>
        <Card.Body>
          {" "}
          <Card.Title>{title}</Card.Title>
          <div className="customise-size-div">
            {Modalpizza.sizes.map((pizza, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name={title}
                  value={pizza.size}
                  onChange={(e) => {
                    setSize(pizza.size);
                    setDataSize(e.target.value, pizza.price);
                  }}
                  checked={size === pizza.size}
                />
                <h3 className="customise-size-selector">{pizza.size}</h3>
                <label>{pizza.price}</label>
              </label>
            ))}
          </div>
        </Card.Body>
      </div>
    );
  } else if (title === "Crust") {
    return (
      <div>
        <Card.Body>
          {" "}
          <Card.Title>{title}</Card.Title>
          <div className="customise-size-div">
            {Modalpizza.crusts.map((pizza, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name={title}
                  value={pizza.crust}
                  onChange={(e) => {
                    setCrust(pizza.crust);
                    setDataCrust(e.target.value, pizza.price);
                  }}
                  checked={crust === pizza.crust}
                />
                <h3 className="customise-size-selector">{pizza.crust}</h3>
                <label>{pizza.price}</label>
              </label>
            ))}
          </div>
        </Card.Body>
      </div>
    );
  } else return null;
}

export default CustomRadio;
