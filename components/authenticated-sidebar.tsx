"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  Carrot,
  Home,
  LayoutDashboard,
  LogOut,
  MenuIcon,
  Milestone,
  ShoppingBasket,
} from "lucide-react";
import Image from "next/image";
import LogoImage from "../public/logo.png";
import { SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const AuthenticatedSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <Sidebar
      className={"h-screen fixed top-0"}
      width="250px"
      collapsed={collapsed}
      collapsedWidth="80px"
      transitionDuration={300}
    >
      <div className="flex items-center justify-center w-full mt-4">
        <Link href="/">
          <Image
            className="h-16 w-16 object-contain"
            alt="logo"
            src={LogoImage}
          />
        </Link>
      </div>
      <div className={"flex justify-end items-center "}>
        <Menu>
          <MenuItem
            className={""}
            icon={<MenuIcon />}
            onClick={toggleSidebar}
          />
        </Menu>
      </div>

      <Menu className="mt-6">
        <MenuItem
          icon={<LayoutDashboard />}
          onClick={() => handleNavigation("/dashboard")}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon={<Carrot />}
          onClick={() => handleNavigation("/booking-portal")}
        >
          Booking Portal
        </MenuItem>
        <MenuItem
          icon={<Milestone />}
          onClick={() => handleNavigation("/my-postings")}
        >
          My Postings
        </MenuItem>
        <MenuItem
          icon={<ShoppingBasket />}
          onClick={() => handleNavigation("/my-bookings")}
        >
          My Bookings
        </MenuItem>
        <MenuItem
          icon={<ShoppingBasket />}
          onClick={() => handleNavigation("/my-requests")}
        >
          My Requests
        </MenuItem>

        {/* <MenuItem
          icon={<LogOut />}
          onClick={() => {
            // Sign out and redirect
            SignOutButton({ signOutCallback: () => router.push("../") });
          }}
        >
          Log out
        </MenuItem> */}

        <MenuItem
          icon={<LogOut />}
          onClick={() => {
            // Assuming SignOutButton handles the sign-out process
            // Redirect should be set as a callback after successful sign out
            router.push("../"); // Adjust this path according to your routing setup
          }}
        >
          <SignOutButton signOutCallback={() => router.push("../")} />{" "}
          {/* Render the button here */}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default AuthenticatedSidebar;
