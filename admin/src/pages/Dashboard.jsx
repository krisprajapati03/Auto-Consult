import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = [
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#ff4d4f",
  "#82ca9d",
];

const Dashboard = () => {
  const [vehicles, setVehicles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingVehicles, setLoadingVehicles] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/admin/vehicles", { withCredentials: true })
      .then((res) => {
        setVehicles(res.data.data || []);
        setLoadingVehicles(false);
      })
      .catch((err) => {
        console.error("Error fetching vehicles:", err);
        setLoadingVehicles(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/admin/categories", { withCredentials: true })
      .then((res) => {
        setCategories(res.data || []);
        setLoadingCategories(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoadingCategories(false);
      });
  }, []);

  const loading = loadingVehicles || loadingCategories;
  if (loading) return <div className="p-4">Loading Dashboard...</div>;

  const soldVehicles = vehicles.filter((v) => v.isSold);
  const totalProfit = soldVehicles.reduce((sum, v) => sum + (v.price || 0), 0);

  // Build category-wise counts
  const categoryCounts = categories.map((cat) => {
    const count = vehicles.filter(
      (v) => v.category?._id === cat._id
    ).length;
    return { name: cat.name, value: count };
  });

  const filteredCategoryCounts = categoryCounts.filter((cat) => cat.value > 0);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📊 Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-600">Total Vehicles</p>
          <h2 className="text-2xl font-bold text-indigo-600">{vehicles.length}</h2>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-600">Sold Vehicles</p>
          <h2 className="text-2xl font-bold text-green-600">{soldVehicles.length}</h2>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-600">Total Profit</p>
          <h2 className="text-2xl font-bold text-orange-600">
            ₹{totalProfit.toLocaleString()}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Category Distribution</h3>
          {filteredCategoryCounts.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={filteredCategoryCounts}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, value }) => `${name} (${value})`}
                  dataKey="value"
                >
                  {filteredCategoryCounts.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-500 mt-10">No category data available</p>
          )}
        </div>

        {/* Category Summary */}
        <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-2 gap-4">
          {filteredCategoryCounts.map((cat) => (
            <div key={cat.name} className="bg-gray-50 p-4 rounded-lg shadow">
              <p className="text-gray-600 text-sm">{cat.name}</p>
              <h2 className="text-xl font-bold text-indigo-500">{cat.value}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
