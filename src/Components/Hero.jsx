import React from "react";
import bgImage from "../assets/hero1.png";
import { Link } from "react-router-dom";
import { GraduationCap, Link as LinkIcon, Copyright } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-32 min-h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-3xl mx-auto">
        
        <p className="text-sm md:text-lg font-medium mb-4 uppercase tracking-widest">
          ISSN: Pending | Open Access
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <span className="text-blue-500">Journal of Comparative</span> Health and Sciences
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Bridging the gap between{" "}
          <span className="text-blue-400">Human Medicine</span> and{" "}
          <span className="text-blue-400">Veterinary Sciences</span> through One Health.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/submit-paper"
            className="bg-blue-600 py-3 px-6 rounded-full hover:bg-blue-700 transition"
          >
            Submit Paper
          </Link>

          <Link
            to="/about"
            className="border border-white py-3 px-6 rounded-full hover:bg-white hover:text-black transition"
          >
            Editorial Board
          </Link>
        </div>
      </div>

      {/* ================= PREMIUM SMALL BADGES ================= */}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-3 z-50">

        {/* Scholar */}
        <div className="flex flex-col items-center text-white 
          bg-black/25 backdrop-blur-xl border border-white/15 
          p-2.5 rounded-lg shadow-lg hover:bg-black/40 transition">

          <GraduationCap size={20} />
          <span className="text-[10px] mt-1 opacity-80">
            Scholar
          </span>
        </div>

        {/* CrossRef */}
        <div className="flex flex-col items-center text-white 
          bg-black/25 backdrop-blur-xl border border-white/15 
          p-2.5 rounded-lg shadow-lg hover:bg-black/40 transition">

          <LinkIcon size={20} />
          <span className="text-[10px] mt-1 opacity-80">
            CrossRef
          </span>
        </div>

        {/* CC */}
        <div className="flex flex-col items-center text-white 
          bg-black/25 backdrop-blur-xl border border-white/15 
          p-2.5 rounded-lg shadow-lg hover:bg-black/40 transition">

          <Copyright size={20} />
          <span className="text-[10px] mt-1 opacity-80">
            CC
          </span>
        </div>

      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">

        <div className="flex gap-5 
          bg-black/40 backdrop-blur-xl 
          border border-white/20 
          px-4 py-2.5 rounded-full shadow-xl">

          <div className="flex flex-col items-center text-white">
            <GraduationCap size={18} />
            <span className="text-[9px] opacity-80">Scholar</span>
          </div>

          <div className="flex flex-col items-center text-white">
            <LinkIcon size={18} />
            <span className="text-[9px] opacity-80">CrossRef</span>
          </div>

          <div className="flex flex-col items-center text-white">
            <Copyright size={18} />
            <span className="text-[9px] opacity-80">CC</span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;