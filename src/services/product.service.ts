import { productApiClient } from "./api.service";

export const getFlashSaleProducts = async () => {
  let products = await productApiClient.get("/products?limit=6");
  return products.data;
};

export const getWomentsProducts = async () => {
  let products = await productApiClient.get(
    "/products/category/women's clothing"
  );
  return products.data;
};

export const getMentsProducts = async () => {
    let products = await productApiClient.get(
      "/products/category/men's clothing"
    );
    return products.data;
  };
  