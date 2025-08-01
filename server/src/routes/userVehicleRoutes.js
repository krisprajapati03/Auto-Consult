// /routes/userVehicleRoutes.js
import express from 'express';
import wrapAsync from '../utils/wrapAsync.js';
import {
  getAllVehiclesController,
  getVehicleByIdController,
  filterVehiclesController,
} from '../controllers/userVehicleController.js';

const router = express.Router();

router.get('/vehicles', wrapAsync(getAllVehiclesController));
router.get('/vehicles/filter', wrapAsync(filterVehiclesController));
router.get('/vehicles/:id', wrapAsync(getVehicleByIdController));

export default router;
