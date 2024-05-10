"use client";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  const { sessionId } = useAuth();

  if (sessionId) {
    redirect("/dashboard");
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-300 py-10 flex flex-col justify-center sm:py-12">
        <div className="relative py-5 sm:max-w-3xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg transform skew-y-0 rotate-3 rounded-3xl"></div>
          <div className="relative px-6 py-16 bg-white shadow-lg rounded-3xl p-20">
            <h1 className="text-5xl font-bold text-center mb-10 cursor-pointer">
              How to Post Your Car
            </h1>
            <div className="divide-y divide-gray-200">
              <div className="text-gray-600 font-medium">
                <ol className="list-decimal space-y-4 pl-5">
                  <li>
                    <strong>Sign in:</strong> Access our website and click on
                    the &apos;Sign in&apos; button at the top right corner to
                    log in with your credentials. If you&apos;re new, click
                    &apos;Sign Up&apos; to create an account.
                    <div className="mt-2 flex justify-start">
                      <Image
                        src="/signinbutton.png"
                        alt="sign in button"
                        width={180}
                        height={120}
                      />
                    </div>
                  </li>
                  <li>
                    <strong>Navigate to My Postings:</strong> Once logged in,
                    find the &apos;My Postings&apos; section in the dashboard to
                    view and manage your postings.
                    <div className="mt-2 flex justify-start">
                      <Image
                        src="/dashboard.png"
                        alt="dashboard"
                        width={180}
                        height={120}
                      />
                    </div>
                  </li>
                  <li>
                    <strong>Create a New Posting:</strong> In &apos;My
                    Postings&apos;, click the &apos;New Posting&apos; button to
                    start listing your car.
                    <div className="mt-2 flex justify-start">
                      <Image
                        src="/newposting.png"
                        alt="new post"
                        width={180}
                        height={120}
                      />
                    </div>
                  </li>
                  <li>
                    <strong>Add Car Information:</strong> Complete the form with
                    your car&apos;s details, such as make, model, year, and
                    rental price.
                    <div className="mt-2 flex justify-start">
                      <Image
                        src="/form.png"
                        alt="new post"
                        width={990}
                        height={220}
                      />
                    </div>
                  </li>
                  <li>
                    <strong>Submit Your Posting:</strong> Review the information
                    and hit &apos;Create&apos; to add your car to the rental
                    listings.
                    <div className="mt-2 flex justify-start">
                      <Image
                        src="/create.png"
                        alt="new post"
                        width={110}
                        height={120}
                      />
                    </div>
                  </li>
                </ol>
              </div>
              <p className="pt-6 text-gray-600 text-center">
                Carefully follow these steps to list your car for rental. For
                any assistance, our support team is here to help 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
