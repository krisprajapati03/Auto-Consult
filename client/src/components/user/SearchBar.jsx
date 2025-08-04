import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <div className="relative flex-1 max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search cars..."
        className="block w-full pl-10 pr-3 py-2 border border-darkGray rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blazeOrange focus:border-blazeOrange"
      />
    </div>
  );
};

export default SearchBar;