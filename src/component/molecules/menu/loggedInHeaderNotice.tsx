import React, { useState } from "react";

export const LoggedInHeaderNotice = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="relative block">
      <button
        type="button"
        className="align-top"
        onClick={() => setIsShow(!isShow)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </button>

      {isShow && (
        <div className="absolute right-0 z-10 mt-2 w-60 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg">
          <h3 className="py-2 px-4 text-lg">お知らせ</h3>
          <ul className="divide-y divide-gray-200">
            <li className="p-4 text-gray-500">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </li>
            <li className="p-4 text-gray-500">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </li>
            <li className="p-4 text-gray-500">
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
