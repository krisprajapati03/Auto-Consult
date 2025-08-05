import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedCardSmall = ({ vehicle }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/vehicle/${vehicle._id}`)}
      className="cursor-pointer relative group bg-darkBlack text-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition duration-300"
    >
      {/* Sold Out Ribbon */}
      {vehicle.isSold && (
        <div className="absolute z-10 top-16 -left-7 bg-red-600 text-white text-xs font-bold px-10 py-2 rotate-[-45deg] origin-top-left">
          Sold Out
        </div>
      )}

      {/* Image Section */}
      <div className="">
        <img
          src={vehicle.images?.[0]?.url}
          alt={vehicle.fullName}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-sm text-white px-2 py-0.5 rounded">
          <span className="mr-1">📷</span> {vehicle.images.length}
        </div>
      </div>

      {/* Text Section */}
      <div className="p-3">
        <h3 className="font-semibold text-base">{vehicle.fullName}</h3>
        <p className="text-lg font-bold text-white mt-1">
          ₹{vehicle.price.toLocaleString()}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 mt-1">
          <span className="bg-blazeOrange text-white px-2 py-0.5 rounded text-xs font-bold">
            {vehicle.year}
          </span>
          <span>{vehicle.mileage.toLocaleString()} miles</span>
          <span>{vehicle.transmission}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCardSmall;
