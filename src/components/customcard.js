import React from 'react';

const CustomCard = ({ title, subtitle, titleColor, size }) => {
  return (
    <div className={`${size} h-56 p-4 rounded-lg shadow-custom flex flex-col items-center justify-center text-center md:mr-8 my-8`}>
      <p className={`font-bold font-inter text-3xl ${titleColor}`}>{title}</p>
      <p className="font-inter">{subtitle}</p>
    </div>
  );
};

export default CustomCard;
