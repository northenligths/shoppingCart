// This is context component which is like a global container of data which can be
// accessible anywhere directly this means that we can send the data to any component
// directly without drilling props in components
import React from "react";
import { createContext } from "react"; //This is a react function to create context
import faker from "faker";
const Cart = createContext(); //Here we have created context and named it Cart

export default function Context({ children }) {
  //This children is coming from index.js as we wrapped our app with context so children will be App component
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  return <Cart.Provider>{children}</Cart.Provider>;
}
