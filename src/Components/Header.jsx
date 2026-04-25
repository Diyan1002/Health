import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
// Import assets
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-lg py-4 relative z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-8">

        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12 md:h-14" />
          <h1 className="font-semibold text-lg md:text-2xl">
            <span className="text-blue-600">J. Comp.</span> Health Sci.
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="navLink">Home</Link>
  <Link to="/about" className="navLink">About</Link>
  <Link to="/scope" className="navLink">Scope</Link>
  <Link to="/guidelines" className="navLink">Guidelines</Link>
  <Link to="/editorial-board" className="navLink">Editorial Board</Link>
        </nav>

        {/* Submit Button (Desktop) */}
        <a
          href="/submit-paper"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
        >
          Submit Paper
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 relative z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay background (optional dark blur effect) */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/30 md:hidden z-30"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-lg 
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">

          <a onClick={closeMenu} href="/" className="mobileLink">Home</a>
          <a onClick={closeMenu} href="/about" className="mobileLink">About</a>
          <a onClick={closeMenu} href="/scope" className="mobileLink">Scope</a>
          <a onClick={closeMenu} href="/guidelines" className="mobileLink">Guidelines</a>
          <a onClick={closeMenu} href="/editorial-board" className="mobileLink">Editorial Board</a>

          <a
            onClick={closeMenu}
            href="/submit-paper"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Submit Paper
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;