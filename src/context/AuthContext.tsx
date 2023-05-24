import { ReactNode } from "react";
import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { app } from "@/lib/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserType, UserData, AuthContextProps } from "@/types/index";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Props = {
  children: ReactNode;
};

const AuthContext = createContext<Partial<AuthContextProps>>({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const auth = getAuth(app);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserType>(null);
  const [userData, setUserData] = useState<UserData>(null);
  const value = {
    user,
    userData,
  };
  const isAvailableForViewing =
    router.pathname === "/" ||
    router.pathname === "/login" ||
    router.pathname === "/register" ||
    router.pathname === "/pages";

  useEffect(() => {
    const authStateChanged = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        docSnap.exists() && setUserData({ ...docSnap.data(), id: user.uid });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        !isAvailableForViewing &&
          (await router.replace(
            {
              pathname: "/login",
              query: { situation: "need_to_signin" },
            },
            "/login"
          ));
      }
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
