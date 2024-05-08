import React from 'react';
import '../index.css';
import Logo from '../assets/Logo-color.png';

function Navbar() {
  return (
    <div className='bg-white p-4 shadow-md'>
    <nav className='flex items-center'>
      <img src={Logo} className="w-auto h-6 ml-4" alt="GrinEasy"/>
      <ul className='flex justify-end ml-auto items-center'>
        <li className='font-bold text-2xl ml-16 text-agir align-middle'>AGIR</li>
        <li className='font-bold text-md ml-10 text-event'>EVENEMENTS</li>
        <li className='font-bold text-md ml-10 text-grin'>ARTICLE</li>
        <li className='font-bold text-md ml-10 text-grin'>TEMOIGNAGE</li>
        <li className='font-bold text-md ml-10 text-grin mr-10'>S'ORIENTER</li>
      </ul>
    </nav>
    </div>

  );
}

export default Navbar;