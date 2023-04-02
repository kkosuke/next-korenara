import React, { ReactNode } from "react";
import Head from "next/head";
import { LoggedInHeader } from "@/component/organisms/header/loggedInHeader";
import { CommonFooter } from "@/component/organisms/footer/CommonFooter";

type Props = {
  titleTag: string;
  children: ReactNode;
};

export const LoggedIn: React.FC<Props> = ({
  titleTag = "コレナラ",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{titleTag}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <LoggedInHeader />
        <div
          className="h-96 flex-1 p-4"
          style={{
            background: "#f8fafc",
          }}
        >
          {children}
        </div>
        <CommonFooter />
      </div>
    </>
  );
};
