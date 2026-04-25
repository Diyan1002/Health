import React from "react";
import labImg from "../assets/lab.png";
import virusImg from "../assets/virus.png";
import specialtyImg from "../assets/spe.jpg";

const cards = [
  {
    title: "Clinical & Biomedical",
    desc: "Focusing on Oncology, Surgery, and Pharmacology across species.",
    img: labImg,
  },
  {
    title: "Public & One Health",
    desc: "Addressing Zoonotic diseases, AMR, and Food Safety globally.",
    img: virusImg,
  },
  {
    title: "Specialty Health",
    desc: "Innovative research in Ophthalmology, Dermatology and Dentistry.",
    img: specialtyImg,
  },
];

export default function ResearchSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative pl-4">
              <span className="absolute left-0 top-2 h-6 w-1 bg-blue-600"></span>
              Aim & Research Scope
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl">
              We prioritize translational research that impacts both clinical practice 
              and public health. Our framework connects animal biology, human pathology, 
              and environmental ecosystems.
            </p>
          </div>

          <button className="mt-6 md:mt-0 border border-blue-600 text-blue-600 px-5 py-2 rounded-md 
                             hover:bg-blue-600 hover:text-white transition duration-300">
            View All Categories
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden group 
                         transform transition-all duration-500 hover:-translate-y-3 hover:shadow-xl
                         opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-56 object-cover transform transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {card.desc}
                </p>

                {/* underline animation */}
                <div className="mt-4 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}