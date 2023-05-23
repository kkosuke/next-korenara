import { LoggedIn } from "@/components/templates/top/loggedInTemplate";

import React, { useState } from "react";
import { useRouter } from "next/router";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

import { BasicTag } from "@/components/atoms/tag/BasicTag";
import { useAuthContext } from "@/context/AuthContext";
import { itemCategories } from "@/constants/itemCategories";

const ItemIdNew = () => {
  const router = useRouter();
  const { user } = useAuthContext();

  const [itemTitle, setItemTitle] = useState<string>("");
  const [itemSubTitle, setItemSubTitle] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<number>();
  const [itemImage, setItemImage] = useState<string>("");
  const [itemEnteredTag, setItemEnteredTag] = useState<string>("");

  const [itemTags, setItemTags] = useState<string[]>([
    "タグテスト1",
    "タグテスト2",
  ]);
  const [itemCategory, setItemCategory] = useState<number>(9999);
  const [itemDetail, setItemDetail] = useState<string>("");

  const handelFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (itemTitle && user) {
      const message = "商品を作成しますか？";
      if (!window.confirm(message)) {
        return false;
      }
      const docRef = await addDoc(collection(db, "items"), {
        title: itemTitle,
        subTitle: itemSubTitle,
        price: itemPrice,
        tags: itemTags,
        detail: itemDetail,
        image: itemImage,
        category: itemCategory,
        createdAt: serverTimestamp(),
        editedAt: serverTimestamp(),
        userUid: user.uid,
      });
      resetUseState();
      router.push(
        {
          pathname: `/item/${docRef.id}?ref_code=item_create_success`, // 本当の遷移URL
          query: { situation: "item_create_success" },
        },
        `/item/${docRef.id}?ref_code=item_create_success` // 表示名
      );
    } else {
      alert("タイトルを入力してください。");
    }
  };

  const resetUseState = () => {
    setItemTitle("");
    setItemSubTitle("");
    setItemPrice(0);
    setItemTags([]);
    setItemDetail("");
  };

  const handelRemoveTag = (obj: any) => {
    itemTags.splice(obj.idx, 1);
    setItemTags(() => [...itemTags]);
  };
  const handleTagsKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 参考
    // https://zenn.dev/takky94/articles/f3096bb59761ee
    if (e.nativeEvent.isComposing || e.key !== "Enter") return;
    e.preventDefault();
    if (itemTags.length < 5) {
      itemTags.push(itemEnteredTag);
      setItemEnteredTag("");
      setItemTags(() => [...itemTags]);
    } else {
      alert("タグは最大5つまで登録可能です");
    }
    return false;
  };

  const handleCategoryChange = (e: any) => {
    setItemCategory(Number(e.target.value));
  };

  return (
    <LoggedIn titleTag={`商品新規登録 | コレナラ`}>
      <div className="container mx-auto  max-w-5xl">
        <div className="px-4">
          <div>
            気の利いた要素
            <br />
            保存ボタンとかプレビューボタンとか置けたら・・・
          </div>
        </div>
        <main className="px-4 mb-4">
          <p className="pt-4 font-bold text-3xl mb-4">商品新規登録</p>

          <form onSubmit={handelFormSubmit} className="rounded-lg bg-white p-4">
            <p className="font-bold text-lg text-gray-600 mb-2">商品名</p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value={itemTitle}
              placeholder="商品名を入力してください"
              onChange={(e) => setItemTitle(e.target.value)}
            />
            <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
              サブタイトル（任意）
            </p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value={itemSubTitle}
              placeholder="サブタイトルを入力してください"
              onChange={(e) => setItemSubTitle(e.target.value)}
            />
            <p className="font-bold text-lg text-gray-600 mb-2 mt-6">
              商品の価格（円）
            </p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value={itemPrice}
              placeholder="商品の価格を整数で入力してください。"
              onChange={(e) => setItemPrice(Number(e.target.value))}
            />
            <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
              商品画像
              <span className="font-normal text-xs text-gray-400 ml-2">
                URLの形式で画像を指定してください。
              </span>
            </p>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 py-3 text-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              value={itemImage}
              placeholder="https://sample.com/xxx/yyy/"
              onChange={(e) => setItemImage(e.target.value)}
            />

            <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
              タグの登録（作成予定）
              <span className="font-normal text-xs text-gray-400 ml-2">
                設定すると特徴が利用者に伝わりやすくなります。タグは最大5つまで登録可能です。
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
              {itemTags.map((tag, idx) => (
                <BasicTag
                  key={tag}
                  className="mr-2"
                  text={tag}
                  removable
                  removableFunc={(e) => handelRemoveTag({ e, idx })}
                />
              ))}
            </div>

            <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
              カテゴリーの登録（作成予定）
            </p>
            <div className="mt-4">
              {itemCategories.map((cat) => (
                <label key={cat.id} className="mr-4">
                  <input
                    type="radio"
                    name="category"
                    value={cat.id}
                    onChange={handleCategoryChange}
                    checked={itemCategory === cat.id}
                  />
                  {cat.name}
                </label>
              ))}
            </div>

            <p className="mt-6 font-bold text-lg text-gray-600 mb-2">
              商品の説明
              <span className="font-normal text-xs text-gray-400 ml-2">
                20文字以上5,000文字以内。Markdown記法が使えます（予定）
              </span>
            </p>
            <textarea
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
              rows={20}
              placeholder="商品に関する説明文を入力してください。"
              value={itemDetail}
              onChange={(e) => setItemDetail(e.target.value)}
            ></textarea>

            <div className="mt-4 text-center">
              <button
                type="submit"
                className="rounded-lg border border-primary-500 bg-primary-500 px-24 py-3 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                作成する
              </button>
            </div>
          </form>
        </main>
      </div>
    </LoggedIn>
  );
};

export default ItemIdNew;
