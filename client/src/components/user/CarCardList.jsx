import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const CarCardList = ({ cars }) => {
  return (
    <div className="space-y-4">
      {cars.map(car => (
        <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="relative md:w-80 h-48 md:h-auto">
              <img
                src={car.image || "/car-placeholder.png"}
                alt={car.title}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                <FaRegHeart className="text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-darkBlack mb-2">
                    {car.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                    <div>
                      <span className="font-medium">Year:</span> {car.year}
                    </div>
                    <div>
                      <span className="font-medium">Mileage:</span> {car.mileage.toLocaleString()} km
                    </div>
                    <div>
                      <span className="font-medium">Transmission:</span> {car.transmission}
                    </div>
                    <div>
                      <span className="font-medium">Fuel:</span> Petrol
                    </div>
                  </div>
                </div>

                <div className="md:ml-6 md:text-right">
                  <div className="text-3xl font-bold text-blazeOrange mb-4">
                    ₹{car.price.toLocaleString()}
                  </div>
                  
                  <div className="flex md:flex-col gap-2">
                    <button className="flex-1 md:w-32 bg-blazeOrange text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 md:w-32 px-4 py-2 border border-blazeOrange text-blazeOrange rounded hover:bg-blazeOrange hover:text-white transition-colors">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCardList;