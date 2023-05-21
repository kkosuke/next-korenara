import React, { useState } from "react";
import { useRouter } from "next/router";
import { DropDownFilter } from "@/components/molecules/dropdown/filter";
import { DropDownSort } from "@/components/molecules/dropdown/sort";

const ItemSort = () => {
  const router = useRouter();
  const [selectedSort, setSelectedSort] = useState("新着順");
  const [selectedCategory, setSelectedCategory] = useState("ライフスタイル");
  const [selectedBudget, setSelectedBudget] = useState({
    min: "-",
    max: "-",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(
      "/search?category[]=1&category[]=2&category[]=99999&budgetMin=0&budgetMin=300000"
    );
  };

  return (
    <div className="mb-4 pt-4 flex">
      <div>
        <DropDownFilter
          label={
            <>
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
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
              絞り込み
            </>
          }
          className="inline-block mr-4"
        >
          <form className="p-1" onSubmit={(e) => handleSubmit(e)}>
            <div className="px-3 mt-3 font-bold">カテゴリー</div>
            <a
              href="#"
              className="flex w-full items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              プログラミング
            </a>
            <a
              href="#"
              className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              ライフスタイル
            </a>
            <a
              href="#"
              className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              その他
            </a>
            <div className="px-3 mt-3 font-bold">予算</div>
            <a
              href="#"
              className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              予算下限
            </a>
            <a
              href="#"
              className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              予算上限
            </a>
            <hr className="my-2 h-px border-0 bg-gray-300" />
            <div className="text-right">
              <button
                type="submit"
                className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                絞り込む
              </button>
            </div>
          </form>
        </DropDownFilter>
      </div>
      <div className="inline-block ml-auto">
        <DropDownSort label={<>{selectedSort}</>} className="inline-block">
          <div className="p-1">
            <a
              href="#"
              className="flex w-full items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              おすすめ
            </a>
            <a
              href="#"
              className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              新着順
            </a>
            <a
              href="#"
              className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              低価格順
            </a>
            <a
              href="#"
              className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              高評価順
            </a>
          </div>
        </DropDownSort>
      </div>
    </div>
  );
};

export default ItemSort;
