import React from "react";

const data = [
  { value: "48h", label: "First Decision" },
  { value: "7 Days", label: "Review Time" },
  { value: "100%", label: "Open Access" },
  { value: "DOI", label: "CrossRef Enabled" },
];

export default function JournalMetrics() {
  return (
    <section className="bg-[#0b2a4a] py-10 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center">

        {data.map((item, i) => (
          <div key={i} className="py-4">
            <h2 className="text-2xl md:text-3xl font-bold">{item.value}</h2>
            <p className="text-gray-300 text-sm uppercase">{item.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
}