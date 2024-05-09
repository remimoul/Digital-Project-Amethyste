import React, { useState } from 'react';
import '../index.css';
import Logo from '../assets/Logo-color.png';
import { slide as Menu } from 'react-burger-menu';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [OpenBurger, setOpenBurger] = useState(false);

  const burgerStateChange = (state) => {
    setOpenBurger(state.isOpen);
  };
  return (
    <div className="bg-white p-4 shadow-md sticky top-0 z-50">
      <nav className="flex md:items-center justify-between">
        <img src={Logo} className="w-auto md:h-6 md:ml-4 h-8 ml-5" alt="GrinEasy" />
        <div className="md:hidden">
          <Menu
            right
            isOpen={OpenBurger}
            onStateChange={burgerStateChange}
            className="md:hidden"
            customBurgerIcon={OpenBurger ? <FaTimes size={30} /> : <FaBars size={30} />}
          >
            <ul className="flex flex-col ml-auto items-center">
              <li className="font-bold text-5xl  text-agir align-middle">AGIR</li>
              <li className="font-bold text-4xl mt-6 text-event">EVENEMENTS</li>
              <li className="font-bold text-4xl mt-6 text-grin">ARTICLE</li>
              <li className="font-bold text-4xl mt-6 text-grin">TEMOIGNAGE</li>
              <li className="font-bold text-4xl mt-6 text-grin mr-10">S'ORIENTER</li>
            </ul>
          </Menu>
        </div>
        <ul className="hidden md:flex justify-end ml-auto items-center">
          <li className="font-bold text-2xl ml-16 text-agir align-middle">AGIR</li>
          <li className="font-bold text-md ml-10 text-event">EVENEMENTS</li>
          <li className="font-bold text-md ml-10 text-grin">ARTICLE</li>
          <li className="font-bold text-md ml-10 text-grin">TEMOIGNAGE</li>
          <li className="font-bold text-md ml-10 text-grin mr-10">S'ORIENTER</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
