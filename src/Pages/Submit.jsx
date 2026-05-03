import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const Submit = () => {
  const [formData, setFormData] = useState({
    authorName: "",
    email: "",
    phone: "",
    paperTitle: "",
    paperCategory: "",
    abstract: "",
  });

  const [paperFile, setPaperFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const allowedFileTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPaperFile(null);
      return;
    }

    if (!allowedFileTypes.includes(file.type)) {
      setIsError(true);
      setMessage("Only PDF, DOC, and DOCX files are allowed.");
      e.target.value = "";
      setPaperFile(null);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setIsError(true);
      setMessage("File size must be less than 10MB.");
      e.target.value = "";
      setPaperFile(null);
      return;
    }

    setIsError(false);
    setMessage("");
    setPaperFile(file);
  };

  const uploadPaperFile = async () => {
    if (!paperFile) {
      return {
        fileName: "",
        filePath: "",
      };
    }

    const fileExtension = paperFile.name.split(".").pop();

    const cleanFileName = paperFile.name
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9.-]/g, "");

    const filePath = `${Date.now()}-${crypto.randomUUID()}.${fileExtension}`;

    const { error } = await supabase.storage
      .from("journal-papers")
      .upload(filePath, paperFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      throw new Error(error.message);
    }

    return {
      fileName: cleanFileName,
      filePath,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      if (!formData.authorName || !formData.email || !formData.paperTitle) {
        throw new Error("Author name, email, and paper title are required.");
      }

      const uploadedFile = await uploadPaperFile();

      const { error } = await supabase.from("submissions").insert([
        {
          author_name: formData.authorName,
          email: formData.email,
          phone: formData.phone,
          paper_title: formData.paperTitle,
          paper_category: formData.paperCategory,
          abstract: formData.abstract,
          file_name: uploadedFile.fileName,
          file_path: uploadedFile.filePath,
          status: "Pending",
        },
      ]);

      if (error) {
        throw new Error(error.message);
      }

      setMessage("Paper submitted successfully.");
      setIsError(false);

      setFormData({
        authorName: "",
        email: "",
        phone: "",
        paperTitle: "",
        paperCategory: "",
        abstract: "",
      });

      setPaperFile(null);
      e.target.reset();
    } catch (error) {
      setIsError(true);
      setMessage(error.message || "Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Submit Your Paper
        </h1>

        <p className="text-gray-600 mt-2">
          Fill the form below to submit your research paper.
        </p>

        {message && (
          <div
            className={`mt-6 border px-4 py-3 rounded-xl ${
              isError
                ? "bg-red-50 border-red-200 text-red-700"
                : "bg-green-50 border-green-200 text-green-700"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            type="text"
            name="authorName"
            placeholder="Author Name"
            value={formData.authorName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="paperTitle"
            placeholder="Paper Title"
            value={formData.paperTitle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="paperCategory"
            placeholder="Paper Category"
            value={formData.paperCategory}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="abstract"
            placeholder="Abstract"
            value={formData.abstract}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:bg-blue-300"
          >
            {loading ? "Submitting..." : "Submit Paper"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Submit;