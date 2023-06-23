import { apiClient, endpointsProducts } from "./api.service";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function getMensProducts() {
  return apiClient.get(endpointsProducts.mens).then((respose) => respose.data);
}

function getWomensProducts() {
  return apiClient
    .get(endpointsProducts.womens)
    .then((respose) => respose.data);
}

function getFlashSaleProducts() {
  return apiClient
    .get(endpointsProducts.flash)
    .then((response) => response.data);
}

export { getFlashSaleProducts, getWomensProducts, getMensProducts };
