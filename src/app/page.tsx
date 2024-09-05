import { Nav } from "./Components/Nav"
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import { ButtonProps } from "./Utils/type";
import Image from "next/image";


export default function Home() {
  return (
    <main className="quicksand flex min-h-screen flex-col bg-custom-cream w-full">
      
      <Nav></Nav>

      {/*------------- hero ----------------*/}
      <div className="flex hero">

        <div className="bloc-text w-1/2 p-14 bg-custom-purple">
            <h1 className="text-white text-5xl font-medium w-4/5 pb-5 leading-tight">Bienvenue sur <br></br><span className="font-bold">Adopte un Compagnon</span>,<br></br> la plateforme qui soutien la cause animale !</h1>
            <h2 className="text-white text-ml w-4/5 pb-4">Nous soutenons les associations qui œuvrent pour le bien-être des animaux en leur offrant une plateforme dédiée !</h2>
            <div className="flex justify-between w-4/5 text-sm">
              <Button
                        title={'Je suis une association'}
                        bgColor={''}
                        border={'border border-white'}
                        color={'text-white'}
                        size={'w-fit'}
                        hover={'hover:text-custom-purple  hover:bg-white hover:borderwhite'}
                        padding={'px-4 py-1'}
                        margin={'mt-2'}
              />
            
              <Button
                        title={'Je veux adopter un animal'}
                        bgColor={'bg-custom-yellow'}
                        border={'border border-custom-yellow'}
                        color={''}
                        size={'w-64'}
                        hover={'hover:text-custom-yellow  hover:bg-white hover:border-custom-yellow'}
                        padding={'px-4 py-1 '}
                        margin={'mt-2'}
              />
            </div>
            

        </div>
      

        <div className="bloc-image w-1/2">
      
          <img className="w-full" src="img/chien-hero.jpg" alt="chien heureux dans un champs" />
          
        </div>

      </div>  
      {/*------------- fin hero ----------------*/} 

      {/*------------- bloc comment soutenir ----------------*/}   

      <div className="flex bloc-soutien m-24">

        <div className="w-1/3 p-6 text-custom-purple">
          <h3 className="text-3xl font-bold">Comment nous soutenons les associations ?</h3>
          
        </div>
      
        <div className="w-1/3 p-2">
          <h3 className="text-custom-light-purple text-xl font-bold">En promouvant les adoptions</h3>
          <p className="text-custom-purple">Découvrez tous les animaux qui recherchent un foyer et trouver votre futur compagnon grâce à leurs profils détaillés.</p>
          <Button
                        title={'Trouver mon compagnon'}
                        bgColor={'bg-white'}
                        border={'border border-custom-light-purple'}
                        color={'text-custom-light-purple'}
                        size={'w-fit'}
                        hover={'hover:text-white hover:bg-custom-light-purple'}
                        padding={'px-4 py-1'}
                        margin={'mt-2'} font-bold
              />
        </div>

        <div className="w-1/3 p-2">
          <h3 className="text-custom-light-purple text-xl font-bold">En priorisant les urgences</h3>
          <p className="text-custom-purple">L’onglet SOS permet de mettre en avant les adoptions urgentes.</p>
          <Button
                        title={'Voir les urgences'}
                        bgColor={'bg-white'}
                        border={'border border-custom-light-purple'}
                        color={'text-custom-light-purple'}
                        size={'w-fit'}
                        hover={'hover:text-white hover:bg-custom-light-purple'}
                        padding={'px-4 py-1'}
                        margin={'mt-2'}
              />
        </div>

      </div>
      
      {/*------------- bloc fin comment soutenir ----------------*/}


      {/*------------- bloc les rencontrer ----------------*/}
      <div className="pets-meet flex m-24 flex-col">
          <h3 className="text-custom-purple flex text-3xl w-full font-bold mb-10">Et si on se rencontrait ?</h3>

          <div className="flex cards flex-row">

            <div className="flex card w-1/3 bg-custom-purple h-110 flex-col m-4 p-4">
              <div className="flex img w-full h-1/2 px-5 pt-5 pb-2 flex-col">
                <h4 className="name flex text-2xl text-custom-cream pb-2">Pantoufle</h4>
                <Image
                    src="/pets/cats/pantoufle.jpg"
                    width={300}
                    height={200}
                    alt="picture of cat"
                />
              </div>
              <div className="flex text w-full h-1/2 flex-col px-5 pt-5 pb-2 mt-4">
          
                <div className="icons flex flex-row">
                  <Image
                      src="/icones/cat-white.svg"
                      width={30}
                      height={23}
                      alt="icon of cat"
                  /> 
                  <p className="ml-2 mr-4 text-white">: oui</p>

                  <Image
                      src="/icones/dog-white.png"
                      width={30}
                      height={26}
                      alt="icon of dog"
                      margin-left="10"
                  /> 
                  <p className="ml-2 mr-4 text-white">: oui</p>
                  <Image
                      src="/icones/children-white.png"
                      width={30}
                      height={25}
                      alt="icon of children"
                  />
                  <p className="ml-2 mr-4 text-white">: oui</p>

                
              </div>
                <p className="age text-ml text-white mt-2 pb-2">4 ans</p>
                <p  className="race text-ml text-white"></p>
                <p className="text-ml text-white">“J’aime les longues siestes au soleil et les câlins devant une série.”</p>
              </div>

            </div>


            <div className="flex card w-1/3 bg-custom-purple h-110 flex-col m-4 p-4">
              <div className="flex img w-full h-1/2 px-5 pt-5 pb-2 flex-col">
                <h4 className="name flex text-2xl text-custom-cream pb-2">Pantoufle</h4>
                <Image
                    src="/pets/cats/pantoufle.jpg"
                    width={300}
                    height={200}
                    alt="picture of cat"
                />
              </div>
              <div className="flex text w-full h-1/2 flex-col px-5 pt-5 pb-2 mt-4">
          
                <div className="icons flex flex-row">
                  <Image
                      src="/icones/cat-white.svg"
                      width={30}
                      height={23}
                      alt="icon of cat"
                  /> 
                  <p className="ml-2 mr-4 text-white">: oui</p>

                  <Image
                      src="/icones/dog-white.png"
                      width={30}
                      height={26}
                      alt="icon of dog"
                      margin-left="10"
                  /> 
                  <p className="ml-2 mr-4 text-white">: oui</p>
                  <Image
                      src="/icones/children-white.png"
                      width={30}
                      height={25}
                      alt="icon of children"
                  />
                  <p className="ml-2 mr-4 text-white">: oui</p>

                
              </div>
                <p className="age text-ml text-white mt-2 pb-2">4 ans</p>
                <p  className="race text-ml text-white"></p>
                <p className="text-ml text-white">“J’aime les longues siestes au soleil et les câlins devant une série.”</p>
              </div>

            </div>

            


          </div>

      
      </div>  
      {/*------------- bloc fin les rencontrer ----------------*/} 

      {/*------------- bloc SOS ----------------*/}
      <div className="pets-meet flex m-24 flex-col">
          <h3 className="text-custom-yellow flex text-3xl w-full font-bold mb-10">SOS Ils ont besoin de vous !</h3>

          <div className="flex cards flex-row"></div>
      </div>
      {/*------------- fin bloc SOS ----------------*/}


      <Footer></Footer>
    </main>
  );
}
