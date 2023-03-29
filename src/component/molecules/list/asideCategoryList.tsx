import React from "react";
import { TextArrowLink } from "@/component/atom/text/TextArrowLink";

export const AsideCategoryList = () => {
  return (
    <section>
      <h3 className="font-bold mb-2">カテゴリーから探す</h3>
      <ul>
        <li>
          <TextArrowLink href="#" text="プログラミング" />
        </li>
        <li>
          <TextArrowLink href="#" text="ライフスタイル" />
        </li>
        <li>
          <TextArrowLink href="#" text="その他" />
        </li>
      </ul>
    </section>
  );
};
