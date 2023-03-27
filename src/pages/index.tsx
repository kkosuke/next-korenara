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
          <p>ログインしている</p>
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
