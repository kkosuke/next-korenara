import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { app } from "@/lib/firebase";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { pushDataLayer } from "@/lib/analytics";
import { useAuthContext } from "@/context/AuthContext";

const logout = (): Promise<void> => {
  const auth = getAuth(app);
  return signOut(auth);
};

export const LoggedInHeaderMenu = () => {
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const onGtmClickProfile = () => {
    pushDataLayer({
      event: "ga4Event",
      eventCategory: "ヘッダーリンク",
      eventAction: "クリック",
      eventLabel: "プロフィール",
    });
  };
  const onGtmClickSetting = () => {
    pushDataLayer({
      event: "ga4Event",
      eventCategory: "ヘッダーリンク",
      eventAction: "クリック",
      eventLabel: "設定",
    });
  };
  const onGtmClickKeep = () => {
    pushDataLayer({
      event: "ga4Event",
      eventCategory: "ヘッダーリンク",
      eventAction: "クリック",
      eventLabel: "キープ",
    });
  };
  const onGtmClickViewed = () => {
    pushDataLayer({
      event: "ga4Event",
      eventCategory: "ヘッダーリンク",
      eventAction: "クリック",
      eventLabel: "履歴",
    });
  };
  const handleLogout = (): void => {
    pushDataLayer({
      event: "ga4Event",
      eventCategory: "ヘッダーリンク",
      eventAction: "クリック",
      eventLabel: "ログアウト",
    });
    logout().catch((error) => console.error(error));
  };
  const toggle = () => {
    if (isOpen) {
      close(buttonRef.current);
    } else {
      buttonRef.current?.focus();
      setIsOpen(true);
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
    <div className="relative block" ref={panelRef}>
      <button
        ref={buttonRef}
        type="button"
        className="align-top"
        onClick={toggle}
      >
        <div className="relative h-10 w-10">
          <Image
            className="h-full w-full rounded-full object-cover object-center ring ring-white"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            width={30}
            height={40}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-60 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg">
          <div className="py-3 px-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10">
                <Image
                  className="h-full w-full rounded-full object-cover object-center ring ring-white"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">
                  {user?.displayName ? user?.displayName : "名前_未登録"}
                </div>
                <div className="text-gray-400">{user?.email}</div>
              </div>
            </div>
          </div>
          <div className="p-1">
            <Link
              href="/user/1"
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              onClick={onGtmClickProfile}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              プロフィール
            </Link>
            <Link
              href="/user/1/edit"
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              onClick={onGtmClickSetting}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              設定
            </Link>
          </div>
          <div className="p-1">
            <Link
              href="/keep"
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              onClick={onGtmClickKeep}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              キープ
              <span className="inline-flex flex-1 justify-end gap-1 text-xs">
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600">
                  0
                </span>
              </span>
            </Link>
            <Link
              href="/viewed"
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              onClick={onGtmClickViewed}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              閲覧履歴
              <span className="inline-flex flex-1 justify-end gap-1 text-xs">
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600">
                  0
                </span>
              </span>
            </Link>
          </div>
          <div className="p-1">
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
              ログアウト
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
