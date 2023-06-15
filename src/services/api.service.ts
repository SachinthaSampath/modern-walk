import { useQuery } from "@tanstack/react-query";
const API_BASE_URL = "https://equinox-salt-addition.glitch.me";

const endpointsProducts = {
  mens: "/products?category=men's clothing",
  womens: "/products?category=women's clothing",
  flash: "/products?_sort=title&_order=desc&_limit=8",
};


export function useFindUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return useQuery([username, password], () => {
    return fetch(
      `${API_BASE_URL}?username=${username}&password=${password}`
    ).then((res) => res.json());
  });
}

function getMensProducts() {
  return fetch(API_BASE_URL + endpointsProducts.mens).then((res) =>
    res.json()
  );
}
export function useMensProducts() {
  return useQuery(["mens"], getMensProducts);
}

function getWomensProducts() {
  return fetch(API_BASE_URL + endpointsProducts.womens).then((res) =>
    res.json()
  );
}
export function useWoensProducts() {
  return useQuery(["womens"], getWomensProducts);
}

function getFlashSaleProducts() {
  return fetch(API_BASE_URL + endpointsProducts.flash).then((res) =>
    res.json()
  );
}
export function useFlashSaleProducts() {
  return useQuery(["flash"], getFlashSaleProducts);
}
