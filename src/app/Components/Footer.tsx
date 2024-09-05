import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Footer = () => {
  return (
    <div className="w-full bg-custom-purple p-3 px-24 pt-10 border-t-2 border-custom-light-purple">
      <div className="flex flex-row justify-between">
        <div className="logo flex flex-col">
          <Link href="/"  className="logo text-white w-3/4 pb-5"><img src="img/logo/logo.svg" alt="logo Adopte un Compagnon" /></Link>
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
        </div>
              
        <div className="flex">
          <ul className="flex flex-col text-white">
            <p className="font-bold align-bottom">Plan du site</p>
              <Link href="/"  className="flex mr-5">A propos</Link>
              <Link href="/"  className="flex mr-5">Animaux à l'adoption</Link>
              <Link href="/"  className="flex mr-5">Les associations</Link>
              <Link href="/"  className="flex mr-5">SOS</Link>
          </ul>
        </div>
      </div>
      

      <div className="border-white border-t-2 my-4">
      </div>

      <div className="flex flex-row justify-between">
        <div className="copyright text-white text-sm">
          © 2024 Adopte un Compagnon. Tous droits réservés.
        </div>
        <div className="text-white text-sm flex flex-row">
          <Link href="/"  className="flex mr-5">Politique de confidentialité</Link>
          <Link href="/"  className="flex mr-5">Conditions d'utilisation</Link>
          <Link href="/"  className="flex mr-5">Paramètres des cookies</Link>
        </div>
      </div>
      
    </div>
    
  )
}

export default Footer