import React from "react";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";

const data = [
  { img: img1, title: "Zoonotic Diseases", desc: "Study of diseases transmitted between animals and humans." },
  { img: img2, title: "Veterinary Medicine", desc: "Advancing animal healthcare and diagnostics." },
  { img: img3, title: "Public Health", desc: "Improving global health systems and disease prevention." },
  { img: img4, title: "Environmental Health", desc: "Impact of environment on human and animal health." },
  { img: img5, title: "Microbiology", desc: "Research on pathogens and microbial systems." },
  { img: img6, title: "Epidemiology", desc: "Tracking disease patterns and outbreaks." },
  { img: img7, title: "Biomedical Research", desc: "Innovations in medical science and technology." },
  { img: img8, title: "One Health Approach", desc: "Integration of human, animal, and environmental health." },
  { img: img9, title: "Global Collaboration", desc: "Cross-border research and scientific partnerships." },
];

export default function ResearchGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Our Research Focus
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Exploring interdisciplinary research areas connecting human, animal, and environmental health.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {data.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition duration-300"></div>

            {/* Text */}
            <div className="absolute bottom-0 p-5 text-white">
              <h3 className="text-lg font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}