import React from "react";

import { MySelect } from "./inputs";

function PizzaCardOptions({ item }) {
  return (
    <div className="pizza-card-options">
      <MySelect name="size">
        {item.sizes.map((size, index) => (
          <option key={index} value={size.size} price={size.price}>
            {size.size}-{size.price}
          </option>
        ))}
      </MySelect>
      <MySelect style={{ width: "7vw" }} name="crust">
        {item.crusts.map((crust, index) => (
          <option key={index} value={crust.crust} price={crust.price}>
            {crust.crust}-{crust.price}
          </option>
        ))}
      </MySelect>
    </div>
  );
}

export default PizzaCardOptions;
