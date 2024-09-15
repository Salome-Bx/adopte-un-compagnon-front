"use client"
import React from 'react'
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import { NavAsso } from '../Components/NavAsso';


const pageModificationInfos = () => {
  return (
    <main className="bg-custom-purple">

        <NavAsso></NavAsso>

        <div className="flex flex-col m-auto pb-40 sm:w-3/4 md:w-3/4 lg:w-1/3 ">
            <h1 className="text-custom-light-purple text-3xl font-bold pt-24 pb-20">Mes informations</h1>

            <form action=""  className="text-white text-sm">

                <div className="name flex flex-col">
                  <label htmlFor="name">Nom de l'association*</label>
                  <input type="text" name="name" id="name" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>

                <div className="lastname flex flex-col">
                  <label htmlFor="lastname">Nom du représentant*</label>
                  <input type="text" name="lastname" id="lastname" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>

                <div className="firstname flex flex-col">
                  <label htmlFor="firstname">Prénom du représentant*</label>
                  <input type="text" name="firstname" id="firstname" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />
                </div>

                <div className="email flex flex-col">
                  <label htmlFor="email">Email*</label>
                  <input type="email" name="email" id="email" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>

                <div className="password flex flex-col">
                  <label htmlFor="password">Mot de passe*</label>
                  <input type="password" name="password" id="password" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>

                <div className="password2 flex flex-col">
                  <label htmlFor="password2">Vérification mot de passe*</label>
                  <input type="password" name="password2" id="password2" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />
                </div>
                
                
                <div className="address flex flex-col">
                  <label htmlFor="address">Adresse de l'association*</label>
                  <input type="text" name="address" id="address" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1"/>  
                </div>
                

                <div className="postalCode flex flex-col">
                  <label htmlFor="postalCode">Code postal*</label>
                  <input type="text" name="postalCode" id="postalCode" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>
                

                <div className="city flex flex-col">
                  <label htmlFor="city">Ville*</label>
                  <input type="text" name="city" id="city" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>
                

                <div className="phone flex flex-col">
                  <label htmlFor="phone">Téléphone*</label>
                  <input type="phone" name="phone" id="phone" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>
                

                <div className="siret flex flex-col">
                  <label htmlFor="siret">SIRET*</label>
                  <input type="text" name="siret" id="siret" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pb-2 mt-1" />  
                </div>
                
                <div className="flex flex-col pt-10">
                  <Button
                        title={'Je crée mon compte'}
                        bgColor={'bg-custom-light-purple'}
                        border={'border border-white'}
                        color={'text-white'}
                        size={'w-fit'}
                        hover={'hover:text-custom-purple  hover:bg-white hover:borderwhite'}
                        padding={'px-6 py-2'}
                        margin={'m-auto'}
                        
                  />
                </div>
                

            </form>

            <p className="text-sm text-white pt-6">* Champs obligatoires</p>
            <p className="text-sm text-white pt-6">En cliquant sur "Je crée mon compte", vous acceptez de vous conformer à la politique et aux conditions générales d’Adopte un Compagnon.</p>

        </div>

        <Footer></Footer>
    </main>
  )
}

export default pageModificationInfos