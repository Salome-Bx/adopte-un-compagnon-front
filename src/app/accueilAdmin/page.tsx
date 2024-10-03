"use client"
import React, { useEffect, useState } from 'react'
import { NavAsso } from "../Components/NavAsso";
import Footer from "../Components/Footer";
import Button from "../Components/ButtonAction";
import Link from 'next/link';
import { petService } from '../Services/pet';
import { Oval } from 'react-loader-spinner';

const AccueilAdminPage = () => {

    const [petsByAssoList, setPetsByAssoList] = useState ([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    useEffect(() => {
        fetchPets();
}, []);
    
    
    const fetchPets = async () => {
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

    

  return (
    <main className="bg-custom-purple">
        <NavAsso></NavAsso>

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

                    
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="w-1/3 p-6 text-white">
                <h3 className="text-3xl font-bold">Bienvenue sur votre espace</h3>
            </div>



        </div>
            

            


            
    </main>
  )
}

export default AccueilAdminPage