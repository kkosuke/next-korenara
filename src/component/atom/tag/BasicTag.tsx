import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  text: string;
  className?: string;
};

export const BasicTag: React.FC<Props> = ({
  href = "",
  text,
  className = "",
}) => {
  return (
    <>
      {href ? (
        <Link
          className={`${className} rounded-md bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600`}
          href={href}
        >
          {text}
        </Link>
      ) : (
        <span
          className={`${className} rounded-md bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600`}
        >
          {" "}
          {text}
        </span>
      )}
    </>
  );
};
