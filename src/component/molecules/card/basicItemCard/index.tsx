import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: {
    title: string;
    id: number;
    image: string;
    user: {
      id: number;
      name: string;
      image: string;
    };
    price: number;
  };
  tagName?: keyof JSX.IntrinsicElements;
};

export const BasicItemCard: React.FC<Props> = ({ item, tagName = "div" }) => {
  const Tag = tagName || "div";

  return (
    <Tag
      className="rounded-sm overflow-hidden shadow mx-auto max-w-md bg-white"
      key={item.id}
    >
      <Link href={`/item/${item.id}`} className="block hover:opacity-70">
        <Image
          src={item.image}
          className="aspect-video w-full object-cover"
          alt=""
          width={200}
          height={160}
        />
        <div className="p-4 pt-3">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="h-8 w-8">
              <Image
                className="h-full w-full rounded-full object-cover object-center ring ring-white"
                src={item.user.image}
                alt=""
                width={32}
                height={32}
              />
            </div>
            <div>
              <div className="text-sm font-medium text-secondary-500">
                {item.user.name}
              </div>
              <div className="text-xs text-secondary-400">
                Joined in April 1976
              </div>
            </div>
          </div>
          <p className={`${styles.description} text-gray-500`}>{item.title}</p>
          <div className="mt-2">★ 5.0 (1)</div>
          <div className="mt-2">&yen; {item.price}</div>
        </div>
      </Link>
    </Tag>
  );
};
