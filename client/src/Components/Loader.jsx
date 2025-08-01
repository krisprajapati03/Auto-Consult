import React from 'react';

const Loader = ({ fullPage = false }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        fullPage ? 'min-h-screen' : 'h-20'
      } w-full`}
    >
      <div className="w-10 h-10 border-4 border-t-transparent border-blue-500 rounded-full animate-spin" />
    </div>
  );
};

export default Loader;