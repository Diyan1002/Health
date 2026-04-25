import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  "Fast Peer Review Process",
  "International Editorial Board",
  "Open Access Publishing",
  "Indexed & DOI Assigned Articles",
  "Global Academic Visibility",
  "COPE Ethical Publishing Standards",
];

export default function WhyPublish() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Why Publish With Us?
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          We provide a trusted, fast, and globally visible publishing platform
          for researchers in human and veterinary sciences.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-2xl shadow-md border border-gray-100
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start gap-3">

                {/* Icon */}
                <CheckCircle2 className="text-blue-600 w-6 h-6 mt-1 group-hover:scale-110 transition" />

                {/* Text */}
                <p className="text-gray-700 font-medium text-left leading-relaxed">
                  {item}
                </p>

              </div>

              {/* Bottom Glow Line */}
              <div className="mt-4 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-16"></div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12">
  <Link
    to="/submit-paper"
    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full 
    hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
  >
    Submit Your Research
  </Link>
</div>

      </div>
    </section>
  );
}