"use client"
import { useEffect, useState } from "react";
import { petService } from "../Services/pet";
import Image from "next/image";
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import { CardPetProps } from "../Utils/type";

const SOSpage = () => {

  const [sosList, setSosList] = useState ([]);

  useEffect(() => {
    fetchSos();
  
  }, [])
  
const fetchSos = async () => {

    try {
        const response = await petService.getSosPets();
        setSosList(response); 

    } catch (err) {
        console.error("Erreur pendant la récupération de la liste des animaux SOS :", err);
    }
};
  return (
        <main>
            <Nav></Nav>
            <div className="w-1/3 p-6 text-custom-purple">
                <h3 className="text-3xl font-bold">SOS</h3>
            </div>

            <div className="cards flex flex-row mx-8 flex-wrap">
                {sosList && (
                    sosList.map((pet : CardPetProps) => (

                        
                        <div className="card flex w-1/4 bg-custom-purple h-110 flex-col m-3">

                            <label
                            key={pet.id}   
                            >
                            <h4 className="name flex text-2xl font-bold text-custom-cream py-2 pl-2">{pet.name}</h4>
                            <div className="img flex w-full h-1/2 flex-col items-center justify-center">
                                
                                <Image
                                    src={`/${pet.image}`}
                                    width={300}
                                    height={70}
                                    alt="photo de l'animal"
                                />
                                
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

                              
                            </label>

                        </div>

                        ))
                )}
                            
            </div>

        <Footer></Footer>
        </main>
    )
}

export default SOSpage