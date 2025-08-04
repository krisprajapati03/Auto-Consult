// src/pages/Login.jsx
import React, { useState } from 'react';
import api from "../services/api"; // ✅ Using your configured Axios instance
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(
        '/admin/auth/login',
        { email, password },
        { withCredentials: true }
      );
      
      // Optionally store login info
      // localStorage.setItem('admin', JSON.stringify(res.data));

      alert('Login successful');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lightGray">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 font-bold text-center">Admin Login</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border w-full p-2 rounded mb-4"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border w-full p-2 rounded mb-4"
        />
        
        <button type="submit" className="bg-darkBlue text-white w-full py-2 rounded">
          Login
        </button>

        <p className="text-sm mt-2 text-center">
          <a href="/forgot-password" className="text-blue-600">Forgot Password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
