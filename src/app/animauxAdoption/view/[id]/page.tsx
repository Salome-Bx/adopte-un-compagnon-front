"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { petService } from "@/app/Services/pet";
import { ProfilPetProps } from "@/app/Utils/type";
import { Nav } from "@/app/Components/Nav";


const detailAnimalPage = ({params}: {params: {id: number} }) => {

    const [petData, setPetData] = useState<ProfilPetProps>();

    useEffect(() => {
      fetchPetProfil();
    }, [])

    const fetchPetProfil = async () => {
      try {
        const repsonse = await petService.getPetProfil();
        setPetData(repsonse);
      } catch (error) {
        console.error("Erreur pendant la récupération de l'animal :", error);
      }
    }
    

  return (
    <main className="quicksand flex min-h-screen flex-col bg-custom-cream w-full">
      <Nav></Nav>

            {petData && (
                <div>
                  <p className="">Race:</p>
                  <p className="">Genre:</p>
                  <p className="">Age:</p>
                  <p className="">Entente avec les chats :</p>
                  <p className="">Entente avec les chiens :</p>
                  <p className="">Entente avec les enfants :</p>
                </div>
            )}
        </main>
  )
}

export default detailAnimalPage