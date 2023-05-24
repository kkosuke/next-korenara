import { LoggedOut } from "@/components/templates/top/loggedOutTemplate";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import { app } from "@/lib/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  setDoc,
  doc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const RegisterIndex = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // userIDが重複しているかどうか
      const userIdIsDuplicate = await isDuplicateUserId();
      // PWが6文字以上かつIDが重複していないなら、Authenticationを行う。
      if (password.length > 5 && !userIdIsDuplicate) {
        await createUserWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            // Authentication がうまく行けば、そのUIDをもとにuserデータを作成する
            const user = userCredential.user;
            const uid = user.uid;
            createUser(uid);
          }
        );
        router.push(
          {
            pathname: `/user/${userId}`,
            query: { situation: "signup_success" },
          },
          `/user/${userId}`
        );
      } else {
        alert(
          "パスワードが5文字以上か、すでにユーザーIDが存在するため登録できません。"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (uid: any) => {
    await setDoc(doc(db, "users", uid), {
      displayName: "名前未設定",
      userId: userId,
      createdAt: serverTimestamp(),
      editedAt: serverTimestamp(),
      image: "https://placehold.jp/150x150.png",
      detail: "",
      tags: [],
    });
  };

  const isDuplicateUserId = () =>
    new Promise((resolve) => {
      const usersData = collection(db, "users");
      const q = query(usersData, orderBy("createdAt", "desc"));
      onSnapshot(q, (snapshot) => {
        snapshot.docs.map((doc) => {
          if (doc.data().userId === userId) {
            resolve(true);
          }
        });
        resolve(false);
      });
    });

  return (
    <LoggedOut titleTag="新規会員登録">
      <div className="mx-auto max-w-xs">
        <h1 className="text-3xl font-extrabold mb-2 mt-4">新規会員登録</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <div className="mb-1 block text-sm font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              メールアドレス
            </div>
            <input
              type="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="you@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="mt-1 text-sm text-gray-500">
              This is a help message.
            </p>
          </div>
          <div className="mt-4">
            <div className="mb-1 block text-sm font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              パスワード
            </div>
            <input
              type="password"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="mt-1 text-sm text-gray-500">
              This is a help message.
            </p>
          </div>
          <div className="mt-4">
            <div className="mb-1 block text-sm font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              ユーザーID（URL名）
            </div>
            <div className="text-xs text-gray-700 mb-2">
              ※ アルファベット もしくは 数字 もしくは _ が使えます。（予定）
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="お好きなユーザーIDを入力してください"
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
            >
              新規会員登録をする
            </button>
          </div>
        </form>
      </div>
    </LoggedOut>
  );
};

export default RegisterIndex;
