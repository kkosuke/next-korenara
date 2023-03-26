import { useEffect, useState } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { app } from "@/lib/firebase";
import {
  getAuth,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

import styles from "@/styles/app.module.css";
import { UserType } from "@/types/index";

const userState = atom<UserType>({
  key: "userState",
  default: null,
  dangerouslyAllowMutability: true,
});

export const login = (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  return signInWithRedirect(auth, provider);
};

export const logout = (): Promise<void> => {
  const auth = getAuth(app);
  return signOut(auth);
};

export const useUser = (): UserType => {
  return useRecoilValue(userState);
};

export const useAuth = (): boolean => {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const auth = getAuth(app);
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [setUser]);

  return isLoading;
};

export const AuthLoading = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const isLoading = useAuth();
  return isLoading ? <p className={styles.loading}>Loading...</p> : children;
};
