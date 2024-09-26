"use client"
import React, { useEffect, useState } from 'react'
import { NavAsso } from "../Components/NavAsso";
import Footer from "../Components/Footer";
import Button from "../Components/ButtonAction";
import Link from 'next/link';
import { petService } from '../Services/pet';
import { EditProfilPetProps } from '../Utils/type';
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';

const AccueilAssoPage = () => {
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [petsByAssoList, setPetsByAssoList] = useState<EditProfilPetProps>();

    useEffect(() => {
        fetchPetsByAsso();
}, []);

    const fetchPetsByAsso = async () => {

        setIsLoading(true);
        // setError(null);
        try {
        const response = await petService.getPetsByAsso();
        setPetsByAssoList(response);
        } catch (error) {
        // setError("Failed to fetch meals. Please try again.");
        console.error("Erreur pendant la récupération de la liste des animaux :", error);
        } 
        finally {
          setIsLoading(false);
        }
    };
    console.log(petsByAssoList);

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
    <main className="bg-custom-purple w-full ">
        <NavAsso></NavAsso>
        
            <h3 className="text-3xl font-bold text-white mt-12 ml-12">Bienvenue sur votre espace</h3>
            
            <h5 className="text-custom-light-purple mt-10 mb-6 ml-12 font-bold">Les profils de vos pensionnaires :</h5>

            <div className="flex flex-wrap cards gap-4 mx-14 md:mx-2 md:gap-8 justify-center">
                
                {petsByAssoList && (
                    petsByAssoList.map((pet : EditProfilPetProps) => (

                        <div className="card flexflex-col border-4 border-white rounded-2xl max-sm:full sm:1/2 md:w-1/3 lg:w-1/4">
                            <label
                            key={pet.id}   
                            >
                                <h4 className="name ml-6 flex text-2xl font-bold text-custom-yellow py-2">{pet.name}</h4>
                                    
                                <div className="relative overflow-hidden h-[300px]">
                                    <div className="absolute inset-0 flex items-center justify-center w-full">
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

                                <div className="flex bg-custom-purple h-250 flex-col align-top">
                                        
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

                                    <hr className="w-4/5 justify-center m-auto"/>
                                    <div className="flex text w-full h-1/2 flex-col px-5 pb-2 text-white text-sm">
                                        <div className="flex flex-row mt-2 pb-2 justify-between font-bold">
                                            {/* <p className="flex age text-ml text-white">{pet.birthyear}</p> */}
                                            <p  className="flex race text-ml text-white">{pet.race}</p>   
                                        </div>
                                        <p className="font-medium mb-2 text-custom-light-purple">Description rapide :</p>    
                                        <p className="">{pet.quickDescription}</p>
                                        <p className="font-medium my-2  text-custom-light-purple">Description :</p>
                                        <p className="">{pet.description}</p>
                                    </div> 
                                    <div className="button flex justify-end text-xs pr-2">
                                        <Button 
                                            title={'Modifier'}
                                            bgColor={'bg-custom-purple'}
                                            border={'border border-white'}
                                            color={'text-white font-regular'}
                                            size={'w-fit'}
                                            hover={'hover:text-custom-light-purple hover:border-custom-light-purple'}
                                            padding={'px-2'}
                                            margin={'m-2'} 
                                            action={`modificationAnimal/${pet.id}`}
                                        />
                                        <Button 
                                            title={'Supprimer'}
                                            bgColor={'bg-custom-purple'}
                                            border={'border border-white'}
                                            color={'text-white font-regular'}
                                            size={'w-fit'}
                                            hover={'hover:text-custom-light-purple hover:border-custom-light-purple'}
                                            padding={'px-2'}
                                            margin={'m-2'} 
                                            action={""}
                                        />
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))
                )}
            </div>    
            <Footer></Footer>
            
    </main>
  )
}

export default AccueilAssoPage