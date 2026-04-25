import React, { useState } from "react";
import { motion } from "framer-motion";

const validateForm = (formData) => {
  const errors = {};
  if (!formData.authorName) errors.authorName = "Author Name is required";
  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
    errors.email = "Valid email is required";
  if (!formData.manuscriptTitle)
    errors.manuscriptTitle = "Manuscript Title is required";
  if (!formData.manuscriptFile)
    errors.manuscriptFile = "Manuscript file is required";
  if (!formData.copyrightForm)
    errors.copyrightForm = "Copyright form is required";
  return errors;
};

export default function ManuscriptForm() {
  const [formData, setFormData] = useState({
    authorName: "",
    email: "",
    manuscriptTitle: "",
    manuscriptFile: null,
    copyrightForm: null,
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully!");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto backdrop-blur-xl bg-white/80 border border-gray-200 rounded-3xl shadow-2xl p-10"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Submit Manuscript
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Fill the form carefully and upload required documents
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Inputs */}
          {[
            { label: "Corresponding Author Name", name: "authorName", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Manuscript Title", name: "manuscriptTitle", type: "text" },
          ].map((field, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <label className="text-sm font-semibold text-gray-600 group-focus-within:text-blue-600 transition">
                {field.label} *
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
              />
              {errors[field.name] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field.name]}
                </p>
              )}
            </motion.div>
          ))}

          {/* File Uploads */}
          {[
            { name: "manuscriptFile", label: "Upload Manuscript (Word)" },
            { name: "copyrightForm", label: "Upload Copyright Form" },
          ].map((field, i) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <label className="text-sm font-semibold text-gray-600">
                {field.label} *
              </label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-blue-500 transition cursor-pointer">
                <input
                  type="file"
                  name={field.name}
                  onChange={handleChange}
                  className="w-full"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Drag & drop or click to upload
                </p>
              </div>
              {errors[field.name] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field.name]}
                </p>
              )}
            </motion.div>
          ))}

          {/* Textarea */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className="text-sm font-semibold text-gray-600">
              Comments for Editor
            </label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="4"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm"
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition"
          >
            Upload Manuscript
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
