import React from "react";
import { FaTh, FaList } from "react-icons/fa";

const SortViewToggle = ({ view, setView, sort, setSort }) => {
  const sortOptions = [
    "Date Listed: Newest",
    "Date Listed: Oldest",
    "Price: Low to High",
    "Price: High to Low",
    "Year: Newest",
    "Year: Oldest",
    "Mileage: Low to High",
    "Mileage: High to Low"
  ];

  return (
    <div className="flex items-center gap-4">
      {/* Sort Dropdown */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-darkBlack">Sort by:</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-2 border border-darkGray rounded focus:outline-none focus:ring-2 focus:ring-blazeOrange"
        >
          {sortOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* View Toggle */}
      <div className="flex border border-darkGray rounded overflow-hidden">
        <button
          onClick={() => setView("grid")}
          className={`p-2 ${
            view === "grid"
              ? "bg-blazeOrange text-white"
              : "bg-white text-darkBlack hover:bg-gray-50"
          }`}
          title="Grid View"
        >
          <FaTh />
        </button>
        <button
          onClick={() => setView("list")}
          className={`p-2 ${
            view === "list"
              ? "bg-blazeOrange text-white"
              : "bg-white text-darkBlack hover:bg-gray-50"
          }`}
          title="List View"
        >
          <FaList />
        </button>
      </div>
    </div>
  );
};

export default SortViewToggle;