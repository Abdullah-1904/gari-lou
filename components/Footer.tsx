import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-10 py-6 text-center text-white">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-2xl">Gari-Lou</h2>
            <p className="mt-2">Plot # 62, H-11/4, H-11, Islamabad</p>
          </div>
          <div>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="https://bic.edu.pk/">
                  Beaconhouse International College
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-2xl">Contact Us</h2>
            <p className="mt-2">Visit your E-commerce platform</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="https://8c0061-06.myshopify.com/">Click here</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm">© 2024 Gari-lou. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
