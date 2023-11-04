import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Contact />
    </>
  );
};

export default Layout;
