import { TextLink } from "@/component/atom/text/TextLink";
import React from "react";

export const LoggedOutHeader = () => {
  return (
    <>
      <header className="bg-blue-200 p-4">
        <div>ログアウトヘッダー</div>
        <ul>
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
          <ul>
            <li>
              <TextLink href="/login" text="ログイン" />
            </li>
            <li>
              <TextLink href="/register" text="無料登録" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
