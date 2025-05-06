import React from "react";
import "./Color.css";
import Input from "../../components/Input";

export default function Color({ handleCategory }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleCategory} type="radio" name="test3" />
        <span className="checkmark all"></span>
        All
      </label>
      <Input
        name={"test3"}
        handleCategory={handleCategory}
        value={"black"}
        title={"Black"}
        color={"black"}
      />
      <Input
        name={"test3"}
        handleCategory={handleCategory}
        value={"red"}
        title={"Red"}
        color={"red"}
      />
      <Input
        name={"test3"}
        handleCategory={handleCategory}
        value={"green"}
        title={"Green"}
        color={"green"}
      />
      <Input
        name={"test3"}
        handleCategory={handleCategory}
        value={"blue"}
        title={"Blue"}
        color={"blue"}
      />
      <Input
        name={"test3"}
        handleCategory={handleCategory}
        value={"white"}
        title={"White"}
      />
    </div>
  );
}
