
"use client"
import { useEffect, useState } from "react";
import { petService } from "../Services/pet";
import Image from "next/image";
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import { CardPetProps } from "../Utils/type";


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
        } catch (err) {
        // setError("Failed to fetch meals. Please try again.");
        console.error("Error fetching meals:", err);
        } 
        // finally {
        //   setIsLoading(false);
        // }
    };

    return (
        <main>
            <Nav></Nav>

            <div className="cards">
                {petList && (
                    petList.map((pet : CardPetProps) => (

                        
                        <div className="card flex w-1/4 bg-custom-purple h-110 flex-col m-4">

                            <label
                            key={pet.id}   
                            >
                            <h4 className="name flex text-2xl text-custom-cream pb-2 pl-2">{pet.name}</h4>
                            <div className="flex img w-full h-1/2 px-5 pt-5 pb-2 flex-col">
                                
                                <Image
                                        src={`/${pet.image}`}
                                        width={260}
                                        height={300}
                                        alt="test"
                                    />
                                
                            </div>    
                                
                            <div className="icons flex flex-row w-full justify-center">
                                <div className="rounded-full bg-custom-light-purple w-10 h-10">
                                    <Image
                                        src="img/icones/cat-white.svg"
                                        width={30}
                                        height={26}
                                        alt="icon of cat"
                                        className=""
                                    />
                                </div>

                                <p className="ml-2 mr-4 text-white">: {pet.getAlongCats ? "Oui" : "Non"}</p>

                                <div className="rounded-full bg-custom-light-purple w-10 h-10">
                                    <Image
                                        src="img/icones/dog-white.svg"
                                        width={30}
                                        height={26}
                                        alt="icon of dog"
                                        
                                    /> 
                                </div>
                                <p className="ml-2 mr-4 text-white">: {pet.getAlongDogs ? "Oui" : "Non"}</p>

                                <div className="rounded-full bg-custom-light-purple w-10 h-10">
                                    <Image
                                        src="img/icones/children-white.svg"
                                        width={30}
                                        height={25}
                                        alt="icon of children"
                                        
                                    />    
                                </div>
                                <p className="ml-2 mr-4 text-white">: {pet.getAlongChildren ? "Oui" : "Non"}</p>

                            </div>

                            
                            <div className="flex text w-full h-1/2 flex-col px-5 pt-5 pb-2 mt-4">
                                <div className="flex flex-row mt-2 pb-2 justify-between">
                                    <p className="flex age text-ml text-white">{pet.birthyear}</p>
                                    <p  className="flex race text-ml text-white ">{pet.race}</p>   
                                </div>
                                
                                <p className="text-ml text-white">{pet.quickDescription}</p>
                            </div>

                           

                            
                                
                                
                            </label>

                        </div>

                        ))
                )}
            
                
        


                <div className="flex card w-1/3 bg-custom-purple h-110 flex-col m-4 p-4">
                    
                    <div className="flex text w-full h-1/2 flex-col px-5 pt-5 pb-2 mt-4">
                
                        

                        
                    </div>

                </div>
            </div>
            

        <Footer></Footer>
        </main>
    )
}
    
export default animalsToAdoptPage


    

