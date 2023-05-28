import { LoggedIn } from "@/components/templates/top/loggedInTemplate";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BasicTag } from "@/components/atoms/tag/BasicTag";
import { ItemReviewList } from "@/components/molecules/list/itemReviewList";
import {
  getDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuthContext } from "@/context/AuthContext";
import { itemCategories } from "@/constants/itemCategories";

const ItemIdEdit = () => {
  const router = useRouter();
  const { item_id } = router.query;
  const { userData } = useAuthContext();
  // タグの入力状態
  const [itemEnteredTag, setItemEnteredTag] = useState<string>("");
  const [itemInfo, setItemInfo] = useState<any>(null);
  const [isValidating, setIsValidating] = useState<boolean>(false);

  useEffect(() => {
    const userDocumentRef = doc(db, "items", String(item_id));
    getDoc(userDocumentRef).then((doc) => {
      if (doc.exists()) {
        setItemInfo({ ...doc.data(), id: item_id });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelRemoveTag = (obj: any) => {
    itemInfo.tags.splice(obj.idx, 1);
    setItemInfo({
      ...itemInfo,
      ...{ tags: [...itemInfo.tags] },
    });
  };
  const handleTagsKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 参考
    // https://zenn.dev/takky94/articles/f3096bb59761ee
    if (e.nativeEvent.isComposing || e.key !== "Enter") return;
    e.preventDefault();
    if (itemInfo.tags.length < 5) {
      itemInfo.tags.push(itemEnteredTag);
      setItemEnteredTag("");
      setItemInfo({
        ...itemInfo,
        ...{ tags: [...itemInfo.tags] },
      });
    } else {
      alert("タグは最大5つまで登録可能です");
    }
    return false;
  };

  const handelFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidating) {
      alert("検証中");
    } else {
      const message = "商品情報を更新しますか？";
      if (!window.confirm(message)) {
        return false;
      }
      const itemDocumentRef = doc(db, "items", itemInfo.id);
      try {
        await updateDoc(itemDocumentRef, {
          category: itemInfo.category,
          detail: itemInfo.detail,
          editedAt: serverTimestamp(),
          image: itemInfo.image,
          price: itemInfo.price,
          subTitle: itemInfo.subTitle,
          tags: itemInfo.tags,
          title: itemInfo.title,
        });
        router.push(
          {
            pathname: `/item/${itemInfo.id}?ref_code=item_edit_success`, // 本当の遷移URL
            query: { situation: "item_edit_success" },
          },
          `/item/${itemInfo.id}?ref_code=item_edit_success` // 表示名
        );
      } catch (error) {
        console.log(error);
      } finally {
        console.log("item_edit_end");
      }
    }
  };

  const handleItemDelete = async () => {
    const message = "商品情報を削除しますか？登録した商品も削除されます。";
    if (!window.confirm(message)) {
      // キャンセルを押下
      return false;
    }
    await deleteDoc(doc(db, "items", itemInfo.id));
    router.push(
      {
        pathname: `/user/${userData.userId}`,
        query: { situation: "delete_user" },
      },
      `/`
    );
  };

  return (
    itemInfo && (
      <LoggedIn titleTag={`商品編集 | ${itemInfo.title} | コレナラ`}>
        <div className="container mx-auto  max-w-5xl">
          <div className="px-4">
            <div>
              気の利いた要素
              <br />
              保存ボタンとかプレビューボタンとか置けたら・・・
            </div>
          </div>
          <main className="px-4 mb-4">
            <p className="pt-4 font-bold text-3xl mb-4">商品編集</p>
            <form
              className="rounded-lg bg-white p-4"
              onSubmit={handelFormSubmit}
            >
              <p className="font-bold text-lg text-gray-600 mb-2">商品名</p>
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                value={itemInfo.title}
                onChange={(e) =>
                  setItemInfo({
                    ...itemInfo,
                    ...{ title: e.target.value },
                  })
                }
              />
              <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
                サブタイトル
              </p>
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                value={itemInfo.subTitle}
                onChange={(e) =>
                  setItemInfo({
                    ...itemInfo,
                    ...{ subTitle: e.target.value },
                  })
                }
              />
              <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
                商品の価格（円）
              </p>
              <input
                type="number"
                className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                value={itemInfo.price}
                placeholder="商品の価格を整数で入力してください。"
                onChange={(e) =>
                  setItemInfo({
                    ...itemInfo,
                    ...{ price: e.target.value },
                  })
                }
              />
              <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
                カテゴリーの変更
              </p>
              <div className="mt-4">
                {itemCategories.map((cat) => (
                  <label key={cat.id} className="mr-4">
                    <input
                      type="radio"
                      name="category"
                      value={cat.id}
                      onChange={(e) =>
                        setItemInfo({
                          ...itemInfo,
                          ...{ category: Number(e.target.value) },
                        })
                      }
                      checked={itemInfo.category === cat.id}
                    />
                    {cat.name}
                  </label>
                ))}
              </div>
              <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
                タグの登録
                <span className="font-normal text-xs text-gray-400 ml-2">
                  設定すると特徴が利用者に伝わりやすくなります
                </span>
              </p>
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                value={itemEnteredTag}
                placeholder="設定したいタグを入力してください"
                onChange={(e) => setItemEnteredTag(e.target.value)}
                onKeyDown={handleTagsKeyDown}
              />
              <div className="mt-4">
                {itemInfo.tags && (
                  <div className="mt-4">
                    {itemInfo.tags.map((tag: string, idx: number) => (
                      <BasicTag
                        key={tag}
                        className="mr-2"
                        text={tag}
                        removable
                        removableFunc={(e) => handelRemoveTag({ e, idx })}
                      />
                    ))}
                  </div>
                )}
              </div>

              <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
                商品画像
                <span className="font-normal text-xs text-gray-400 ml-2">
                  URLの形式で画像を指定してください。
                </span>
              </p>
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                value={itemInfo.image}
                onChange={(e) =>
                  setItemInfo({
                    ...itemInfo,
                    ...{ image: e.target.value },
                  })
                }
                placeholder="https://sample.com/xxx/yyy/"
              />

              <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
                商品の説明
                <span className="font-normal text-xs text-gray-400 ml-2">
                  20文字以上5,000文字以内。Markdown記法が使えます（予定）
                </span>
              </p>
              <textarea
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                rows={20}
                placeholder=""
                value={itemInfo.detail}
                onChange={(e) =>
                  setItemInfo({
                    ...itemInfo,
                    ...{ detail: e.target.value },
                  })
                }
              ></textarea>

              <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
                レビュー（作成予定）
              </p>
              <ItemReviewList item={itemInfo} removable />

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
                className="inline-flex items-center gap-1.5 text-red-500 underline hover:no-underline active:no-underline"
                onClick={handleItemDelete}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fill="currentColor"
                    d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0Zm-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2h7.5Zm2.5 6.5a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0v-10Zm5-1a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-10a1 1 0 0 0-1-1Z"
                  />
                </svg>
                この商品を削除する
              </button>
            </p>
          </main>
        </div>
      </LoggedIn>
    )
  );
};

export default ItemIdEdit;
