// /controllers/userVehicleController.js
import * as userVehicleService from '../services/userVehicleService.js';

// Get all available vehicles
export const getAllVehiclesController = async (req, res) => {
  const vehicles = await userVehicleService.getAllVehicles();
  res.status(200).json({ success: true, data: vehicles });
};

// Get vehicle by ID
export const getVehicleByIdController = async (req, res) => {
  const { id } = req.params;
  const vehicle = await userVehicleService.getVehicleById(id);
  if (!vehicle) {
    return res.status(404).json({ success: false, message: "Vehicle not found" });
  }
  res.status(200).json({ success: true, data: vehicle });
};

// Filter vehicles
export const filterVehiclesController = async (req, res) => {
  const filters = req.query;
  const filtered = await userVehicleService.filterVehicles(filters);
  res.status(200).json({ success: true, data: filtered });
};
