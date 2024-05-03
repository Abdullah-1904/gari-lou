import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

const UnauthenticatedLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-[1200px] mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default UnauthenticatedLayout;
