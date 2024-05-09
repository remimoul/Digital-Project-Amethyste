import React from 'react';
import Navbar from './navbar.js';
import IMG90 from '../assets/90.png';
import CustomCard from './customcard.js';

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-full">
        <div className="mx-4 md:mx-56">
          <div className="flex flex-col md:flex-row  items-center">
            <img src={IMG90} className="w-full md:w-auto" alt="90" />
            <div className="flex flex-col mb-60 mr-0 md:mr-60">
              <p className="mb-6 font-bold font-inter text-4xl">
                S’accordent à dire que la santé mentale est la priorité pour 2024
              </p>
              <button className="bg-custom-purple py-2 px-2 rounded-lg font-inter w-full md:w-48">
                Lire le rapport d'étude
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center ml-0 md:ml-16 -mt-28">
            <CustomCard
              size="w-full md:w-1/5"
              titleColor="custom-color-text"
              title="20%"
              subtitle="Des arrêts de travail concernent des troubles anxieux et des syndromes dépressifs"
            />
            <CustomCard
              size="w-full md:w-1/5"
              titleColor="custom-color-text"
              title="1ère en France"
              subtitle="Qualité de Vie et les Conditions au Travail (QVCT) décroche la première place dans les attentes des salariés français."
            />
            <CustomCard
              size="w-full md:w-1/5"
              titleColor="custom-color-text"
              title="90%"
              subtitle="S'accordent à dire que la santé mentale est la priorité pour 2024"
            />
            <CustomCard
              size="w-full md:w-1/5"
              titleColor="custom-color-text"
              title="14%"
              subtitle="Des dépenses totales de l'Assurance Maladie sont en relation avec les maladies psychiatriques"
            />

            <div className="flex flex-col md:flex-row h-full md:h-48 items-center">
              <CustomCard
                size="w-full md:w-1/4"
                titleColor="custom-color-text-2"
                title="66%"
                subtitle="Des salariés souffrent d'un manque d'équilibre entre vie professionnelle et personnelle."
              />
              <CustomCard
                size="w-full md:w-1/4"
                titleColor="custom-color-text-3"
                title="68%"
                subtitle="Des salariés souffrent de manque de considération de leur hiérarchie."
              />
              <div className="flex flex-col w-full md:w-3/5 mb-28 md:mt-28">
                <p className="font-bold font-inter text-2xl mb-4 ">Les facteurs de souffrance au travail</p>
                <p className="font-inter">
                  Ce n’est pas tant leur métier que les conditions dans lesquelles ils l’exercent qui affectent le moral
                  des salariés.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row mt-16">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="font-bold font-inter text-2xl mb-4 ">
                  Le bien-être mental est un enjeu de société, touchant toutes les générations et tous les métiers
                </p>
                <p className="font-inter">
                  La préoccupation croissante autour du bien-être mental ne concerne plus uniquement les 18 à 24 ans :
                  l’immense majorité des français est concernée.
                </p>
              </div>

              <div className="w-full flex flex-col md:flex flex-row mt-16">
                {/* <div className="w-full flex flex-col md:flex-row mt-16"> */}
                <div className="flex flex-col md:flex-row justify-end">
                  <CustomCard
                    size="w-full md:w-1/3"
                    titleColor="custom-color-text-2"
                    title="35 à 45%"
                    subtitle="Des cas d’absentéisme sont causé par le mal être au travail"
                  />
                  <CustomCard
                    size="w-full md:w-1/3"
                    titleColor="custom-color-text-3"
                    title="7%"
                    subtitle="des salariés, seulement,osent parler de leurs difficultés psychologiques à leurs supérieurs et responsables des ressources humaines."
                  />
                </div>

                <div className="flex flex-col md:flex-row justify-end">
                  <CustomCard
                    size="w-full md:w-1/3"
                    titleColor="custom-color-text"
                    title="3/4"
                    subtitle="Des salariés sont concernés par des troubles anxieux et des syndromes dépressifs"
                  />
                  <CustomCard
                    size="w-full md:w-1/3"
                    titleColor="custom-color-text-2"
                    title="1ère place"
                    subtitle="La Qualité de Vie et les Conditions au Travail (QVCT) décroche la première place dans les attentes des salariés français. 90 % ont, en effet, déclaré que c’était une priorité"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
