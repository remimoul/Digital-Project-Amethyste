import React, { useState } from 'react';
import '../index.css';
import Logo from '../assets/Logo-color.png';
import { slide as Menu } from 'react-burger-menu';
import { FaBars, FaTimes } from 'react-icons/fa';
import Vector from '../assets/Vector.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [OpenBurger, setOpenBurger] = useState(false);

  const burgerStateChange = (state) => {
    setOpenBurger(state.isOpen);
  };
  return (
    <div className="bg-white p-4 shadow-md sticky top-0 z-50">
      <nav className="flex md:items-center justify-between">
        <Link to="/">
        <img src={Logo} className="w-auto md:h-6 md:ml-4 h-8 ml-5" alt="GrinEasy" />
        </Link>
        <div className="md:hidden">
          <Menu
            right
            isOpen={OpenBurger}
            onStateChange={burgerStateChange}
            className="md:hidden"
            customBurgerIcon={OpenBurger ? <FaTimes size={30} /> : <FaBars size={30} />}
          >
            <ul className="flex flex-col ml-auto items-center text-[#464754] font-poppins text-base font-semibold">
              {/* <li className="font-bold text-5xl  text-agir align-middle">AGIR</li>
              <li className="font-bold text-4xl mt-6 text-event">EVENEMENTS</li>
              <li className="font-bold text-4xl mt-6 text-grin">ARTICLE</li>
              <li className="font-bold text-4xl mt-6 text-grin">TEMOIGNAGE</li>
              <li className="font-bold text-4xl mt-6 text-grin mr-10">S'ORIENTER</li> */}
              <li className="font-bold text-3xl flex">A propos <img className="ml-4" src={Vector} alt="vector" /></li>
              <li className="font-bold text-3xl mt-6 flex">L'offre<img className="ml-4" src={Vector} alt="vector" /></li>
              <li className="font-bold text-3xl mt-6 flex">Contact<img className="ml-4" src={Vector} alt="vector" /></li>
              <li className="mr-16 bg-[#34B7C0] flex p-[11px] justify-center items-center space-x-2.5 rounded-3xl text-white mt-10">Télécharger l'app</li>
            </ul>
          </Menu>
        </div>
        {/* <ul className="hidden md:flex justify-end ml-auto items-center">
          <li className="font-bold text-2xl ml-16 text-agir align-middle">AGIR</li>
          <li className="font-bold text-md ml-10 text-event">EVENEMENTS</li>
          <li className="font-bold text-md ml-10 text-grin">ARTICLE</li>
          <li className="font-bold text-md ml-10 text-grin">TEMOIGNAGE</li>
          <li className="font-bold text-md ml-10 text-grin mr-10">S'ORIENTER</li>
        </ul> */}
        <ul className="hidden md:flex text-center text-[#464754] font-poppins text-base font-semibold">
          <li className="flex items-center ml-8 ">
            <Link to="/apropos">
            A propos </Link><img className="ml-4" src={Vector} alt="vector" />
            
          </li>

          <li className="flex items-center ml-8">
            <Link to="/offre">L'offre</Link> 
             <img className="ml-4" src={Vector} alt="vector" />
          </li>
          <li className="flex items-center ml-8 mr-24">
            <Link to="/contact">Contact</Link>
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
