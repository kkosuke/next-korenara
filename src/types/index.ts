import type { User } from "firebase/auth";

// Authentication
export type UserType = User | null;
// firebaseのusersのデータ
export type UserData = any;
export type AuthContextProps = {
  user: UserType;
  userData: UserData;
};
