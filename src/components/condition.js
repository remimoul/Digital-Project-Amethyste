import React from 'react';
import Navbar from './navbar.js';
import Footer from './footer.js';

function Condition() {
  return (
    <>
      <Navbar />
      <div className="py-10 mx-12">
        <h1 className="text-center sm:text-5xl text-4xl text-primary font-bold mb-5 text-[#34B7C0]">
          Conditions Générales d'Utilisation (CGU) de GrinEasy
        </h1>

        <h2 className="text-primary text-center border-t pt-3 text-4xl mb-4 text-[#34B7C0]">1. Introduction</h2>
        <p>
          Bienvenue sur notre application, votre Happiness Officer numérique dédiée à la santé mentale en milieu
          professionnel. En utilisant notre service, vous acceptez les présentes conditions générales d'utilisation.
        </p>

        <h2 className="text-primary text-center border-t pt-5 mt-5 text-4xl mb-4 text-[#34B7C0]">2. Objet</h2>
        <p>
          L'application a pour objectif d'aider les entreprises à veiller au bien-être de leurs employés, à réduire le
          turnover et l'absentéisme, et à augmenter la productivité ainsi que le chiffre d'affaires.
        </p>

        <h2 className="text-primary text-center border-t pt-5 mt-5 text-4xl mb-4 text-[#34B7C0]">
          3. Acceptation des Conditions
        </h2>
        <p>
          En accédant ou en utilisant notre application, vous confirmez avoir lu, compris et accepté ces CGU. Si vous
          n'acceptez pas ces conditions, vous ne pouvez pas utiliser notre service.
        </p>

        <h2 className="text-primary text-center border-t pt-5 mt-5 text-4xl mb-4 text-[#34B7C0]">
          4. Accès au Service
        </h2>
        <p>
          L'accès à l'application est réservé aux entreprises et à leurs employés. Les utilisateurs doivent s’inscrire
          et fournir des informations précises pour accéder aux fonctionnalités du service.
        </p>

        <h2 className="text-primary text-center border-t pt-5 mt-5 text-4xl mb-4 text-[#34B7C0]">
          5. Obligations de l'Utilisateur
        </h2>
        <p>Les utilisateurs s'engagent à :</p>
        <ul className="list-disc list-inside">
          <li>Utiliser l'application conformément à la loi et aux présentes CGU.</li>
          <li>Ne pas partager leurs identifiants de connexion.</li>
          <li>Ne pas utiliser l'application à des fins nuisibles ou illégales.</li>
        </ul>

        <h2 className="text-primary text-center border-t pt-5 mt-5 text-4xl mb-4 text-[#34B7C0]">
          6. Propriété Intellectuelle
        </h2>
        <p>
          Tous les contenus, marques, logos et autres éléments présents dans l'application sont protégés par des droits
          de propriété intellectuelle. Toute reproduction ou exploitation non autorisée est interdite.
        </p>

        <h2 className="text-primary text-center border-t pt-5 mt-5 text-4xl mb-4 text-[#34B7C0]">
          7. Protection des Données Personnelles
        </h2>
        <p>
          Nous nous engageons à protéger vos données personnelles conformément à la réglementation en vigueur. Pour plus
          d'informations, veuillez consulter notre Politique de Confidentialité.
        </p>

        <h2 className="text-primary text-center border-t pt-5 mt-5 text-4xl mb-4 text-[#34B7C0]">
          8. Limitation de Responsabilité
        </h2>
        <p>
          Nous ne saurions être tenus responsables des dommages directs ou indirects résultant de l'utilisation de
          l'application, y compris, mais sans s'y limiter, la perte de données ou de profits.
        </p>

        <h2 className="text-primary text-center border-t pt-5 mt-5 text-4xl mb- text-[#34B7C0]">
          9. Modifications des CGU
        </h2>
        <p>
          Nous nous réservons le droit de modifier ces CGU à tout moment. Les utilisateurs seront informés des
          modifications par notification dans l'application.
        </p>

        <h2 className="text-primary text-center border-t pt-5 mt-5 text-4xl mb-4 text-[#34B7C0]">
          10. Droit Applicable
        </h2>
        <p>Les présentes CGU sont régies par la loi en vigueur dans le pays où l'entreprise est établie.</p>

        <h2 className="text-primary text-center border-t pt-5 mt-5 text-4xl mb-4 text-[#34B7C0]">11. Contact</h2>
        <p>
          Pour toute question concernant ces conditions, vous pouvez nous contacter à l'adresse suivante :
          [grineasyy@gmail.com].
        </p>
      </div>

      <Footer />
    </>
  );
}
export default Condition;
