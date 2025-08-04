import dotenv from 'dotenv';
dotenv.config({ quiet: true });
import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from './src/config/db.js';

import fileUpload from 'express-fileupload';

import messageRoutes from "./src/routes/messageRoutes.js";

import adminAuthRoutes from './src/routes/adminAuthRoutes.js';
import adminVehicleRoutes from './src/routes/adminVehicleRoutes.js';
import userVehicleRoutes from './src/routes/userVehicleRoutes.js';
import categoryRoutes from './src/routes/category.js';
import colorRoutes from "./src/routes/color.routes.js";
import companyRoutes from "./src/routes/company.routes.js";
import featureRoutes from "./src/routes/feature.routes.js";
import safetyFeatureRoutes from "./src/routes/safetyFeature.routes.js";
import router from './src/routes/upload.routes.js';

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Middleware to enable CORS
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));

// Admin API routes..........//////////////////
app.use('/api/admin/auth', adminAuthRoutes);
// Admin Vehicle routes (protected)
app.use('/api/admin', adminVehicleRoutes);
app.use('/api/user', userVehicleRoutes);
app.use('/api/categories', categoryRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/colors", colorRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/features", featureRoutes);
app.use("/api/safety-features", safetyFeatureRoutes);
app.use('/api/upload', router);


const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ POS backend running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error("❌ Server not started due to DB connection failure.");
});