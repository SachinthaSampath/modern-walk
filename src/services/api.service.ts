import axios from "axios";
import { useQuery } from "@tanstack/react-query";
 

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

export const endpointsProducts = {
  mens: "/products?category=men's clothing",
  womens: "/products?category=women's clothing",
  flash: "/products?_sort=title&_order=desc&_limit=8",
};

export const cancelTokenSource = axios.CancelToken.source();

//create API client
export const apiClient = axios.create({
  //URL of API
  baseURL: API_BASE_URL,
  cancelToken: cancelTokenSource.token,
  //timeout in milliseconds
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});
 
