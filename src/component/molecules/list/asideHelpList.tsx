import React from "react";
import { TextArrowLink } from "@/component/atom/text/TextArrowLink";

type Props = {
  className?: string;
};

export const AsideHelpList: React.FC<Props> = ({ className = "" }) => {
  return (
    <>
      <section className={className}>
        <h3 className="font-bold mb-2">ヘルプ</h3>
        <ul>
          <li>
            <TextArrowLink href="#" text="ご利用ガイド" />
          </li>
        </ul>
      </section>
    </>
  );
};
