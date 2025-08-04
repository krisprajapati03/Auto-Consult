import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3000/api/admin/vehicles', {
        withCredentials: true,
      });
      setVehicles(res.data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsSold = async (vehicleId) => {
    try {
      await axios.patch(
        `http://localhost:3000/api/admin/vehicles/${vehicleId}/sold`,
        { isSold: true },
        { withCredentials: true }
      );
      setVehicles(prev =>
        prev.map(v => (v._id === vehicleId ? { ...v, isSold: true } : v))
      );
    } catch (err) {
      console.error('Failed to mark as sold:', err);
    }
  };

  const handleDelete = async (vehicleId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this vehicle?");
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:3000/api/admin/vehicles/${vehicleId}`,
        { withCredentials: true }
      );
      setVehicles(prev => prev.filter(v => v._id !== vehicleId));
    } catch (err) {
      console.error('Failed to delete vehicle:', err);
    }
  };

  return (
    <div className="p-4">
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map(vehicle => (
            <div
              key={vehicle._id}
              className="relative border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <Link to={`/vehicle/${vehicle._id}`}>
                <img
                  src={vehicle.images?.[0]?.url || "/placeholder.jpg"}
                  alt={vehicle.fullName}
                  className="w-full h-48 object-cover"
                />
              </Link>

              {vehicle.isSold && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded shadow">
                  SOLD
                </span>
              )}

              <div className="p-4">
                <h2 className="text-lg font-bold">{vehicle.fullName}</h2>
                <p className="text-sm text-gray-500">
                  {vehicle.year} • {vehicle.transmission} • {vehicle.fuelType}
                </p>
                <p className="text-xl font-semibold text-orange-600 mt-2">
                  ₹{vehicle.price.toLocaleString()}
                </p>

                <div className="mt-3 flex gap-2">
                  {!vehicle.isSold ? (
                    <button
                      onClick={() => handleMarkAsSold(vehicle._id)}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition text-sm"
                    >
                      Mark as Sold
                    </button>
                  ) : (
                    <p className="text-sm text-red-600 font-semibold">Sold</p>
                  )}

                  <button
                    onClick={() => handleDelete(vehicle._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleList;