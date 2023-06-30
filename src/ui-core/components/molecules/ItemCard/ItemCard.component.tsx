import React from "react";
import { H2 } from "../../atoms";
import { Item } from "../../../../types/Item";
import { ItemCardProps } from "./ItemCard.types";
import StyledItemCard from "./ItemCard.styled";

export default function ItemCard({
  itemData,
}: ItemCardProps): React.JSX.Element {
  const { title, price, image, description, category } = itemData;

  return (
    <StyledItemCard>
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
    </StyledItemCard>
  );
}
