import React from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { GraduationCap, Link as LinkIcon, Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-12 md:pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 border-b border-gray-800 pb-10 md:pb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Logo" className="h-12 md:h-14" />
              <h1 className="text-lg md:text-xl font-bold text-white leading-tight">
                J. Comp. <br /> Health Sci.
              </h1>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Advancing One Health research across human and veterinary sciences through
              peer-reviewed, international, open-access publishing.
            </p>
          </div>

          {/* Quick Links */}
        <div>
  <h3 className="text-white font-semibold mb-4">Quick Links</h3>
  <ul className="space-y-2 text-sm">

    <li>
      <Link to="/about" className="hover:text-blue-400 transition">
        About Us
      </Link>
    </li>

    <li>
      <Link to="/scope" className="hover:text-blue-400 transition">
        Scope
      </Link>
    </li>

    <li>
      <Link to="/editorial-board" className="hover:text-blue-400 transition">
        Editorial Board
      </Link>
    </li>

    <li>
      <Link to="/guidelines" className="hover:text-blue-400 transition">
        Guidelines
      </Link>
    </li>

  </ul>
</div>
          {/* Article Types */}
          <div>
            <h3 className="text-white font-semibold mb-4">Article Types</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-blue-400">Full Papers & Reviews</a></li>
              <li><a href="/" className="hover:text-blue-400">Case Reports</a></li>
              <li><a href="/" className="hover:text-blue-400">Methods & Short Comm.</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">

            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <a
              href="mailto:editor@jchealthsci.com"
              className="text-blue-400 hover:underline break-all text-sm mb-4"
            >
              editor@jchealthsci.com
            </a>

            {/* ✅ FIXED POSITION BUTTON */}
            <div className="mt-auto">
              <Link
                to="/submit-paper"
                className="inline-flex items-center justify-center w-full sm:w-auto
                bg-blue-600 hover:bg-blue-700 text-white
                px-6 py-2.5 rounded-full text-sm font-medium
                transition duration-300 shadow-md hover:shadow-lg
                transform hover:-translate-y-0.5"
              >
                Submit Now
              </Link>
            </div>

          </div>

        </div>

        {/* INDEXING + LICENSE */}
        <div className="py-8 border-b border-gray-800">

          <h3 className="text-white text-sm font-semibold mb-4 text-center md:text-left">
            Indexing & Licensing
          </h3>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">

            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <GraduationCap size={18} />
              <span className="text-xs">Google Scholar</span>
            </div>

            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <LinkIcon size={18} />
              <span className="text-xs">CrossRef DOI</span>
            </div>

            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Copyright size={18} />
              <span className="text-xs">Creative Commons</span>
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs text-gray-500 text-center md:text-left">

          <p className="mb-3 md:mb-0">
            © 2026 Journal of Comparative Health Sciences. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;