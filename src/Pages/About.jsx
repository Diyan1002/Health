import React from "react";
import { HeartPulse, Microscope, Users, Activity } from "lucide-react";
import { Link } from "react-router-dom";
const AboutJournal = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About the Journal
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
            Bridging clinical practice, public health, and biomedical science
            through a modern{" "}
            <span className="text-blue-600 font-semibold">One Health</span> approach.
          </p>
        </div>

        {/* Intro Card */}
        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 mb-12 md:mb-16">

          <h3 className="text-lg sm:text-xl font-semibold bg-blue-100 inline-block px-3 py-1 rounded">
            Introduction
          </h3>

          <p className="text-gray-700 mt-4 leading-relaxed text-base sm:text-lg">
            Journal of Comparative Health and Sciences (J. Comp. Health Sci.) is an
            international, open-access, peer-reviewed journal dedicated to publishing
            translational health sciences research.
          </p>

          <p className="text-gray-500 mt-3 leading-relaxed text-sm sm:text-base">
            We focus on research that spans across human and animal medicine using a{" "}
            <span className="font-semibold text-gray-700">One Health</span> framework.
          </p>
        </div>

        {/* Aims Section */}
        <div className="mb-10">

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
            Aims & Mission
          </h3>

          <div className="w-14 md:w-16 h-1 bg-blue-600 mb-6 rounded"></div>

          <p className="text-gray-600 mb-8 md:mb-10 max-w-3xl text-sm sm:text-base">
            Our primary mission is to bridge the silos between clinical practice,
            public health, biomedical science, and environmental health.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            {[
              {
                icon: <HeartPulse />,
                title: "Patient Care",
                desc: "Direct relevance to clinical decision-making in both human and veterinary clinics.",
              },
              {
                icon: <Users />,
                title: "Health Policy",
                desc: "Informing population health outcomes and national/international health surveillance.",
              },
              {
                icon: <Microscope />,
                title: "Translational Research",
                desc: "Accelerating findings from lab to real-world clinical impact.",
              },
              {
                icon: <Activity />,
                title: "Cross-Disciplinary Dialogue",
                desc: "Fostering collaboration between MDs, DVMs, MPHs, and researchers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex items-start gap-4
                border-l-4 border-transparent hover:border-blue-600
                hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg text-blue-600 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Commitment */}
        <div className="mt-16 md:mt-20">

          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 md:p-10">

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 md:mb-8">
              Our Commitment
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-sm sm:text-base">
              <div>Rigorous Peer Review</div>
              <div>Ethical & Transparent Publishing</div>
              <div>Rapid Dissemination</div>
              <div>Open Access for Global Reach</div>
            </div>

            <div className="mt-8 bg-gray-100 text-center py-4 rounded-lg text-gray-600 text-sm sm:text-base">
              Aligned with{" "}
              <span className="font-semibold text-gray-800">COPE</span> and{" "}
              <span className="font-semibold text-gray-800">ICMJE</span> standards for research integrity.
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-8 md:mt-10">
            <p className="text-gray-500 mb-4 text-sm sm:text-base">
              Interested in the specific topics we cover?
            </p>

          <Link
  to="/scope"
  className="border border-blue-600 text-blue-600 px-5 sm:px-6 py-2 rounded-md font-medium
  hover:bg-blue-600 hover:text-white transition duration-300 text-sm sm:text-base inline-block"
>
  Explore Our Full Scope
</Link>
          </div>

        </div>

      </div>

      {/* Background blobs */}
      <div className="absolute -top-16 -left-16 w-60 sm:w-72 h-60 sm:h-72 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-16 -right-16 w-60 sm:w-72 h-60 sm:h-72 bg-purple-200 opacity-30 blur-3xl rounded-full"></div>

    </section>
  );
};

export default AboutJournal;