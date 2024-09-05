import React from 'react';
import Button from './Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Nav = () => {
  return (
    <div>
      <header className="w-full bg-custom-purple p-3 px-14">
        <nav className="w-full flex flex-row">

            <Link href="/"  className="logo w-1/4 text-white"><img src="img/logo/logo.svg" alt="logo Adopte un Compagnon" /></Link>
            
            <div className="links items-center justify-end flex flex-row w-3/4 text-white">

            <Link href="/"  className="flex mr-5">A propos</Link>

            <Link href="/"  className="flex mr-5">Compagnons à l'adoption</Link>

            <Link href="/"  className="border border-white text-white w-fit hover:text-custom-purple  hover:bg-white hover:borderwhite px-4 py-1 mr-5">S'inscrire</Link>
  
            <Link href="/connexionAsso"  className="bg-custom-light-purple border border-white text-white w-fit  px-4 py-1 mr-5 hover:text-custom-light-purple  hover:bg-white hover:borderwhite">Se connecter</Link>
             
            </div>
 
        </nav>
      </header>
    </div>


  )
}

