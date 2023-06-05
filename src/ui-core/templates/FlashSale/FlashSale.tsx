import React from "react";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout";

import ItemCard from "../../components/molecules/ItemCard/ItemCard";
type Item = {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
type Props = {
  flashItems: Item[];
};

export default function FlashSale({ flashItems }:Props) {
  console.log(flashItems);
  return (
    <div className="flash-sale-container">
      <SectionLayout heading={"Flash Sale"}>
        {flashItems.map((fi) => {
          return <ItemCard key={fi.id} itemData={fi} />;
        })}
      </SectionLayout>
    </div>
  );
}
