"use client"
import React from 'react'
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import Button from "../Components/Button";


const pageCreationAnimal = () => {
  return (
    <main className="bg-custom-purple">

        <Nav></Nav>

        <div className="flex flex-col w-1/3 m-auto pb-40">
            <h1 className="text-custom-light-purple text-3xl font-bold pt-24 pb-20">Créer le profil d'un animal</h1>

            <form action=""  className="text-white text-sm">

                <div className="name flex flex-col">
                  <label htmlFor="name">Nom de l'animal</label>
                  <input type="text" name="name" id="name" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>

                <div className="image flex flex-col">
                  <label htmlFor="image">Images</label>
                  <input type="file" name="image" id="image" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>

                <div className="race flex flex-col">
                  <label htmlFor="race">Race</label>
                  <input type="text" name="race" id="race" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />
                </div>

                <div className="gender flex flex-col">
                  <label htmlFor="gender">Genre</label>
                  <input type="text" name="gender" id="gender" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>

                <div className="birthyear flex flex-col">
                  <label htmlFor="birthyear">Année de naissance</label>
                  <input type="date" name="birthyear" id="birthyear" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>

                <div className="withCats flex ">
                  <label htmlFor="withCats">Entente avec les chats</label>
                  <input type="radio" name="withCatsYes" id="withCatsYes" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1 ml-4" />
                  <label htmlFor="withCatsYes">Oui</label>
                  <input type="radio" name="withCatsNo" id="withCatsNo" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1 ml-4" />
                  <label htmlFor="withCatsNo">Non</label>
                </div>
                
                
                <div className="withDogs flex ">
                  <label htmlFor="withDogs">Entente avec les chiens</label>
                  <input type="radio" name="withDogs" id="withDogs" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1 ml-4"/>  
                </div>
                

                <div className="withChildren flex ">
                  <label htmlFor="withChildren">Entente avec les enfants</label>
                  <input type="radio" name="withChildren" id="withChildren" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1 ml-4" />  
                </div>
                

                <div className="sos flex ">
                  <label htmlFor="sos">SOS</label>
                  <input type="radio" name="sos" id="sos" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1 ml-4" />  
                </div>
                

                <div className="quickDescrition flex flex-col">
                  <label htmlFor="quickDescrition">Description rapide</label>
                  <input type="text" name="quickDescrition" id="quickDescrition" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>
                

                <div className="description flex flex-col">
                  <label htmlFor="description">Description</label>
                  <textarea name="description" id="description" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
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

            

        </div>

        <Footer></Footer>
    </main>
  )
}

export default pageCreationAnimal