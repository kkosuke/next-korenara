import React from "react";
import { TextArrowLink } from "@/component/atom/text/TextArrowLink";

export const AsideCategoryList = () => {
  return (
    <section>
      <h3 className="font-bold mb-2">カテゴリーから探す</h3>
      <ul>
        <li>
          <TextArrowLink href="#" text="目的から探す" />
        </li>
        <li>
          <TextArrowLink href="#" text="プログラミング" />
        </li>
        <li>
          <TextArrowLink href="#" text="デザイン" />
        </li>
        <li>
          <TextArrowLink href="#" text="マーケティング" />
        </li>
        <li>
          <TextArrowLink href="#" text="ビジネス" />
        </li>
        <li>
          <TextArrowLink href="#" text="動画・映像" />
        </li>
        <li>
          <TextArrowLink href="#" text="ライティング" />
        </li>
        <li>
          <TextArrowLink href="#" text="語学" />
        </li>
        <li>
          <TextArrowLink href="#" text="ライフスタイル" />
        </li>
        <li>
          <TextArrowLink href="#" text="メンター募集" />
        </li>
      </ul>
    </section>
  );
};
