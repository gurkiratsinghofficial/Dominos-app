import React from "react";
import { CardDeck } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectPizza } from "../../../features/Pizza/PizzaSlice";
import PizzaCard from "./../Cards/PizzaCard";
/**
 * @description:Container component to render Menu card
 */
function Menu() {
  const pizza = useSelector(selectPizza);
  return (
    <div className="menu-div">
      <CardDeck>
        {pizza.map((item) => (
          <PizzaCard key={item.id} item={item} />
        ))}
      </CardDeck>
    </div>
  );
}

export default Menu;
