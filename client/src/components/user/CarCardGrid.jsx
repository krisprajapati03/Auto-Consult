import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const CarCard = ({ car, onFavorite, isFavorite = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={car.image || "/car-placeholder.png"}
          alt={car.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onFavorite && onFavorite(car.id)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-400" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-darkBlack mb-2 line-clamp-2">
          {car.title}
        </h3>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-2xl font-bold text-blazeOrange">
            ₹{car.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">{car.year}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
          <div>
            <span className="font-medium">Mileage:</span> {car.mileage.toLocaleString()} km
          </div>
          <div>
            <span className="font-medium">Transmission:</span> {car.transmission}
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-blazeOrange text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
            View Details
          </button>
          <button className="px-4 py-2 border border-blazeOrange text-blazeOrange rounded hover:bg-blazeOrange hover:text-white transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

const CarCardGrid = ({ cars }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarCardGrid;