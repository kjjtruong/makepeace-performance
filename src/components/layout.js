import * as React from "react";
import Header from "./header";

const Layout = ({ pageTitle, children }) => {

  return (
    <div className="flex h-full flex-col">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
