import React from 'react';
import bgImage from '../assets/hero1.png';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-32 min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-3xl mx-auto">

        {/* Top Text */}
        <p className="text-sm md:text-lg font-medium text-white mb-4 md:mb-6 uppercase tracking-widest">
          ISSN: Pending | Open Access
        </p>

        {/* Title */}
        <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight mb-4">
          <span className="text-blue-600">Journal of Comparative</span> Health and Sciences
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl font-medium mb-6 md:mb-8 max-w-2xl mx-auto">
          Bridging the gap between{" "}
          <span className="text-blue-600">Human Medicine</span> and{" "}
          <span className="text-blue-600">Veterinary Sciences</span> through a global One Health lens.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 justify-center">

          <Link
            to="/submit-paper"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 md:py-4 px-6 md:px-10 rounded-full text-base md:text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-300 transform hover:scale-105"
          >
            Submit Your Paper
          </Link>

          <Link
            to="/about"
            className="bg-transparent border-2 border-white text-white py-3 md:py-4 px-6 md:px-10 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105"
          >
            View Editorial Board
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;