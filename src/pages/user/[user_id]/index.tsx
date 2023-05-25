import { LoggedIn } from "@/components/templates/top/loggedInTemplate";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BasicTag } from "@/components/atoms/tag/BasicTag";
import Image from "next/image";
import { DropDownBasic } from "@/components/molecules/dropdown/basic";
import Link from "next/link";
import { dummyItems } from "@/dummyData/items";
import { BasicItemCard } from "@/components/molecules/card/basicItemCard";
import { useAuthContext } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const UserIdIndex = () => {
  const router = useRouter();
  const { user_id } = router.query;
  const { userData } = useAuthContext();
  const [thisUser, setThisUser] = useState<any>();

  useEffect(() => {
    const itemsData = collection(db, "users");
    const q = query(itemsData);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      // snapshot.docsを setItemsに入れたほうが、すんなり行きそうだが、
      // うまく行かなかった。
      snapshot.docs.map((doc) => {
        if (doc.data().userId === user_id) {
          setThisUser(doc.data());
        }
      });
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_id]);

  return (
    thisUser && (
      <LoggedIn
        titleTag={`${thisUser.displayName}さんのプロフィール | コレナラ`}
      >
        <div className="bg-white">
          <div className="container mx-auto  max-w-5xl p-4">
            <div className="flex flex-wrap gap-6">
              <div className="h-28 w-28">
                <Image
                  className="h-full w-full rounded-full object-cover object-center ring ring-white"
                  src={thisUser.image}
                  alt=""
                  width={112}
                  height={112}
                />
              </div>
              <div className="self-center">
                <h1 className="font-bold text-2xl mb-4">
                  {thisUser.displayName}
                </h1>
                <div className="text-sm font-medium text-secondary-500">
                  最終ログイン {"8分"}前（未作成）
                </div>
              </div>
              <div className="ml-auto">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-md border border-primary-500 bg-primary-500 px-3 py-1.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  メッセージを送信
                </button>
                {userData.userId === user_id && (
                  <>
                    <DropDownBasic
                      label={<>…</>}
                      className="inline-block align-top ml-3"
                      childrenPosition="right"
                    >
                      <div className="p-1">
                        <Link
                          href={`/user/${user_id}/edit`}
                          className="flex w-full items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          プロフィールを編集
                        </Link>
                      </div>
                    </DropDownBasic>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-5xl">
          <main className="px-4 mb-4">
            <div className="rounded-lg bg-white p-8 mt-4">
              <h2 className="font-bold text-lg text-gray-600 mb-2">自己紹介</h2>
              <div className="mt-4">
                {thisUser.detail
                  ? thisUser.detail
                  : "紹介文が作成されていません"}
              </div>
            </div>
            {thisUser.tags.length > 0 && (
              <div className="rounded-lg bg-white p-8 mt-4">
                <h2 className="font-bold text-lg text-gray-600 mb-2">
                  興味のあるジャンル
                </h2>
                <div className="mt-4">
                  {thisUser.tags.map((tag: string) => (
                    <BasicTag className="mr-2" text={tag} key={tag} />
                  ))}
                </div>
              </div>
            )}
            <div className="rounded-lg bg-white p-8 mt-4">
              <h2 className="font-bold text-lg text-gray-600 mb-4">
                作成したサービス（作成予定）
              </h2>
              <div className="grid grid-cols-4 gap-4">
                {dummyItems.map((i) => (
                  <BasicItemCard key={i.id} item={i} />
                ))}
              </div>
              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="rounded-lg border border-primary-500 bg-primary-500 px-24 py-3 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
                >
                  もっと見る
                </button>
              </div>
            </div>
          </main>
        </div>
      </LoggedIn>
    )
  );
};

export default UserIdIndex;
