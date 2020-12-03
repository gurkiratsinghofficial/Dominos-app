import { configureStore } from "@reduxjs/toolkit";

import PizzaReducer from "../features/Pizza/PizzaSlice";
/**
 * @description:"Redux Store configuration"
 */
export default configureStore({
  reducer: {
    Pizza: PizzaReducer,
  },
});
