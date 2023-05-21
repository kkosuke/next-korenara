import { AsideCategoryList } from "@/components/molecules/list/asideCategoryList";
import { AsideHelpList } from "@/components/molecules/list/asideHelpList";
import { LoggedIn } from "@/components/templates/top/loggedInTemplate";
import React, { useState } from "react";
import Link from "next/link";
import { dummyMessages } from "@/dummyData/messages";
import { MessageCard } from "@/components/molecules/card/messageCard";

const MessageRoomIdIndex = () => {
  const [messages, setMessages] = useState(dummyMessages);
  console.log(messages);
  return (
    <LoggedIn titleTag="●●さんとのメッセージ | コレナラ">
      <div className="container flex mx-auto max-w-7xl p-4 pb-2">
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
            <Link href="/message" className="text-blue-400">
              メッセージ
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
          <li className="inline-block">●●さんとのメッセージ</li>
        </ol>
      </div>
      <div className="container mx-auto flex max-w-7xl mb-4">
        <aside className="w-80 flex-none p-4 hidden lg:block">
          <AsideCategoryList />
          <hr className="my-6 h-px border-0 bg-gray-300" />
          <AsideHelpList />
        </aside>
        <main className="min-w-0 flex-1 px-4">
          <p className="pt-4 font-bold text-2xl mb-4">●●さんとのメッセージ</p>

          <div className="rounded-md overflow-hidden shadow bg-white p-4 mb-4">
            <p className="font-bold text-lg text-gray-600 mb-2">
              メッセージを作成
              <span className="font-normal text-xs text-gray-400 ml-2">
                20文字以上5,000文字以内。Markdown記法が使えます（予定）
              </span>
            </p>
            <textarea
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
              rows={6}
              placeholder="メッセージ内容を入力してください"
            ></textarea>

            <div className="mt-4 text-center">
              <button
                type="button"
                className="rounded-lg border border-primary-500 bg-primary-500 px-24 py-3 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                送信する
              </button>
            </div>
          </div>

          <ul>
            {messages.map((message) => (
              <MessageCard message={message} key={message.id} />
            ))}
          </ul>
        </main>
      </div>
    </LoggedIn>
  );
};

export default MessageRoomIdIndex;
