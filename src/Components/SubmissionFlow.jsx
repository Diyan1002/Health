import React from "react";

const steps = [
  "Submit Manuscript",
  "Initial Screening",
  "Peer Review",
  "Revision",
  "Final Decision",
  "Publication (DOI)",
];

export default function SubmissionFlow() {
  return (
    <section className="py-16 bg-gray-50">
      
      {/* IMPORTANT: padding yahan do */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">

        <h2 className="text-3xl font-bold mb-10">Publication Workflow</h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow hover:scale-105 transition duration-300"
            >
              <div className="text-blue-600 font-bold text-xl">
                {i + 1}
              </div>
              <p className="text-sm mt-2">{step}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}