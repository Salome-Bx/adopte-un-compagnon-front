"use client"
import React, { useEffect, useState } from 'react'
import { NavAsso } from "../Components/NavAsso";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Link from 'next/link';
import { petService } from '../Services/pet';

const AccueilAssoPage = () => {

    const [petsByAssoList, setPetsByAssoList] = useState ([]);
    
    
    useEffect(() => {
        fetchPets();
}, []);
    
    
    const fetchPets = async () => {
        // setIsLoading(true);
        // setError(null);
        try {
        const response = await petService.getPetsByAsso();
        setPetsByAssoList(response);
        } catch (error) {
        // setError("Failed to fetch meals. Please try again.");
        console.error("Erreur pendant la récupération de la liste des animaux :", error);
        } 
        // finally {
        //   setIsLoading(false);
        // }
    };
    console.log(petsByAssoList);


  return (
    <main className="bg-custom-purple w-full">
        <NavAsso></NavAsso>
            <div className="w-1/3 p-6 text-custom-purple">
                <h3 className="text-3xl font-bold">Bienvenue sur votre espace</h3>
            </div>

            
    </main>
  )
}

export default AccueilAssoPage