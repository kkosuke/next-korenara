import { BasicItemCard } from "@/components/molecules/card/basicItemCard";
import { AsideCategoryList } from "@/components/molecules/list/asideCategoryList";
import { AsideHelpList } from "@/components/molecules/list/asideHelpList";

import { LoggedIn } from "@/components/templates/top/loggedInTemplate";
import { dummyItems } from "@/dummyData/items";
import React from "react";

const KeepIndex = () => {
  return (
    <LoggedIn titleTag="カテゴリー名から探す | コレナラ">
      <div className="container mx-auto flex">
        <aside className="w-80 flex-none p-4 hidden lg:block">
          <AsideCategoryList />
          <hr className="my-6 h-px border-0 bg-gray-300" />
          <AsideHelpList />
        </aside>
        <main className="min-w-0 flex-1 px-4">
          <p className="pt-4 font-bold text-2xl">
            キープしているプラン（作成予定）
          </p>
          <p className="text-gray-600 my-4">
            キープしているプランを最大40件表示します
          </p>
          <div className="container mx-auto border border-slate-300 border-b-0 border-x-0 mt-4">
            <section className="mb-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
                {dummyItems.map((i) => (
                  <BasicItemCard key={i.id} item={i} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </LoggedIn>
  );
};

export default KeepIndex;
