// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token/header logic here if needed in future
// api.interceptors.request.use(config => {
//   const admin = JSON.parse(localStorage.getItem('admin'));
//   if (admin?.token) {
//     config.headers.Authorization = `Bearer ${admin.token}`;
//   }
//   return config;
// });

export default api;
