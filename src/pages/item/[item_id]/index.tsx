import { AsideCategoryList } from "@/component/molecules/list/asideCategoryList";
import { AsideHelpList } from "@/component/molecules/list/asideHelpList";

import { LoggedIn } from "@/component/templates/top/loggedInTemplate";

import { dummyItem } from "@/dummyData/item";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BasicTag } from "@/component/atom/tag/BasicTag";
import { ItemReviewList } from "@/component/molecules/list/itemReviewList";
import { pushDataLayer } from "@/lib/analytics";

const ItemIdIndex = () => {
  const router = useRouter();
  const [item, setItem] = useState(dummyItem);

  const handleSendMessage = () => {
    pushDataLayer({
      event: "ga4Event",
      eventCategory: "商品詳細",
      eventAction: "クリック",
      eventLabel: "メッセージを送信",
      eventValue: item.price,
    });
    alert("未作成機能です");
  };

  useEffect(() => {
    const asPath = router.asPath;
    let masqueradeLocation = asPath.split("?")[1]
      ? `${asPath.split("?")[0]}__${item.user.name}?${asPath.split("?")[1]}`
      : `${asPath.split("?")[0]}__${item.user.name}`;
    masqueradeLocation = masqueradeLocation;
    pushDataLayer({
      event: "ga4TrackPageView",
      masqueradeLocation: masqueradeLocation,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoggedIn titleTag={`${item.title} | コレナラ`}>
      <div className="container mx-auto flex max-w-7xl mt-4">
        <main className="min-w-0 flex-1 px-4 mb-4 pt-4">
          <ol className="text-sm">
            <li className="inline-block">
              <Link href="/" className="text-blue-400">
                ココカラ
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="inline-block">
              <Link href="/category/1" className="text-blue-400">
                カテゴリー
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="inline-block">{item.title}</li>
          </ol>
          <p className="pt-4 font-bold text-2xl">{item.title}</p>
          <p className="pt-4 font-bold text-xl text-secondary-500">
            {item.subTitle}
          </p>
          <div className="mt-4">
            <BasicTag className="mr-2" href="#" text="タグ名" />
            <BasicTag className="mr-2" href="#" text="タグ名" />
            <BasicTag className="mr-2" href="#" text="タグ名" />
            <BasicTag className="mr-2" href="#" text="タグ名" />
            <BasicTag className="mr-2" href="#" text="タグ名" />
          </div>
          <div className="mt-2">★ 5.0 (1)</div>
          <div className="mt-2">最終更新日：{item.updateAt}</div>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <div className="h-12 w-12">
              <Image
                className="h-full w-full rounded-full object-cover object-center ring ring-white"
                src={item.user.image}
                alt=""
                width={48}
                height={48}
              />
            </div>
            <div>
              <div className="text-sm font-medium text-secondary-500">
                {item.user.name}
              </div>
            </div>
          </div>
          <hr className="my-10 h-px border-0 bg-gray-300" />
          <div>{item.detail}</div>
          <hr className="my-10 h-px border-0 bg-gray-300" />
          <section>
            <h2 className="font-bold text-xl mb-4">問い合わせフォーム</h2>
            <div>
              <textarea
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                rows={3}
                placeholder="プランに興味があります。詳しく話を伺いたいです。"
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                onClick={handleSendMessage}
                type="button"
                className="rounded-lg border border-primary-500 bg-primary-500 px-6 py-3 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                メッセージを送る
              </button>
            </div>
          </section>
          <hr className="my-10 h-px border-0 bg-gray-300" />
          <section>
            <h2 className="font-bold text-xl mb-4">レビュー（作成予定）</h2>
            <ItemReviewList item={item} />
            <section className="mt-8">
              <h2 className="font-bold text-md mb-4">
                レビューを投稿する（もし商品を購入していたら）
              </h2>
              <input
                type="text"
                className="mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="タイトル"
              />
              <textarea
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                rows={3}
                placeholder="レビュー内容"
              ></textarea>
              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="rounded-lg border border-primary-500 bg-primary-500 px-6 py-3 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
                >
                  投稿する
                </button>
              </div>
            </section>
          </section>
        </main>
        <aside className="w-80 flex-none p-4 hidden lg:block">
          <div>
            気の利いた要素
            <br />
            リスエストボタンとか編集ボタンとか置きたい・・・
          </div>
          <hr className="my-6 h-px border-0 bg-gray-300" />
          <AsideHelpList />
        </aside>
      </div>
    </LoggedIn>
  );
};

export default ItemIdIndex;
