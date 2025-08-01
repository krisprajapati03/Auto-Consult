// /controllers/adminVehicleController.js
import * as adminVehicleService from '../services/adminVehicleService.js';

// 🟢 Create new vehicle
export const createVehicleController = async (req, res) => {
  const vehicle = await adminVehicleService.createVehicle(req.body);
  res.status(201).json({
    success: true,
    message: "Vehicle created successfully",
    data: vehicle,
  });
};

// 📃 Get all vehicles
export const getAllVehiclesController = async (req, res) => {
  const vehicles = await adminVehicleService.getAllVehicles();
  res.status(200).json({
    success: true,
    data: vehicles,
  });
};

// 🔍 Get vehicle by ID
export const getVehicleByIdController = async (req, res) => {
  const { id } = req.params;
  const vehicle = await adminVehicleService.getVehicleById(id);
  if (!vehicle) {
    return res.status(404).json({ success: false, message: 'Vehicle not found' });
  }
  res.status(200).json({ success: true, data: vehicle });
};

// ✏️ Update vehicle
export const updateVehicleByIdController = async (req, res) => {
  const { id } = req.params;
  const updated = await adminVehicleService.updateVehicleById(id, req.body);
  res.status(200).json({
    success: true,
    message: "Vehicle updated successfully",
    data: updated,
  });
};

// ❌ Delete vehicle
export const deleteVehicleByIdController = async (req, res) => {
  const { id } = req.params;
  await adminVehicleService.deleteVehicleById(id);
  res.status(200).json({
    success: true,
    message: "Vehicle deleted successfully",
  });
};

// ✅ Mark vehicle as sold/unsold
export const markVehicleAsSoldController = async (req, res) => {
  const { id } = req.params;
  const { isSold } = req.body;
  const updated = await adminVehicleService.markAsSold(id, isSold);
  res.status(200).json({
    success: true,
    message: `Vehicle marked as ${isSold ? 'sold' : 'unsold'}`,
    data: updated,
  });
};

// 🔍 Filter vehicles (optional)
export const filterVehiclesController = async (req, res) => {
  const filters = req.query; // e.g., /filter?company=Honda&year=2020
  const filtered = await adminVehicleService.filterVehicles(filters);
  res.status(200).json({
    success: true,
    data: filtered,
  });
};
