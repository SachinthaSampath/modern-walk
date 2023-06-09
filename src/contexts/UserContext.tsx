import React from "react";
import { createContext, useState } from "react";
import { User } from "../types/User";
import { UserContextType } from "../interfaces/UserContextType";

// export const UserContext = createContext<Partial<UserContextType>>({});
// export const UserContext=createContext<UserContextType|undefined>(undefined);
const defaultState = {
  user: {
    name: "",
    email: "",
    username: "",
  },
  setUser: (user: User) => {
    return { name: user.name, email: user.email, username: user.username };
  },
} as UserContextType;
export const UserContext = createContext(defaultState);

const defaultUser: User = {
  name: "",
  email: "",
  username: "",
  isLoggedIn: false,
};

type UserProviderProps = {
  children: React.ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>(defaultUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
