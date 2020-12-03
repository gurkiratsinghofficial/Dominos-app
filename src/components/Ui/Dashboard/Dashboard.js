import React from "react";
import Cart from "../cart/Cart";
import Header from "../Headers/Header";
import PizzaListing from "./PizzaListing";
import SubHeader from "../Headers/SubHeader";
/**
 * @description:Container component for rendering dashboard(home page)
 */
function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <SubHeader />
      <PizzaListing />
      <Cart />
    </div>
  );
}

export default Dashboard;
