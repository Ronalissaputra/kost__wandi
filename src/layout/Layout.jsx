import React from "react";
import Navbar from "../components/Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div className="px-4 lg:px-40 lg:pt-10 pt-5">{props.children}</div>
    </div>
  );
};

export default Layout;
