import React from "react";
import { CartState } from "../context/Context";
import SideBar from "./SideBar";
import SingleProduct from "./SingleProduct";
import "./styles.css";

export default function Home() {
  const {
    state: { products },
  } = CartState(); //called CartState from context and destructured state from it, this state contains all the data from context component
  //Here we have further destructured to get access to products inside our data in state
  return (
    <div className="home">
      <SideBar />
      <div className="productContainer">
        {products.map((prod) => {
          //mapping through products
          return <SingleProduct prod={prod} key={prod.id} />; //here we are sending the prod data through props to singleproduct component
        })}
      </div>
    </div>
  );
}
