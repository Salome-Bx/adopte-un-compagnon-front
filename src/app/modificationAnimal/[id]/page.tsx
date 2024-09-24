"use client"
import React, { useState } from 'react'
import { NavAsso } from "../../Components/NavAsso";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import { useRouter } from 'next/navigation';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { petService } from '../../Services/pet';
import axios from 'axios';


const pageModificationAnimal = ( {params}: {params: {id: number}}) => {

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [race, setRace] = useState('')
  const [gender, setGender] = useState('')
  const [birthyear, setBirthyear] = useState('')
  const [withCats, setWithCats] = useState('')
  const [withDogs, setWithDogs] = useState('')
  const [withChildren, setWithChildren] = useState('')
  const [sos, setSos] = useState('')
  const [quickDescription, setQuickDescription] = useState('')
  const [description, setDescription] = useState('')
  
  const [error, setError] = useState<string | null>(null);
  const {push} = useRouter();

  const handlePetEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!name || !race || !gender || !birthyear || !quickDescription || !description ) {

      toast.error("Veuillez remplir tous les champs");

    } else {

    let formData = {
        id: params.id,
        name: name,
        image : image,
        race: race,
        gender: gender,
        birthyear: birthyear,
        withCats: withCats,
        withDogs: withDogs,
        withChildren: withChildren,
        sos: sos,
        quickDescription: quickDescription,
        description: description
    }
    
    try {
      const response = await petService.editPet(params.id, formData);
      toast.success("L'animal a bien été modifié !");
      push(`/accueilAsso/${params.id}`);
    } 
  
    catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message;
        
        switch (errorMessage) {
          case 'Animal déjà crée':
            setError('L\'animal a déjà été crée');
            toast.error('L\'animal a déjà été crée');
            break;
          default:
            setError("Une erreur s'est produite lors de l'enregistrement.");
            toast.error("Une erreur s'est produite lors de l'enregistrement.");
        }
      } else {
        setError("Une erreur inattendue s'est produite. Veuillez réessayer.");
        toast.error("Une erreur inattendue s'est produite. Veuillez réessayer.");
      }
      console.error("Une erreur est survenue", error);
      toast.error("Une erreur est survenue");
    }
  
}

}


  return (
    <main className="bg-custom-purple">

        <NavAsso></NavAsso>


        <div className="flex flex-col w-1/3 m-auto pb-40">
            <h1 className="text-custom-light-purple text-3xl font-bold pt-24 pb-20">Modifier le profil de l'animal</h1>

            <form onSubmit={handlePetEdit} className="text-white text-sm">

                <div className="name flex flex-col">
                  <label htmlFor="name">Nom de l'animal</label>
                  <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="image flex flex-col">
                  <label htmlFor="image">Images</label>
                  <input type="text" name="image" id="image" onChange={(e) => setImage(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="race flex flex-col">
                  <label htmlFor="race">Race</label>
                  <input type="text" name="race" id="race" onChange={(e) => setRace(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />
                </div>

                <div className="gender flex flex-col">
                  <label htmlFor="gender">Genre</label>
                  <input type="text" name="gender" id="gender" 
                  onChange={(e) => setGender(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="birthyear flex flex-col">
                  <label htmlFor="birthyear">Année de naissance</label>
                  <input type="date" name="birthyear" id="birthyear" onChange={(e) => setBirthyear(e.target.value)}className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="getAlong flex flex-col py-4">
                  <p className='font-medium pb-2'>Entente avec :</p>
                  <ul className='pl-4'>
                    <li>
                      <label htmlFor="withCats">les chats</label>
                      <input type="checkbox" name="withCats" id="withCats" onChange={(e) => setWithCats(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 ml-4 mr-2" />
                    </li>

                    <li>
                      <label htmlFor="withDogs">les chiens</label>
                      <input type="checkbox" name="withDogs" onChange={(e) => setWithDogs(e.target.value)} id="withDogs" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 ml-4 mr-2" /> 
                    </li>

                    <li>
                      <label htmlFor="withChildren">les enfants</label>
                      <input type="checkbox" name="withCatsYes" id="withCats" onChange={(e) => setWithChildren(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 ml-4 mr-2" />
                    </li>
                  </ul>
                  
                </div>
                

                <div className="sos flex">
                  <label htmlFor="sos">SOS</label>
                  <input type="checkbox" name="sos" id="sos" onChange={(e) => setSos(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 ml-4" />  
                </div>
                

                <div className="quickDescrition flex flex-col">
                  <label htmlFor="quickDescrition">Description rapide</label>
                  <textarea name="description" id="description" onChange={(e) => setQuickDescription(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>
                

                <div className="description flex flex-col">
                  <label htmlFor="description">Description</label>
                  <textarea name="description" id="description" onChange={(e) => setDescription(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />
                </div>
                
                <div className="flex flex-col pt-10">
                  <Button
                        title={'Enregistrer'}
                        bgColor={'bg-custom-light-purple'}
                        border={'border border-white'}
                        color={'text-white'}
                        size={'w-fit'}
                        hover={'hover:text-custom-purple hover:bg-white hover:borderwhite'}
                        padding={'px-6 py-2'}
                        margin={'m-auto'}   
                  />
                </div>
                

            </form>

            

        </div>

        <Footer></Footer>
    </main>
  )
}

export default pageModificationAnimal