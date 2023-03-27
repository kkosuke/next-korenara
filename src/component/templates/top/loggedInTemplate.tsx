import React, { ReactNode } from "react";
import Head from "next/head";
import { LoggedInHeader } from "@/component/molecules/header/loggedInHeader";
import { CommonFooter } from "@/component/molecules/footer/CommonFooter";

type Props = {
  titleTag: string;
  children: ReactNode;
};

export const LoggedIn: React.FC<Props> = ({ titleTag, children }) => {
  return (
    <>
      <Head>
        <title>ココナラ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <LoggedInHeader />
        <div className="h-96 flex-1 p-4">{children}</div>
        <CommonFooter />
      </div>
    </>
  );
};
