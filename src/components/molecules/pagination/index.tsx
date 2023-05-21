import React from "react";

export const Pagination = () => {
  return (
    <div className="flex justify-center">
      <nav aria-label="Pagination">
        <ul className="inline-flex items-center -space-x-px rounded-md text-sm shadow-sm">
          <li>
            <a
              href="#"
              className="inline-flex items-center space-x-2 rounded-l-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-500 hover:bg-gray-50"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
              <span>前へ</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 inline-flex items-center border border-gray-300 bg-gray-100 px-4 py-2 font-medium text-gray-700"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:bg-gray-50"
            >
              2
            </a>
          </li>
          <li>
            <span className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-gray-700">
              ...
            </span>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:bg-gray-50"
            >
              9
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:bg-gray-50"
            >
              10
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-500 hover:bg-gray-50"
            >
              <span>次へ</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
