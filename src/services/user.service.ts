import { FetchUserType } from "../types/FetchUserType";
import { apiClient } from "./api.service.axios";
import { APIError } from "../models/APIError";

// function to get all users
export const fetchAllUsers = async () => {
  try {
    const response = await apiClient.get("/users");
    return response.data;
  } catch (error: any) {
    throw new APIError(
      error.response?.data?.message ||
        "An error occured while fetching user data!",
      error.response.status
    );
  }
};

//function to fetch a specific user
export const fetchUser = async (userId: number) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
  } catch (error: unknown | Error | any) {
    throw new APIError(
      error.response?.data?.message ||
        "An error occured while fetching user data!",
      error.response.status
    );
  }
};

//function to find user with username
export const seachUser = async (searchData: Partial<FetchUserType>) => {
  try {
    //build the search query
    let entries = Object.entries(searchData);
    let q = "?";
    entries.forEach((el) => {
      q += el[0] + "=" + el[1] + "&";
    });

    //send request
    let response = await apiClient.get("/users" + q);    

    return response.data;
  } catch (error: any) {
    throw new APIError(
      error?.response?.data?.message ||
        "An error occured while searching the user",
      error.response.status
    );
  }
};

//function to create user
export const createUser = async (userData: FetchUserType) => {
  try {
    const response = await apiClient.post("/users", userData);
    return response.data;
  } catch (error: any) {
    throw new APIError(
      error.response?.data?.message ||
        "An error occured while creating the user",
      error.response.status
    );
  }
};
