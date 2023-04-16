import React from "react";
import { LoggedInHeaderMenu } from "@/component/molecules/menu/loggedInHeaderMenu";
import { LoggedInHeaderNotice } from "@/component/molecules/menu/loggedInHeaderNotice";
import Link from "next/link";

export const LoggedInHeader = () => {
  return (
    <header className="p-4 border border-slate-300 border-t-0 border-x-0">
      <div className="container mx-auto max-w-8xl justify-between items-center flex">
        <Link href="/" className="text-blue-400	text-2xl font-bold">
          ココカラ
        </Link>
        <div className="mr-auto ml-8 w-1/3">
          <form action="" className="font-medium flex space-y-0">
            <input
              type="text"
              className="block w-full rounded-md rounded-r-none border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="気になっていたキーワードでプランを検索"
            />
            <button
              type="button"
              className="rounded-md rounded-l-none border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300 whitespace-nowrap"
            >
              検索
            </button>
          </form>
        </div>
        <nav>
          <ul className="items-center gap-4 font-medium flex space-y-0 mr-auto ml-8">
            <li>
              <Link
                href="/item/new"
                className="inline-flex items-center gap-1.5 rounded-md border border-primary-500 bg-primary-500 px-3 py-1.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                出品する
              </Link>
            </li>
            <li>
              <Link href="/message">
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
              </Link>
            </li>
            <LoggedInHeaderNotice />
            <li>
              <LoggedInHeaderMenu />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
