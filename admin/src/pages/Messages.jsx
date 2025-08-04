// src/pages/Messages.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch messages
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/messages", {
        withCredentials: true,
      });
      setMessages(res.data.data || []);
    } catch (err) {
      console.error("Message fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkRead = async (id) => {
    try {
      await axios.patch(
        `http://localhost:3000/api/messages/${id}/mark-read`,
        {},
        { withCredentials: true }
      );
      fetchMessages(); // refresh
    } catch (err) {
      console.error("Failed to mark as read:", err);
    }
  };

  const filtered = messages
    .filter((msg) => {
      const lower = search.toLowerCase();
      return (
        msg.name.toLowerCase().includes(lower) ||
        msg.email.toLowerCase().includes(lower) ||
        msg.phone.toLowerCase().includes(lower) ||
        msg.message.toLowerCase().includes(lower)
      );
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📨 User Messages</h1>

      <input
        type="text"
        placeholder="Search by name, email, phone, or message"
        className="mb-4 w-full p-3 border border-gray-300 rounded-lg shadow-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading messages...</p>
      ) : filtered.length === 0 ? (
        <p className="text-gray-500">No messages found.</p>
      ) : (
        <div className="space-y-4">
          {filtered.map((msg) => (
            <div
              key={msg._id}
              className={`p-4 rounded-xl shadow transition-all ${
                msg.isRead ? "bg-white" : "bg-yellow-50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-indigo-700 flex items-center gap-2">
                    <FaEnvelope /> {msg.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    📧 {msg.email} | 📞 {msg.phone}
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-xs text-gray-400">
                    {new Date(msg.createdAt).toLocaleString()}
                  </p>
                  {msg.isRead ? (
                    <span className="inline-flex items-center gap-1 text-green-600 text-xs">
                      <FaCheckCircle className="text-sm" /> Read
                    </span>
                  ) : (
                    <button
                      className="text-blue-600 text-sm underline"
                      onClick={() => handleMarkRead(msg._id)}
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
              </div>
              <p className="mt-2 text-gray-700">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;
