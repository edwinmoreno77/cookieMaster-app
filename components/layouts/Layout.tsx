import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";
import Head from "next/head";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Head>{"title"}</Head>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
