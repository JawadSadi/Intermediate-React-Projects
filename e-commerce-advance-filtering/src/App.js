import React from "react";
import Recommended from "./Recommended/Recommended";
import Nav from "./Navigation/Nav";
import Product from "./Products/Product";
import SideBar from "./SideBar/SideBar";

export default function App() {
  return (
    <div>
      <SideBar />
      <Nav />
      <Recommended />
      <Product />
    </div>
  );
}
