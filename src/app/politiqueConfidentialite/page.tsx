"use client";
import React from 'react';
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";

export const pagePolitiqueConfidentialite = () => {
    return (
        <main className="w-full bg-white">
            <Nav></Nav>
            <div className="w-3/4 bg-white m-auto my-16 ">
               
            <h1 className="text-2xl mb-6">Politique de Confidentialité de "Adopte un Compagnon"</h1>
            <p><strong>Dernière mise à jour :</strong> 15 octobre 2024</p>
        
            <p>
                Chez "Adopte un Compagnon", nous nous engageons à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
            </p>
        
            <h2>1. Informations que nous collectons</h2>
            <p>
                Nous pouvons collecter les types d'informations suivants :
            </p>
            <ul>
                <li><strong>Informations personnelles</strong> : nom, adresse e-mail, numéro de téléphone, adresse postale, etc.</li>
                <li><strong>Informations sur les animaux</strong> : détails concernant les animaux que vous souhaitez adopter ou placer.</li>
                <li><strong>Informations d'utilisation</strong> : données sur votre utilisation de notre site, y compris votre adresse IP, le type de navigateur, les pages consultées, et les heures d'accès.</li>
            </ul>
        
            <h2>2. Utilisation de vos informations</h2>
            <p>
                Nous utilisons vos informations pour :
            </p>
            <ul>
                <li>Gérer vos demandes d'adoption ou de placement d'animaux.</li>
                <li>Améliorer notre site web et nos services.</li>
                <li>Communiquer avec vous concernant vos demandes et nos services.</li>
                <li>Vous envoyer des mises à jour et des informations pertinentes.</li>
            </ul>
        
            <h2>3. Partage de vos informations</h2>
            <p>
                Nous ne vendons pas vos informations personnelles à des tiers. Cependant, nous pouvons partager vos informations dans les cas suivants :
            </p>
            <ul>
                <li>Avec des partenaires et des services tiers nécessaires pour traiter vos demandes (par exemple, services de paiement).</li>
                <li>Si la loi l'exige ou pour protéger nos droits.</li>
            </ul>
        
            <h2>4. Sécurité de vos informations</h2>
            <p>
                Nous prenons des mesures raisonnables pour protéger vos informations personnelles contre tout accès, utilisation ou divulgation non autorisés. Toutefois, aucune méthode de transmission sur Internet ou de stockage électronique n'est entièrement sécurisée.
            </p>
        
            <h2>5. Vos droits</h2>
            <p>
                Vous avez le droit de :
            </p>
            <ul>
                <li>Accéder à vos informations personnelles que nous détenons.</li>
                <li>Demander la correction de vos informations inexactes.</li>
                <li>Demander la suppression de vos informations personnelles sous certaines conditions.</li>
            </ul>
        
            <h2>6. Cookies et technologies similaires</h2>
            <p>
                Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre site. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter votre capacité à utiliser certaines fonctionnalités de notre site.
            </p>
        
            <h2>7. Modifications de cette politique</h2>
            <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Nous vous informerons des modifications en publiant la nouvelle politique sur notre site. Nous vous encourageons à consulter régulièrement cette page pour rester informé.
            </p>
        
            <h2>8. Contact</h2>
            <p>
                Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :
            </p>
            <ul>
                <li><strong>Email</strong> : contact@adopteuncompagnon.fr</li>
                <li><strong>Adresse</strong> : Simplon Grenoble</li>
            </ul>
            
            </div>
            <Footer></Footer>
        </main>
    
        

      );
    };
export default pagePolitiqueConfidentialite;
