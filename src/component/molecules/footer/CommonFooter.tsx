import React from "react";

export const CommonFooter = () => {
  return (
    <footer className="bg-blue-200 p-4">
      <div>
        <div>ロゴ</div>
        <nav>
          <h5>見出し</h5>
          <ul>
            <li>
              <a href="https://www.google.com/">google</a>
            </li>
            <li>
              <a href="https://github.com/">github</a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="align-center">&copy; ココナラ</p>
    </footer>
  );
};
