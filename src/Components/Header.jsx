import React, { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Scope", path: "/scope" },
    { name: "Guidelines", path: "/guidelines" },
    { name: "Editorial Board", path: "/editorial-board" },
    { name: "Admin Panel", path: "/admin" }
  ];

  return (
    <header className="bg-white shadow-lg py-4 sticky top-0 z-50 relative">

      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-8">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 md:h-16" />
          <h1 className="font-semibold text-lg md:text-xl">
            <span className="text-blue-600">J. Comp.</span> Health Sci.
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition ${
                location.pathname === link.path
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE BUTTONS */}
        <div className="hidden md:flex items-center gap-3">

          {/* Download Template */}
          <a
            href="https://www.dropbox.com/scl/fi/zb1kf9ywcrpp455memduy/DOC-20260425-WA0152..docx?rlkey=08fgw8f216zfnq1bh3q6gy01b&st=zczetiga&dl=1"
            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-50 transition"
          >
            <Download size={16} />
            Template
          </a>

          {/* Submit Button */}
          <Link
            to="/submit-paper"
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition transform hover:scale-105"
          >
            Submit Paper
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 z-[60]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[40]"
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 text-lg transition-transform duration-300 z-[50] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={closeMenu}
            className={`text-lg font-medium ${
              location.pathname === link.path
                ? "text-blue-600"
                : "text-gray-800"
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* Mobile Download */}
        <a
          href="https://www.dropbox.com/scl/fi/zb1kf9ywcrpp455memduy/DOC-20260425-WA0152..docx?rlkey=08fgw8f216zfnq1bh3q6gy01b&st=zczetiga&dl=1"
          onClick={closeMenu}
          className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition"
        >
          <Download size={18} />
          Download Template
        </a>

        {/* Mobile Submit */}
        <Link
          to="/submit-paper"
          onClick={closeMenu}
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Submit Paper
        </Link>

      </div>

    </header>
  );
};

export default Header;