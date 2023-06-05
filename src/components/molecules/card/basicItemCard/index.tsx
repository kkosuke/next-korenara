import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { pushDataLayer } from "@/lib/analytics";
import { useRouter } from "next/router";
import { directoryNameFromPathName } from "@/constants/utils/directoryNameFromPathName";
import { DateFnsTimestamp } from "@/components/atoms/date/DateFnsTimestamp";

type Props = {
  item: {
    title: string;
    id: number;
    image: string;
    editedAt?: any;
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
  const router = useRouter();

  const handleClick = () => {
    pushDataLayer({
      event: "ga4Event",
      eventCategory: directoryNameFromPathName(router.pathname),
      eventAction: "クリック",
      eventLabel: "商品カード",
      eventValue: item.price,
    });
  };
  return (
    <Tag
      className="rounded-sm overflow-hidden shadow mx-auto max-w-md bg-white"
      key={item.id}
    >
      <Link
        href={`/item/${item.id}`}
        className="block hover:opacity-70"
        onClick={handleClick}
      >
        <Image
          src={item.image}
          className="aspect-video w-full object-cover"
          alt=""
          width={200}
          height={160}
        />
        <div className="p-4 pt-3">
          {item.user && (
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
          )}
          <p className={`${styles.description} text-gray-500`}>{item.title}</p>
          <div className="mt-2">★ 5.0 (1)</div>
          <div className="mt-2">&yen; {item.price}</div>
          {item.editedAt && (
            <p className="mt-2">
              <DateFnsTimestamp dateObject={item.editedAt.toDate()} />
            </p>
          )}
        </div>
      </Link>
    </Tag>
  );
};
