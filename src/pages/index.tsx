import { useAuthContext } from "@/context/AuthContext";
import { LoggedIn } from "@/component/templates/top/loggedInTemplate";
import { LoggedOut } from "@/component/templates/top/loggedOutTemplate";

export default function Home() {
  // const user = useUser();
  const { user } = useAuthContext();
  return (
    <>
      {user !== null ? (
        <LoggedIn titleTag="ココナラ">
          <div className="container mx-auto flex">
            <aside className="w-32 flex-none bg-blue-200 p-4">
              <ul>
                <li>・カテゴリ一覧（大・中）</li>
                <li>・抜粋静的ページ</li>
              </ul>
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
