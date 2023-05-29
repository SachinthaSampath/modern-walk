import React from "react";
import H2 from "../../atoms/typography/H2/H2";
import "./ItemCard.css";

export default function ItemCard(props) {
  const { title, price, image, id, description, category } = props.itemData;

  return (
    <div className="item-card-container">
      <H2 className="item-card-title">{title}</H2>
      <img src={image} alt="Flash sale item" className="item-card-img" />
      <div
        className={`item-card-details-container ${
          category === "men's clothing" ? "card-mens" : "card-womens"
        }`}
      >
        <H2 className="item-card-price">Rs {price}</H2>
        <p className="item-card-desc">{description}</p>
      </div>
    </div>
  );
}
