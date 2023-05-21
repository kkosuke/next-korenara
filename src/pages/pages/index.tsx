import Link from "next/link";
import React from "react";
import { TextLink } from "@/components/atoms/text/TextLink";

const pages = () => {
  const pageArray = [
    { path: "login/", description: "ログイン", status: "済" },
    { path: "register/", description: "新規会員登録", status: "済" },
    { path: "/", description: "サイトトップ", status: "済" },

    {
      path: "search/",
      description: "様々な条件から探す（動的一覧）",
      status: "済",
    },

    { path: "item/1", description: "商品詳細", status: "済" },
    { path: "item/1/edit", description: "商品詳細-編集", status: "済" },
    { path: "item/new", description: "商品詳細-新規", status: "済" },

    { path: "user/1", description: "ユーザー詳細", status: "済" },
    { path: "user/1/edit", description: "ユーザー詳細-編集", status: "済" },

    { path: "message/", description: "メッセージルーム一覧", status: "【済】" },
    {
      path: "message/room/1",
      description: "メッセージルーム画面",
      status: "【済】",
    },

    {
      path: "category/1",
      description: "カテゴリーから探す（静的一覧）",
      status: "保留（済）",
    },
    {
      path: "keep/",
      description: "気になる商品・ユーザーのストック",
      status: "保留（済）",
    },
    {
      path: "viewed/1",
      description: "閲覧した商品・ユーザーのページ",
      status: "保留（済）",
    },
    {
      path: "request/1",
      description: "リクエスト詳細",
      status: "保留",
    },
    {
      path: "request/1/edit",
      description: "リクエスト編集",
      status: "保留",
    },
    {
      path: "request/create",
      description: "リクエスト作成",
      status: "保留",
    },

    {
      path: "mypage/",
      description: "ログイン後マイページ",
      status: "保留",
    },
  ];
  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-3xl font-extrabold mb-2 mt-4">ページ</h1>
      <ul className="space-y-4 mb-10">
        {pageArray.map(({ path, description, status }, idx) => (
          <li key={path} className="flex gap-4">
            <dl className="flex-1">
              <dt className="text-xl font-medium leading-loose">
                【{status}】
                <TextLink href={path} text={path === "/" ? "トップ" : path} />
              </dt>
              <dd className="text-gray-500">{description}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default pages;
