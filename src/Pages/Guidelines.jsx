import React, { useState } from "react";

export default function AuthorGuidelines() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-700">
          Author Guidelines
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Everything you need to know before submitting your research to the Journal of Comparative Health and Sciences.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6">
          {/* Checklist Card */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-blue-600 font-semibold mb-4 text-lg">
              Final Submission Checklist
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Before you click submit, please confirm that your manuscript meets the following requirements:
            </p>

            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <p className="font-semibold">Scope Fit</p>
                <p>
                  My work has relevance to health sciences, veterinary medicine, animal science, and/or One Health.
                </p>
              </div>

              <div>
                <p className="font-semibold">3 Files Ready</p>
                <p>
                  Main manuscript, figures/tables, and cover letter are prepared.
                </p>
              </div>

              <div>
                <p className="font-semibold">Ethical Compliance</p>
                <p>
                  Approval numbers are clearly stated where applicable.
                </p>
              </div>

              <div>
                <p className="font-semibold">Full Disclosures</p>
                <p>
                  Funding, conflicts of interest, and data availability are included.
                </p>
              </div>

              <div>
                <p className="font-semibold">Authorship & AI</p>
                <p>
                  All authors meet criteria and AI usage is disclosed.
                </p>
              </div>
            </div>
          </div>

          {/* Journal Policies */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-3">
              Journal Policies
            </h3>

            {/* Accordion */}
            <div className="bg-white rounded-xl shadow">
              <button
                onClick={() => setOpen(!open)}
                className="w-full text-left px-5 py-4 flex justify-between items-center bg-blue-100 rounded-t-xl"
              >
                <span className="font-medium text-gray-700">
                  Formatting & Style
                </span>
                <span>{open ? "-" : "+"}</span>
              </button>

              {open && (
                <div className="px-5 py-4 text-sm text-gray-600">
                  We format accepted papers for you. Initial submission just needs to be readable.
                </div>
              )}

              <div className="border-t px-5 py-4 text-sm text-gray-600 cursor-pointer">
                Peer Review Process
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Fee Card */}
          <div className="bg-blue-600 text-white rounded-xl shadow p-6">
            <p className="text-sm">Publication Fees (APC)</p>
            <h2 className="text-2xl font-bold mt-2">100 USD</h2>
            <p className="text-xs mt-2">
              Payable only upon acceptance. There are no submission fees.
            </p>
          </div>

          {/* Inquiry Card */}
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-sm text-gray-500 mb-3">
              Not sure if your paper fits the scope?
            </p>
            <button className="border w-full py-2 rounded-md text-sm hover:bg-gray-100">
              Email Editor
            </button>
          </div>

          {/* Encourage Card */}
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="text-blue-600 font-semibold mb-3">
              We Highly Encourage:
            </h4>
            <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
              <li>Co-authored human & veterinary research</li>
              <li>Research from LMICs addressing local health</li>
              <li>Cross-sector methods papers</li>
              <li>Policy analyses for One Health programs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
