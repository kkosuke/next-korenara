import { LoggedIn } from "@/component/templates/top/loggedInTemplate";

import { useRouter } from "next/router";
import React, { useState } from "react";
import { BasicTag } from "@/component/atom/tag/BasicTag";

const ItemIdNew = () => {
  const router = useRouter();
  const { item_id } = router.query;

  return (
    <LoggedIn titleTag={`商品新規登録 | コレナラ`}>
      <div className="container mx-auto  max-w-5xl">
        <div className="px-4">
          <div>
            気の利いた要素
            <br />
            保存ボタンとかプレビューボタンとか置けたら・・・
          </div>
        </div>
        <main className="px-4 mb-4">
          <p className="pt-4 font-bold text-3xl mb-4">商品新規登録</p>
          <div className="rounded-lg bg-white p-4">
            <p className="font-bold text-lg text-gray-600 mb-2">商品名</p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value=""
              placeholder="商品名を入力してください"
            />
            <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
              サブタイトル（任意）
            </p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value=""
              placeholder="サブタイトルを入力してください"
            />
            <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
              商品の価格（円）
            </p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value=""
              placeholder="商品の価格を整数で入力してください。"
            />
            <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
              タグの登録
              <span className="font-normal text-xs text-gray-400 ml-2">
                設定すると特徴が利用者に伝わりやすくなります
              </span>
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

            <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
              商品の説明
              <span className="font-normal text-xs text-gray-400 ml-2">
                20文字以上5,000文字以内。Markdown記法が使えます（予定）
              </span>
            </p>
            <textarea
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
              rows={20}
              placeholder="商品に関する説明文を入力してください。"
              value=""
            ></textarea>

            <div className="mt-4 text-center">
              <button
                type="button"
                className="rounded-lg border border-primary-500 bg-primary-500 px-24 py-3 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                作成する
              </button>
            </div>
          </div>
        </main>
      </div>
    </LoggedIn>
  );
};

export default ItemIdNew;
