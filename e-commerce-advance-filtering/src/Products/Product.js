import React from "react";
import "./Product.css";

export default function Product({ result }) {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
}
