import React from "react";
import { Link } from "react-router-dom";
import publicationIcon from "../assets/spi.png";

const articles = [
  {
    id: 1,
    type: "Original Research",
    title:
      "Integrating Veterinary Diagnostics into Human Clinical Settings",
    author: "Khan, M.S.",
    issue: "Vol 1, Issue 1 | April 2026",
  },
  {
    id: 2,
    type: "Review Article",
    title:
      "One Health Approach in Emerging Zoonotic Disease Surveillance Systems",
    author: "Editorial Board",
    issue: "Vol 1, Issue 1 | April 2026",
  },
  {
    id: 3,
    type: "Case Study",
    title:
      "Comparative Study of Antimicrobial Resistance in Livestock and Humans",
    author: "Dr. A. Rehman",
    issue: "Vol 1, Issue 1 | April 2026",
  },
  {
    id: 4,
    type: "Short Communication",
    title:
      "Advances in Veterinary Imaging for Early Disease Detection",
    author: "Dr. S. Ali",
    issue: "Vol 1, Issue 1 | April 2026",
  },
];

export default function LatestPublications() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-14 md:py-20">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Latest Publications
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Explore peer-reviewed research, reviews, and case studies in comparative health sciences.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 gap-6">

        {articles.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 rounded-xl p-6 group hover:-translate-y-1"
          >

            {/* TOP ROW */}
            <div className="flex items-center gap-4 mb-4">

              <img
                src={publicationIcon}
                alt="journal icon"
                className="h-12 w-12 rounded-full object-cover"
              />

              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {item.type}
                </span>

                <p className="text-xs text-gray-500">
                  {item.issue}
                </p>
              </div>

            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition mb-2 leading-snug">
              {item.title}
            </h3>

            {/* AUTHOR */}
            <p className="text-sm text-gray-500 mb-5">
              {item.author}
            </p>

            {/* BUTTON */}
            <Link
              to={`/article/${item.id}`}
              className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300"
            >
              Read Full Article →
            </Link>

          </div>
        ))}

      </div>

      {/* FOOTER NOTE */}
      <div className="mt-12 text-center flex flex-col items-center gap-3">

        <img
          src={publicationIcon}
          alt="loading"
          className="h-6 w-6 animate-spin"
        />

        <p className="text-gray-600 text-sm">
          More articles are currently under peer review and will be published soon.
        </p>

      </div>

    </section>
  );
}