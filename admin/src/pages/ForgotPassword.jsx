// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/admin/forgot-password', { email });
      alert('Password reset instructions sent.');
    } catch (err) {
      console.error(err);
      alert('Error sending reset instructions');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lightGray">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 font-bold text-center">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border w-full p-2 rounded mb-4"
        />
        <button className="bg-darkBlue text-white w-full py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
