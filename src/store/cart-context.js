import React from "react";

//context wth initial data

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;

//store is a name convention for context
