import React from 'react';
import LogoFooter from '../assets/Logo-color.png';
import { Link } from 'react-router-dom';
import LogoInstagram from '../assets/logo-instagram.svg';
import LogoLinkedIn from '../assets/logo-linkedin.svg';

const Footer = () => {
  return (
    <footer className="bg-slate-800">
      <div className="ml-6 md:pt-4 pt-10">
        <img src={LogoFooter} className="w-auto md:h-8 md:ml-4 h-6 ml-5" alt="GrinEasy" />
      </div>

      <div className="flex flex-col pb-5 md:flex-row md:justify-between mx-16 mt-10 md:pb-7 font-inter text-selago">
        <div>
          <ul>
            <li>
              <Link to="/contact">Contactez-nous</Link>
            </li>
            <li><Link to="/apropos">Notre équipe</Link></li>
            <li>
              <Link to="/cgu">Conditions générales d'utilisation</Link>
              </li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <ul className="flex flex-row space-x-4">
            <li>
              <a
                href="https://www.instagram.com/grin.easy/?igsh=MWFwd2s1NG94cjA1bg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LogoInstagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={LogoLinkedIn} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
