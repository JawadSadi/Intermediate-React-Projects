import React from "react";
import "./Category.css";
import Input from "../../components/Input";

export default function Category({ handleCategory }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <label className="sidebar-label-container">
        <input onChange={handleCategory} type="radio" name="test" value="" />
        <span className="checkmark"></span>
        All
      </label>
      <Input
        name={"test"}
        title={"Sneakers"}
        value={"sneakers"}
        handleCategory={handleCategory}
      />{" "}
      <Input
        name={"test"}
        title={"Flats"}
        value={"flats"}
        handleCategory={handleCategory}
      />{" "}
      <Input
        name={"test"}
        title={"Sandals"}
        value={"sandals"}
        handleCategory={handleCategory}
      />
      <Input
        name={"test"}
        title={"Heels"}
        value={"heels"}
        handleCategory={handleCategory}
      />
    </div>
  );
}
