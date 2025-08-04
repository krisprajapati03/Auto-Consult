// src/pages/AdminDetails.jsx
import React from 'react';

const AdminDetails = () => {
  const admin = JSON.parse(localStorage.getItem('admin'));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Details</h1>
      {admin ? (
        <div className="space-y-2">
          <p><strong>Name:</strong> {admin.name}</p>
          <p><strong>Email:</strong> {admin.email}</p>
          <p><strong>Role:</strong> {admin.role}</p>
        </div>
      ) : (
        <p>No admin logged in</p>
      )}
    </div>
  );
};

export default AdminDetails;
