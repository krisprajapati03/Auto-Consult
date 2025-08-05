import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HighlightText from './HighlightText';
import HoverLink from './HoverLink';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-lightGray/80 backdrop-blur-sm shadow-md rounded-3xl'
          : 'bg-lightGray shadow-md'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </Link>
          <div className="leading-tight">
            <h1 className="text-2xl font-semibold text-brandBlack">
              AUTO <HighlightText text="CONSULT" />
            </h1>
          </div>
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-8 font-medium text-darkBlack">
          <HoverLink to="/">Home</HoverLink>
          <HoverLink to="/about">About us</HoverLink>
          <HoverLink to="/inventory">Inventory</HoverLink>
          <HoverLink to="/loan-calculator">Loan Calculator</HoverLink>
          <HoverLink to="/contact">Contact Us</HoverLink>
          <HoverLink to="/menu-items">Menu Items</HoverLink>
          <HoverLink to="/sold">Sold</HoverLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;