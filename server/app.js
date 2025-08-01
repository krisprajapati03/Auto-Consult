import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from './src/config/db.js';

import adminAuthRoutes from './src/routes/adminAuthRoutes.js';
import adminVehicleRoutes from './src/routes/adminVehicleRoutes.js';
import userVehicleRoutes from './src/routes/userVehicleRoutes.js';

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Middleware to enable CORS
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Admin API routes
app.use('/api/admin/auth', adminAuthRoutes);
// Admin Vehicle routes (protected)
app.use('/api/admin', adminVehicleRoutes);
app.use('/api/user', userVehicleRoutes);

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`✅ POS backend running at http://localhost:${PORT}`);
});