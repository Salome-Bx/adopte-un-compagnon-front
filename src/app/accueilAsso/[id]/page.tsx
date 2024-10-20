"use client"
import React, { useEffect, useState } from 'react'
import { NavAsso } from "../../Components/NavAsso";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import { useRouter } from 'next/navigation';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { petService } from '../../Services/pet';
import { Oval } from "react-loader-spinner";
import { decode } from 'html-entities';


const pageModificationAnimal = ( {params}: {params: {id: number}}) => {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [race, setRace] = useState('')
  const [gender, setGender] = useState('')
  const [birthyear, setBirthyear] = useState('')
  const [withCats, setWithCats] = useState<boolean>(false);
  const [withDogs, setWithDogs] = useState<boolean>(false);
  const [withChildren, setWithChildren] = useState<boolean>(false);
  const [sos, setSos] = useState<boolean>(false);
  const [quickDescription, setQuickDescription] = useState('')
  const [description, setDescription] = useState('')
  const [userExists, setUserExists] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {push} = useRouter();


  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      toast.error("Vous devez être connecté pour accéder à cette page.");
      push("/connexion");
    } else {
      setUserExists(true);
    }
  }, [push]);


  useEffect(() => {
    const fetchPetData = async () => {
      setIsLoading(true);
      try {
        const petData = await petService.getPetById(params.id);
        const { name, image, race, gender, birthyear, getAlongCats, getAlongDogs, getAlongChildren, sos, quickDescription, description } = petData;

        const formattedBirthyear = new Date(birthyear).toISOString().split("T")[0];

        setName(name);
        setImage(image);
        setRace(race);
        setGender(gender);
        setBirthyear(formattedBirthyear);
        setWithCats(getAlongCats);
        setWithDogs(getAlongDogs);
        setWithChildren(getAlongChildren);
        setSos(sos);
        setQuickDescription(quickDescription);
        setDescription(description);

      } catch (error) {
        toast.error("Erreur lors du chargement des informations de l'animal.");
        
      } finally {
        setIsLoading(false);
      }
    };

    fetchPetData();
  }, [params.id]);

  const handlePetEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!name || !race || !gender || !birthyear || !quickDescription || !description) {
      
      toast.error("Veuillez remplir au moins un champ.");

  } else {

    let formData = {
        id: params.id,
        name: name,
        image : image,
        race: race,
        gender: gender,
        birthyear: birthyear,
        get_along_cats: withCats,
        get_along_dogs: withDogs,
        get_along_children: withChildren,
        sos: sos,
        quick_description: quickDescription,
        description: description
    }
    
    try {
      await petService.editPet(params.id, formData);
      toast.success("L'animal a bien été modifié !");
      push(`/accueilAsso/${params.id}`);

    } catch (error) {
      toast.error("Une erreur s'est produite. Impossible d'enregistrer l'animal.");
      
    } finally {
      setIsLoading(false);
    }
  }
}

  const handleDelete = async () => {
    const confirmed = window.confirm("Voulez-vous vraiment supprimer cet animal ?");
    if (confirmed) {
      setIsLoading(true);
      
      try {
        await petService.deletePet(params.id);
        toast.success("L'animal a été supprimé avec succès.");
        push("/accueilAsso");

      } catch (error) {
        toast.error("Erreur lors de la suppression de l'animal.");

      } finally {
        setIsLoading(false);
      }
    }
  };

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


        <div className="flex flex-col w-1/3 m-auto pb-40">
            <h1 className="text-custom-light-violet text-3xl font-bold pt-24 pb-20">Modifier le profil de l'animal</h1>

            <form onSubmit={handlePetEdit} className="text-white text-sm">

                <div className="name flex flex-col">
                  <label htmlFor="name">Nom de l'animal</label>
                  <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="image flex flex-col">
                  <label htmlFor="image">Images</label>
                  <input type="text" name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="race flex flex-col">
                  <label htmlFor="race">Race</label>
                  <input type="text" name="race" id="race" value={race} onChange={(e) => setRace(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />
                </div>

                <div className="gender flex flex-col">
                  <label htmlFor="gender">Genre</label>
                  <input type="text" name="gender" id="gender" 
                  onChange={(e) => setGender(e.target.value)} value={gender} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="birthyear flex flex-col">
                  <label htmlFor="birthyear">Année de naissance</label>
                  <input type="date" name="birthyear" id="birthyear" value={birthyear} onChange={(e) => setBirthyear(e.target.value)}className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="getAlong flex flex-col py-4">
                  <p className='font-medium pb-2'>Entente avec :</p>
                  <ul className='pl-4'>
                    <li>
                      <label htmlFor="get_along_cats">les chats</label>
                      <input type="checkbox" name="get_along_cats" id="get_along_cats" checked={withCats} onChange={(e) => setWithCats(e.target.checked)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 ml-4 mr-2" />
                    </li>

                    <li>
                      <label htmlFor="get_along_dogs">les chiens</label>
                      <input type="checkbox" name="get_along_dogs" id="get_along_dogs" checked={withDogs} onChange={(e) => setWithDogs(e.target.checked)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 ml-4 mr-2" /> 
                    </li>

                    <li>
                      <label htmlFor="get_along_children">les enfants</label>
                      <input type="checkbox" name="get_along_children" id="get_along_children" checked={withChildren} onChange={(e) => setWithChildren(e.target.checked)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 ml-4 mr-2" />
                    </li>
                  </ul>
                  
                </div>
                

                <div className="sos flex">
                  <label htmlFor="sos">SOS</label>
                  <input type="checkbox" name="sos" id="sos" checked={sos} onChange={(e) => setSos(e.target.checked)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 ml-4" />  
                </div>
                

                <div className="quick_description flex flex-col">
                  <label htmlFor="quick_description">Description rapide</label>
                  <textarea name="quick_description" id="quick_description" value={decode(quickDescription)} onChange={(e) => setQuickDescription(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>
                

                <div className="description flex flex-col">
                  <label htmlFor="description">Description</label>
                  <textarea name="description" id="description" value={decode(description)} onChange={(e) => setDescription(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />
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

                <button 
                    onClick={handleDelete} 
                    className='flex bg-custom-light-purple px-6 py-2 m-auto mt-4 border border-white text-white w-fit hover:text-custom-purple hover:bg-white hover:borderwhite'
                >
                    Supprimer
                </button>
                

            </form>

            

        </div>

        <Footer></Footer>
    </main>
  )
}

export default pageModificationAnimal