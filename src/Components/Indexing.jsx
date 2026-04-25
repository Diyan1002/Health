import React from "react";
import creativeCommonsIcon from "../assets/cc.png";
import localDatabasesIcon from "../assets/cc.png";

const IndexingGlobalPresence = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Indexing & Global Presence
        </h2>
        <p className="text-gray-500 mb-14 max-w-2xl mx-auto">
          Our platform is globally recognized and integrated with trusted
          indexing systems to ensure visibility and accessibility worldwide.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-100 group-hover:scale-110 transition">
              <img src={creativeCommonsIcon} alt="Creative Commons" className="h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Creative Commons
            </h3>
            <p className="text-gray-500">
              Open licensing ensures your work is shared, reused, and credited
              globally.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-purple-100 group-hover:scale-110 transition">
              <img src={localDatabasesIcon} alt="Local Databases" className="h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Local Databases
            </h3>
            <p className="text-gray-500">
              Indexed across regional databases to maximize reach and discovery.
            </p>
          </div>

        </div>
      </div>

      {/* Background Blur Effects */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default IndexingGlobalPresence;