// src/components/ReusableForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const ReusableForm = ({ title, endpoint, multiple = false }) => {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(endpoint, { withCredentials: true });
      setItems(res.data || []);
    } catch (err) {
      console.error(`Error fetching ${title}:`, err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await axios.post(endpoint, { name }, { withCredentials: true });
      setName("");
      fetchData();
    } catch (err) {
      console.error(`Error creating ${title}:`, err);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Delete this item?");
    if (!confirm) return;

    try {
      await axios.delete(`${endpoint}/${id}`, { withCredentials: true });
      fetchData();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border p-2 rounded"
          placeholder={`Enter ${title} name`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item._id}
            className="flex justify-between items-center bg-gray-50 p-2 rounded border"
          >
            <span>{item.name}</span>
            <button
              onClick={() => handleDelete(item._id)}
              className="text-red-600 hover:underline text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReusableForm;
