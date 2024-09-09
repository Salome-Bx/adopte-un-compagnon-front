"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import { CardAssoProps } from "../Utils/type";
import { userService } from "../Services/user";


const associationsPage = () => {
    
    const [assoList, setAssoList] = useState ([]);
    
    
    useEffect(() => {
        fetchAssos();
}, []);
    
    
    const fetchAssos = async () => {
        // setIsLoading(true);
        // setError(null);
        try {
        const response = await userService.getAllAssos();
        setAssoList(response);
        } catch (err) {
        // setError("Failed to fetch meals. Please try again.");
        console.error("Erreur pendant la récupération de la liste des associations :", err);
        } 
        // finally {
        //   setIsLoading(false);
        // }
    };

    return (
        <main>
            <Nav></Nav>
            <div className="w-1/3 p-6 text-custom-purple">
                <h3 className="text-3xl font-bold">Associations</h3>
            </div>

            <div className="cards flex flex-row mx-8 flex-wrap">
                {assoList && (
                    assoList.map((asso : CardAssoProps) => (

                        
                        <div className="card flex bg-custom-purple h-110 flex-col m-3 max-sm:full sm:1/2 md:w-1/3 lg:w-1/4">

                            <label
                            key={asso.id}   
                            >
                                <h4 className="name flex text-2xl font-bold text-custom-cream py-2 pl-2">{asso.nameAsso}</h4>
                                <div className="img flex w-full h-1/2 flex-col items-center justify-center">
                                    <Image
                                        src={`/${asso.image}`}
                                        width={300}
                                        height={70}
                                        alt="photo de l'association"
                                    />
                                </div>    
                                 
                                <hr  className="w-4/5 justify-center m-auto" />
                                <div className="flex text w-full h-1/2 flex-col px-5 pb-2 mt-4 ">
                                    <div className="flex flex-row mt-2 pb-2 font-bold">
                                        <p className="flex age text-ml text-white">{asso.postalCode}</p>
                                        <p  className="flex race text-ml text-white pl-4">{asso.city}</p>   
                                    </div>
                                    <p className="text-ml text-white">{asso.phone}</p>
                                    <p className="text-ml text-white">{asso.website}</p>
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
    
export default associationsPage


    

