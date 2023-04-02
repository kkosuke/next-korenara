import { BasicItemCard } from "@/component/molecules/card/basicItemCard";
import { AsideCategoryList } from "@/component/molecules/list/asideCategoryList";
import { AsideHelpList } from "@/component/molecules/list/asideHelpList";
import { Pagination } from "@/component/molecules/pagination";

import { LoggedIn } from "@/component/templates/top/loggedInTemplate";
import { dummyItems } from "@/dummyData/items";
import { useRouter } from "next/router";
import React from "react";
import ItemSort from "@/component/organisms/itemSort";

const CategoryIndex = () => {
  const router = useRouter();
  const { category_id } = router.query;

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
            カテゴリー名 {"{"}
            {category_id}
            {"}"} から探す
          </p>
          <p className="text-gray-600 my-4">
            {"{"}
            {1000}
            {"}"}のプランがみつかりました。
          </p>
          <div className="container mx-auto border border-slate-300 border-b-0 border-x-0 mt-4">
            <ItemSort />
            <section className="mb-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
                {dummyItems.map((i) => (
                  <BasicItemCard key={i.id} item={i} />
                ))}
              </div>
            </section>
            <Pagination />
          </div>
        </main>
      </div>
    </LoggedIn>
  );
};

export default CategoryIndex;
