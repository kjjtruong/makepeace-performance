import * as React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {

  return (
    <div className="flex h-full flex-col">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
