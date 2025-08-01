// /services/adminVehicleService.js
import * as adminVehicleDao from '../dao/adminVehicleDao.js';

// 👉 Utility to generate 6-digit offer ID
function generateOfferId() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// 🟢 CREATE Vehicle
export const createVehicle = async (vehicleData) => {
  vehicleData.offerId = generateOfferId();
  return await adminVehicleDao.createVehicle(vehicleData);
};

// 📃 READ All Vehicles
export const getAllVehicles = async () => {
  return await adminVehicleDao.getAllVehicles();
};

// 🔍 READ Single Vehicle
export const getVehicleById = async (id) => {
  return await adminVehicleDao.getVehicleById(id);
};

// ✏️ UPDATE Vehicle
export const updateVehicleById = async (id, updateData) => {
  return await adminVehicleDao.updateVehicleById(id, updateData);
};

// ❌ DELETE Vehicle
export const deleteVehicleById = async (id) => {
  return await adminVehicleDao.deleteVehicleById(id);
};

// ✅ Mark as Sold / Unsold
export const markAsSold = async (id, soldStatus) => {
  return await adminVehicleDao.markVehicleAsSold(id, soldStatus);
};

// 🔍 FILTER Vehicles by query
export const filterVehicles = async (filterData) => {
  return await adminVehicleDao.filterVehicles(filterData);
};
