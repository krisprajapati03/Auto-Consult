import React, { useState } from "react";
import FilterBar from "../../components/user/FilterBar";
import SearchBar from "../../components/user/SearchBar";
import SortViewToggle from "../../components/user/SortViewToggle";
import CarCardGrid from "../../components/user/CarCardGrid";
import CarCardList from "../../components/user/CarCardList";
import Pagination from "../../components/user/Pagination";

// Mock data for now (replace with real API data later)
const mockCars = [...Array(24)].map((_, i) => ({
  id: i + 1,
  title: `Hyundai i20 Sportz ${2011 + i % 10}`,
  price: 150000 + i * 10000,
  year: 2011 + i % 10,
  mileage: 50000 + i * 500,
  transmission: i % 2 === 0 ? "Manual" : "Automatic",
  image: "/car-placeholder.png",
}));

const ManuItems = () => {
  const [keyword, setKeyword] = useState("");
  const [view, setView] = useState("grid"); // 'grid' | 'list'
  const [sort, setSort] = useState("Date Listed: Newest");
  const [page, setPage] = useState(1);
  const perPage = 10;

  // Filter state (placeholder)
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    mileage: "",
    driveType: "",
    fuelType: "",
    features: "",
    transmission: "",
    color: "",
    doors: "",
    safetyFeatures: "",
    cylinders: "",
    minYear: "",
    maxYear: "",
    vin: ""
  });

  // Simulate filter + search
  const filteredCars = mockCars.filter(car =>
    car.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const pageCars = filteredCars.slice((page - 1) * perPage, page * perPage);

  // Reset all filters
  const handleClearFilters = () => {
    setFilters({
      make: "", model: "", type: "", minPrice: "", maxPrice: "",
      mileage: "", driveType: "", fuelType: "", features: "",
      transmission: "", color: "", doors: "", safetyFeatures: "",
      cylinders: "", minYear: "", maxYear: "", vin: ""
    });
    setKeyword("");
  };

  return (
    <div className="bg-lightGray min-h-screen px-4 md:px-8 py-6 space-y-6">
      {/* FilterBar */}
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        onClear={handleClearFilters}
        onToggleLess={() => console.log("Toggle less clicked")}
        options={{}} // pass options from API
      />

      {/* Search + View + Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <SearchBar keyword={keyword} setKeyword={setKeyword} />
        <SortViewToggle view={view} setView={setView} sort={sort} setSort={setSort} />
      </div>

      {/* Total Results */}
      <div className="text-darkBlack text-lg font-semibold">
        {filteredCars.length} Results
      </div>

      {/* Grid/List */}
      {view === "grid" ? (
        <CarCardGrid cars={pageCars} />
      ) : (
        <CarCardList cars={pageCars} />
      )}

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(filteredCars.length / perPage)}
        onPageChange={setPage}
      />
    </div>
  );
};

export default ManuItems;
