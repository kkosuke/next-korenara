import React from "react";
import { TextLink } from "@/component/atom/text/TextLink";
import { LoggedInHeaderMenu } from "../menu/loggedInHeaderMenu";
import { LoggedInHeaderNotice } from "../menu/loggedInHeaderNotice";

export const LoggedInHeader = () => {
  return (
    <header className="bg-blue-200 p-4">
      <div className="mx-auto max-w-8xl justify-between items-center flex">
        <TextLink href="/" text="ログインヘッダー" />
        <div className="mr-auto ml-8">
          <form action="" className="font-medium flex space-y-0">
            <input type="text" />
            <button type="submit">検索</button>
          </form>
        </div>
        <nav>
          <ul className="items-center gap-4 font-medium flex space-y-0 mr-auto ml-8">
            <li>
              <LoggedInHeaderNotice />
            </li>
            <li>
              <LoggedInHeaderMenu />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
