import { TextLink } from "@/component/atom/text/TextLink";
import React from "react";

export const CommonFooter = () => {
  return (
    <footer>
      <div className="p-4 bg-blue-200">
        <div>ロゴ</div>
        <nav>
          <h5>見出し</h5>
          <ul>
            <li>
              <TextLink href="https://www.google.com/" text="google" />
            </li>
            <li>
              <TextLink href="https://github.com/" text="github" />
            </li>
          </ul>
        </nav>
      </div>
      <p className="bg-gray-300 p-4 text-center">&copy; ココナラ</p>
    </footer>
  );
};
