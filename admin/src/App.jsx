// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Listings from "./pages/Listings";
import AddProduct from "./pages/AddProduct";
import AdminDetails from "./pages/AdminDetails";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import VehicleDetail from "./pages/VehicleDetail";
import Messages from "./pages/Messages";
import AdminFormPage from "./pages/AdminFormPage"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* ✅ Protected Admin Routes */}
        <Route path="/" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="history" element={<History />} />
          <Route path="listings" element={<Listings />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="admin-details" element={<AdminDetails />} />
          <Route path="vehicle/:id" element={<VehicleDetail />} />
          <Route path="messages" element={<Messages />} />
          <Route path="add-category" element={<AdminFormPage />} />
          <Route path="add-color" element={<AdminFormPage />} />
          <Route path="add-company" element={<AdminFormPage />} />
          <Route path="add-feature" element={<AdminFormPage />} />
          <Route path="add-safety-feature" element={<AdminFormPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
