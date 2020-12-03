import "./App.css";
import PizzaCard from "./components/Ui/Cards/PizzaCard";
import CartCard from "./components/Ui/Cards/CartCard";
import Customise from "./components/Ui/Customise";
import Dashboard from "./components/Ui/Dashboard/Dashboard";
import { useState } from "react";

function App() {
  return (
    <>
      <Dashboard />
      <Customise />
    </>
  );
}
export default App;
