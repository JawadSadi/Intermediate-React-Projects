import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsBagHeartFill } from "react-icons/bs";

export default function Card({
  img,
  title,
  star,
  prevPrice,
  newPrice,
  reviews,
}) {
  return (
    <section className="card">
      <img src={img} alt="Shoe" className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star}
          {star}
          {star}
          {star}
          {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag-icon">
            <BsBagHeartFill />
          </div>
        </section>
      </div>
    </section>
  );
}
