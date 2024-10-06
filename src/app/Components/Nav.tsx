import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import toast from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';

export const Nav = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setIsLoading(true);
  };

  

  return (
    <header className="w-full bg-custom-purple p-3 px-14">
      {/* --------Menu mobile avec modale-------- */}
      <nav className="lg:hidden xl:hidden 2xl:hidden justify-between">
        <div className="w-full flex flex-col">
          <div className="menu flex flex-row w-full">
            {/* Logo */}
            <Link href="/" className="logo w-full text-white">
              <img src="img/logo/logo.svg" alt="logo Adopte un Compagnon" />
            </Link>
            {/* Menu */}
            <div className="icones flex flex-row w-full justify-end mb-4">
              <button className="connexion text-white">
                <Link href="/connexion" onClick={handleLinkClick} className="items-center z-11 flex text-white hover:text-custom-yellow text-lg color-white mr-4">
                  <FaUser />
                </Link>
              </button>
              <button onClick={toggleMenu} className="items-center flex hover:text-custom-yellow text-white font-medium ">
                {menuOpen ? (
                  <FaTimes />
                ) : (
                  <span>Menu</span>
                )}
              </button>
            </div>
          </div>
          <div className="menuDeroulant flex flex-col ">
            {menuOpen && (
              <div className="menuMobile bg-custom-purple text-white w-full pb-4">
                <ul className="flex flex-col space-y-2 items-end">
                  <li><Link href="/aPropos" className="flex hover:text-custom-yellow mb-2">A propos</Link></li>
                  <li><Link href="/animauxAdoption" className="flex hover:text-custom-yellow mb-2">Compagnons à l'adoption</Link></li>
                  <li><Link href="/sos" className="flex hover:text-custom-yellow mb-2">SOS</Link></li>
                  <li><Link href="/associations" className="flex hover:text-custom-yellow mb-2">Les associations</Link></li>
                  <li><Link href="/inscription" onClick={handleLinkClick} className="text-custom-light-purple hover:underline mb-2">Espace Association</Link></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* --------Menu écrans larges-------- */}
      <nav className="w-full hidden lg:block">
        <div className="flex flex-row">
          {/* Logo */}
          <div className="flex logo w-1/4 text-white">
            <Link href="/">
              <img src="img/logo/logo.svg" alt="logo Adopte un Compagnon" />
            </Link>
          </div>
          {/* Menu */}
          <div className="menuDesktop justify-end flex flex-row w-3/4 text-white items-center">
            <ul className="flex flex-row space-x-5 justify-end">
              <li><Link href="/aPropos" className="text-white hover:text-custom-yellow">A propos</Link></li>
              <li><Link href="/animauxAdoption" className="text-white hover:text-custom-yellow">Compagnons à l'adoption</Link></li>
              <li><Link href="/sos" className="text-white hover:text-custom-yellow">SOS</Link></li>
              <li><Link href="/associations" className="text-white hover:text-custom-yellow">Les associations</Link></li>
              <li className="relative z-10">
                <button 
                  onClick={toggleMenu} 
                  className="flex flex-col items-start text-custom-light-purple hover:underline"
                >
                  Espace association
                </button>
                <ul 
                  className={`absolute top-full left-0 mt-2 flex flex-col space-y-1 bg-custom-purple text-white p-2 shadow-md px-10 transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <li>
                    <Link href="/connexion" onClick={handleLinkClick} className="text-sm hover:text-custom-light-purple">Connexion</Link>
                  </li>
                  <li>
                    <Link href="/inscription" onClick={handleLinkClick} className="text-sm hover:text-custom-light-purple">Inscription</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='flex justify-center w-full'>
        {isLoading && (
            <div className="flex w-1/5 h-fit items-center justify-center">      
              <Oval
              height={70}
              width={70}
              color="#9003ff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#410f72"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
      </div>)}

    </div>  
    </header>
  );
};
