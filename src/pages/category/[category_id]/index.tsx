import { BasicItemCard } from "@/components/molecules/card/basicItemCard";
import { AsideCategoryList } from "@/components/molecules/list/asideCategoryList";
import { AsideHelpList } from "@/components/molecules/list/asideHelpList";
import { Pagination } from "@/components/molecules/pagination";

import { LoggedIn } from "@/components/templates/top/loggedInTemplate";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ItemSort from "@/components/organisms/itemSort";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { itemCategories } from "@/constants/itemCategories";

const CategoryIndex = () => {
  const router = useRouter();
  const [items, setItems] = useState<any>([]);
  const { category_id } = router.query;
  // 参考：https://cpoint-lab.co.jp/article/201908/11323/
  const thisCategoryData = itemCategories.find(
    (cat) => cat.id === Number(category_id)
  );

  useEffect(() => {
    const q = query(
      collection(db, "items"),
      where("category", "==", Number(category_id))
    );
    // orderBy("createdAt", "desc"),

    const _items: any[] = [];
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => {
        _items.push({ ...doc.data(), id: doc.id });
      });
      setItems(_items);
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category_id]);

  return (
    <LoggedIn titleTag={`${thisCategoryData?.name}から探す | コレナラ`}>
      <div className="container mx-auto flex pt-4">
        <aside className="w-80 flex-none p-4 hidden lg:block">
          <AsideCategoryList />
          <hr className="my-6 h-px border-0 bg-gray-300" />
          <AsideHelpList />
        </aside>
        <main className="min-w-0 flex-1 px-4 pb-8">
          <h1 className="pt-4 font-bold text-2xl">
            {thisCategoryData?.name}から探す
          </h1>
          <p className="text-gray-600 my-4">
            {items.length}件のプランがみつかりました。
          </p>
          <div className="container mx-auto border border-slate-300 border-b-0 border-x-0 mt-4">
            <ItemSort />
            <section className="mb-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
                {items.map((i: any) => (
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
