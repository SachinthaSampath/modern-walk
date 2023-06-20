import React, { useContext } from "react";
import { createContext, useState } from "react";
import { User } from "../types/User";

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
const UserUpdateContext = createContext<any>(() => {});

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

  //function to update user, only the given properties will be updated.
  const updateUser = (user: {}) => {
    setUser((prevUser) => {
      return { ...prevUser, ...user };
    });
  };

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={updateUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
