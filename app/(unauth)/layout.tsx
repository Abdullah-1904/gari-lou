import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import { RedirectToSignIn, SignedOut } from "@clerk/nextjs";

const UnauthenticatedLayout = ({ children }) => {
  return (
    <>
    {/* <SignedOut> */}
      <Navbar />
      <main className="max-w-[1200px] mx-auto">{children}</main>
      <Footer />
    {/* </SignedOut> */}
    </>
  );
};

export default UnauthenticatedLayout;
