"use client";
import React from 'react';
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import Image from 'next/image';

const pagePolitique = () => {
    return (
        <main className="w-full bg-white">
            <Nav />
            <div className="w-1/2 bg-white m-auto my-16 ">
            
        
                <h1 className='text-custom-purple text-3xl font-bold pt-24 pb-20'>Bienvenue sur Adopte un Compagnon !</h1>
                <p>
                Adopte un Compagnon est bien plus qu'une simple plateforme. C'est un véritable engagement envers la cause animale et un espace dédié à ceux qui souhaitent faire une différence dans la vie des animaux.
                </p>

                <h2  className='text-custom-light-purple text-xl pb-4 pt-8'>Notre Mission</h2>
                <p>
                Nous avons pour mission de soutenir les associations qui œuvrent sans relâche pour le bien-être des animaux. Chaque jour, des milliers de chiens, chats, et autres compagnons à quatre pattes attendent une seconde chance. Grâce à notre plateforme, nous facilitons leur adoption et leur placement dans des foyers aimants.
                </p>

                <h2  className='text-custom-light-purple text-xl pb-4 pt-8'>Ce Que Nous Offrons</h2>
                <ul>
                <li><strong>Visibilité aux Associations</strong> : Nous offrons aux refuges et associations la possibilité de présenter leurs animaux à adopter, en leur donnant une visibilité accrue et en sensibilisant le public à leur cause.</li>
                <li><strong>Informations et Ressources</strong> : Nous partageons des conseils et des ressources utiles pour aider les futurs adoptants à prendre des décisions éclairées et responsables.</li>
                <li><strong>Événements et Campagnes</strong> : Nous organisons et promouvons des événements pour sensibiliser le public à la cause animale et encourager l’adoption.</li>
                </ul>

                <h2  className='text-custom-light-purple text-xl pb-4 pt-8'>Rejoignez-Nous</h2>
                <p>
                Nous croyons que chaque geste compte. Que vous soyez un futur adoptant, un bénévole ou un passionné de la cause animale, rejoignez notre communauté et ensemble, faisons une différence !
                </p>
                    
            </div>
            <Footer />
        </main>
    );
};

export default pagePolitique;