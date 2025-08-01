// /dao/userVehicleDao.js
import Vehicle from '../models/vehicle.js';

// Fetch all vehicles (only available & not sold)
export const getAllVehicles = async () => {
  return await Vehicle.find({ available: true, isSold: false });
};

// Fetch vehicle by ID (only if available and not sold)
export const getVehicleById = async (id) => {
  return await Vehicle.findOne({ _id: id, available: true, isSold: false });
};

// Filter vehicles (e.g., by fuelType, brand, etc.)
export const filterVehicles = async (filters) => {
  const query = {
    ...filters,
    available: true,
    isSold: false,
  };
  return await Vehicle.find(query);
};
