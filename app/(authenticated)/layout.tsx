import React from "react";
import Navbar from "../../components/navbar";
import AuthenticatedSidebar from "../../components/authenticated-sidebar";
import { ReactQueryProvider } from "../../lib/query-client-provider";
import { Toaster } from "../../components/ui/toaster";
import { Toaster as SonnerToaster } from "../../components/ui/sonner";
import { UserButton } from "@clerk/nextjs";

const AuthenticatedLayout = ({ children }) => {
  return (
    <>
      <ReactQueryProvider>
        <section className="flex">
          <Toaster />
          <SonnerToaster />
          <AuthenticatedSidebar />

          <main className="flex-grow overflow-y-auto">
            <header className="w-full flex justify-end py-4 px-6">
              <UserButton />
            </header>
            <main className="min-h-screen px-10 py-8">{children}</main>
            {/* <Footer /> */}
          </main>
        </section>
      </ReactQueryProvider>
    </>
  );
};

export default AuthenticatedLayout;
