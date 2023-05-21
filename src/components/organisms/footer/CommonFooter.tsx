import { TextLink } from "@/components/atoms/text/TextLink";
import Link from "next/link";
import React from "react";

export const CommonFooter = () => {
  return (
    <footer className="border border-slate-300 border-b-0 border-x-0 text-gray-600">
      <div className="container mx-auto grid grid-cols-5 gap-4 p-4 py-8">
        <Link href="/" className="text-blue-400	text-2xl font-bold">
          ココカラ
        </Link>
        <nav>
          <h5 className="font-bold mb-3">カテゴリー</h5>
          <ul>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                プログラミング
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                ライフスタイル
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h5 className="font-bold mb-3">ヘルプ</h5>
          <ul>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                ご利用ガイド
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h5 className="font-bold mb-3">類似サイト</h5>
          <ul>
            <li className="mb-2">
              <Link href="https://coconala.com/" className="hover:underline">
                ココナラ
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://menta.work/" className="hover:underline">
                MENTA
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://www.fiverr.com/" className="hover:underline">
                fiverr
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h5 className="font-bold mb-3">参考サイト</h5>
          <ul>
            <li className="mb-2">
              <Link href="https://sailboatui.com/" className="hover:underline">
                sailboatui
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://tailwindcss.com/" className="hover:underline">
                tailwind
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <p className="container mx-auto p-4 border border-slate-300 border-b-0 border-x-0">
        &copy; ココカラ
      </p>
    </footer>
  );
};
