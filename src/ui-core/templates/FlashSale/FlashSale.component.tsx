import React from "react";
import { SectionLayout } from "../../layouts";

import { ItemCard } from "../../components";
import { Item } from "../../../types/Item";

type FlashSaleProps = {
  flashItems: Item[] | undefined;
};

export default function FlashSale({ flashItems }: FlashSaleProps) {
  return (
    <div className="flash-sale-container">
      <SectionLayout heading={"Flash Sale"}>
        {flashItems?.map((fi) => {
          return <ItemCard key={fi.id} itemData={fi} />;
        })}
      </SectionLayout>
    </div>
  );
}
