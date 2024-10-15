"use client";
import React from 'react';
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";



const pageConditionsUtilisation = () => {
  return (
    <main className="w-full bg-white">
        <Nav></Nav>
        <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Conditions d'Utilisation de "Adopte un Compagnon"</h1>
        <p className="mb-4"><strong>Dernière mise à jour :</strong> 15 octobre 2024</p>

        <p className="mb-4">
            Bienvenue sur "Adopte un Compagnon". En utilisant notre site web, vous acceptez de respecter et d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptation des Conditions</h2>
        <p className="mb-4">
            En accédant ou en utilisant notre site, vous confirmez que vous avez lu, compris et accepté ces conditions d'utilisation.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Modifications des Conditions</h2>
        <p className="mb-4">
            Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront publiées sur cette page. Votre utilisation continue du site après toute modification constitue votre acceptation des nouvelles conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Utilisation du Site</h2>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Âge Minimum</strong> : Vous devez avoir au moins 18 ans pour utiliser ce site. Si vous êtes mineur, vous devez obtenir l'accord d'un parent ou d'un tuteur.</li>
            <li><strong>Utilisation Autorisée</strong> : Vous vous engagez à utiliser notre site uniquement à des fins légales et d'une manière qui ne porte pas atteinte aux droits de tiers.</li>
            <li><strong>Interdictions</strong> : Vous vous engagez à ne pas utiliser notre site pour des activités illégales, envoyer des informations fausses ou trompeuses, ou accéder à des parties non publiques du site sans autorisation.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Propriété Intellectuelle</h2>
        <p className="mb-4">
            Tous les contenus présents sur le site, y compris, mais sans s'y limiter, le texte, les graphiques, les logos, les images et les logiciels, sont la propriété de "Adopte un Compagnon" ou de ses partenaires et sont protégés par les lois sur la propriété intellectuelle.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Limitation de Responsabilité</h2>
        <p className="mb-4">
            "Adopte un Compagnon" ne sera pas responsable des dommages directs, indirects, accessoires ou consécutifs résultant de votre utilisation du site ou de votre incapacité à l'utiliser.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Liens Externes</h2>
        <p className="mb-4">
            Notre site peut contenir des liens vers d'autres sites web. Nous ne contrôlons pas ces sites et ne sommes pas responsables de leur contenu.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Protection des Données Personnelles</h2>
        <p className="mb-4">
            Nous respectons votre vie privée et nous engageons à protéger vos données personnelles. Consultez notre politique de confidentialité pour plus d'informations sur la manière dont nous collectons et utilisons vos informations.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Droit Applicable</h2>
        <p className="mb-4">
            Ces conditions d'utilisation sont régies par les lois de [votre pays]. Tout litige relatif à l'utilisation de ce site sera soumis à la juridiction des tribunaux de [votre juridiction].
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact</h2>
        <p className="mb-4">
            Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à :
        </p>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Email</strong> : contact@adopteuncompagnon.fr</li>
            <li><strong>Adresse</strong> : Simplon Grenoble</li>
        </ul>
        </div>
        <Footer></Footer>
    </main>
  );
};

export default pageConditionsUtilisation;
