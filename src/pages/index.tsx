import { useAuthContext } from "@/context/AuthContext";
import { LoggedIn } from "@/component/templates/top/loggedInTemplate";
import { LoggedOut } from "@/component/templates/top/loggedOutTemplate";

import { AsideCategoryList } from "@/component/molecules/list/asideCategoryList";
import { AsideHelpList } from "@/component/molecules/list/asideHelpList";

import { CategoryCarousel } from "@/component/molecules/carousel/categoryCarousel";
import { ItemCarousel } from "@/component/molecules/carousel/itemCarousel";
import { UserCarousel } from "@/component/molecules/carousel/userCarousel";
import { PopularCategoryItems } from "@/component/molecules/list/popularCategoryItems";

export default function Home() {
  const { user } = useAuthContext();
  const popularCategory = [
    {
      name: "カテゴリー名A",
      id: 1,
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "カテゴリー名B",
      id: 2,
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "カテゴリー名C",
      id: 3,
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "カテゴリー名D",
      id: 4,
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
  ];
  const recommendItem = [
    {
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "商品名が入ります。商品名が入ります。商品名が入ります。",
      id: 1,
      user: {
        id: 1,
        name: "ユーザー名",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "商品名が入ります。商品名が入ります。商品名が入ります。",
      id: 2,
      user: {
        id: 2,
        name: "ユーザー名",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "商品名が入ります。商品名が入ります。商品名が入ります。",
      id: 3,
      user: {
        id: 3,
        name: "ユーザー名",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "商品名が入ります。商品名が入ります。商品名が入ります。",
      id: 4,
      user: {
        id: 4,
        name: "ユーザー名",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "商品名が入ります。商品名が入ります。商品名が入ります。",
      id: 5,
      user: {
        id: 5,
        name: "ユーザー名",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "商品名が入ります。商品名が入ります。商品名が入ります。",
      id: 6,
      user: {
        id: 6,
        name: "ユーザー名",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  const recommendUser = [
    {
      id: 1,
      name: "ユーザー名",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      appeal: "特徴を一言で",
      tags: ["コーチング", "悩み相談", "カウンセリング"],
    },
    {
      id: 2,
      name: "ユーザー名",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      appeal: "特徴を一言で",
      tags: ["コーチング", "悩み相談", "カウンセリング"],
    },
    {
      id: 3,
      name: "ユーザー名",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      appeal: "特徴を一言で",
      tags: ["コーチング", "悩み相談", "カウンセリング"],
    },
    {
      id: 4,
      name: "ユーザー名",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      appeal: "特徴を一言で",
      tags: ["コーチング", "悩み相談", "カウンセリング"],
    },
    {
      id: 5,
      name: "ユーザー名",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      appeal: "特徴を一言で",
      tags: ["コーチング", "悩み相談", "カウンセリング"],
    },
    {
      id: 6,
      name: "ユーザー名",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      appeal: "特徴を一言で",
      tags: ["コーチング", "悩み相談", "カウンセリング"],
    },
  ];
  const popularCategoryItem = [
    {
      name: "カテゴリーA",
      items: recommendItem,
    },
    {
      name: "カテゴリーB",
      items: recommendItem,
    },
    {
      name: "カテゴリーC",
      items: recommendItem,
    },
  ];
  return (
    <>
      {user !== null ? (
        <LoggedIn titleTag="ココナラ">
          <div className="container mx-auto flex">
            <aside className="w-52 flex-none p-4">
              <AsideCategoryList />
              <hr className="my-6 h-px border-0 bg-gray-300" />
              <AsideHelpList />
            </aside>
            <main className="min-w-0 flex-1 overflow-auto px-4">
              <section>
                <h2 className="font-bold my-4 text-lg">人気カテゴリ</h2>
                <CategoryCarousel items={popularCategory} />
              </section>
              <section>
                <h2 className="font-bold my-4 text-lg">おすすめ商品</h2>
                <ItemCarousel items={recommendItem} />
              </section>
              <section>
                <h2 className="font-bold my-4 text-lg">注目ユーザー</h2>
                <UserCarousel items={recommendUser} />
              </section>
              <section>
                <h2 className="font-bold my-4 text-lg">閲覧履歴</h2>
                <ItemCarousel items={recommendItem} />
              </section>
              <section>
                <h2 className="font-bold my-4 text-lg">お気に入り</h2>
                <ItemCarousel items={recommendItem} />
              </section>
              <section>
                <h2 className="font-bold my-4 text-lg">カテゴリ別人気商品</h2>
                <PopularCategoryItems items={popularCategoryItem} />
              </section>
            </main>
          </div>
        </LoggedIn>
      ) : (
        <LoggedOut titleTag="ココナラ">
          <div className="container mx-auto">
            <div>
              <div>メインビジュアル</div>
              <div>まずは無料登録から</div>
            </div>
            <div>・人気カテゴリ</div>
            <div>・人気商品</div>
            <div>・新着商品</div>
            <div>・人気ユーザー</div>
            <div>・カテゴリ別人気商品</div>
          </div>
        </LoggedOut>
      )}
    </>
  );
}
