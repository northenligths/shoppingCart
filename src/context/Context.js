// This is context component which is like a global container of data which can be
// accessible anywhere directly this means that we can send the data to any component
// directly without drilling props in components
import React from "react";
import { createContext, useReducer, useContext } from "react"; //This is a react function to create context
import faker from "faker";
import { cartReducer } from "./Reducer";
const Cart = createContext(); //Here we have created context and named it Cart
faker.seed(99); //This will restrict the data from changing on every page load

export default function Context({ children }) {
  //This children is coming from index.js as we wrapped our app with context so children will be whole App component
  const products = [...Array(20)].map(() => ({
    // products is array containing fake data
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  console.log(products);
  const [state, dispatch] = useReducer(cartReducer, {
    //using useReducer hook to manage complex state
    products: products, //here we have created state for products
    cart: [], //Here we have created state for cart
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export const CartState = () => {
  //we have use useContext hook to access the context created
  return useContext(Cart); //here Cart is the context that we have created earlier
};
