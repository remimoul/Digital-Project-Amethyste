import React from 'react';
import Navbar from './navbar.js';
import Footer from './footer.js';
import Kenza from '../assets/kenza.png';
import Erika from '../assets/erika.png';
import Celine from '../assets/celine.png';
import Remi from '../assets/remi.png';
import Aymane from '../assets/aymane.png';

function About() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="flex flex-col md:mx-40 mx-5 self-stretch mt-12">
          <h1 className=" font-inter text-[35px] md:text-[50px] font-semibold leading-[40px] md:leading-[80px] tracking-tighter w-10/12">
            <span className="custom-color-text-3">GrinEasy c'est quoi ? </span>
          </h1>
          <p className="text-[#282830] font-inter text-lg font-normal mb-8 md:pb-8 mx-16 mt-4">
            Une application incarnant un <span className="custom-color-text-4">Happiness Officer</span> à part entière,
            dédiée à la santé mentale en milieu professionnel.<br></br>
            Nous offrons aux entreprises un outil complet pour veiller au bien-être de leurs employés et au maintien à
            long terme de celui-ci. <br></br>
            Notre promesse ? <br></br>Une <span className="custom-color-text-4">réduction</span> du turnover et de
            l’absentéisme. Une augmentation de la productivité et donc du chiffre d’affaire.
          </p>

          <h1 className="font-inter text-[35px] md:text-[50px] font-semibold leading-[40px] md:leading-[80px] tracking-tighter w-10/12 md:mb-4 mb-8">
            <span className="custom-color-text-4">L'équipe GrinEasy</span>
          </h1>

          <div className="flex flex-col">
            <div className="flex md:flex-row flex-col items-center mb-6">
              <img src={Kenza} alt="Kenza" className="w-64 h-64" />
              <p className="text-[#282830] font-inter text-lg font-normal md:pb-8 mx-16 mt-4 ">
                <span className="font-bold">Kenza</span>, Chef de projet & webmarketing
              </p>
            </div>
            <div className="flex md:flex-row flex-col items-center mb-6">
              <img src={Celine} alt="Celine" className="w-64 h-64" />
              <p className="text-[#282830] font-inter text-lg font-normal md:pb-8 mx-16 mt-4">
                <span className="font-bold">Céline</span>, Création Numérique
              </p>
            </div>
            <div className="flex md:flex-row flex-col items-center mb-6">
              <img src={Erika} alt="Erika" className="w-64 h-64" />
              <p className="text-[#282830] font-inter text-lg font-normal md:pb-8 mx-16 mt-4">
                <span className="font-bold">Erika</span>, E-Commerce
              </p>
            </div>
            <div className="flex md:flex-row flex-col items-center mb-6">
              <img src={Remi} alt="Remi" className="w-64 h-64" />
              <p className="text-[#282830] font-inter text-lg font-normal md:pb-8 mx-16 mt-4">
                <span className="font-bold">Rémi</span>, Développeur Web
              </p>
            </div>
            <div className="flex md:flex-row flex-col items-center mb-6">
              <img src={Aymane} alt="Aymane" className="w-64 h-64" />
              <p className="text-[#282830] font-inter text-lg font-normal md:pb-8 mx-16 mt-4">
                <span className="font-bold">Aymane</span>, Digital
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;
