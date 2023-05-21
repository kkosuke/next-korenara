import { LoggedIn } from "@/component/templates/top/loggedInTemplate";

import { useRouter } from "next/router";
import React, { useState } from "react";
import { BasicTag } from "@/component/atom/tag/BasicTag";
import Image from "next/image";
import { dummyUser } from "@/dummyData/user";
import { DropDownBasic } from "@/component/molecules/dropdown/basic";
import Link from "next/link";
import { dummyItems } from "@/dummyData/items";
import { BasicItemCard } from "@/component/molecules/card/basicItemCard";

const UserIdIndex = () => {
  const router = useRouter();
  const { user_id } = router.query;
  const [userInfo, setUserInfo] = useState(dummyUser);

  return (
    <LoggedIn titleTag={`${userInfo.name}さんのプロフィール | コレナラ`}>
      <div className="bg-white">
        <div className="container mx-auto  max-w-5xl p-4">
          <div className="flex flex-wrap gap-6">
            <div className="h-28 w-28">
              <Image
                className="h-full w-full rounded-full object-cover object-center ring ring-white"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                width={60}
                height={60}
              />
            </div>
            <div className="self-center">
              <h1 className="font-bold text-2xl mb-4">{userInfo.name}</h1>
              <div className="text-sm font-medium text-secondary-500">
                最終ログイン {"8分"}前
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
              {/* もしログインIDとページのuser_idが一致していた場合 */}
              <DropDownBasic
                label={<>…</>}
                className="inline-block align-top ml-3"
                childrenPosition="right"
              >
                <div className="p-1">
                  <Link
                    href="/user/1/edit"
                    className="flex w-full items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    プロフィールを編集
                  </Link>
                </div>
              </DropDownBasic>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl">
        <main className="px-4 mb-4">
          <div className="rounded-lg bg-white p-8 mt-4">
            <h2 className="font-bold text-lg text-gray-600 mb-2">自己紹介</h2>
            <div className="mt-4">
              web制作会社で、デザイナー、マークアップエンジニア、フロントエンドエンジニアなどの経験を積んで
              フリーとして活動をしています。
              web制作会社で6年、フリーランスとして8年の経験があります。
              週に1日7時間、専門学校の講師として、 Photoshop / Illustrator /
              Figma / HTML / CSS / Javascript / Typescript React / Vue / Nuxt /
              Next フレームワークなどのweb制作を教えています。
              教えるのはとても好きで、2021年現在講師の仕事は8年目になりました。
              生徒には学校や学校外でも就職の相談にのったり
              協力してサービスを作ったり様々なサポートをしています。
              また、講師以外の4日は業務委託としてプロジェクトに参加して、
              フロントエンドエンジニアとしてwebサービスを作っています。
            </div>
          </div>
          <div className="rounded-lg bg-white p-8 mt-4">
            <h2 className="font-bold text-lg text-gray-600 mb-2">
              興味のあるジャンル（作成予定）
            </h2>
            <div className="mt-4">
              <BasicTag className="mr-2" text="タグ名" />
              <BasicTag className="mr-2" text="タグ名" />
              <BasicTag className="mr-2" text="タグ名" />
              <BasicTag className="mr-2" text="タグ名" />
              <BasicTag className="mr-2" text="タグ名" />
            </div>
          </div>
          <div className="rounded-lg bg-white p-8 mt-4">
            <h2 className="font-bold text-lg text-gray-600 mb-4">
              作成したサービス
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
  );
};

export default UserIdIndex;
