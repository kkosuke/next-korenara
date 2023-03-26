import React from "react";
import { app } from "@/lib/firebase";
import { getAuth, signOut } from "firebase/auth";

const logout = (): Promise<void> => {
  const auth = getAuth(app);
  return signOut(auth);
};
export const LogoutButton = () => {
  const handleLogout = (): void => {
    logout().catch((error) => console.error(error));
  };
  return (
    <button
      type="button"
      onClick={handleLogout}
      className="text-primary-500 underline hover:no-underline active:no-underline"
    >
      ログアウト
    </button>
  );
};
