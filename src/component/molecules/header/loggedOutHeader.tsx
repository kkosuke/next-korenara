import { TextLink } from "@/component/atom/text/TextLink";
import React from "react";

export const LoggedOutHeader = () => {
  return (
    <>
      <header className="bg-blue-200 p-4">
        <div className="mx-auto max-w-8xl justify-between px-4 md:flex">
          <div>ログアウトヘッダー</div>
          <ul className="items-center gap-8 font-medium flex space-y-0 mr-auto ml-8">
            <li>
              <TextLink href="/" text="カテゴリから探す" />
            </li>
            <li>
              <TextLink href="/" text="ユーザーから探す" />
            </li>
            <li>
              <TextLink href="/" text="誰かにお願いする" />
            </li>
          </ul>
          <nav>
            <ul className="items-center gap-8 font-medium flex space-y-0 mr-auto ml-8">
              <li>
                <TextLink href="/login" text="ログイン" />
              </li>
              <li>
                <TextLink href="/register" text="無料登録" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
