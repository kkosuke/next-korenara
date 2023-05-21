import Image from "next/image";
import React from "react";
import { ItemCarousel } from "../carousel/itemCarousel";

type Item = {
  name: string;
  items: any[];
};

type Props = {
  items: Item[];
};
export const PopularCategoryItems: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <section key={item.name}>
          <h3 className="font-bold my-4">{item.name}</h3>
          <ItemCarousel items={item.items} />
        </section>
      ))}
    </>
  );
};
