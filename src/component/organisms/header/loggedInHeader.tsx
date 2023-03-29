import React from "react";
import { TextLink } from "@/component/atom/text/TextLink";
import { LoggedInHeaderMenu } from "@/component/molecules/menu/loggedInHeaderMenu";
import { LoggedInHeaderNotice } from "@/component/molecules/menu/loggedInHeaderNotice";

export const LoggedInHeader = () => {
  return (
    <header className="bg-blue-200 p-4">
      <div className="container mx-auto max-w-8xl justify-between items-center flex">
        <TextLink href="/" text="ログインヘッダー" />
        <div className="mr-auto ml-8 w-1/3">
          <form action="" className="font-medium flex space-y-0">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="気になっていたキーワードでプランを検索"
            />
            <button
              type="button"
              className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300 whitespace-nowrap"
            >
              検索
            </button>
          </form>
        </div>
        <nav>
          <ul className="items-center gap-4 font-medium flex space-y-0 mr-auto ml-8">
            <li>
              <LoggedInHeaderNotice />
            </li>
            <li>
              <LoggedInHeaderMenu />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
