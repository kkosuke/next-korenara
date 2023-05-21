import { LoggedOut } from "@/components/templates/top/loggedOutTemplate";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import { app } from "@/lib/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginIndex = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/");
  };

  return (
    <LoggedOut titleTag="ログイン">
      <div className="mx-auto max-w-xs">
        <h1 className="text-3xl font-extrabold mb-2 mt-4">ログイン</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              メールアドレス
            </label>
            <input
              type="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="you@email.com"
              onChange={handleChangeEmail}
            />
            <p className="mt-1 text-sm text-gray-500">
              This is a help message.
            </p>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              パスワード
            </label>
            <input
              type="password"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="password"
              onChange={handleChangePassword}
            />
            <p className="mt-1 text-sm text-gray-500">
              This is a help message.
            </p>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
            >
              ログインする
            </button>
          </div>
        </form>
      </div>
    </LoggedOut>
  );
};

export default LoginIndex;
