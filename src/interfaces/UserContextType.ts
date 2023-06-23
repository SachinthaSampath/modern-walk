import { User } from "../types/User";
import { Dispatch, SetStateAction } from "react";

export interface UserContextType {
  user: User|undefined;
  setUser: Dispatch<SetStateAction<User>>;
}
