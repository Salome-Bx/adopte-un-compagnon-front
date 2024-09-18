"use client"
import { useEffect, useState } from "react";
import { petService } from "../Services/pet";
import Image from "next/image";
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import { CardPetProps } from "../Utils/type";
import Button from "../Components/ButtonAction";


const animalsToAdoptPage = () => {
    
    const [petList, setPetList] = useState ([]);
    
    
    useEffect(() => {
        fetchPets();
}, []);
    
    
    const fetchPets = async () => {
        // setIsLoading(true);
        // setError(null);
        try {
        const response = await petService.getAllPets();
        setPetList(response);
        } catch (error) {
        // setError("Failed to fetch meals. Please try again.");
        console.error("Erreur pendant la récupération de la liste des animaux :", error);
        } 
        // finally {
        //   setIsLoading(false);
        // }
    };
    console.log(petList);

    return (
        <main>
            <Nav></Nav>
            <div className="w-1/3 p-6 text-custom-purple">
                <h3 className="text-3xl font-bold">Animaux à l'adoption</h3>
            </div>

            <div className="cards flex flex-row mx-8 flex-wrap">
                {petList && (
                    petList.map((pet : CardPetProps) => (

                        
                        <div className="card flex bg-custom-purple h-110 flex-col m-3 max-sm:full sm:1/2 md:w-1/3 lg:w-1/4">

                            <label
                            key={pet.id}   
                            >
                            <h4 className="name flex text-2xl font-bold text-custom-cream py-2 pl-2">{pet.name}</h4>
                            
                            <div className="relative overflow-hidden h-[300px]">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                    src={`/${pet.image}`}
                                    width={300}
                                    height={70}
                                    alt="photo de l'animal"
                                    className="object-contain"
                                    />
                                </div>
                            </div>
                              
                                
                            <div className="icons flex flex-row w-full justify-center pb-2">
                                <div className="flex rounded-full bg-custom-light-purple w-8 h-8 justify-center">
                                    <Image
                                        src="img/icones/cat-white.svg"
                                        width={28}
                                        height={24}
                                        alt="icon of cat"
                                        className="flex items-center"
                                    />
                                </div>

                                <p className="ml-2 mr-4 text-white">: {pet.getAlongCats ? "Oui" : "Non"}</p>

                                <div className="flex rounded-full bg-custom-light-purple w-8 h-8 justify-center">
                                    <Image
                                        src="img/icones/dog-white.svg"
                                        width={27}
                                        height={23}
                                        alt="icon of dog"
                                        className="flex items-center"
                                        
                                    /> 
                                </div>
                                <p className="ml-2 mr-4 text-white">: {pet.getAlongDogs ? "Oui" : "Non"}</p>

                                <div className="flex rounded-full bg-custom-light-purple w-8 h-8 justify-center">
                                    <Image
                                        src="img/icones/children-white.svg"
                                        width={28}
                                        height={23}
                                        alt="icon of children"
                                        className="flex items-center"
                                    />    
                                </div>
                                <p className="ml-2 mr-4 text-white">: {pet.getAlongChildren ? "Oui" : "Non"}</p>

                            </div>

                            <hr  className="w-4/5 justify-center m-auto" />
                            <div className="flex text w-full h-1/2 flex-col px-5 pb-2 mt-4 ">
                                <div className="flex flex-row mt-2 pb-2 justify-between font-bold">
                                    {/* <p className="flex age text-ml text-white">{pet.birthyear}</p> */}
                                    <p  className="flex race text-ml text-white ">{pet.race}</p>   
                                </div>
                                
                                <p className="text-ml text-white">{pet.quickDescription}</p>
                            </div> 

                            <Button 
                                title={'Je veux adopter un animal'}
                                bgColor={'bg-custom-yellow'}
                                border={'border border-custom-yellow'}
                                color={''}
                                size={'w-64'}
                                hover={'hover:text-custom-yellow  hover:bg-white hover:border-custom-yellow'}
                                padding={'px-6 py-2 '}
                                margin={'mt-2 ml-2'} 
                                action={`animauxAdoption/view/${pet.id}`}
                            />

                            </label>

                        </div>

                        ))
                )}
                            
            </div>

        <Footer></Footer>
        </main>
    )
}
    
export default animalsToAdoptPage


    

