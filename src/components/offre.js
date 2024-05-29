import React from 'react';
import Navbar from './navbar.js';
import Footer from './footer.js';

function Offre() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="flex flex-col justify-center items-center self-stretch mt-12">
          <h1 className="font-inter text-[35px] md:text-[68px] font-semibold leading-[40px] md:leading-[80px] tracking-tighter w-10/12">
            <span className="custom-color-text">Nos programmes </span>
          </h1>

          <p className="text-[#282830] font-inter text-lg font-normal md:py-8 mx-16 mt-4 ">
            <span className="font-bold">Notre offre </span>: Abonnement mensuel pour un accès de base à l’application.
            <br></br>
            <span className="font-bold">Inclus</span> : exercices de gestion du stress, journal de bord, notifications
            push, outils d’évaluation du bien-être, espaces de communication.
          </p>
          <p className="custom-color-text-4 font-bold font-inter text-lg md:pt-8 mx-16 mt-4 ">
            <span>Exemple</span> : Avec une TPE de 10 salarié, PME de 125 salarié et une GE de 5000 salarié<br></br>
          </p>
          <table className="table-auto mx-16">
            <thead>
              <tr>
                <th className="px-4 py-2">Taille de l'entreprise</th>
                <th className="px-4 py-2">Prix</th>
                <th className="px-4 py-2">Détail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">TPE</td>
                <td className="border px-4 py-2">50€/mois</td>
                <td className="border px-4 py-2">5€ x 10 employés</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">PME</td>
                <td className="border px-4 py-2">312,50€/mois</td>
                <td className="border px-4 py-2">2.5€ x 125 employés</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">GE</td>
                <td className="border px-4 py-2">1000€/mois</td>
                <td className="border px-4 py-2">0.20€ x 5000 employés</td>
              </tr>
            </tbody>
          </table>
          <span className="text-[#282830] font-inter text-lg font-normal md:pt-8 mx-16 mt-4 ">
            En d’autres termes, les prix sont accessibles à toutes tailles d’entreprises et dégressifs.
            <br></br>À ce “pack de base”, peuvent s’ajouter des extensions payantes pour les entreprises qui auraient
            besoin ou envie de bénéficier de services supplémentaires.
          </span>
          <h1 className="font-inter text-[35px] md:text-[68px] font-semibold leading-[40px] md:leading-[80px] tracking-tighter w-10/12 mt-20">
            <span className="custom-color-text">Services supplémentaires</span>
          </h1>
        </div>

        <div className="mx-16">
          <h2 className="text-[#282830] font-inter font-normal md:py-6  mt-4 ">
            <span className="custom-color-text-5 text-[32px] font-bold mb-4">Pack PARTY</span>
          </h2>

          <p className="font-inter text-lg mb-8">
            {' '}
            <span className=" font-bold">Tarif de base </span>: <span className="text-red-600 font-bold">800€</span> par
            événement.
          </p>
          <div className="md:mx-40 mx-6">
            <p className="font-inter text-lg">
              Ce tarif inclut l'organisation d'un team buildings ou d'un afterworks pour une durée de 2 à 3 heures,
              <br></br> avec des activités de groupe, des rafraîchissements et des collations pour un groupe d'environ
              20 à 50 personnes.<br></br>
              Des frais supplémentaires peuvent s'appliquer pour des groupes plus nombreux, des activités spéciales, des
              lieux de prestige ou des options de restauration haut de gamme.
            </p>
          </div>

          <h2 className="text-[#282830] font-inter  font-normal md:py-6  mt-4 ">
            <span className="custom-color-text-5 text-[32px] font-bold">Pack SELFCARE</span>
          </h2>

          <p className="font-inter text-lg mb-8">
            {' '}
            <span className=" font-bold">Tarif de base </span>: <span className="text-red-600 font-bold">1500€</span>{' '}
            par événement.
          </p>
          <div className="md:mx-40 mx-6">
            <p className="font-inter text-lg mb-20">
              Ce tarif inclut l'intervention d'un professionnel de la santé mentale (partenaire avec GRINEASY) au sein
              de l'entreprise cliente pour une session de consultation d'une demi-journée, comprenant des conseils
              personnalisés, des ateliers interactifs et des ressources pour les employés. Des frais supplémentaires
              peuvent s'appliquer pour des interventions plus longues, des programmes de formation sur mesure ou des
              suivis individuels.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Offre;
