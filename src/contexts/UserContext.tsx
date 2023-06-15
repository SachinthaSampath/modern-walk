import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { User } from "../types/User";
import { UserContextType } from "../interfaces/UserContextType";

//default user object
const defaultUser: User = {
  name: "",
  email: "",
  username: "",
  isLoggedIn: false,
};

//context to provide the user
const UserContext = createContext<User>(defaultUser);

//context to provide user update function
const UserUpdateContext = createContext<Function>(() => {});

//custom hooks to give easy access
export function useUser() {
  return useContext(UserContext);
}
export function useUpdateUser() {
  return useContext(UserUpdateContext);
}


//UserProvider property type definition
type UserProviderProps = {
  children: React.ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  //crate state with default user object
  const [user, setUser] = useState<User>(defaultUser);  

  const updateUser = (user: {}) => {
    setUser((prevUser) => {
      return { ...prevUser, ...user };
    });
  };


  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
