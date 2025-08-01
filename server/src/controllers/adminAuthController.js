// /controllers/authController.js

import jwt from 'jsonwebtoken';
import Admin from '../models/adminModel.js';

 
// Admin Registration (optional)
export const registerAdmin = async (req, res) => {
  const { email, password } = req.body;

  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) {
    return res.status(400).json({ success: false, message: 'Admin already exists' });
  }

  const newAdmin = await Admin.create({ email, password });

  res.status(201).json({
    success: true,
    message: 'Admin registered successfully',
    token: generateToken(newAdmin._id),
  });
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin || !(await admin.comparePassword(password))) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  // Set cookie
  res.cookie('adminToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // true for HTTPS
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(200).json({
    success: true,
    message: 'Login successful',
    token, // Also return for Postman or frontend JS (optional)
  });
};

export const logoutAdmin = (req, res) => {
  res.clearCookie('adminToken');
  res.status(200).json({ success: true, message: 'Logged out successfully' });
};
