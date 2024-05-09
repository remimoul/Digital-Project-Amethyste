import React from 'react';
import Navbar from './navbar.js';
import IMG90 from '../assets/90.png';
import CustomCard from './customcard.js';

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-full">
        <div className="mx-56">
          <div className="flex ml-auto items-center">
            <img src={IMG90} className="" alt="90" />
            <div className="flex flex-col mb-60 mr-60">
              <p className="mb-6 font-bold font-inter text-4xl">
                S’accordent à dire que la santé mentale est la priorité pour 2024
              </p>
              <button className="bg-custom-purple py-2 px-2 rounded-lg font-inter w-48">Lire le rapport d'étude</button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center ml-16 -mt-28">
            <CustomCard
              titleColor="custom-color-text"
              title="20%"
              subtitle="Des arrêts de travail concernent des troubles anxieux et des syndromes dépressifs"
            />
            <CustomCard
              titleColor="custom-color-text"
              title="1ère en France"
              subtitle="Qualité de Vie et les Conditions au Travail (QVCT) décroche la première place dans les attentes des salariés français."
            />
            <CustomCard
              titleColor="custom-color-text"
              title="90%"
              subtitle="S'accordent à dire que la santé mentale est la priorité pour 2024"
            />
            <CustomCard
              titleColor="custom-color-text"
              title="14%"
              subtitle="Des dépenses totales de l'Assurance Maladie sont en relation avec les maladies psychiatriques"
            />
            <CustomCard
              titleColor="custom-color-text-2"
              title="66%"
              subtitle="Des salariés souffrent d'un manque d'équilibre entre vie professionnelle et personnelle."
            />
            <CustomCard
              titleColor="custom-color-text-3"
              title="68%"
              subtitle="Des salariés souffrent de manque de considération de leur hiérarchie."
            />
            <div className='w-1/3 h-48 mr-20 ml-20'>
            <p className="font-bold font-inter text-2xl mb-4 ">
               Les facteurs de souffrance au travail
              </p>
              <p className="font-inter">
              Ce n’est pas tant leur métier que les conditions dans lesquelles ils
l’exercent qui affectent le moral des salariés.
  </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
