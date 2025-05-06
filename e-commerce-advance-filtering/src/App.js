import React, { useState } from "react";
import Recommended from "./Recommended/Recommended";
import Nav from "./Navigation/Nav";
import Product from "./Products/Product";
import SideBar from "./SideBar/SideBar";

// Databse
import products from "./db/data";
import Card from "./components/Card";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // input Filter
  const [query, setQuery] = useState("");

  function handleInputField(event) {
    setQuery(event.target.value);
  }

  const filtredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== 1)
  );

  // Radio Filter

  function handleCategory(event) {
    setSelectedCategory(event.target.value);
  }

  // Buttons Filter

  function handleClick(event) {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query) {
    let filtredProducts = products;

    // Filtering input items
    if (query) {
      filtredProducts = filtredItems;
    }

    // Selected Filter
    if (selected) {
      filtredProducts = filtredProducts.filter(
        ({ category, company, color, newPrice, title }) =>
          category === selected ||
          company === selected ||
          color === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filtredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          prevPrice={prevPrice}
          newPrice={newPrice}
          reviews={reviews}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  return (
    <div>
      <SideBar handleCategory={handleCategory} />
      <Nav />
      <Recommended />
      <Product />
    </div>
  );
}
