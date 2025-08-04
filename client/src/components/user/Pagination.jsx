import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5; // Number of page numbers to show
    const halfShow = Math.floor(showPages / 2);
    
    let start = Math.max(1, currentPage - halfShow);
    let end = Math.min(totalPages, start + showPages - 1);
    
    // Adjust start if we're near the end
    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-blazeOrange hover:bg-blazeOrange hover:text-white"
        } transition-colors`}
      >
        <FaChevronLeft />
      </button>

      {/* First page */}
      {pageNumbers[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-2 rounded text-blazeOrange hover:bg-blazeOrange hover:text-white transition-colors"
          >
            1
          </button>
          {pageNumbers[0] > 2 && (
            <span className="px-2 text-gray-500">...</span>
          )}
        </>
      )}

      {/* Page Numbers */}
      {pageNumbers.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded transition-colors ${
            page === currentPage
              ? "bg-blazeOrange text-white"
              : "text-blazeOrange hover:bg-blazeOrange hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last page */}
      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
            <span className="px-2 text-gray-500">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-2 rounded text-blazeOrange hover:bg-blazeOrange hover:text-white transition-colors"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-blazeOrange hover:bg-blazeOrange hover:text-white"
        } transition-colors`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;