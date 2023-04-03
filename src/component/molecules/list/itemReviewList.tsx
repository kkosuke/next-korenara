import Image from "next/image";
import React from "react";

type Props = {
  item: any;
};

export const ItemReviewList: React.FC<Props> = ({ item }) => {
  return (
    <section>
      <h2 className="font-bold text-xl mb-4">レビュー</h2>
      <ul className="divide-y divide-gray-200 rounded-md border border-gray-200 shadow-sm bg-white">
        <li className="p-4 flex flex-wrap gap-4 mt-2 items-start">
          <div className="h-10 w-10">
            <Image
              className="h-full w-full rounded-full object-cover object-center ring ring-white"
              src={item.user.image}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div>
            <div className="text-sm font-medium text-secondary-500">
              {item.user.name}
            </div>
            <h4 className="text-md font-bold leading-loose">
              レビュータイトル
            </h4>
            <p className="text-gray-500">
              レビュー文章レビュー文章レビュー文章レビュー文章レビュー文章レビュー文章レビュー文章
            </p>
          </div>
        </li>
        <li className="p-4 flex flex-wrap gap-4 mt-2 items-start">
          <div className="h-10 w-10">
            <Image
              className="h-full w-full rounded-full object-cover object-center ring ring-white"
              src={item.user.image}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div>
            <div className="text-sm font-medium text-secondary-500">
              {item.user.name}
            </div>
            <h4 className="text-md font-bold leading-loose">
              レビュータイトル
            </h4>
            <p className="text-gray-500">
              レビュー文章レビュー文章レビュー文章レビュー文章レビュー文章レビュー文章レビュー文章
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
