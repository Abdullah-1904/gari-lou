import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 md:px-10 py-6 text-center text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/3">
            <h2 className="font-bold text-2xl">Gari Lou HQ</h2>
            <p className="mt-2">Plot # 62, H-11/4, H-11, Islamabad</p>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0">
            <ul className="space-y-2">
              <li>
                <h4 className="font-bold text-2xl">Our Presence</h4>
              </li>
              <p className="mt-2">KHI | LHR | ISB</p>
            </ul>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0">
            <h2 className="font-bold text-2xl">Contact Us</h2>
            <p className="mt-2">
              <a
                href="mailto:garilou.official@outlook.com"
                className="text-blue-600 hover:text-blue-800"
              >
                garilou.official@outlook.com
              </a>
            </p>
            <p className="mt-2">+92 312 5352241 </p>
            <ul className="mt-2 space-y-2"></ul>
          </div>
        </div>
        <p className="mt-4 text-sm">© 2024 Gari-lou. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
