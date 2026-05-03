import React, { useEffect, useState } from "react";
import { Download, Trash2, RefreshCw, LogOut } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

const AdminPanel = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [session, setSession] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [message, setMessage] = useState("");

  const handleLoginChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const checkSession = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
    setPageLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

      if (error) {
        throw new Error(error.message);
      }

      setSession(data.session);

      setLoginData({
        email: "",
        password: "",
      });
    } catch (error) {
      setMessage(error.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setSubmissions([]);
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    setMessage("");

    try {
      const { data, error } = await supabase
        .from("submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      setSubmissions(data || []);
    } catch (error) {
      setMessage(error.message || "Failed to fetch submissions.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (filePath) => {
    if (!filePath) return;

    const { data, error } = await supabase.storage
      .from("health")
      .createSignedUrl(filePath, 60);

    if (error) {
      alert(error.message);
      return;
    }

    window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  };

  const updateStatus = async (id, status) => {
    try {
      const { data, error } = await supabase
        .from("submissions")
        .update({ status })
        .eq("id", id)
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }

      setSubmissions((prev) =>
        prev.map((item) => (item.id === id ? data : item))
      );
    } catch (error) {
      alert(error.message || "Status update failed.");
    }
  };

  const deleteSubmission = async (item) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this submission?"
    );

    if (!confirmDelete) return;

    try {
      if (item.file_path) {
        const { error: storageError } = await supabase.storage
          .from("health")
          .remove([item.file_path]);

        if (storageError) {
          throw new Error(storageError.message);
        }
      }

      const { error } = await supabase
        .from("submissions")
        .delete()
        .eq("id", item.id);

      if (error) {
        throw new Error(error.message);
      }

      setSubmissions((prev) => prev.filter((sub) => sub.id !== item.id));
    } catch (error) {
      alert(error.message || "Delete failed.");
    }
  };

  useEffect(() => {
    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (session) {
      fetchSubmissions();
    }
  }, [session]);

  if (pageLoading) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <p className="text-gray-600">Loading admin panel...</p>
      </section>
    );
  }

  if (!session) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-900">
            Admin Panel
          </h1>

          <p className="text-gray-600 text-center mt-2">
            Login with your admin email and password.
          </p>

          {message && (
            <div className="mt-5 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
              {message}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Admin email"
              value={loginData.email}
              onChange={handleLoginChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Admin password"
              value={loginData.password}
              onChange={handleLoginChange}
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

            {message && (
              <p className="text-red-600 mt-2 font-medium">{message}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition disabled:bg-blue-300"
            >
              <RefreshCw size={18} />
              {loading ? "Refreshing..." : "Refresh"}
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-black transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
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
                      key={item.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-5 py-4">{index + 1}</td>

                      <td className="px-5 py-4">
                        <div className="font-semibold text-gray-900">
                          {item.author_name}
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
                          {item.paper_title}
                        </div>

                        <div className="text-sm text-gray-500 line-clamp-2">
                          {item.abstract || "No abstract"}
                        </div>
                      </td>

                      <td className="px-5 py-4 text-gray-700">
                        {item.paper_category || "N/A"}
                      </td>

                      <td className="px-5 py-4 text-gray-700">
                        {item.created_at
                          ? new Date(item.created_at).toLocaleDateString()
                          : "N/A"}
                      </td>

                      <td className="px-5 py-4">
                        <select
                          value={item.status}
                          onChange={(e) =>
                            updateStatus(item.id, e.target.value)
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
                        {item.file_path ? (
                          <button
                            onClick={() => handleDownload(item.file_path)}
                            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                          >
                            <Download size={16} />
                            Download
                          </button>
                        ) : (
                          <span className="text-gray-400">No file</span>
                        )}
                      </td>

                      <td className="px-5 py-4">
                        <button
                          onClick={() => deleteSubmission(item)}
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