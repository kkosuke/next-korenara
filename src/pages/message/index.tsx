import { AsideCategoryList } from "@/component/molecules/list/asideCategoryList";
import { AsideHelpList } from "@/component/molecules/list/asideHelpList";
import { LoggedIn } from "@/component/templates/top/loggedInTemplate";
import Image from "next/image";
import React from "react";
import { dummyUser } from "@/dummyData/user";
import Link from "next/link";

const MessageIndex = () => {
  return (
    <LoggedIn titleTag="メッセージ | コレナラ">
      <div className="container max-w-7xl mx-auto flex mt-4">
        <aside className="w-80 flex-none p-4 hidden lg:block">
          <AsideCategoryList />
          <hr className="my-6 h-px border-0 bg-gray-300" />
          <AsideHelpList />
        </aside>
        <main className="min-w-0 flex-1 px-4">
          <p className="pt-4 font-bold text-2xl mb-4">メッセージ</p>
          <ul>
            <li className="rounded-md overflow-hidden shadow bg-white p-4 mb-4">
              <div className="flex">
                <Link
                  href="/message/room/u9wqoeqow"
                  className="block hover:opacity-70 w-full"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <div className="h-8 w-8">
                      <Image
                        className="h-full w-full rounded-full object-cover object-center ring ring-white"
                        src={dummyUser.image}
                        alt=""
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-secondary-500">
                        {dummyUser.name}
                      </div>
                      <div className="text-xs text-secondary-400">
                        Joined in April 1976
                      </div>
                    </div>
                  </div>
                  <p className="truncate text-slate-600">
                    ここに文章が入るかもしれません。ここに文章が入るかもしれません。ここに文章が入るかもしれません。ここに文章が入るかもしれません。ここに文章が入るかもしれません。ここに文章が入るかもしれません。
                  </p>
                </Link>
              </div>
            </li>
          </ul>
        </main>
      </div>
    </LoggedIn>
  );
};

export default MessageIndex;
