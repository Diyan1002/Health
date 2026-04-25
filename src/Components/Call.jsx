import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CallForPapers() {

    const navigate = useNavigate();
  return (
    <section className="w-full px-4 py-16 bg-gray-100 flex justify-center">
      <div
        className="w-full max-w-6xl rounded-3xl p-8 md:p-12 
                   bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]
                   text-white shadow-2xl relative overflow-hidden
                   animate-fadeInUp"
      >
        {/* Glow Effect */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Call for Papers 2026
            </h2>

            <p className="text-gray-300 mb-6">
              Be a part of our inaugural issue. We invite MBBS, DVM, and PhD
              researchers to submit original papers and case reports.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-400 w-5 h-5" />
                Double-Blind Review
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-400 w-5 h-5" />
                DOIs via CrossRef
              </div>
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <div>
            <button
  onClick={() => navigate("/submit-paper")}
  className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 
             transition-all duration-300 text-white font-medium
             shadow-lg hover:shadow-blue-500/40
             hover:scale-105 active:scale-95"
>
  Submit Manuscript
</button>
          </div>
        </div>
      </div>
    </section>
  );
}