import React from "react";

export default function Newsletter() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-black/10 blur-3xl rounded-full"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Stay Updated with Latest Research
        </h2>

        <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to receive new publications, journal alerts, and One Health research updates directly in your inbox.
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row items-center gap-3 max-w-2xl mx-auto">

          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-xl text-gray-900 outline-none focus:ring-2 focus:ring-white/50"
          />

          <button className="w-full sm:w-auto bg-black hover:bg-gray-900 transition px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 active:scale-95">
            Subscribe
          </button>

        </div>

        {/* Small text */}
        <p className="text-xs text-white/60 mt-5">
          No spam. Only important research updates.
        </p>

      </div>
    </section>
  );
}