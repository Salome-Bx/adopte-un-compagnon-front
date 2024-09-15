// import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';




export const Nav = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseOver = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
  
    setTimeout(() => {
      setShowSubmenu(false);
    }, 500); 
  };

  return (
    <header className="w-full bg-custom-purple p-3 px-14">

      {/* --------Menu mobile avec modale-------- */}
      <nav className="lg:hidden xl:hidden 2xl:hidden justify-between">
        <div className="w-full flex flex-col">

          <div className="menu flex flex-row w-full">
          {/* Logo */}
            <Link href="/" className="logo w-fit text-white">
              <img src="img/logo/logo.svg" alt="logo Adopte un Compagnon" />
            </Link>  
          

          {/* Menu */}
            <div className="icones flex flex-row w-full justify-end">
              <button className="connexion text-white">
                <Link href="/connexion" className="items-center z-11 flex text-custom-light-purple color-white mr-4">
                  <Image
                      src="/icones/user.png"
                      width={21}
                      height={24}
                      alt="Espace mon compte"
                  />
                </Link>
              </button>
              <button onClick={toggleMenu} className="items-center flex hover:text-custom-yellow text-white font-medium">
                Menu
              </button>
            </div>
        </div>

          
            
            <div className="menuDeroulant flex flex-col">
            {isOpen && (
              <div className="menuMobile bg-custom-purple text-white w-full pb-4">
                <ul className="flex flex-col space-y-2 items-end">
                  <li>
                    <Link href="/aPropos" className="flex hover:text-custom-yellow">A propos</Link>
                  </li>
                  <li>
                    <Link href="/animauxAdoption" className="flex hover:text-custom-yellow">Compagnons à l'adoption</Link>
                  </li>
                  <li>
                    <Link href="/sos" className="flex hover:text-custom-yellow">SOS</Link>
                  </li>
                  <li>
                    <Link href="/associations" className="flex hover:text-custom-yellow">Les associations</Link>
                  </li>
                  <li>
                    <Link href="/inscription" className=" text-custom-light-purple hover:underline">Inscription Association</Link>
                  </li>
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
              <img src="img/logo/logo.svg" alt="logo Adopte un Compagnon"/>
            </Link>  
          </div>
          {/* Menu */}
          <div className="menuDesktop justify-end flex flex-row w-3/4 text-white items-center">
            <ul className="flex flex-row space-x-5 justify-end">
              <li>
                <Link href="/aPropos" className="text-white hover:text-custom-yellow">A propos</Link>
              </li>
              <li>
                <Link href="/animauxAdoption" className="text-white hover:text-custom-yellow">Compagnons à l'adoption</Link>
              </li>
              <li>
                <Link href="/sos" className="text-white hover:text-custom-yellow">SOS</Link>
              </li>
              <li>
                <Link href="/associations" className="text-white hover:text-custom-yellow">Les associations</Link>
              </li>
              <li>
                <Link 
                  href=""
                  onMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  className="flex flex-col items-start text-custom-light-purple hover:underline relative z-10"
                >
                  Espace association
                  {showSubmenu && (
                    <ul className="absolute top-full left-0 mt-2 flex flex-col space-y-1 bg-custom-purple text-white p-2  shadow-md px-10">
                      <li>
                        <Link href="/connexion" className="text-sm hover:text-custom-light-purple">Connexion</Link>
                      </li>
                      <li>
                        <Link href="/inscription" className="text-sm hover:text-custom-light-purple">Inscription</Link>
                      </li>
                    </ul>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
      
    </header>
  );
};


