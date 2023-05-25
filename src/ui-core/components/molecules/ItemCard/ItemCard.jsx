import React from "react";

import "./ItemCard.css";

export default function ItemCard(props) {
  const { title, price, image, id, description, category } = props.itemData;

  return (
    <div className="item-card-container">
      <h2 className="item-card-title">{title}</h2>
      <img src={image} alt="Flash sale item" className="item-card-img" />
      <div
        className={`item-card-details-container ${
          category === "men's clothing" ? "card-mens" : "card-womens"
        }`}
      >
        <h2 className="item-card-price">Rs {price}</h2>
        <p className="item-card-desc">{description}</p>
      </div>
    </div>
  );
}
