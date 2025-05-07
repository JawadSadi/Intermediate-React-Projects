import React from "react";
import "./Recommended.css";
import Button from "../components/Button";

export default function Recommended({ handleClick }) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button handleClick={handleClick} title={"All Products"} value="" />
          <Button handleClick={handleClick} title={"Nike"} value={"Nike"} />
          <Button handleClick={handleClick} title={"Adidas"} value={"Adidas"} />
          <Button handleClick={handleClick} title={"Puma"} value={"Puma"} />
          <Button handleClick={handleClick} title={"Vans"} value={"Vans"} />
        </div>
      </div>
    </>
  );
}
