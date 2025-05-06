import React from "react";

export default function Input({ handleCategory, value, name, title, color }) {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleCategory} value={value} type="radio" name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
}
