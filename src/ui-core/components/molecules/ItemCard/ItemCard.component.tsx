import React from "react";
import { H2 } from "../../atoms";
import "./ItemCard.css";
import { Item } from "../../../../types/Item";
import { ItemCardProps } from "./ItemCard.types";

export default function ItemCard({
  itemData,
}: ItemCardProps): React.JSX.Element {
  const { title, price, image, description, category } = itemData;

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
