import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { app } from "@/lib/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserType, AuthProps, AuthContextProps } from "@/types/index";

const AuthContext = createContext<Partial<AuthContextProps>>({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }: AuthProps) => {
  const router = useRouter();
  const auth = getAuth(app);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserType>(null);
  const value = {
    user,
  };
  const isAvailableForViewing =
    router.pathname === "/" ||
    router.pathname === "/login" ||
    router.pathname === "/register" ||
    router.pathname === "/pages";

  useEffect(() => {
    const authStateChanged = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setIsLoading(false);
      !user &&
        !isAvailableForViewing &&
        (await router.replace(
          {
            pathname: "/login",
            query: { situation: "need_to_signin" },
          },
          "/login"
        ));
    });
    return () => {
      authStateChanged();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return isLoading ? (
    <></>
  ) : (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
