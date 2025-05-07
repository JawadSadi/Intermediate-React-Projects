import React from "react";

export default function Button({ handleClick, value, title }) {
  return (
    <button className="btn" value={value} onClick={handleClick}>
      {title}
    </button>
  );
}
