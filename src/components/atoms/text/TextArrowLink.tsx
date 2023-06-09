import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  text: string;
};

export const TextArrowLink: React.FC<Props> = (props) => {
  const { text, href } = props;
  return (
    <Link
      href={href}
      className="flex justify-between w-full items-center py-2 text-left hover:bg-slate-300 active:bg-slate-300"
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 inline-flex justify-end text-xs"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </Link>
  );
};
