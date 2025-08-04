import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Listings = () => {
  const [vehicles, setVehicles] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/admin/vehicles', { withCredentials: true })
      .then(res => setVehicles(res.data?.data || res.data))
      .catch(err => console.error('Vehicle Error:', err));

    axios.get('http://localhost:3000/api/categories', { withCredentials: true })
      .then(res => setCategories(res.data?.data || res.data))
      .catch(err => console.error('Category Error:', err));
  }, []);

  const groupByCompany = (vehiclesInCategory) => {
    const grouped = {};
    vehiclesInCategory.forEach(v => {
      const companyName = v.company?.name || 'Unknown';
      if (!grouped[companyName]) {
        grouped[companyName] = [];
      }
      grouped[companyName].push(v);
    });
    return grouped;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Listings</h1>
      {categories.map(cat => {
        const vehiclesInCategory = vehicles.filter(v => v.category?._id === cat._id);
        const companyGroups = groupByCompany(vehiclesInCategory);

        return (
          <div key={cat._id} className="mb-6 border-b pb-4">
            <h2 className="text-xl font-semibold mb-2 capitalize">{cat.name}s</h2>

            {Object.keys(companyGroups).length > 0 ? (
              Object.entries(companyGroups).map(([company, companyVehicles]) => (
                <div key={company} className="mb-1">
                  <h3 className="text-lg font-medium">{company} ({companyVehicles.length} vehicle{companyVehicles.length > 1 ? 's' : ''})</h3>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No {cat.name}s available.</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Listings;
