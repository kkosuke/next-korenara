import React, { useState } from "react";
import { DropDownSort } from "@/component/molecules/dropdown/sort";

const ItemSort = () => {
  const [selectedSort, setSelectedSort] = useState("新着順");
  const [selectedCategory, setSelectedCategory] = useState("ライフスタイル");
  const [selectedBudget, setSelectedBudget] = useState({
    min: "-",
    max: "-",
  });
  return (
    <div className="mb-4 pt-4 flex">
      <div>
        <DropDownSort
          label={`カテゴリー：${selectedCategory}`}
          className="inline-block mr-4"
        >
          <div className="p-1">
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
            <hr className="my-2 h-px border-0 bg-gray-300" />
            <div className="text-right">
              <button
                type="button"
                className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                絞り込む
              </button>
            </div>
          </div>
        </DropDownSort>
        <DropDownSort
          label={`予算：${selectedBudget.min} 〜 ${selectedBudget.max}`}
          className="inline-block mr-4"
        >
          <div className="p-1">
            <a
              href="#"
              className="flex w-full items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              下限：-
            </a>
            <a
              href="#"
              className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              上限：-
            </a>
            <hr className="my-2 h-px border-0 bg-gray-300" />
            <div className="text-right">
              <button
                type="button"
                className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                絞り込む
              </button>
            </div>
          </div>
        </DropDownSort>
      </div>
      <DropDownSort
        label={`並び替え：${selectedSort}`}
        className="inline-block ml-auto"
      >
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
          <hr className="my-2 h-px border-0 bg-gray-300" />
          <div className="text-right">
            <button
              type="button"
              className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
            >
              絞り込む
            </button>
          </div>
        </div>
      </DropDownSort>
    </div>
  );
};

export default ItemSort;
