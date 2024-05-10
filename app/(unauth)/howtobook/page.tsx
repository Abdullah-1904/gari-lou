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
      {/* <div className="flex flex-col items-center justify-center space-y-4 p-4">
        <h2 className="text-xl font-bold">
          Below is a step-by-step guide on how to post your car
        </h2>
        <ol className="list-decimal space-y-2">
          <li>
            <strong>Login:</strong> Start by accessing our website. If you
            already have an account, click on the &apos;Sign in&apos; button in
            the top right corner.
            <Image
              src="/signinbutton.png"
              alt="sign in button"
              width={180}
              height={120}
            />
            Enter your credentials to log in. If you don&apos;t have an account,
            you&apos;ll need to create one by clicking &apos;Sign Up&apos;.
          </li>
          <Image src="/clerk.png" alt="login" width={400} height={500} />
          <li>
            <strong>Navigate to My Postings:</strong> After logging in, navigate
            to the &apos;My Postings&apos; section found in the dashboard or
            main menu. This section will show you all your current postings and
            booking options.
          </li>
          <Image
            src="/dashboard.png"
            alt="dashboard"
            width={4000}
            height={10}
          />
          <li>
            <strong>Create a New Posting:</strong> Inside &apos;My
            Postings&apos;, click on the &apos;New Posting&apos; button. This
            will take you to a form where you can enter details about the car
            you want to book.
          </li>
          <Image
            src="/newposting.png"
            alt="new post"
            width={180}
            height={120}
          />
          <li>
            <strong>Add Car Information:</strong> Fill in the car information
            form. Include details such as car make, model, year, and the rental
            price. Ensure all the information is accurate to attract potential
            renters.
          </li>
          <li>
            <strong>Submit Your Posting:</strong> After filling out the form,
            review your details and click on the &apos;Create&apos; button to
            submit your posting. Once submitted, your car will be listed for
            rental on our platform.
          </li>
        </ol>
        <p className="text-center">
          Follow these steps carefully to successfully book your car for rental.
          If you encounter any issues, please contact our support team for
          assistance.
        </p>
      </div>
    </> */}

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
                    the 'Sign in' button at the top right corner to log in with
                    your credentials. If you're new, click 'Sign Up' to create
                    an account.
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
                    find the 'My Postings' section in the dashboard to view and
                    manage your postings.
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
                    <strong>Create a New Posting:</strong> In 'My Postings',
                    click the 'New Posting' button to start listing your car.
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
                    your car's details, such as make, model, year, and rental
                    price.
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
                    and hit 'Create' to add your car to the rental listings.
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
