import React from "react";
import { TextArrowLink } from "@/components/atoms/text/TextArrowLink";

export const AsideCategoryList = () => {
  return (
    <section>
      <h3 className="font-bold mb-2">カテゴリーから探す</h3>
      <ul>
        <li>
          <TextArrowLink href="/category/1" text="プログラミング" />
        </li>
        <li>
          <TextArrowLink href="/category/2" text="ライフスタイル" />
        </li>
        <li>
          <TextArrowLink href="/category/99999" text="その他" />
        </li>
      </ul>
    </section>
  );
};
