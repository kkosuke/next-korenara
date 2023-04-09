import { LoggedIn } from "@/component/templates/top/loggedInTemplate";

import { useRouter } from "next/router";
import React, { useState } from "react";
import { BasicTag } from "@/component/atom/tag/BasicTag";
import { ItemReviewList } from "@/component/molecules/list/itemReviewList";
import Image from "next/image";
import { dummyUser } from "@/dummyData/user";
import { DropDownBasic } from "@/component/molecules/dropdown/basic";

const UserIdEdit = () => {
  const router = useRouter();
  const { user_id } = router.query;
  const [user, setItem] = useState(dummyUser);

  return (
    <LoggedIn
      titleTag={`ユーザー情報編集 | ${user.name}さんのプロフィール | コレナラ`}
    >
      <div className="container mx-auto  max-w-5xl">
        <div className="px-4">
          <div>
            気の利いた要素
            <br />
            保存ボタンとかプレビューボタンとか置けたら・・・
          </div>
        </div>
        <main className="px-4 mb-4">
          <p className="pt-4 font-bold text-3xl mb-4">ユーザー情報</p>
          <div className="rounded-lg bg-white p-4">
            <p className="font-bold text-lg text-gray-600 mb-2">ユーザー名</p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value={user.name}
            />
            <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
              アイコン
            </p>
            <div>
              <label>
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  ファイルをアップロード
                </span>
                <input
                  id="example1"
                  type="file"
                  className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-primary-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                />
              </label>
            </div>

            <div className="h-16 w-16 mt-4">
              <Image
                className="h-full w-full rounded-full object-cover object-center ring ring-white"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                width={64}
                height={64}
              />
            </div>

            <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
              自己紹介
              <span className="font-normal text-xs text-gray-400 ml-2">
                20文字以上5,000文字以内。Markdown記法が使えます（予定）
              </span>
            </p>

            <textarea
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
              rows={20}
              placeholder=""
              value={user.detail}
            ></textarea>

            <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
              興味のあるジャンル
            </p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value={""}
              placeholder="設定したいタグを入力してください"
            />
            <div className="mt-4">
              <BasicTag className="mr-2" text="タグ名" removable />
              <BasicTag className="mr-2" text="タグ名" removable />
              <BasicTag className="mr-2" text="タグ名" removable />
              <BasicTag className="mr-2" text="タグ名" removable />
              <BasicTag className="mr-2" text="タグ名" removable />
            </div>

            <div className="mt-4 text-center">
              <button
                type="button"
                className="rounded-lg border border-primary-500 bg-primary-500 px-24 py-3 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                保存する
              </button>
            </div>
          </div>
        </main>
      </div>
    </LoggedIn>
  );
};

export default UserIdEdit;