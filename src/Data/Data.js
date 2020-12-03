/**Initial State data */
export const Data = {
  vegTopping: [
    {
      name: "mushroom",
      sizeCustomization: {
        small: 30,
        medium: 40,
        large: 70,
      },
    },
    {
      name: "Paneer",
      sizeCustomization: {
        small: 100,
        medium: 40,
        large: 70,
      },
    },
    {
      name: "capsicum",
      sizeCustomization: {
        small: 100,
        medium: 40,
        large: 70,
      },
    },
    {
      name: "onion",
      sizeCustomization: {
        small: 100,
        medium: 40,
        large: 70,
      },
    },
    {
      name: "jalepeno",
      sizeCustomization: {
        small: 100,
        medium: 40,
        large: 70,
      },
    },
  ],
  nonVegTopping: [
    {
      name: "chicken tikka",
      sizeCustomization: {
        small: 30,
        medium: 40,
        large: 70,
      },
    },
    {
      name: "chicken sausages",
      sizeCustomization: {
        small: 100,
        medium: 40,
        large: 70,
      },
    },
    {
      name: "barbecue chicken",
      sizeCustomization: {
        small: 100,
        medium: 40,
        large: 70,
      },
    },
    {
      name: "peri-peri chicken",
      sizeCustomization: {
        small: 100,
        medium: 40,
        large: 70,
      },
    },
    {
      name: "grilled chicken",
      sizeCustomization: {
        small: 100,
        medium: 40,
        large: 70,
      },
    },
  ],
  extraCheeze: [{ small: 55 }, { medium: 75 }, { large: 85 }],
  Pizza: [
    {
      id: "1",
      sizes: [
        { size: "small", price: 200 },
        { size: "medium", price: 300 },
        { size: "large", price: 375 },
      ],
      crusts: [
        { crust: "FreshPan", price: 50 },
        { crust: "cheezeBurst", price: 100 },
        { crust: "ThinCrust", price: 70 },
      ],
      name: "Margherita",
      description: "Classic delight with 100% real mozzarella cheese",
      price: 350,
      inCart: false,
      size: "",
      crust: "",
      count: 0,
      total: 0,
      toppings: undefined,
    },
    {
      id: "2",
      sizes: [
        { size: "small", price: 200 },
        { size: "medium", price: 300 },
        { size: "large", price: 375 },
      ],
      crusts: [
        { crust: "FreshPan", price: 50 },
        { crust: "cheezeBurst", price: 100 },
        { crust: "ThinCrust", price: 70 },
      ],
      name: "Farm house",
      description:
        "Delightful combination of onion, capsicum, tomato & grilled mushroom",
      price: 250,
      inCart: false,
      size: "",
      crust: "",
      count: 0,
      total: 0,
      toppings: undefined,
    },
    {
      id: "3",
      sizes: [
        { size: "small", price: 200 },
        { size: "medium", price: 300 },
        { size: "large", price: 375 },
      ],
      crusts: [
        { crust: "FreshPan", price: 50 },
        { crust: "cheezeBurst", price: 100 },
        { crust: "ThinCrust", price: 70 },
      ],
      name: "Peppy Paneer",
      description:
        "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
      price: 250,
      inCart: false,
      size: "",
      crust: "",
      count: 0,
      total: 0,
      toppings: undefined,
    },
  ],
  cart: [],
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  Modal: false,
  ModalPizza: undefined,
  loading: false,
};
