import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedCardLarge = ({ vehicle }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/vehicle/${vehicle._id}`)}
      className="cursor-pointer relative group overflow-hidden rounded-lg shadow-md"
    >
      {/* Vehicle Image */}
      <div className="object-cover w-full h-[580px] transition-transform duration-300 group-hover:scale-105">
        <img
          src={vehicle.images?.[0]?.url}
          alt={vehicle.fullName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Camera count */}
      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-xs text-white px-2 py-0.5 rounded">
        <span className="mr-1">📷</span> {vehicle.images.length}
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 w-full bg-darkBlack bg-opacity-95 p-4 text-white">
        <h3 className="text-xl font-semibold mb-1">{vehicle.fullName}</h3>

        <div className="flex items-center flex-wrap gap-3 text-sm text-gray-300 mb-2">
          <span className="bg-blazeOrange text-white px-2 py-0.5 rounded text-xs font-bold">
            {vehicle.year}
          </span>
          <span>{vehicle.mileage.toLocaleString()} miles</span>
          <span>{vehicle.transmission}</span>
          <span>{vehicle.fuelType}</span>
        </div>

        <p className="text-2xl font-bold">₹{vehicle.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default FeaturedCardLarge;
