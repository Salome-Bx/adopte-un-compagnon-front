import React, { useState } from 'react';
import Button from './ButtonAction';
import Link from 'next/link';
import { useRouter } from 'next/router';


export const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
  <div>
    <header className="w-full bg-custom-purple p-3 px-14">
      <nav className="w-full flex flex-row">

        <Link href="/" className="logo w-1/4 text-white"><img src="img/logo/logo.svg" alt="logo Adopte un Compagnon" /></Link>

        <button onClick={toggleMenu} className="md:hidden">
            Menu
        </button>

        {isOpen && (


        
        <div className="menu">
            <div className="links items-center justify-end flex flex-row w-3/4 text-white">
                <ul className="flex flex-col space-y-4">
                        <li>
                        <Link href="/aPropos" className="flex mr-5 hover:underline">A propos</Link>  
                    </li>

                    <li>
                        <Link href="/animauxAdoption" className="flex mr-5 hover:text-custom-yellow">Compagnons à l'adoption</Link>
                    </li>

                    <li>
                        <Link href="/sos" className="flex mr-5 hover:text-custom-yellow">SOS</Link> 
                    </li>
                    

                    <li>
                        <Link href="/associations" className="flex mr-5 hover:text-custom-yellow">Les associations</Link>
                    </li>

                    <li>
                        <Link href="/inscription" className="border border-white text-white w-fit hover:text-custom-purple  hover:bg-white hover:borderwhite px-4 py-1 mr-5">Espace association</Link>
                    </li>
                </ul>
            </div>

        </div>
        )};
         
    
        </nav>
    
    </header>
  </div>

)}





