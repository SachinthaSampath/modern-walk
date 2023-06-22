import { apiClient, endpointsProducts } from "./api.service";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function getMensProducts() {
  return fetch(API_BASE_URL + endpointsProducts.mens).then((res) => res.json());
}

function getWomensProducts() {
  return fetch(API_BASE_URL + endpointsProducts.womens).then((res) =>
    res.json()
  );
}
function getFlashSaleProducts() {
  return fetch(API_BASE_URL + endpointsProducts.flash).then((res) =>
    res.json()
  );
}

export { getFlashSaleProducts, getWomensProducts, getMensProducts };
