import React from "react";
import { ProductsAPI } from "@/services";
import { Item } from "@/types";
import Image from "next/image";

const Product = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  const data = await ProductsAPI.getProduct(productId);
  let product = data;

  return (
    <div className="container">
      <div className="flex flex-col space-y-3">
        <h1 className="font-bold text-xl">{product.title}</h1>
        <p>{product.description}</p>
        <img src={product.image} width="300" height="300" alt="" />
      </div>
    </div>
  );
};

export default Product;
