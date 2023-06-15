import axios from "axios";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
const API_BASE_URL = "https://equinox-salt-addition.glitch.me";
const AUTH_TOKEN = "d2lyZWFwcHMK";
// console.log(API_BASE_URL);
// console.log(AUTH_TOKEN);

// REACT_APP_API_BASE_URL = "http://localhost:5000";
// REACT_APP_AUTH_TOKEN = "d2lyZWFwcHMK";

export const cancelTokenSource = axios.CancelToken.source();

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

export const productApiClient = axios.create({
  baseURL: "https://equinox-salt-addition.glitch.me",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
