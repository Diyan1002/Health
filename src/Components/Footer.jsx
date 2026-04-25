import React from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 border-b border-gray-800 pb-10 md:pb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
              <img src={logo} alt="Logo" className="h-12 md:h-14" />
              <h1 className="text-lg md:text-xl font-bold text-white leading-tight">
                J. Comp. <br /> Health Sci.
              </h1>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Advancing health sciences across human and animal medicine
              through a One Health framework. Peer-reviewed, international,
              and open-access.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="/scope" className="hover:text-blue-400 transition">Scope</a></li>
              <li><a href="/editorial-board" className="hover:text-blue-400 transition">Editorial Board</a></li>
              <li><a href="/guidelines" className="hover:text-blue-400 transition">Guidelines</a></li>
            </ul>
          </div>

          {/* Article Types */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-5">
              Article Types
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li><a href="/full-papers" className="hover:text-blue-400 transition">Full Papers & Reviews</a></li>
              <li><a href="/case-reports" className="hover:text-blue-400 transition">Case Reports & Letters</a></li>
              <li><a href="/methods" className="hover:text-blue-400 transition">Methods & Short Comm.</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-5">
              Contact
            </h3>

            <p className="text-sm text-gray-400 mb-2">
              Email:
            </p>

            <a
              href="mailto:editor@jchealthsci.com"
              className="text-blue-400 hover:underline block mb-5 break-all"
            >
              editor@jchealthsci.com
            </a>

            <Link
              to="/submit-paper"
              className="inline-block w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition transform hover:scale-105 shadow-lg"
            >
              Submit Now
            </Link>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-8 text-xs sm:text-sm text-gray-500 text-center md:text-left">

          <p className="mb-4 md:mb-0">
            © 2026 J. Comp. Health Sci. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;