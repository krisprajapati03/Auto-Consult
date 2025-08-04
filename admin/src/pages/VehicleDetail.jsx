import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/admin/vehicles/${id}`, { withCredentials: true })
      .then((res) => {
        const data = res.data.data;
        setVehicle(data);
        if (data.images.length > 0) {
          setSelectedImage(data.images[0]?.url || '');
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!vehicle) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Image Gallery */}
        <div>
          <img
            src={selectedImage}
            alt="Selected Vehicle"
            className="w-full h-80 object-cover rounded-lg border"
          />

          <div className="flex gap-2 mt-2 overflow-x-auto">
            {vehicle.images.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={`thumb-${i}`}
                onClick={() => setSelectedImage(img.url)}
                className={`w-24 h-16 object-cover rounded-md cursor-pointer border-2 ${
                  selectedImage === img.url ? 'border-orange-600' : 'border-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Vehicle Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{vehicle.fullName}</h1>
          <p className="text-xl font-semibold text-orange-600 mb-4">
            ₹{vehicle.price.toLocaleString()}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div><strong>Make:</strong> {vehicle.company?.name || '—'}</div>
            <div><strong>Model:</strong> {vehicle.model}</div>
            <div><strong>Variant:</strong> {vehicle.variant}</div>
            <div><strong>Color:</strong> {vehicle.color?.name || '—'}</div>
            <div><strong>Transmission:</strong> {vehicle.transmission}</div>
            <div><strong>Condition:</strong> {vehicle.condition}</div>
            <div><strong>Year:</strong> {vehicle.year}</div>
            <div><strong>Mileage:</strong> {vehicle.mileage} km</div>
            <div><strong>Fuel Type:</strong> {vehicle.fuelType}</div>
            <div><strong>Owners:</strong> {vehicle.numberOfOwners}</div>
            <div><strong>Doors:</strong> {vehicle.doors}</div>
            <div><strong>Drive Type:</strong> {vehicle.driveType}</div>
            <div><strong>Cylinder:</strong> {vehicle.cylinder}</div>
            <div><strong>Category:</strong> {vehicle.category?.name || '—'}</div>
            <div className="col-span-2">
              <strong>Features:</strong>{' '}
              {vehicle.features?.length > 0 ? vehicle.features.map(f => f.name).join(', ') : '—'}
            </div>
            <div className="col-span-2">
              <strong>Safety:</strong>{' '}
              {vehicle.safetyFeatures?.length > 0
                ? vehicle.safetyFeatures.map(s => s.name).join(', ')
                : '—'}
            </div>
          </div>

          <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
