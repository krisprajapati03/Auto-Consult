// /middleware/authMiddleware.js

import jwt from 'jsonwebtoken';
import Admin from '../models/adminModel.js';

const protectAdmin = async (req, res, next) => {
  let token;

  // Priority 1: Bearer token from header (Postman or frontend)
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  // Priority 2: Cookie token (browser usage)
  else if (req.cookies?.adminToken) {
    token = req.cookies.adminToken;
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token, not authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export default protectAdmin;
