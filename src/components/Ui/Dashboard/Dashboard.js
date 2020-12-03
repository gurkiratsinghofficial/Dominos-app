import React from "react";
import Cart from "../cart/Cart";
import Header from "../Headers/Header";
import Menu from "./Menu";
import SubHeader from "../Headers/SubHeader";
/**
 * @description:Container component for rendering dashboard(home page)
 */
function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <SubHeader />
      <Menu />
      <Cart />
    </div>
  );
}

export default Dashboard;
