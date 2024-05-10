"use client";
import React from "react";
import Link from "next/link";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import Image from "next/image";
import LogoImage from "../public/logo1.png";
import { Button } from "./ui/button";

const Navbar = () => {
  const { sessionId } = useAuth();
  return (
    <div className="flex justify-between bg-sky-50 w-full py-2 px-4 sm:py-4 sm:px-6 items-center bg-background text-foreground sticky top-0 z-[10]">
      {!sessionId && (
        <div className="flex items-center justify-start">
          <Link href="/">
            <div className="block h-8 w-8 sm:h-10 sm:w-10">
              <Image
                className="h-10 w-10 object-contain"
                alt="logo"
                src={LogoImage}
              />
            </div>
          </Link>
        </div>
      )}
      {!sessionId && (
        <div className="flex items-center justify-start gap-4">
          <div className="px-4">
            {/* <Link href="/">HomePage</Link> */}
            <Link href="/" className="hover:text-indigo-500">
              Homepage
            </Link>
          </div>
          <Link
            href="https://8c0061-06.myshopify.com/"
            className="hover:text-indigo-500"
          >
            Buy now
          </Link>
          <Link href="/howtobook" className="hover:text-indigo-500">
            Guide
          </Link>
          <Link href="/about" className="hover:text-indigo-500">
            About
          </Link>
        </div>
      )}
      <div className="flex justify-end flex-grow items-center">
        {!sessionId ? (
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        ) : (
          <SignOutButton>
            <Button>Sign out</Button>
          </SignOutButton>
        )}
      </div>
    </div>
  );
};

export default Navbar;
