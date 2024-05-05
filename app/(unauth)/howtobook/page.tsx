import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 p-4">
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
    </>
  );
};

export default Page;
