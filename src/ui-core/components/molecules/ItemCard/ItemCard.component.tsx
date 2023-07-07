import React from "react";
import { H2 } from "../../atoms";
import { Item } from "../../../../types/Item";
import { ItemCardProps } from "./ItemCard.types";

export default function ItemCard({
  itemData,
}: ItemCardProps): React.JSX.Element {
  const { title, price, image, description, category } = itemData;

  return (
    <div className="min-w[200px] m-3 flex h-[450px] max-w-[250px] flex-col items-center justify-between overflow-hidden rounded-[20px] bg-white">
      <H2 className="text-md text-center font-medium mt-2">{title}</H2>
      <img
        src={image}
        alt="Flash sale item"
        className="mb-2 max-h-[100px] w-[100px]"
      />
      <div
        className={`flex h-[230px] flex-col content-start items-center overflow-hidden rounded-xl p-2 ${
          category === "men's clothing"
            ? "bg-modern-walk-bg-mens"
            : "bg-modern-walk-bg-womens"
        }`}
      >
        <H2 className="m-0 font-medium text-[#0E42FD]">Rs {price}</H2>
        <p className="overflow-hidden text-center text-sm">{description}</p>
      </div>
    </div>
  );
}
