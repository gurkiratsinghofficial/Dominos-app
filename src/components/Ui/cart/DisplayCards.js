import React from "react";
import CartCard from "../../Ui/Cards/CartCard";
import Strings from "../../../constants/constants";

function DisplayCards({ cartItems }) {
  let total = 0;
  cartItems.map((item) => (total = total + item.total));
  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="cart">
          {cartItems.map((pizza, index) => (
            <CartCard key={index} pizza={pizza} />
          ))}
          <div className="total">
            ₹{total}
            <button className="checkout">{Strings.CHECKOUT}</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DisplayCards;
