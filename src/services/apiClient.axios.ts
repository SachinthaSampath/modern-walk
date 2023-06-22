import axios from "axios";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
// const API_BASE_URL = "https://equinox-salt-addition.glitch.me";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
 

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
