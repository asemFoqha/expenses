import { createContext } from "react";
import IUser from "../services/interfaces/IUser";

export const AuthContext = createContext<{
  currentUser: IUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>;
} | null>(null);
