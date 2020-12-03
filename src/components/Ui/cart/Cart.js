import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../../features/Pizza/PizzaSlice";
import DisplayCards from "./DisplayCards";
/**
 * @description:container component for Cart
 */
function Cart() {
  /**select all the items in the cart */
  const cartItems = useSelector(selectCart);
  return (
    <div>
      <DisplayCards cartItems={cartItems} />
    </div>
  );
}

export default Cart;
