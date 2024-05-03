import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-10 py-6 text-center text-white">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-2xl">Company Name</h2>
            <p className="mt-2">123 Main St, City, State, 12345</p>
          </div>
          <div>
            <h2 className="font-bold text-2xl">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#">Link 1</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-2xl">Contact Us</h2>
            <p className="mt-2">Email: info@company.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <p className="mt-4 text-sm">
          © 2024 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
