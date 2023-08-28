import { ProductsAPI } from "@/services";
import { Item } from "@/types";
import React from "react";
import { ItemCard } from "@/ui-core/components";
import { SectionLayout } from "@/ui-core/layouts";

const Category = async ({ params }: { params: { category: string } }) => {
  const { category } = params;

  let data = [];
  if (category === "mens") {
    data = await ProductsAPI.getMensProducts();
  } else if (params.category === "womens") {
    data = await ProductsAPI.getWomensProducts();
  } else {
    data = await ProductsAPI.getAllProducts();
  }

  let items = data;
  let title = category === "mens" ? "Men's Clothing" : "Women's Clothing";

  return (
    <SectionLayout heading={title}>
      {items?.map((i: Item) => {
        return <ItemCard key={i.id} itemData={i} />;
      })}
    </SectionLayout>
  );
};

export default Category;
