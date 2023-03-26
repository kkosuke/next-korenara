import { ReactNode } from "react";
import type { User } from "firebase/auth";

export type UserType = User | null;
export type AuthContextProps = {
  user: UserType;
};
export type AuthProps = {
  children: ReactNode;
};
