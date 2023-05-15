import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { DropDownBasic } from "@/component/molecules/dropdown/basic";

type Props = {
  message: any;
  tagName?: keyof JSX.IntrinsicElements;
};

export const MessageCard: React.FC<Props> = ({ message, tagName = "li" }) => {
  const Tag = tagName;
  const [editMode, setEditMode] = useState(false);
  const handelEditStart = () => {
    setEditMode(true);
  };
  const handleCancel = () => {
    setEditMode(false);
  };
  const handleUpdate = () => {
    alert("まだ出来ていません");
    setEditMode(false);
  };

  return (
    <Tag className="rounded-md shadow bg-white p-4 mb-4">
      <div className="flex justify-between">
        <div className="block hover:opacity-70 w-11/12">
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-8 w-8">
              <Image
                className="h-full w-full rounded-full object-cover object-center ring ring-white"
                src={message.user.image}
                alt=""
                width={32}
                height={32}
              />
            </div>
            <div>
              <div className="text-sm font-medium text-secondary-500">
                {message.user.name}
              </div>
              <div className="text-xs text-secondary-400">
                2023年4月24日 23:52{" "}
                {message.createAt !== message.updateAt && `[編集済]`}
              </div>
            </div>
          </div>
        </div>
        {!editMode && (
          <DropDownBasic
            label={<>…</>}
            className="w-1/12 block align-top text-right"
            childrenPosition="right"
          >
            <div className="p-1">
              <button
                type="button"
                className="flex w-full items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                onClick={handelEditStart}
              >
                メッセージを編集
              </button>
            </div>
            <div className="p-1">
              <Link
                href="/user/1/edit"
                className="flex w-full items-center rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                メッセージを削除
              </Link>
            </div>
          </DropDownBasic>
        )}
      </div>
      <div className="mt-4">
        {editMode ? (
          <>
            <textarea
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 text-slate-600"
              rows={6}
              placeholder="メッセージ内容を入力してください"
              value={message.detail}
            ></textarea>
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400 mr-4"
              >
                キャンセル
              </button>

              <button
                type="button"
                onClick={handleUpdate}
                className="rounded-lg border border-primary-500 bg-primary-500 px-6 py-3 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                メッセージを更新する
              </button>
            </div>
          </>
        ) : (
          <p className="text-slate-600">{message.detail}</p>
        )}
      </div>
    </Tag>
  );
};
