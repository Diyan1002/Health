import React from "react";

export default function Newsletter() {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">

      <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>
      <p className="mb-6">Get latest journal alerts & publications</p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">

        <input
          type="email"
          placeholder="Enter email"
          className="px-4 py-3 rounded-md text-black w-full"
        />

        <button className="bg-black px-6 py-3 rounded-md">
          Subscribe
        </button>

      </div>

    </section>
  );
}