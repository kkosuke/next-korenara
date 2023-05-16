export const directoryNameFromPathName = (pathName: string): string => {
  let result = pathName;
  switch (pathName) {
    case "/":
      result = "サイトトップ";
      break;
    case "/category/[category_id]":
      result = "カテゴリー一覧";
      break;
    case "/search":
      result = "動的一覧";
      break;
  }
  return result;
};
