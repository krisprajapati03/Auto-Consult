import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-darkBlack h-screen w-48 p-4 text-lightGray">
      <nav className="flex flex-col space-y-4">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/listings">Listings</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;