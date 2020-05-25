import * as React from "react";
import Link from "next/link";
import Head from "next/head";

import Navbar from "./Navbar";
import SidebarLayout from "./SidebarLayout";
import Sidebar from "./Sidebar";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <SidebarLayout sidebar={<Sidebar />}>
      <header>
        <Navbar />
      </header>
      {children}
      <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
    </SidebarLayout>

    
  </div>
);

export default Layout;
