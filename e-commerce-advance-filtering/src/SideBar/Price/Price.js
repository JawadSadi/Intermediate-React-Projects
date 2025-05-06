import React from "react";
import "./Price.css";
import Input from "../../components/Input";

export default function Price({ handleCategory }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleCategory} type="radio" name="test2" />
        <span className="checkmark"></span>
        All
      </label>
      <Input
        handleCategory={handleCategory}
        name={"test2"}
        value={50}
        title={"$0-To-$50"}
      />
      <Input
        handleCategory={handleCategory}
        name={"test2"}
        value={100}
        title={"$50-To-$100"}
      />
      <Input
        handleCategory={handleCategory}
        name={"test2"}
        value={150}
        title={"$100-To-$150"}
      />
      <Input
        handleCategory={handleCategory}
        name={"test2"}
        value={200}
        title={"Over $150"}
      />
    </div>
  );
}
