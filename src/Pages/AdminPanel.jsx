import React, { useState } from "react";
import { Download, Trash2, RefreshCw } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const AdminPanel = () => {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchSubmissions = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/api/admin/submissions`, {
        headers: {
          "x-admin-password": password,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Access denied");
      }

      setSubmissions(result.submissions);
      setIsLoggedIn(true);
    } catch (error) {
      setMessage(error.message);
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchSubmissions();
  };

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(
        `${API_URL}/api/admin/submissions/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-admin-password": password,
          },
          body: JSON.stringify({ status }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Status update failed");
      }

      setSubmissions((prev) =>
        prev.map((item) => (item._id === id ? result.submission : item))
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteSubmission = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this submission?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${API_URL}/api/admin/submissions/${id}`,
        {
          method: "DELETE",
          headers: {
            "x-admin-password": password,
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Delete failed");
      }

      setSubmissions((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      alert(error.message);
    }
  };

  if (!isLoggedIn) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-900">
            Admin Panel
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Enter admin password to view submissions.
          </p>

          {message && (
            <div className="mt-5 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
              {message}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:bg-blue-300"
            >
              {loading ? "Checking..." : "Login"}
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-blue-600 font-semibold uppercase text-sm">
              Journal Dashboard
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Paper Submissions
            </h1>
            <p className="text-gray-600 mt-2">
              Total submissions: {submissions.length}
            </p>
          </div>

          <button
            onClick={fetchSubmissions}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            <RefreshCw size={18} />
            Refresh
          </button>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="text-left px-5 py-4">#</th>
                  <th className="text-left px-5 py-4">Author</th>
                  <th className="text-left px-5 py-4">Email</th>
                  <th className="text-left px-5 py-4">Title</th>
                  <th className="text-left px-5 py-4">Category</th>
                  <th className="text-left px-5 py-4">Date</th>
                  <th className="text-left px-5 py-4">Status</th>
                  <th className="text-left px-5 py-4">File</th>
                  <th className="text-left px-5 py-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {submissions.length === 0 ? (
                  <tr>
                    <td
                      colSpan="9"
                      className="text-center px-5 py-10 text-gray-500"
                    >
                      No submissions found.
                    </td>
                  </tr>
                ) : (
                  submissions.map((item, index) => (
                    <tr
                      key={item._id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-5 py-4">{index + 1}</td>

                      <td className="px-5 py-4">
                        <div className="font-semibold text-gray-900">
                          {item.authorName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.phone || "No phone"}
                        </div>
                      </td>

                      <td className="px-5 py-4 text-gray-700">
                        {item.email}
                      </td>

                      <td className="px-5 py-4 max-w-xs">
                        <div className="font-medium text-gray-900">
                          {item.paperTitle}
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-2">
                          {item.abstract || "No abstract"}
                        </div>
                      </td>

                      <td className="px-5 py-4 text-gray-700">
                        {item.paperCategory || "N/A"}
                      </td>

                      <td className="px-5 py-4 text-gray-700">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>

                      <td className="px-5 py-4">
                        <select
                          value={item.status}
                          onChange={(e) =>
                            updateStatus(item._id, e.target.value)
                          }
                          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Under Review">Under Review</option>
                          <option value="Accepted">Accepted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>

                      <td className="px-5 py-4">
                        {item.fileUrl ? (
                          <a
                            href={`${API_URL}${item.fileUrl}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                          >
                            <Download size={16} />
                            Download
                          </a>
                        ) : (
                          <span className="text-gray-400">No file</span>
                        )}
                      </td>

                      <td className="px-5 py-4">
                        <button
                          onClick={() => deleteSubmission(item._id)}
                          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;