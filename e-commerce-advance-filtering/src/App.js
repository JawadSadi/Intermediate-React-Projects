import React from "react";
import Recommended from "./Recommended/Recommended";
import Nav from "./Navigation/Nav";
import Product from "./Products/Product";

export default function App() {
  return (
    <div>
      <Nav />
      <Product />
      <Recommended />
    </div>
  );
}
