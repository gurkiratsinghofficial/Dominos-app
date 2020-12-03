import React from "react";
import { useDispatch } from "react-redux";
import pizzaImage from "../../../images/farmhouse.webp";
import deleteBin from "../../../images/delete.png";
import { increment, decrement } from "../../../features/Pizza/PizzaSlice";
/**
 * @description:JSX for card to be displayed inside cart
 * @param {object} param
 */
function CartCard({ pizza }) {
  const dispatch = useDispatch();
  return (
    <div className="card-cart-bottom-border">
      <div className="card-cart-div">
        <img src={pizzaImage} alt="cart-img" style={{ height: "80px" }} />
        <div className="cart-card-right">
          <span>{pizza.name}</span>
          <p className="cart-card-description">{pizza.description}</p>
          <div className="bottom-description-div">
            <h6 className="bottom-description">{pizza.size}</h6>
            <h6 className="bottom-description">{pizza.crust}</h6>
          </div>
          <h6 className="bottom-description">
            <p>{pizza.cheese ? "extra cheese added" : null}</p>
            {pizza.toppings ? "Toppings:" + pizza.toppings : null}
          </h6>
        </div>
      </div>
      {/* Counter for increment and decrement */}
      <button
        onClick={() => {
          dispatch(decrement(pizza.id));
        }}
      >
        {pizza.count < 2 ? (
          <img className="delete-bin" src={deleteBin} alt="delete" />
        ) : (
          "-"
        )}
      </button>
      <button>{pizza.count}</button>
      <button
        onClick={() => {
          dispatch(increment(pizza.id));
        }}
      >
        +
      </button>
      <span className="cart-card-price">₹{pizza.total}</span>
    </div>
  );
}

export default CartCard;
