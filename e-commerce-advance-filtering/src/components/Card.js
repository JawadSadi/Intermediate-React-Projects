import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsBagHeartFill } from "react-icons/bs";

export default function Card() {
  return (
    <section className="card">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt="Shoe"
        className="card-img"
      />
      <div className="card-details">
        <h3 className="card-title">Nike Air Monarch IV</h3>
        <section className="card-reviews">
          <AiFillStar color="#d5ab55" className="ratings-star" />
          <AiFillStar color="#d5ab55" className="ratings-star" />
          <AiFillStar color="#d5ab55" className="ratings-star" />
          <AiFillStar color="#d5ab55" className="ratings-star" />
          <span className="total-reviews">4</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>$300</del> $200
          </div>
          <div className="bag-icon">
            <BsBagHeartFill />
          </div>
        </section>
      </div>
    </section>
  );
}
