"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Footer = () => {
  return (
    <div className="flex w-full bg-custom-purple p-3 px-24 pt-10 border-t-2 border-custom-light-purple">

      {/* ----------footer mobile---------- */}
      <div className="footerMobile flex w-full text-sm flex-col lg:hidden xl:hidden 2xl:hidden">

        <div className="contactEtPlan w-full">
            <div className="logo flex">
              <Link href="/"  className="logo text-white w-3/4 pb-5"><img src="img/logo/logo.svg" alt="logo Adopte un Compagnon" /></Link>
            </div>
            <div className="contact flex flex-col text-white text-sm">
                <p className="font-bold">Contact :</p>
                <p>04 35 67 34 95</p>
                <p>contact@adopteuncompagnon.fr</p>
            </div>
            <div className="social-medias flex flex-row justify-start pt-4 align-bottom">
                 <Link href="/"  className="fb w-10 pb-2"><img src="img/icones/facebook.svg" alt="logo facebook" /></Link>
                  <Link href="/"  className="insta w-10 pb-2 pl-2"><img src="img/icones/insta.svg" alt="logo instagram" /></Link>
                  <Link href="/"  className="x w-10 pb-2 pl-2"><img src="img/icones/x.svg" alt="logo instagram" /></Link>
                  <Link href="/"  className="linkedin w-10 pb-2 pl-2"><img src="img/icones/linkedin.svg" alt="logo instagram" /></Link>
                  <Link href="/"  className="youtube w-10 pb-2 pl-2"><img src="img/icones/youtube.svg" alt="logo instagram" /></Link>
            </div>
            
                      
            <div className="plan flex">
              <ul className="flex flex-col text-white">
                <p className="font-bold align-bottom">Plan du site</p>
                   <Link href="/"  className="flex mr-5">A propos</Link>
                    <Link href="/"  className="flex mr-5">Animaux à l'adoption</Link>
                    <Link href="/"  className="flex mr-5">Les associations</Link>
                    <Link href="/"  className="flex mr-5">SOS</Link>
              </ul>
            </div>
        </div>

        <div className="border-white flex border-t-2 my-4">
        </div>

        <div className="flex flex-col">
          <div className="copyright text-white text-xs">
            © 2024 Adopte un Compagnon. Tous droits réservés.
          </div>
          <div className="text-white text-xs flex flex-col">
              <Link href="/"  className="flex mr-5">Politique de confidentialité</Link>
              <Link href="/"  className="flex mr-5">Conditions d'utilisation</Link>
              <Link href="/"  className="flex mr-5">Paramètres des cookies</Link>
          </div>
        </div>
      </div>        
    

      
      
      {/* ----------footer écrans larges---------- */}
      <div className="footerDesktop  w-full flex-row hidden lg:block justify-between">

        <div className="contactEtPlan flex justify-between">
          <div className="logo flex flex-col">
            <Link href="/"  className="logo text-white w-3/4 pb-5"><img src="img/logo/logo.svg" alt="logo Adopte un Compagnon" /></Link>
            <div className="contact flex flex-col text-white text-sm">
              <p className="font-bold">Contact :</p>
              <p>04 35 67 34 95</p>
              <p>contact@adopteuncompagnon.fr</p>
            </div>
            <div className="social-medias flex flex-row justify-start pt-4 items-center">
              <Link href="/"  className="fb w-10 pb-2"><img src="img/icones/facebook.svg" alt="logo facebook" /></Link>
              <Link href="/"  className="insta w-10 pb-2 pl-2"><img src="img/icones/insta.svg" alt="logo instagram" /></Link>
              <Link href="/"  className="x w-10 pb-2 pl-2"><img src="img/icones/x.svg" alt="logo instagram" /></Link>
              <Link href="/"  className="linkedin w-10 pb-2 pl-2"><img src="img/icones/linkedin.svg" alt="logo instagram" /></Link>
              <Link href="/"  className="youtube w-10 pb-2 pl-2"><img src="img/icones/youtube.svg" alt="logo instagram" /></Link>

            </div>
          </div>
              
          <div className="flex">
            <ul className="flex flex-col text-white">
              <p className="font-bold align-bottom">Plan du site</p>
                <Link href="/"  className="flex mr-5 hover:text-custom-light-violet">A propos</Link>
                <Link href="/animauxAdoption"  className="flex mr-5 hover:text-custom-light-violet">Animaux à l'adoption</Link>
                <Link href="/associations"  className="flex mr-5 hover:text-custom-light-violet">Les associations</Link>
                <Link href="/sos"  className="flex mr-5 hover:text-custom-light-violet">SOS</Link>
            </ul>
          </div>
        </div>

        <div className="border-white border-t-2 my-4">
        </div>

        <div className="flex flex-row w-full justify-between text-white text-xs ">
          <div className="flex w-fit">
            © 2024 Adopte un Compagnon. Tous droits réservés.
          </div>
          <div className="flex w-fit">
            <Link href="/politiqueConfidentialite"  className="flex mr-5 hover:text-custom-light-violet">Politique de confidentialité</Link>
            <Link href="/conditionsUtilisation"  className="flex mr-5 hover:text-custom-light-violet">Conditions d'utilisation</Link>
          </div>
        </div>
      </div>
    </div>
      
  )}

export default Footer