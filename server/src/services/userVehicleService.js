// /services/userVehicleService.js
import * as userVehicleDao from '../dao/userVehicleDao.js';

export const getAllVehicles = async () => {
  return await userVehicleDao.getAllVehicles();
};

export const getVehicleById = async (id) => {
  return await userVehicleDao.getVehicleById(id);
};

export const filterVehicles = async (filters) => {
  return await userVehicleDao.filterVehicles(filters);
};
