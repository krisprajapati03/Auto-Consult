// /dao/adminVehicleDao.js
import Vehicle from '../models/vehicle.js';

export const createVehicle = async (vehicleData) => {
  const vehicle = new Vehicle(vehicleData);
  return await vehicle.save();
};

export const getAllVehicles = async () => {
  return await Vehicle.find().sort({ addedDate: -1 });
};

export const getVehicleById = async (id) => {
  return await Vehicle.findById(id);
};

export const updateVehicleById = async (id, updateData) => {
  return await Vehicle.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteVehicleById = async (id) => {
  return await Vehicle.findByIdAndDelete(id);
};

export const markVehicleAsSold = async (id, soldStatus) => {
  return await Vehicle.findByIdAndUpdate(id, { isSold: soldStatus }, { new: true });
};

export const filterVehicles = async (filters) => {
  return await Vehicle.find(filters);
};
