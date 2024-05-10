"use client";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

export default function About() {
  const { sessionId } = useAuth();

  if (sessionId) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center mb-4 cursor-pointer">
            About
          </h1>
          <div className="divide-y divide-gray-200">
            <p className="text-gray-500">
              Welcome to our Car Rental Service, where we believe in the{" "}
              <b className="text-blue-500">freedom</b> of the open road!
            </p>
            <p className="text-gray-500">
              We are a trusted and reliable car rental platform that connects
              car owners with potential renters. Our mission is to provide an
              easy, secure, and efficient car rental experience for both parties
              involved.
            </p>
            <p className="text-gray-500">
              For Car Renters: We offer a wide range of vehicles to suit your
              preferences and needs. Whether you&apos;re planning a road trip,
              need a vehicle for business, or just want to try out a different
              car model, we&apos;ve got you covered. Our user-friendly platform
              allows you to find and book your perfect ride with just a few
              clicks.
            </p>
            <p className="text-gray-500">
              For Car Owners: We provide a platform for you to monetize your
              idle car. List your car on our platform and start earning today.
              We handle all the logistics, from connecting you with reliable
              renters to ensuring secure payments.
            </p>
            <p className="text-gray-500">
              Secure and Easy Payments: We prioritize your safety and security.
              Our online payment process is smooth, secure, and transparent.
            </p>
            <p className="text-gray-500">
              Customer Support: We value our customers and strive to provide
              exceptional customer service. Our dedicated team is available 24/7
              to assist you with any queries or issues.
            </p>
            <p className="text-gray-500">
              Join us today and experience the convenience, reliability, and
              freedom that our Car Rental Service offers!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
