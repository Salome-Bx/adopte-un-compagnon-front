"use client"
import React, { useEffect, useState } from 'react'
import { NavAsso } from "../Components/NavAsso";
import Footer from "../Components/Footer";
import Button from "../Components/ButtonAction";
import { useRouter } from 'next/navigation';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { petService } from '../Services/pet';
import { Oval } from 'react-loader-spinner';


const pageCreationAnimal = () => {

  
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
  const [speciesId, setSpeciesId] = useState('')
  const [assoId, setAssoId] = useState('')
  const [isCategorized, setIsCategorized] = useState(false);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {push} = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    
    if (!user) {
      toast.error("Vous devez être connecté pour accéder à cette page.");
      push("/connexion");
    } else {
      const userObject = JSON.parse(user);
      const assoId = userObject.id;
      if (assoId) {
        setAssoId(assoId);
      }
    }
  }, [push]);

  const handlePetCreation = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    if (!name || !race || !gender || !birthyear || !quickDescription || !description ) {
      toast.error("Veuillez remplir tous les champs");
      push("/creationAnimal");
      setIsLoading(false);
    
    } else if (quickDescription.length < 30 || quickDescription.length > 120) {
      toast.error("La description rapide doit contenir entre 30 et 120 caractères.");
      push("/creationAnimal");
      setIsLoading(false);

    } else if (description.length < 30 || description.length > 255) {
      toast.error("La description doit contenir entre 30 et 255 caractères.");
      push("/creationAnimal");
      setIsLoading(false);  

    } else {

    let data = {
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
        description: description,
        categorised_dog: isCategorized,
        species_id: speciesId,
        asso_id: assoId
    }

    
    try {
      await petService.createPet(data);
      toast.success("L'animal a bien été crée !");
      push("/creationAnimal");

    } catch (error) {
      toast.error("Une erreur s'est produite lors de l'enregistrement. Veuillez réessayer.");
      push("/creationAnimal");
    
    } finally {
      setIsLoading(false);
    }
  }
}

const handleSpeciesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const value = e.target.value;
  setSpeciesId(value);
  if (value !== '2') {
    setIsCategorized(false);
  }
};

  return (
    <main className="bg-custom-purple">

        <NavAsso></NavAsso>


        <div className="flex flex-col w-2/3 lg:w-1/3 m-auto pb-40">
            <h1 className="text-custom-light-purple text-3xl font-bold pt-24 pb-20">Créer le profil d'un animal</h1>

            <form onSubmit={handlePetCreation} className="text-white text-sm">

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

                <div className="name flex flex-col">
                  <label htmlFor="name">Nom de l'animal*</label>
                  <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="species flex flex-col">
                  <label htmlFor="species">Espèce*</label>
                  <select 
                  name="species" 
                  id="species" 
                  className="border-4 border-white bg-custom-purple rounded-3xl p-2 mt-1 mb-4"
                  onChange={(e) => setSpeciesId(e.target.value)}
                  value={speciesId} >
                    <option value="" className="text-custom-light-purple" disabled>Espèce</option>
                    <option value="1">Chat</option>
                    <option value="2">Chien</option>
                  </select>
                  {speciesId === '2' && (
                    <div className="mt-2">
                      <label>
                        <input 
                          type="checkbox"
                          className="mr-2 mb-5 p-2 mt-1" 
                          checked={isCategorized} 
                          onChange={(e) => setIsCategorized(e.target.checked)} 
                        />
                        Chien catégorisé
                      </label>
                    </div>
                  )}
                </div>

          
                <div className="image flex flex-col">
                  <label htmlFor="image">Image*</label>
                  <input type="text" name="image" id="image" onChange={(e) => setImage(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="race flex flex-col">
                  <label htmlFor="race">Race*</label>
                  <input type="text" name="race" id="race" onChange={(e) => setRace(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />
                </div>

                <div className="gender flex flex-col">
                  <label htmlFor="gender">Genre*</label>
                  <input type="text" name="gender" id="gender" 
                  onChange={(e) => setGender(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="birthyear flex flex-col">
                  <label htmlFor="birthyear">Année de naissance*</label>
                  <input type="date" name="birthyear" id="birthyear" onChange={(e) => setBirthyear(e.target.value)}className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="getAlong flex flex-col py-4">
                  <p className='font-medium pb-2'>Entente avec :</p>
                  <ul>
                    <li>
                      <input type="checkbox" name="withCats" id="withCats" onChange={(e) => setWithCats(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 ml-4 mr-2" />
                      <label htmlFor="withCats">les chats</label>
                    </li>

                    <li>
                      <input type="checkbox" name="withDogs" onChange={(e) => setWithDogs(e.target.value)} id="withDogs" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 ml-4 mr-2" /> 
                      <label htmlFor="withDogs">les chiens</label>
                    </li>

                    <li>
                      <input type="checkbox" name="withCatsYes" id="withCats" onChange={(e) => setWithChildren(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 ml-4 mr-2" />
                      <label htmlFor="withChildren">les enfants</label>
                    </li>
                  </ul>
                  
                </div>
                

                <div className="sos flex">
                  <input type="checkbox" name="sos" id="sos" onChange={(e) => setSos(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mr-2 mb-5 p-2 mt-1" />  
                  <label htmlFor="sos">SOS</label>
                </div>
                

                <div className="quickDescription flex flex-col">
                  <label htmlFor="quickDescription">Description rapide*</label>
                  <p className="text-purple-500">120 caractères max</p>
                  <textarea name="quickDescription" id="quickDescription" onChange={(e) => setQuickDescription(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 maxLength={120}" />  
                </div>
                

                <div className="description flex flex-col">
                  <label htmlFor="description">Description*</label>
                  <textarea name="description" id="description" onChange={(e) => setDescription(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1 h-36" />
                </div>
                
                <div className="flex flex-col pt-10">
                  <Button
                        title={'Enregistrer'}
                        bgColor={'bg-custom-light-purple'}
                        border={'border border-white'}
                        color={'text-white'}
                        size={'w-fit'}
                        hover={'hover:text-custom-purple  hover:bg-white hover:borderwhite'}
                        padding={'px-6 py-2'}
                        margin={'m-auto'}
                        action=''
                  />
                </div>
            </form>
            <div className=" text-sm w-full max-w-md mx-auto">
              <p className="text-sm text-purple-500 pt-6">* Champs obligatoires</p>
            </div>

        </div>

        <Footer></Footer>
    </main>
  )
}

export default pageCreationAnimal