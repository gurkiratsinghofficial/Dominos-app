import React from "react";
import { Card } from "react-bootstrap";
/**
 * @description:Custom component for Size and Crust
 * @param {object} props
 */
function CustomRadio(props) {
  const { title, Modalpizza, setDataCrust, setDataSize } = props;
  // const crustFunc = (e) => {
  //   setCrust(e.target.value);
  // };
  // const sizeFunc = (e) => {
  //   setData(e.target.value,);
  // };
  console.log(Modalpizza);
  if (title === "Size") {
    return (
      <div>
        {" "}
        <Card.Title>{title}</Card.Title>
        <div className="customise-size-div">
          {Modalpizza.sizes.map((pizza, index) => (
            <label key={index}>
              {console.log(index)}
              {/* {index === 0 ? (
                <input
                  type="radio"
                  name={title}
                  value={pizza.size}
                  onChange={(e) => {
                    setDataSize(e.target.value, pizza.price);
                  }}
                  checked
                />
              ) : ( */}
              <input
                type="radio"
                name={title}
                value={pizza.size}
                onChange={(e) => {
                  setDataSize(e.target.value, pizza.price);
                }}
              />
              {/* )} */}

              <h3 className="customise-size-selector">{pizza.size}</h3>
              <label>{pizza.price}</label>
            </label>
          ))}
        </div>
      </div>
    );
  } else if (title === "Crust") {
    return (
      <div>
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
                  setDataCrust(e.target.value, pizza.price);
                }}
              />
              <h3 className="customise-size-selector">{pizza.crust}</h3>
              <label>{pizza.price}</label>
            </label>
          ))}
        </div>
      </div>
    );
  }
}

export default CustomRadio;
