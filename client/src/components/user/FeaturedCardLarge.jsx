import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedCardLarge = ({ vehicle }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/vehicle/${vehicle._id}`)}
      className="cursor-pointer relative group overflow-hidden rounded-md"
    >
      <img
        src={vehicle.images?.[0]?.url}
        alt={vehicle.fullName}
        className="w-full h-[460px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
      />

      <div className="absolute bottom-0 left-0 w-full bg-darkBlack bg-opacity-90 p-4 text-white">
        <h3 className="text-xl font-semibold">{vehicle.fullName}</h3>
        <div className="mt-2 flex items-center gap-4 text-sm text-gray-300">
          <span className="bg-blazeOrange text-white px-2 py-0.5 rounded text-xs font-bold">
            {vehicle.year}
          </span>
          <span>{vehicle.mileage.toLocaleString()} miles</span>
          <span>{vehicle.transmission}</span>
          <span>{vehicle.fuelType}</span>
        </div>
        <p className="text-2xl font-bold text-white mt-2">
          ₹{vehicle.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCardLarge;
