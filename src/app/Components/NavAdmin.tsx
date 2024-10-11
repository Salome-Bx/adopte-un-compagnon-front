"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { petService } from '../Services/pet';
import { userService } from '../Services/user';
import { loggedService } from '../Services/logged';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';



export const NavAdmin = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  

  const handeLogout = async () => {
    setIsLoading(true);
    try {
    const response = await loggedService.logout();
    localStorage.removeItem('user');
    } catch (error) {
    console.error("Erreur pendant la déconnexion :", error);
    } 
    finally {
      setIsLoading(false);
    }
};

if (isLoading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Oval
        height={80}
        width={80}
        color="#FF8DDC"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#333333"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
 

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
                    <Link href="/accueilAsso" className="flex hover:text-custom-yellow">Les associations</Link>
                  </li>
                  <li>
                    <Link href="/" className="flex hover:text-custom-yellow">Se déconnecter</Link>
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
            <div className='my-auto'>
              <h2 className='text-white my-auto pl-8'>ADMINISTRATION</h2>
            </div> 
          </div>
          {/* Menu */}
          <div className="menuDesktop justify-end flex flex-row w-3/4 text-white items-center">
            <ul className="flex flex-row space-x-5 justify-end">
              <li>
                <Link onClick={handeLogout} href="/" className="flex hover:text-custom-yellow">Se déconnecter</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

