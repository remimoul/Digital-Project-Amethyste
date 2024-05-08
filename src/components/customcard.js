import React from 'react';

const CustomCard = ({ title, subtitle }) => {
  return (
    <div className="w-64 h-64 p-4 rounded-lg shadow-custom flex flex-col text-center mr-8">
      <p className="font-bold font-inter text-3xl custom-color-text">{title}</p>
      <p className="font-inter">{subtitle}</p>
    </div>
  );
};

export default CustomCard;
