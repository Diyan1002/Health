import React from "react";

const stats = [
  { value: "14+", label: "Research Domains" },
  { value: "Rapid", label: "Peer Review" },
  { value: "100$", label: "Affordable APC" },
  { value: "Global", label: "Reach" },
];

export default function StatsSection() {
  return (
    <div className="w-full bg-[#0a2c4a] py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-none md:divide-x md:divide-white/20">

        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center px-4 md:px-6 py-6 
                       transform transition-all duration-500 hover:scale-105 group"
            style={{
              animationDelay: `${index * 0.15}s`,
              animationFillMode: "forwards",
            }}
          >
            {/* Value */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-orange-400 transition duration-300">
              {item.value}
            </h2>

            {/* Label */}
            <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-2 tracking-wide uppercase">
              {item.label}
            </p>

            {/* Glow Line */}
            <div className="mt-3 h-[2px] w-0 bg-orange-400 transition-all duration-500 group-hover:w-12"></div>
          </div>
        ))}

      </div>
    </div>
  );
}