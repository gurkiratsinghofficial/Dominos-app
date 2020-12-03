import { createSlice } from "@reduxjs/toolkit";
import Strings from "../../constants/constants";
import { Data } from "../../Data/Data";
import { nanoid } from "@reduxjs/toolkit";

const initialState = Data;

/**
 * @description:Redux Slice for Pizza menu
 */
const PizzaSlice = createSlice({
  name: "Pizza",
  initialState,
  reducers: {
    /**Reducer to toggle Customise menu modal */
    openModal(state, action) {
      state.ModalPizza = action.payload;
      if (state.Modal) state.Modal = false;
      else state.Modal = true;
    },
    /**Reducer to add item to cart */
    addToCart(state, action) {
      const tempPizza = [...state.Pizza];
      const tempPizza2 = JSON.stringify(tempPizza);
      const tempPizza3 = JSON.parse(tempPizza2);
      const index = tempPizza3.indexOf(
        tempPizza3.find((item) => item.id === action.payload.item.id)
      );
      const pizza = tempPizza3[index];
      pizza.inCart = true;
      pizza.count = 1;
      pizza.toppings = action.payload.values.toppings;
      pizza.size = action.payload.values.size;
      pizza.crust = action.payload.values.crust;
      if (pizza.size === Strings.SMALL) {
        pizza.price = pizza.sizes[0].price;
      } else if (pizza.size === Strings.MEDIUM) {
        pizza.price = pizza.sizes[1].price;
      } else if (pizza.size === Strings.LARGE) {
        pizza.price = pizza.sizes[2].price;
        console.log(pizza.price);
      }
      if (pizza.crust === Strings.FRESHPAN)
        pizza.price = pizza.price + pizza.crusts[0].price;
      else if (pizza.crust === Strings.CHEESEBURST)
        pizza.price = pizza.price + pizza.crusts[1].price;
      else if (pizza.crust === Strings.THINCRUST)
        pizza.price = pizza.price + pizza.crusts[2].price;

      if (pizza.toppings) {
        let top_price;
        let cheese_price = 0;
        if (pizza.size === Strings.SMALL) {
          top_price = 30;
          if (action.payload.values.cheese) {
            pizza.cheese = true;
            cheese_price = 35;
          }
        }
        if (pizza.size === Strings.MEDIUM) {
          top_price = 50;
          if (action.payload.values.cheese) {
            pizza.cheese = true;
            cheese_price = 55;
          }
        }
        if (pizza.size === Strings.LARGE) {
          top_price = 70;
          if (action.payload.values.cheese) {
            pizza.cheese = true;
            cheese_price = 75;
          }
        }
        pizza.total =
          cheese_price + pizza.price + pizza.toppings.length * top_price;
      } else {
        pizza.total = pizza.price;
      }
      pizza.price = pizza.total;
      pizza.id = nanoid();
      state.cart.push(pizza);
    },
    /**Reducer to increment cart item count */
    increment(state, action) {
      let tempCart = JSON.stringify(state.cart);
      let tempCart2 = JSON.parse(tempCart);
      const selectedPizza = tempCart2.find((item) => {
        return item.id === action.payload;
      });
      const index = tempCart2.indexOf(selectedPizza);
      const pizza = tempCart2[index];
      pizza.count = pizza.count + 1;
      pizza.total = pizza.count * pizza.price;
      state.cart = [...tempCart2];
    },
    /**Reducer to decrement cart item count */
    decrement(state, action) {
      let tempCart = JSON.stringify(state.cart);
      let tempCart2 = JSON.parse(tempCart);
      const selectedPizza = tempCart2.find((item) => {
        return item.id === action.payload;
      });
      const index = tempCart2.indexOf(selectedPizza);
      const pizza = tempCart2[index];
      pizza.count = pizza.count - 1;
      if (pizza.count === 0) {
        tempCart2.splice(index, 1);
        pizza.inCart = false;
        state.cart = [...tempCart2];
      } else {
        pizza.total = pizza.count * pizza.price;
        state.cart = [...tempCart2];
      }
    },
  },
});
export default PizzaSlice.reducer;
export const {
  openModal,
  addToCart,
  increment,
  decrement,
} = PizzaSlice.actions;
export const selectPizza = (state) => state.Pizza.Pizza;
export const selectModal = (state) => state.Pizza.Modal;
export const selectModalPizza = (state) => state.Pizza.ModalPizza;

export const selectCart = (state) => state.Pizza.cart;

export const selectVegTopping = (state) => state.Pizza.vegTopping;
export const selectNonVegTopping = (state) => state.Pizza.nonVegTopping;
