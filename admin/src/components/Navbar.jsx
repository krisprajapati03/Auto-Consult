import React from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white flex justify-between items-center px-8 py-4 shadow-lg">
      <div className="text-2xl font-extrabold tracking-wide flex items-center gap-2">
        <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          A
        </span>
        AutoConsult <span className="text-blue-400">Admin</span>
      </div>

      <div className="space-x-4 flex items-center text-sm">
        <Link to="/add-product" className="hover:text-blue-400">Add Vehicle</Link>
        <Link to="/add-category" className="hover:text-blue-400">Add Category</Link>
        <Link to="/add-color" className="hover:text-blue-400">Add Color</Link>
        <Link to="/add-company" className="hover:text-blue-400">Add Company</Link>
        <Link to="/add-feature" className="hover:text-blue-400">Add Feature</Link>
        <Link to="/add-safety-feature" className="hover:text-blue-400">Add Safety Feature</Link>
        <Link to="/admin-details" className="hover:text-blue-400">Admin Details</Link>
        <Link to="/messages" className="hover:text-yellow-400 relative text-xl"><FaBell /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
