import { useAuthContext } from "@/context/AuthContext";
import { LoggedIn } from "@/components/templates/top/loggedInTemplate";
import { LoggedOut } from "@/components/templates/top/loggedOutTemplate";

import { AsideCategoryList } from "@/components/molecules/list/asideCategoryList";
import { AsideHelpList } from "@/components/molecules/list/asideHelpList";

import { CategoryCarousel } from "@/components/molecules/carousel/categoryCarousel";
import { ItemCarousel } from "@/components/molecules/carousel/itemCarousel";
import { UserCarousel } from "@/components/molecules/carousel/userCarousel";
import { PopularCategoryItems } from "@/components/molecules/list/popularCategoryItems";

import { dummyRecommendItem } from "@/dummyData/recommendItem";
import { dummyRecommendUser } from "@/dummyData/recommendUser";
import { dummyPopularCategoryItem } from "@/dummyData/popularCategoryItem";
import Link from "next/link";
import { BasicItemCard } from "@/components/molecules/card/basicItemCard";
import { dummyItems } from "@/dummyData/items";
import { itemCategories } from "@/constants/itemCategories";

export default function Home() {
  const { user } = useAuthContext();
  return (
    <>
      {user !== null ? (
        <LoggedIn titleTag="コレナラ">
          <div className="container mx-auto flex">
            <aside className="w-80 flex-none p-4">
              <AsideCategoryList />
              <hr className="my-6 h-px border-0 bg-gray-300" />
              <AsideHelpList />
            </aside>
            <main className="min-w-0 flex-1 overflow-auto px-4">
              <section>
                <h2 className="font-bold my-4 text-lg">人気カテゴリ</h2>
                <CategoryCarousel items={itemCategories} />
              </section>
              <section>
                <h2 className="font-bold my-4 text-lg">おすすめ商品</h2>
                <div className="grid grid-cols-4 gap-4">
                  {dummyItems.map((i) => (
                    <BasicItemCard key={i.id} item={i} />
                  ))}
                </div>
              </section>
              <section>
                <h2 className="font-bold my-4 text-lg">注目ユーザー</h2>
                <UserCarousel items={dummyRecommendUser} />
              </section>
              <section>
                <h2 className="font-bold my-4 text-lg">閲覧履歴</h2>
                <ItemCarousel items={dummyRecommendItem} />
              </section>
              <section>
                <h2 className="font-bold my-4 text-lg">お気に入り</h2>
                <ItemCarousel items={dummyRecommendItem} />
              </section>
              <section>
                <h2 className="font-bold my-4 text-lg">カテゴリ別人気商品</h2>
                <PopularCategoryItems items={dummyPopularCategoryItem} />
              </section>
            </main>
          </div>
        </LoggedIn>
      ) : (
        <LoggedOut titleTag="コレナラ">
          <div
            style={{
              background: "#fffbf5",
            }}
          >
            <div className="container mx-auto p-4 pt-32 pb-24 text-center">
              <p className="text-6xl font-bold">いろんなプロに相談しよう</p>
              <p className="mt-8 mb-16 text-xl">
                <strong>コレナラ</strong>で詳しい人を探してみよう！
              </p>
              <div>
                <Link
                  href="/login"
                  type="button"
                  className="mr-8 rounded-lg border border-gray-300 bg-white px-8 py-4 text-center text-xl font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
                >
                  ログイン
                </Link>
                または
                <Link
                  href="/register"
                  type="button"
                  className="ml-8 rounded-lg border border-primary-500 bg-primary-500 px-8 py-4 text-center text-xl font-xl text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
                >
                  まずは無料登録から
                </Link>
              </div>
            </div>
          </div>
          <div className="container mx-auto p-4">
            <section>
              <h2 className="font-bold my-4 text-lg">人気カテゴリ</h2>
              <CategoryCarousel items={itemCategories} />
            </section>
            <section>
              <h2 className="font-bold my-4 text-lg">おすすめ商品</h2>
              <ItemCarousel items={dummyRecommendItem} />
            </section>
            <section>
              <h2 className="font-bold my-4 text-lg">注目ユーザー</h2>
              <UserCarousel items={dummyRecommendUser} />
            </section>
            <section>
              <h2 className="font-bold my-4 text-lg">カテゴリ別人気商品</h2>
              <PopularCategoryItems items={dummyPopularCategoryItem} />
            </section>
          </div>
        </LoggedOut>
      )}
    </>
  );
}
