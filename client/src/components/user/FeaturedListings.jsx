import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FeaturedCardLarge from './FeaturedCardLarge';
import FeaturedCardSmall from './FeaturedCardSmall';

const FeaturedListings = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/user/vehicles')
      .then((res) => {
        const data = res.data.data;
        if (Array.isArray(data)) {
          const sorted = [...data].sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
          setVehicles(sorted.slice(0, 5));
        }
      })
      .catch((err) => console.error(err));
  }, []);
  if (!vehicles.length) return null;

  return (
    <div className="px-2 py-10 max-w-7xl mx-auto">
      <div className="mb-6">
        <p className="text-sm text-pink-500 font-semibold">Handy picked</p>
        <h2 className="text-3xl font-bold text-darkBlack -mt-1">Featured Listings</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <FeaturedCardLarge vehicle={vehicles[0]} />
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {vehicles.slice(1).map((v) => (
            <FeaturedCardSmall key={v._id} vehicle={v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;
