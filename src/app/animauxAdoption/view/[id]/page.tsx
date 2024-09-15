"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { petService } from "@/app/Services/pet";
import { ProfilPetProps } from "@/app/Utils/type";
import { Nav } from "@/app/Components/Nav";


const animalProfilPage = ({params}: {params: {id: number} }) => {

    const [petData, setPetData] = useState<ProfilPetProps>();

    useEffect(() => {
      fetchPetProfil();
    }, [])

    const fetchPetProfil = async () => {
      try {
        const repsonse = await petService.getPetById(params.id);
        setPetData(repsonse);
      } catch (error) {
        console.error("Erreur pendant la récupération de l'animal :", error);
      }
    }
    

  return (
    <main className="quicksand flex min-h-screen flex-col bg-custom-cream w-full">
      <Nav></Nav>

            {petData && (
                <div className="">
                  <h3 className="nom">{petData.name}</h3>
                  <div  className="text">
                    <h2 className="title">Informations</h2>
                    <p className="race">Race: {petData.race}</p>
                    <p className="gender">Genre: {petData.gender}</p>
                    {/* <p className="age">Age: {petData.birthyear}</p> */}
                    <p className="withCats">Entente avec les chats : {petData.getAlongCats}</p>
                    <p className="withDogs">Entente avec les chiens : {petData.getAlongDogs}</p>
                    <p className="withChildren">Entente avec les enfants : {petData.getAlongChildren}</p>
                    <p className="sos">SOS : {petData.sos}</p>
                    <h2 className="title">Description</h2>
                    <p className="description">{petData.description}</p>
                  </div>

                  <div className="image">
                    <Image
                      src="/{petData.image}"
                      width={300}
                      height={200}
                      alt="picture of {petData.species}"
                    />
                  </div>


                </div>
            )}
        </main>
  )
}

export default animalProfilPage