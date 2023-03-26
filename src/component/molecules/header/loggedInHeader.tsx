import React from "react";
import { TextLink } from "@/component/atom/text/TextLink";
import { LogoutButton } from "@/component/atom/button/LogoutButton";

export const LoggedInHeader = () => {
  return (
    <>
      <div>
        <div>ログアウトヘッダー</div>
        <div>
          <form action="">
            <input type="text" />
            <button type="submit">検索</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
