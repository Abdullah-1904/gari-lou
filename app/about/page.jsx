import React from "react";

export default function About() {
  return (
    <div className="min-h-screen">
      <h1 className="text-6xl font-bold mt-8">About</h1>

      <div className="flex flex-col gap-4 p-4 bg-white shadow-md  rounded-md mt-4 ">
        <p className="text-gray-500">
          Welcome to our Car Rental Service, where we believe in the{" "}
          <b>freedom</b> of the open road!
        </p>
        <p className="text-gray-500">
          We are a trusted and reliable car rental platform that connects car
          owners with potential renters. Our mission is to provide an easy,
          secure, and efficient car rental experience for both parties involved.
        </p>
        <p className="text-gray-500">
          For Car Renters: We offer a wide range of vehicles to suit your
          preferences and needs. Whether you're planning a road trip, need a
          vehicle for business, or just want to try out a different car model,
          we've got you covered. Our user-friendly platform allows you to find
          and book your perfect ride with just a few clicks.
        </p>
        <p className="text-gray-500">
          For Car Owners: We provide a platform for you to monetize your idle
          car. List your car on our platform and start earning today. We handle
          all the logistics, from connecting you with reliable renters to
          ensuring secure payments.
        </p>
        <p className="text-gray-500">
          Secure and Easy Payments: We prioritize your safety and security. Our
          online payment process is smooth, secure, and transparent.
        </p>
        <p className="text-gray-500">
          Customer Support: We value our customers and strive to provide
          exceptional customer service. Our dedicated team is available 24/7 to
          assist you with any queries or issues.
        </p>
        <p className="text-gray-500">
          Join us today and experience the convenience, reliability, and freedom
          that our Car Rental Service offers!
        </p>
      </div>
    </div>
  );
}
