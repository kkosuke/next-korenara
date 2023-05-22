import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  text: string;
  className?: string;
  removable?: boolean;
  removableFunc?: (obj: any) => void;
};

export const BasicTag: React.FC<Props> = ({
  href = "",
  text,
  className = "",
  removable = false,
  removableFunc = () => {},
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
        <>
          {removable ? (
            <span
              className={`${className} inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600`}
            >
              {text}
              <button type="button" onClick={(e) => removableFunc(e)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 opacity-80"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </span>
          ) : (
            <span
              className={`${className} inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600`}
            >
              {" "}
              {text}
            </span>
          )}
        </>
      )}
    </>
  );
};
