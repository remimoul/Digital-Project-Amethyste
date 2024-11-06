import React from 'react';

const CustomCard = ({ title, subtitle, titleColor, size }) => {
  return (
    <div
      className={`${size} h-56 p-4 rounded-lg shadow-xl border-2 flex flex-col items-center justify-center text-center md:mr-8 my-8`}
    >
      <p className={`font-bold font-inter text-xl ${titleColor}`}>{title}</p>
      <p className="font-inter">{subtitle}</p>
    </div>
  );
};

export default CustomCard;
