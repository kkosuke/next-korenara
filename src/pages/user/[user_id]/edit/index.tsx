import { LoggedIn } from "@/components/templates/top/loggedInTemplate";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BasicTag } from "@/components/atoms/tag/BasicTag";
import { db } from "@/lib/firebase";
import { ItemReviewList } from "@/components/molecules/list/itemReviewList";
import Image from "next/image";
import { useAuthContext } from "@/context/AuthContext";
import {
  doc,
  deleteDoc,
  collection,
  setDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
} from "firebase/firestore";
import { clearTimeout } from "timers";

const UserIdEdit = () => {
  const router = useRouter();
  const { user_id } = router.query;
  const { user, userData } = useAuthContext();
  const [formUserData, setFormUserData] = useState<any>(userData);
  // タグの入力状態
  const [userEnteredTag, setUserEnteredTag] = useState<string>("");
  // ユーザーIDの重複具合
  const [isEnteredUserIdDuplicate, setIsEnteredUserIdDuplicate] =
    useState<any>(false);

  const [isValidating, setIsValidating] = useState<boolean>(false);

  const handleUserDeleteConfirm = async () => {
    const message = "ユーザー情報を削除しますか？登録した商品も削除されます。";
    if (!window.confirm(message)) {
      // キャンセルを押下
    }
    if (user) {
      // itemの削除
      const itemsData = collection(db, "items");
      const q = query(itemsData, orderBy("createdAt", "desc"));
      onSnapshot(q, (snapshot) => {
        snapshot.docs.map((item) => {
          if (item.data().userUid === user.uid) {
            deleteDoc(doc(db, "items", item.id));
          }
        });
      });

      await deleteDoc(doc(db, "users", user.uid));
      user.delete();
      router.push(
        {
          pathname: `/`,
          query: { situation: "delete_user" },
        },
        `/`
      );
    }
  };

  const handelFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidating) {
      alert("検証中");
    }
    if (isEnteredUserIdDuplicate) {
      alert("ユーザーIDが重複しています。");
    }
    if (user && !isEnteredUserIdDuplicate) {
      const message = "ユーザー情報を更新しますか？";
      if (!window.confirm(message)) {
        return false;
      }
      const userDocumentRef = doc(db, "users", user.uid);
      try {
        const docRef = await updateDoc(userDocumentRef, {
          detail: formUserData.detail,
          displayName: formUserData.displayName,
          editedAt: serverTimestamp(),
          tags: formUserData.tags,
          userId: formUserData.userId,
        }).then(() => {
          router.push(
            {
              pathname: `/user/${formUserData.userId}?ref_code=user_edit_success`, // 本当の遷移URL
              query: { situation: "user_edit_success" },
            },
            `/user/${formUserData.userId}?ref_code=user_edit_success` // 表示名
          );
        });
      } catch (error) {
        console.log(error);
      } finally {
        console.log("終了");
      }
    } else {
      alert("userが見つかりません");
    }
  };

  const handelRemoveTag = (obj: any) => {
    formUserData.tags.splice(obj.idx, 1);
    setFormUserData({
      ...formUserData,
      ...{ tags: [...formUserData.tags] },
    });
  };
  const handleTagsKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 参考
    // https://zenn.dev/takky94/articles/f3096bb59761ee
    if (e.nativeEvent.isComposing || e.key !== "Enter") return;
    e.preventDefault();
    if (formUserData.tags.length < 5) {
      formUserData.tags.push(userEnteredTag);
      setUserEnteredTag("");
      setFormUserData({
        ...formUserData,
        ...{ tags: [...formUserData.tags] },
      });
    } else {
      alert("タグは最大5つまで登録可能です");
    }
    return false;
  };

  // userIDの重複チェック
  // -----------------------------
  let handleUserIdChangeTimeout: any;
  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsValidating(true);
    const enteredValue = e.target.value;
    clearTimeout(handleUserIdChangeTimeout);
    setFormUserData({
      ...formUserData,
      ...{ userId: enteredValue },
    });
    handleUserIdChangeTimeout = setTimeout(async function () {
      isDuplicateUserId(enteredValue)
        .then((result) => {
          setIsEnteredUserIdDuplicate(result);
        })
        .finally(() => {
          setIsValidating(false);
        });
    }, 300);
  };
  const isDuplicateUserId = (enteredValue: string) =>
    new Promise((resolve) => {
      const usersData = collection(db, "users");
      const q = query(usersData, orderBy("createdAt", "desc"));
      if (enteredValue === userData.userId) {
        resolve(false);
      }
      onSnapshot(q, (snapshot) => {
        snapshot.docs.map((doc) => {
          if (doc.data().userId === enteredValue) {
            resolve(true);
          }
        });
        resolve(false);
      });
    });

  return userData.userId === user_id ? (
    <LoggedIn titleTag={`ユーザー情報編集  | コレナラ`}>
      <div className="container mx-auto  max-w-5xl">
        <div className="px-4">
          <div>
            気の利いた要素
            <br />
            保存ボタンとかプレビューボタンとか置けたら・・・
          </div>
        </div>
        <main className="px-4 mb-4">
          <p className="pt-4 font-bold text-3xl mb-4">ユーザー情報</p>
          <form className="rounded-lg bg-white p-4" onSubmit={handelFormSubmit}>
            {user && (
              <>
                <p className="font-bold text-lg text-gray-600 mb-2">
                  デバッグ情報
                </p>
                <div className="mb-8">
                  <div>email：{user.email}</div>
                  <div>uid：{user.uid}</div>
                  <div>
                    {user.emailVerified ? "メール認証済み" : "アドレス未認証"}
                  </div>
                </div>
              </>
            )}

            <p className="font-bold text-lg text-gray-600 mb-2">ユーザー名</p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value={formUserData.displayName}
              onChange={(e) =>
                setFormUserData({
                  ...formUserData,
                  ...{ displayName: e.target.value },
                })
              }
            />
            <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
              ユーザーID
            </p>
            {isEnteredUserIdDuplicate && (
              <>そのユーザーIDはすでに使用されています。</>
            )}
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value={formUserData.userId}
              required
              onChange={(e) => handleUserIdChange(e)}
            />

            <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
              メールアドレス（作成予定）
            </p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 text-gray-400"
              readOnly
              defaultValue={String(user?.email)}
            />

            <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
              アイコンURL
              <span className="font-normal text-xs text-gray-400 ml-2">
                「https://images.unsplash.com/」から始まるURLを入力してください
              </span>
            </p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value={formUserData.image}
              onChange={(e) =>
                setFormUserData({
                  ...formUserData,
                  ...{ image: e.target.value },
                })
              }
            />

            <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
              アイコン画像画像登録（作成予定）
            </p>
            <div>
              <label>
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  ファイルをアップロード
                </span>
                <input
                  id="example1"
                  type="file"
                  className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-primary-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                />
              </label>
            </div>

            <div className="h-16 w-16 mt-4">
              <Image
                className="h-full w-full rounded-full object-cover object-center ring ring-white"
                src={formUserData.image}
                alt=""
                width={64}
                height={64}
              />
            </div>

            <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
              興味のあるジャンル（調整中）
              <span className="font-normal text-xs text-gray-400 ml-2">
                タグは最大5つまで登録可能です。同じ値は入力しなでください。
              </span>
            </p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value={userEnteredTag}
              placeholder="設定したいタグを入力してください"
              onChange={(e) => setUserEnteredTag(e.target.value)}
              onKeyDown={handleTagsKeyDown}
            />
            <div className="mt-4">
              {formUserData.tags.map((tag: string, idx: number) => (
                <BasicTag
                  key={tag}
                  className="mr-2"
                  text={tag}
                  removable
                  removableFunc={(e) => handelRemoveTag({ e, idx })}
                />
              ))}
            </div>

            <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
              自己紹介
              <span className="font-normal text-xs text-gray-400 ml-2">
                20文字以上5,000文字以内。Markdown記法が使えます（予定）
              </span>
            </p>

            <textarea
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
              rows={20}
              placeholder=""
              value={formUserData.detail}
              onChange={(e) =>
                setFormUserData({
                  ...formUserData,
                  ...{ detail: e.target.value },
                })
              }
            ></textarea>

            <div className="mt-4 text-center">
              <button
                type="submit"
                className="rounded-lg border border-primary-500 bg-primary-500 px-24 py-3 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                保存する
              </button>
            </div>
          </form>
          <p className="text-right mt-4">
            <button
              type="button"
              onClick={handleUserDeleteConfirm}
              className="inline-flex items-center gap-1.5 text-red-500 underline hover:no-underline active:no-underline"
            >
              ユーザー情報を削除する
            </button>
          </p>
        </main>
      </div>
    </LoggedIn>
  ) : (
    <LoggedIn titleTag={`ユーザー情報編集  | コレナラ`}>
      <div className="container mx-auto  max-w-5xl">
        <main className="px-4 py-8">
          <p>このページを表示することはできません</p>
        </main>
      </div>
    </LoggedIn>
  );
};

export default UserIdEdit;
