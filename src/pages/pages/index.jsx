import Link from "next/link";
import React from "react";
import TextLink from "@/component/atom/text/TextLink";

const pages = () => {
  const pageArray = [
    { path: "/", description: "サイトトップ" },
    { path: "category/1", description: "カテゴリーから探す（静的一覧）" },
    { path: "search/", description: "様々な条件から探す（動的一覧）" },

    { path: "item/1", description: "商品詳細" },
    { path: "user/1", description: "ユーザー詳細" },
    { path: "request/1", description: "リクエスト詳細" },

    { path: "keep/", description: "気になる商品・ユーザーのストック" },
    { path: "viewed/1", description: "閲覧した商品・ユーザーのページ" },

    { path: "login/", description: "ログイン" },
    { path: "register/", description: "新規会員登録" },

    { path: "mypage/", description: "ログイン後マイページ" },
    { path: "message/", description: "メッセージ一覧" },
    { path: "message/room/1", description: "メッセージルーム画面" },

    { path: "notice/", description: "サービスからのお知らせ一覧" },
  ];
  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-3xl font-extrabold mb-2 mt-4">ページ</h1>
      <ul className="space-y-4 mb-10">
        {pageArray.map(({ path, description }, idx) => (
          <li key={path} className="flex gap-4">
            <dl className="flex-1">
              <dt class="text-xl font-medium leading-loose">
                <TextLink href={path} text={path === "/" ? "トップ" : path} />
              </dt>
              <dd class="text-gray-500">{description}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default pages;
