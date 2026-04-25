import React from "react";
import profileImg from "../assets/dr.jpg"; // 🔁 replace with your image

export default function EditorialBoard() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="w-10 h-1 bg-blue-600 mx-auto mb-3"></div>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Editorial Board
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Led by international experts in Human, Veterinary, and One Health sciences.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-blue-100 mb-4">
            <img src={profileImg} alt="profile" className="w-full h-full object-cover" />
          </div>

          <h3 className="text-lg font-semibold text-gray-800">
            Dr. Muhammad Shuaib Khan
          </h3>
          <p className="text-blue-600 text-xs font-medium">
            EDITOR-IN-CHIEF
          </p>

          <div className="border-t my-4"></div>

          <div className="text-sm text-gray-600 space-y-1">
            <p>Associate Professor</p>
            <p>Department of Basic Veterinary Sciences</p>
            <p>Gomal University, D.I. Khan, Pakistan</p>
            <p className="text-blue-600">editor@journal.org</p>
            <p>ORCID: [Add ORCID]</p>
          </div>

          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700">
            Contact Editorial Office
          </button>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2 space-y-6">
          {/* About */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              About the Editor-in-Chief
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Dr. Muhammad Shuaib Khan leads Journal of Comparative Health and Sciences with a focus on advancing translational health sciences across human medicine, veterinary medicine, animal sciences, and public health.
            </p>
            <p className="text-sm text-gray-600">
              His research and academic work span basic veterinary sciences, with emphasis on comparative and One Health approaches to shared health challenges.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-blue-600 text-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Editorial Vision</h3>
            <p className="text-sm mb-4">
              "J. Comp. Health Sci. was founded to break silos between human and animal health research."
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 list-disc pl-4">
                <li>Cross-disciplinary collaboration</li>
                <li>Open access translation from bench to clinic</li>
              </ul>

              <ul className="space-y-2 list-disc pl-4">
                <li>High-quality submissions globally</li>
                <li>Ethical, transparent publishing</li>
              </ul>
            </div>
          </div>

          {/* Join Card */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-800 font-semibold mb-2">
              Join the Editorial Board
            </h3>
            <p className="text-sm text-gray-600">
              We are currently building an international editorial board. If you are interested in joining, please send your CV and research interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
