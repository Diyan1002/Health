import React from "react";
import { useParams } from "react-router-dom";

const articles = {
  1: {
    title: "Integrating Veterinary Diagnostics into Human Clinical Settings",
    type: "Original Research",
    author: "Khan, M.S.",
    issue: "Vol 1, Issue 1 | April 2026",
    abstract:
      "This study explores the integration of veterinary diagnostic systems into human clinical environments under the One Health framework.",
    content: `
Introduction:
The One Health approach connects human, animal, and environmental health. This study investigates diagnostic integration...

Methodology:
A comparative analysis was conducted across veterinary and human diagnostic laboratories...

Results:
Findings show significant overlap in diagnostic biomarkers...

Discussion:
Integration improves early disease detection and surveillance efficiency...

Conclusion:
Veterinary diagnostics can enhance human clinical systems under unified health frameworks.
    `,
  },

  2: {
    title: "One Health Approach in Emerging Zoonotic Disease Surveillance Systems",
    type: "Review Article",
    author: "Editorial Board",
    issue: "Vol 1, Issue 1 | April 2026",
    abstract:
      "A comprehensive review of zoonotic disease surveillance using One Health principles.",
    content: `
Introduction:
Zoonotic diseases require integrated surveillance systems...

Key Findings:
Global surveillance systems are improving through data sharing...

Conclusion:
One Health is essential for future outbreak prevention.
    `,
  },
};

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles[id];

  if (!article) {
    return (
      <div className="text-center py-20 text-gray-500">
        Article not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-14">

      {/* Header */}
      <div className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {article.title}
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          {article.type} • {article.issue}
        </p>

        <p className="text-sm text-gray-600 mt-1">
          Author: {article.author}
        </p>
      </div>

      {/* Abstract */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded mb-6">
        <h2 className="font-semibold text-blue-700 mb-2">
          Abstract
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          {article.abstract}
        </p>
      </div>

      {/* Full Article Content */}
      <div className="bg-white shadow-sm rounded-lg p-6 space-y-6">

        <h2 className="text-xl font-semibold text-gray-800">
          Full Article
        </h2>

        <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed text-sm">
          {article.content}
        </pre>

      </div>

      {/* Footer Section */}
      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4">

        <p className="text-xs text-gray-500">
          © 2026 Journal of Comparative Health Sciences
        </p>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition">
          Download PDF
        </button>

      </div>

    </div>
  );
}