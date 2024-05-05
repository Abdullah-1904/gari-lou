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
import LogoImage from "../public/logo.png";
import { Button } from "./ui/button";

const Navbar = () => {
  const { sessionId } = useAuth();
  return (
    <div className="flex justify-between w-full py-4 px-6 items-center bg-background text-foreground sticky top-0 z-[10]">
      {!sessionId && (
        <div className="flex items-center justify-start">
          <Link href="/">
            <Image
              className="h-10 w-10 object-contain"
              alt="logo"
              src={LogoImage}
            />
          </Link>
        </div>
      )}
      {!sessionId && (
        <div className="flex items-center justify-start gap-4">
          <Link href="/about">About</Link>
          <Link href="https://8c0061-06.myshopify.com/">E-Commerce</Link>
          <Link href="/howtobook">Guide</Link>
          <Link href="/booking_portal"></Link>
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
