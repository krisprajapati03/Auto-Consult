// /dao/adminVehicleDao.js
import Vehicle from '../models/vehicle.js';
import { deleteFromCloudinary } from '../utils/cloudinary.js';


export const createVehicle = async (vehicleData) => {
  const vehicle = new Vehicle(vehicleData);
  return await vehicle.save();
};

export const getAllVehicles = async () => {
  return await Vehicle.find()
    .sort({ addedDate: -1 })
    .populate("company", "name")
    .populate("category", "name")
    .populate("color", "name")
    .populate("features", "name")
    .populate("safetyFeatures", "name");
};

export const getVehicleById = async (id) => {
  return await Vehicle.findById(id)
    .populate("company", "name")
    .populate("category", "name")
    .populate("color", "name")
    .populate("features", "name")
    .populate("safetyFeatures", "name");
};


export const updateVehicleById = async (id, updateData) => {
  return await Vehicle.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteVehicleById = async (id) => {
  const vehicle = await Vehicle.findById(id);
  if (!vehicle) throw new Error("Vehicle not found");

  // 🔥 Delete each image from Cloudinary
  const deletePromises = vehicle.images.map((img) =>
    deleteFromCloudinary(img.public_id)
  );
  await Promise.all(deletePromises);

  // ✅ Delete from DB
  await Vehicle.findByIdAndDelete(id);
};

export const markVehicleAsSold = async (id, soldStatus) => {
  return await Vehicle.findByIdAndUpdate(id, { isSold: soldStatus }, { new: true });
};

export const filterVehicles = async (filters) => {
  return await Vehicle.find(filters);
};
