import { dummyMail } from "@/dummyData/mail";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import styles from "./index.module.css";
import { pushDataLayer } from "@/lib/analytics";

type TypeNoticeData = {
  id: number;
  title: string;
  detail: string;
  user: { id: number; name: string; image: string };
};

export const LoggedInHeaderNotice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLLIElement>(null);
  const [noticeData, setNoticeData] = useState<TypeNoticeData[]>(
    dummyMail.slice(0, 3)
  );

  const handleLoad = () => {
    alert("未作成");
  };

  const toggle = () => {
    if (isOpen) {
      close(buttonRef.current);
    } else {
      buttonRef.current?.focus();
      setIsOpen(true);
      pushDataLayer({
        event: "ga4Event",
        eventCategory: "ヘッダーリンク",
        eventAction: "クリック",
        eventLabel: "お知らせ",
      });
    }
  };
  const close = (focusAfter?: HTMLElement | null) => {
    if (!isOpen) return;
    setIsOpen(false);
    focusAfter && focusAfter.focus();
  };
  useEffect(() => {
    const handleFocusIn = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close(buttonRef.current);
      }
    };

    window.addEventListener("click", handleFocusIn);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("click", handleFocusIn);
      window.removeEventListener("keydown", handleEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <li className="relative block pr-1" ref={panelRef}>
      <button
        ref={buttonRef}
        type="button"
        className="align-top"
        onClick={toggle}
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

        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg w-80">
          <h3 className="py-2 px-4 text-lg">メッセージ（作成予定）</h3>
          <ul className="divide-y divide-gray-200 max-h-[30vh] overflow-y-scroll">
            {noticeData.map((item, idx) => (
              <li key={item.id}>
                <Link
                  href="#"
                  className="p-4 flex items-start gap-4 hover:bg-slate-100 active:bg-slate-100"
                >
                  <div className="h-10 w-10 shrink-0">
                    <Image
                      className="h-full w-full rounded-full object-cover object-center ring ring-white"
                      src={item.user.image}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{item.user.name}</div>
                    <p className={`text-gray-500 ${styles.detail}`}>
                      {item.detail}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <button
              type="button"
              onClick={handleLoad}
              className="text-blue-400 block p-3 w-full hover:underline"
            >
              続きを読み込む
            </button>
          </div>
        </div>
      )}
    </li>
  );
};
