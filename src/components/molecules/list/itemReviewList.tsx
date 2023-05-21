import Image from "next/image";
import React from "react";

type Props = {
  item: any;
  removable?: boolean;
};

export const ItemReviewList: React.FC<Props> = ({
  item,
  removable = false,
}) => {
  return (
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
          <h4 className="text-md font-bold leading-loose">レビュータイトル</h4>
          <p className="text-gray-500">
            レビュー文章レビュー文章レビュー文章レビュー文章レビュー文章レビュー文章レビュー文章
          </p>
          {removable && (
            <div className="mt-2">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fill="currentColor"
                    d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0Zm-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2h7.5Zm2.5 6.5a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0v-10Zm5-1a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-10a1 1 0 0 0-1-1Z"
                  />
                </svg>
                このレビューを削除する
              </button>
            </div>
          )}
        </div>
      </li>
    </ul>
  );
};
