import React, { ReactNode } from "react";
import Head from "next/head";
import { LoggedOutHeader } from "@/component/organisms/header/loggedOutHeader";
import { CommonFooter } from "@/component/organisms/footer/CommonFooter";

type Props = {
  titleTag: string;
  children: ReactNode;
};

export const LoggedOut: React.FC<Props> = ({ titleTag, children }) => {
  return (
    <>
      <Head>
        <title>{titleTag}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <LoggedOutHeader />
        <div className="h-96 flex-1">{children}</div>
        <CommonFooter />
      </div>
    </>
  );
};
