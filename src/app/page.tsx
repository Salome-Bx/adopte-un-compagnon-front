"use client"
import { Nav } from "./Components/Nav"
import Footer from "./Components/Footer";
import Button from "./Components/ButtonAction";
import { ButtonProps, CardPetProps } from "./Utils/type";
import Image from "next/image";
import { petService } from "./Services/pet";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';
import toast from 'react-hot-toast';

  //homepage component
  const Home = () => {
    
    const [petList, setPetList] = useState ([]);
    const [sosList, setSosList] = useState ([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    //import list of all animals and animals in sos  
    useEffect(() => {
        fetchPets();
        fetchSos();
    }, []);

    // Function to fetch all pets
    const fetchPets = async () => {
        setIsLoading(true);
        setError(null);
        try {
        const response = await petService.getAllPets();
        setPetList(response);
        } catch (error) {
        setError("Erreur pendant la récupération de la liste des animaux");
        toast.error("Erreur pendant la récupération de la liste des animaux ");
        } 
        finally {
          setIsLoading(false);
        }
    };
    
    // Function to fetch all pets in sos
    const fetchSos = async () => {
        setIsLoading(true);
        try {
          const response = await petService.getSosPets();
          setSosList(response); 
  
        } catch (err) {
          toast.error("Erreur pendant la récupération de la liste des animaux SOS");
        }
    };

    
    return (

    <main className="quicksand flex min-h-screen flex-col bg-custom-cream w-full">
      
      <Nav></Nav>

      {/*------------- hero ----------------*/}
      <div className="flex hero relative sm:max-h-[600px] overflow-hidden">

  {/* Bloc de texte */}
  <div className="bloc-text p-14 w-full max-h-[600px] bg-black/50 lg:bg-custom-purple lg:w-1/2 z-10 ">
    <h1 className="text-white text-xl lg:text-5xl font-medium w-4/5 pb-5 leading-tight">
      Bienvenue sur <br />
      <span className="font-bold">Adopte un Compagnon</span>,<br />
      la plateforme qui soutient la cause animale !
    </h1>
    <h2 className="text-white text-ml w-4/5 pb-4">
      Nous soutenons les associations qui œuvrent pour le bien-être des animaux en leur offrant une plateforme dédiée !
    </h2>
    <div className="flex text-sm sm:w-full lg:w-4/5">
      <Button
        title={'Je suis une association'}
        bgColor={''}
        border={'border border-white'}
        color={'text-white'}
        size={'w-fit'}
        hover={'hover:text-custom-purple hover:bg-white hover:border-white'}
        padding={'px-6 py-2'}
        margin={'mt-2'}
        action="inscription"
      />
      </div>
      <div className="flex text-sm sm:w-full lg:w-4/5">
      <Button
        title={'Je veux adopter un animal'}
        bgColor={'bg-custom-yellow'}
        border={'border border-custom-yellow'}
        color={''}
        size={'w-64'}
        hover={'hover:text-custom-yellow hover:bg-white hover:border-custom-yellow'}
        padding={'px-6 py-2 '}
        margin={'mt-2'}
        action="animauxAdoption"
      />
    </div>
  </div>

  {/* Bloc d'image */}
  <div className="bloc-image flex w-full absolute min-h-full overflow-hidden lg:w-1/2 lg:relative ">
    <img className="w-full object-cover" src="img/img/chien-hero.jpg" alt="chien heureux dans un champs" />
  </div>

</div>

      {/*------------- end of hero ----------------*/} 

      {/*------------- support section ----------------*/}   

      <div className="flex bloc-soutien m-24 flex-col lg:flex-row">

        <div className="sm:w-full md:w-full lg:w-1/3 p- text-custom-purple">
          <h3 className="text-3xl font-bold">Comment nous soutenons les associations ?</h3>
          
        </div>
      
        <div className="sm:w-full md:w-full lg:w-1/3 p-2">
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
            margin={'mt-2'} 
            action={"animauxAdoption"}
            />
        </div>

        <div className="sm:w-full md:w-full lg:w-1/3 p-2">
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
              action={"sos"}        
                              

          />
        </div>

      </div>
      
      {/*------------- end of support section ----------------*/}


      {/*------------- meet the animals section  ----------------*/}
      <div className="pets-meet flex m-auto w-fit flex-col bg-white h-fit mb-48">
          <h3 className="text-custom-purple flex m-auto mt-10 w-fit text-3xl font-bold mb-12 lg:ml-24">Et si on se rencontrait ?</h3>
      
         
        <div className="flex flex-wrap cards gap-4 mx-14 md:mx-2 md:gap-8 justify-center">
            
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
                    
                {petList && 
                    petList.slice(0, 3).map((pet: CardPetProps) => (
                        <div className="card flex flex-col full mt-14 sm:1/2 md:w-1/3 lg:w-1/4 h-[550px] lg:mt-5 cursor-pointer">
                            <label key={pet.id}>
                                <h4 className="name flex text-2xl font-bold text-custom-purple py-2">{pet.name}</h4>
                                
                                <div className="relative overflow-hidden h-[300px]"> 
                                    <div className="absolute inset-0 flex items-center justify-center w-full pt-20">
                                        <Image
                                            src={`/${pet.image}`}
                                            width={300}
                                            height={70}
                                            alt="photo de l'animal"
                                            className="object-contain"
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                </div>

                                <div className="flex bg-custom-purple flex-col h-[250px] justify-start">
                                    <div className="icons flex flex-row w-full justify-center p-2">
                                        <div className="flex rounded-full bg-custom-light-purple w-7 h-7 justify-center">
                                            <Image
                                                src="img/icones/cat-white.svg"
                                                width={22}
                                                height={22}
                                                alt="icon of cat"
                                                className="flex items-center"
                                            />
                                        </div>
                                        <p className="ml-2 mr-4 text-white"> {pet.getAlongCats ? "Oui" : "Non"}</p>

                                        <div className="flex rounded-full bg-custom-light-purple w-7 h-7 justify-center">
                                            <Image
                                                src="img/icones/dog-white.svg"
                                                width={22}
                                                height={22}
                                                alt="icon of dog"
                                                className="flex items-center"
                                            /> 
                                        </div>
                                        <p className="ml-2 mr-4 text-white"> {pet.getAlongDogs ? "Oui" : "Non"}</p>

                                        <div className="flex rounded-full bg-custom-light-purple w-7 h-7 justify-center">
                                            <Image
                                                src="img/icones/children-white.svg"
                                                width={22}
                                                height={22}
                                                alt="icon of children"
                                                className="flex items-center"
                                            />    
                                        </div>
                                        <p className="ml-2 mr-4 text-white"> {pet.getAlongChildren ? "Oui" : "Non"}</p>
                                    </div>

                                    <hr className="w-4/5 justify-center m-auto" />
                                    <div className="flex flex-col px-5 pb-2">
                                        <div className="flex flex-row mt-2 pb-2 justify-between font-bold">
                                            <p className="flex race text-ml text-white">{pet.race}</p>   
                                        </div>
                                        <p className="text-ml text-white">{pet.quickDescription}</p>
                                    </div> 
                                    <div className="button flex justify-end text-xs pr-2">
                                        <Button 
                                            title={'En savoir plus >'}
                                            bgColor={'bg-custom-purple'}
                                            border={'border border-white'}
                                            color={'text-white font-regular'}
                                            size={'w-fit'}
                                            hover={'hover:text-custom-light-purple hover:border-custom-light-purple'}
                                            padding={'px-2'}
                                            margin={'m-2'} 
                                            action={`animauxAdoption/view/${pet.id}`}
                                        />
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))    
                }
        </div>
      </div>
          
      {/*------------- end of meet the animals section ----------------*/} 

      {/*------------- SOS section ----------------*/}
      <div className="pets-sos flex m-auto w-fit flex-col mt-20 h-full mb-48">
      
          <h3 className="text-custom-yellow flex m-auto mt-10 w-fit text-3xl font-bold mb-12 lg:ml-24">SOS Ils ont besoin de vous !</h3>

          <div className="flex flex-wrap cards gap-4 mx-14 md:mx-2 md:gap-8 justify-center">

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
                
                {sosList && 
            sosList.slice(0, 3).map((pet : CardPetProps) => (
                <div className="card flex flex-col full mt-14 sm:1/2 md:w-1/3 lg:w-1/4 h-[550px] lg:mt-5 cursor-pointer">
                    <label key={pet.id}>  
                        <h4 className="name flex text-2xl font-bold text-custom-purple py-2">{pet.name}</h4>
                        <div className="relative overflow-hidden h-[300px]">
                            <div className="absolute inset-0 flex items-center justify-center w-full mt-20">
                                <Image
                                    src={`/${pet.image}`}
                                    width={300}
                                    height={70}
                                    alt="photo de l'animal"
                                    className="object-contain"
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
                        <div className="flex bg-custom-yellow h-[250px] flex-col align-top">
                            <div className="icons flex flex-row w-full justify-center p-2">
                                <div className="flex rounded-full bg-custom-purple w-7 h-7 justify-center">
                                    <Image
                                        src="img/icones/cat-white.svg"
                                        width={22}
                                        height={22}
                                        alt="icon of cat"
                                        className="flex items-center"
                                    />
                                </div>
                                <p className="ml-2 mr-4 text-custom-purple"> {pet.getAlongCats ? "Oui" : "Non"}</p>
                                <div className="flex rounded-full bg-custom-purple w-7 h-7 justify-center">
                                    <Image
                                        src="img/icones/dog-white.svg"
                                        width={22}
                                        height={22}
                                        alt="icon of dog"
                                        className="flex items-center"
                                    /> 
                                </div>
                                <p className="ml-2 mr-4 text-custom-purple"> {pet.getAlongDogs ? "Oui" : "Non"}</p>
                                <div className="flex rounded-full bg-custom-purple w-7 h-7 justify-center">
                                    <Image
                                        src="img/icones/children-white.svg"
                                        width={22}
                                        height={22}
                                        alt="icon of children"
                                        className="flex items-center"
                                    />    
                                </div>
                                <p className="ml-2 mr-4 text-custom-purple"> {pet.getAlongChildren ? "Oui" : "Non"}</p>
                            </div>
                            <hr className="w-4/5 justify-center m-auto white" />
                            <div className="flex text w-full h-1/2 flex-col px-5 pb-2 text-custom-purple">
                                <div className="flex flex-row mt-2 pb-2 justify-between font-bold">
                                    <p className="flex race text-ml">{pet.race}</p>   
                                </div>
                                <p className="text-ml ">{pet.quickDescription}</p>
                            </div> 
                            <div className="button flex justify-end text-xs pr-2 ">
                                <Button 
                                    title={'En savoir plus >'}
                                    bgColor={'bg-custom-yellow'}
                                    border={'border border-white'}
                                    color={'text-white font-bold'}
                                    size={'w-fit'}
                                    hover={'hover:text-custom-purple hover:border-custom-purple'}
                                    padding={'px-2'}
                                    margin={'m-2'} 
                                    action={`animauxAdoption/view/${pet.id}`}
                                />
                            </div>
                        </div>
                    </label>
                </div>
            ))
        }

          </div>
      </div>
      
      {/*------------- end of SOS section ----------------*/}

      <Footer></Footer>
      
    </main>
    );

  }


export default Home
