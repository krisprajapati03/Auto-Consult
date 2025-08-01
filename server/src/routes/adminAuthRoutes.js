// /routes/adminAuthRoutes.js
import express from 'express';
import { loginAdmin, registerAdmin } from '../controllers/adminAuthController.js';
import wrapAsync from '../utils/wrapAsync.js';

const router = express.Router();

router.post('/login', wrapAsync(loginAdmin));
router.post('/register', wrapAsync(registerAdmin)); // Optional

export default router;
