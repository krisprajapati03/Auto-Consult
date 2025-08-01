import express from 'express';
import wrapAsync from '../utils/wrapAsync.js';
import {
  createVehicleController,
  getAllVehiclesController,
  getVehicleByIdController,
  updateVehicleByIdController,
  deleteVehicleByIdController,
  markVehicleAsSoldController,
  filterVehiclesController,
} from '../controllers/adminVehicleController.js';
import protectAdmin  from '../middleware/authMiddleware.js';


const router = express.Router();

router.use(protectAdmin);

router.post('/vehicles', wrapAsync(createVehicleController));
router.get('/vehicles', wrapAsync(getAllVehiclesController));
router.get('/vehicles/filter', wrapAsync(filterVehiclesController));
router.get('/vehicles/:id', wrapAsync(getVehicleByIdController));
router.put('/vehicles/:id', wrapAsync(updateVehicleByIdController));
router.delete('/vehicles/:id', wrapAsync(deleteVehicleByIdController));
router.patch('/vehicles/:id/sold', wrapAsync(markVehicleAsSoldController));

export default router;
