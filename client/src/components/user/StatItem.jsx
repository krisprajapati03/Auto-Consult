import React from "react";
import CountUp from "react-countup";

// Reusable component to show animated stats
const StatItem = ({ end, label, duration = 3, className = "" }) => {
  // Format numbers: 1500 → 1.5K+, 50 → 50+
  const formatNumber = (value) => {
    if (value >= 1000) {
      const num = value / 1000;
      return Number.isInteger(num) ? `${num}K+` : `${num.toFixed(1)}K+`;
    }
    return `${value}+`;
  };

  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-4xl font-bold text-darkBlack">
        <CountUp end={end} duration={duration} formattingFn={formatNumber} />
      </h2>
      <p className="text-blazeOrange mt-1">{label}</p>
    </div>
  );
};

export default StatItem;
