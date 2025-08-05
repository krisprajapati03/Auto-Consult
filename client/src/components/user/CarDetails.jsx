// src/pages/CarDetails.jsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchVehicle = async () => {
      const res = await axios.get(`http://localhost:3000/api/user/vehicles/${id}`);
      setVehicle(res.data.data);
      setMainImage(res.data.data.images?.[0]?.url);
    };

    fetchVehicle();
  }, [id]);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? vehicle.images.length - 1 : prev - 1));
    setMainImage(vehicle.images[(currentImageIndex - 1 + vehicle.images.length) % vehicle.images.length]?.url);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === vehicle.images.length - 1 ? 0 : prev + 1));
    setMainImage(vehicle.images[(currentImageIndex + 1) % vehicle.images.length]?.url);
  };

  if (!vehicle) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-8 bg-[#FFFCF2] min-h-screen">
      {/* LEFT SIDE */}
      <div className="lg:w-2/3">
        {/* Main Image */}
        <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
          <img src={mainImage} alt="vehicle" className="w-full h-full object-cover" />

          {/* Prev/Next buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
          >
            ▶
          </button>

          {/* Image count */}
          <div className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
            {currentImageIndex + 1}/{vehicle.images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
          {vehicle.images.map((img, idx) => (
            <img
              key={idx}
              src={img.url}
              alt="thumb"
              className={`w-24 h-16 object-cover rounded cursor-pointer border ${
                currentImageIndex === idx ? 'border-orange-500' : 'border-transparent'
              }`}
              onClick={() => {
                setMainImage(img.url);
                setCurrentImageIndex(idx);
              }}
            />
          ))}
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#403D39] mb-4">Description</h2>
          <div className="space-y-2 text-[#252422] text-base leading-relaxed">
            <p>Company: {vehicle.brand?.name}</p>
            <p>Model: {vehicle.model?.name}</p>
            <p>Variant: {vehicle.variant?.name}</p>
            <p>Make Year: {vehicle.year}</p>
            <p>Fuel type: {vehicle.fuelType?.name}</p>
            <p>Transmission: {vehicle.transmission?.name}</p>
            <p>Condition: Used</p>
            <p>No. Of Owner: {vehicle.noOfOwner}</p>
            <p>Colour: {vehicle.color?.name}</p>
            <p>Price: ₹{vehicle.price.toLocaleString()}</p>
            <p>Kms: {vehicle.mileage.toLocaleString()} Genuine</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/3 lg:sticky lg:top-8 self-start">
        <h1 className="text-3xl font-bold text-[#252422] mb-2">{vehicle.fullName}</h1>
        <p className="text-[#403D39] mb-4">
          {vehicle.year} • {vehicle.mileage.toLocaleString()} miles • {vehicle.type} •{' '}
          {vehicle.fuelType?.name}
        </p>

        <div className="text-4xl font-bold text-orange-600 mb-4">
          ₹{vehicle.price.toLocaleString()}
        </div>

        <button className="border border-gray-400 text-[#252422] px-4 py-2 mb-6 rounded hover:bg-gray-200 w-full">
          + Add to Favorites
        </button>

        {/* Fields Box */}
        <div className="bg-[#f4f6fa] p-6 rounded shadow mb-6 space-y-3 text-[#252422]">
          <div className="flex justify-between">
            <span className="font-medium">Make:</span>
            <span>{vehicle.brand?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Model:</span>
            <span>{vehicle.model?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Color:</span>
            <span>{vehicle.color?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Transmission:</span>
            <span>{vehicle.transmission?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Condition:</span>
            <span>Used</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Year:</span>
            <span>{vehicle.year}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Mileage:</span>
            <span>{vehicle.mileage.toLocaleString()} miles</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Fuel Type:</span>
            <span>{vehicle.fuelType?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Offer Type:</span>
            <span>{vehicle.isSold ? 'Sold Out' : 'Available'}</span>
          </div>
        </div>

        {/* Send Message button */}
        <button
          onClick={() => navigate('/contact')}
          className="w-full bg-orange-600 text-white px-6 py-3 rounded text-lg font-medium hover:bg-orange-700 mb-4"
        >
          Send Message
        </button>

        {/* Offer ID */}
        <p className="text-center text-[#403D39] mb-4">Offer ID #{vehicle.offerId}</p>

        {/* Share buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Share
          </button>
          <button className="flex-1 bg-[#1DA1F2] text-white px-4 py-2 rounded hover:bg-[#0d8de1]">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
