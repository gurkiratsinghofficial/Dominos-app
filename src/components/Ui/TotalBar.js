import React from "react";

function TotalBar({ submit, modalPrice, Modalpizza }) {
  return (
    <div className="green-customise-bar">
      <div className="green-cart-customise-button">
        <button
          onClick={() => {
            submit(Modalpizza);
          }}
          className="total-bar-button"
        >
          Add to cart
        </button>
        <span className="customise-green-price">₹{modalPrice}</span>
      </div>
    </div>
  );
}

export default TotalBar;
