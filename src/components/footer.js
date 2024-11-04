import React from 'react';
import LogoFooter from '../assets/Logo-color.png';
import { Link } from 'react-router-dom';
import LogoAppleStore from '../assets/appstore.png';
import LogoGooglePlay from '../assets/playstore.png';

const Footer = () => {
  return (
    <footer className="bg-slate-800">
      <div className="ml-6 md:pt-4 pt-10">
        <img src={LogoFooter} className="w-auto md:h-8 md:ml-4 h-6 ml-5" alt="GrinEasy" />
      </div>

      <div className="flex flex-col md:flex-row md:justify-between mx-16 mt-10 md:pb-7 font-inter text-selago">
        <div>
          <span className="font-bold text-xl">A propos</span>
          <ul>
            <li>Contact</li>
            <li><Link to="/apropos">Notre équipe</Link></li>
            <li>Conditions générale d'utilisation</li>
          </ul>
        </div>
        {/* <div className="mt-6 md:mt-0">
          <span className="font-bold text-xl">Nos offres et services</span>
          <ul>
            <li>Forfait TPE</li>
            <li>Forfait PME</li>
            <li>Forfait GE</li>
            <li>Bonus</li>
            <li>Evenements/Team Building</li>
            <li>Formation</li>
            <li>Tout nos services</li>
          </ul>
        </div> */}
        <div className="mt-6 md:mt-0">
          <span className="font-bold text-xl">Reseaux Sociaux</span>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/grin.easy/?igsh=MWFwd2s1NG94cjA1bg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            {/* <li className="my-3">
              <img src={LogoAppleStore} alt="AppleStore" />
            </li>
            <li className="pb-8">
              <img src={LogoGooglePlay} alt="PlayStore" />
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
