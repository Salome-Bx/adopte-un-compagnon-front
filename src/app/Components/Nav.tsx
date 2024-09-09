import React from 'react';
import Button from './Button';
import Link from 'next/link';
import { useRouter } from 'next/router';


export const Nav = () => (
  <div>
    <header className="w-full bg-custom-purple p-3 px-14">
      <nav className="w-full flex flex-row">

        <Link href="/" className="logo w-1/4 text-white"><img src="img/logo/logo.svg" alt="logo Adopte un Compagnon" /></Link>

        <div className="links items-center justify-end flex flex-row w-3/4 text-white">

          <Link href="/aPropos" className="flex mr-5 hover:underline">A propos</Link>

          <Link href="/animauxAdoption" className="flex mr-5 hover:text-custom-yellow">Compagnons à l'adoption</Link>

          <Link href="/sos" className="flex mr-5 hover:text-custom-yellow">SOS</Link>

          <Link href="/associations" className="flex mr-5 hover:text-custom-yellow">Les associations</Link>

          <Link href="/inscription" className="border border-white text-white w-fit hover:text-custom-purple  hover:bg-white hover:borderwhite px-4 py-1 mr-5">Espace association</Link>

          <Link href="/connexion"  className="bg-custom-light-purple border border-white text-white w-fit  px-4 py-1 mr-5 hover:text-custom-light-purple  hover:bg-white hover:borderwhite">Se connecter</Link>

        </div>

      </nav>
    </header>
  </div>


)

