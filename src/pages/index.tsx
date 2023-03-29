import { useAuthContext } from "@/context/AuthContext";
import { LoggedIn } from "@/component/templates/top/loggedInTemplate";
import { LoggedOut } from "@/component/templates/top/loggedOutTemplate";
import { AsideCategoryList } from "@/component/molecules/list/asideCategoryList";
import { AsideHelpList } from "@/component/molecules/list/asideHelpList";

export default function Home() {
  const { user } = useAuthContext();

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
            <main className="min-w-0 flex-1 overflow-auto bg-blue-50 p-4">
              <ul>
                <li>・人気カテゴリ</li>
                <li>・利用者の属性でのおすすめ商品</li>
                <li>・閲覧履歴</li>
                <li>・お気に入り</li>
                <li>・カテゴリ別人気商品</li>
              </ul>
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
