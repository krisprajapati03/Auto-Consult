import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeaturedCardSmall from '../../components/user/FeaturedCardSmall';

const Sold = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/user/vehicles/filter?isSold=true`)
      .then((res) => {
        setVehicles(res.data.data || []);
      })
      .catch((err) => console.error('Error fetching sold cars:', err));
  }, []);
  console.log(vehicles);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-darkBlack mb-6">Unsold Cars</h1>

      {vehicles.length === 0 ? (
        <p>No unsold cars found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <FeaturedCardSmall key={vehicle._id} vehicle={vehicle} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sold;
