import React from "react";
import Header from "../Header";
import Footer from "../Footer";
export default function MainLayout(props) {
  return (
    <div>
      <Header />
      <React.Fragment>{props.children}</React.Fragment>
      <Footer />
    </div>
  );
}
