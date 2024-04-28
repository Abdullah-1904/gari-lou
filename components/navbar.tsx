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
    <div className="flex justify-between py-4 px-6 items-center bg-background text-foreground sticky top-0 z-[1000]">
      <div className="flex items-center justify-start">
        <Image
          className="h-10 w-10 object-contain"
          alt="logo"
          src={LogoImage}
        />
      </div>
      <div className="flex items-center justify-start gap-4">
        <Link href="/about">About</Link>{" "}
        <Link href="/E-commerce">E-Commerce</Link>
        <Link href="/booking_portal">Book your car</Link>
      </div>
      <div className="flex justify-end items-center">
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
