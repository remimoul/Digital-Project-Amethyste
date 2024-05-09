import React from 'react';

const CustomCard = ({ title, subtitle, titleColor }) => {
  return (
    <div className="w-1/5 h-56 p-4 rounded-lg shadow-custom flex flex-col text-center mr-8 my-8">
      <p className={`font-bold font-inter text-3xl ${titleColor}`}>{title}</p>
      <p className="font-inter">{subtitle}</p>
    </div>
  );
};

export default CustomCard;
