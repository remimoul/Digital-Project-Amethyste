import React, { useState } from 'react';
import '../index.css';
import Logo from '../assets/Logo-color.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import Vector from '../assets/Vector.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [OpenBurger, setOpenBurger] = useState(false);
  const toggleMenu = () => {
    setOpenBurger(!OpenBurger);
  };
  return (
    <div className="bg-white p-4 shadow-md sticky top-0 z-50 relative">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <img src={Logo} className="w-auto md:h-6 md:ml-4 h-8 ml-5" alt="GrinEasy" />
        </Link>
        
        <div className="md:hidden mt-1">
          <button onClick={toggleMenu} className="text-[#464754]">
            {OpenBurger ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
          {OpenBurger && (
            <ul className="w-full absolute top-full right-0 flex flex-col items-center text-[#464754] font-poppins text-base font-semibold bg-white shadow-md">
              <li className="font-bold text-3xl flex">
                <Link to="/apropos">A propos </Link>
                <img className="ml-4" src={Vector} alt="vector" />
              </li>
              <li className="font-bold text-3xl mt-6 flex">
                <Link to="/offre">L'offre</Link>
                <img className="ml-4" src={Vector} alt="vector" />
              </li>
              <li className="font-bold text-3xl mt-6 flex">
                Contact
                <img className="ml-4" src={Vector} alt="vector" />
              </li>
              <li className="mr-16 bg-[#34B7C0] flex p-[11px] justify-center items-center space-x-2.5 rounded-3xl text-white my-4 ml-14">
                Télécharger l'app
              </li>
            </ul>
          )}
        </div>
        <ul className="hidden md:flex text-center text-[#464754] font-poppins text-base font-semibold">
          <li className="flex items-center ml-8 ">
            <Link to="/apropos">A propos </Link>
            <img className="ml-4" src={Vector} alt="vector" />
          </li>

          <li className="flex items-center ml-8">
            <Link to="/offre">L'offre</Link>
            <img className="ml-4" src={Vector} alt="vector" />
          </li>
          <li className="flex items-center ml-8 mr-24">
            Contact
            <img className="ml-4" src={Vector} alt="vector" />
          </li>
          <li className="mr-16 bg-[#34B7C0] flex p-[11px] justify-center items-center space-x-2.5 rounded-3xl text-white">
            Télécharger l'app
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
