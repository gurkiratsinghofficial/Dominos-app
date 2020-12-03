import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../../Ui/Cards/CartCard";
import { selectCart } from "../../../features/Pizza/PizzaSlice";
import Strings from "../../../constants/constants";
/**
 * @description:container component for Cart
 */
function Cart() {
  const cartItems = useSelector(selectCart);
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
      ) : (
        "Cart is empty"
      )}
    </div>
  );
}

export default Cart;
