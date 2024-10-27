import React from "react";
import IndNavbarLoggedIn from "../components/ind-navbarloggedin";
import Footer from "../components/footer";
import HeroCerti from "../components/hero-certicate";

const CertiVerify = () => {
  return (
    <>
      <IndNavbarLoggedIn />
      <HeroCerti />
      <div style={{ height: "10vh" }}></div>
      <Footer />
    </>
  );
};

export default CertiVerify;
