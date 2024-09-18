"use client"
import React, { useEffect, useState } from 'react'
import Footer from "../Components/Footer";
import Button from "../Components/ButtonAction";
import { NavAsso } from '../Components/NavAsso';
import { userService } from '../Services/user';
import { CardAssoProps, ProfilAssoProps } from '../Utils/type';


const pageInfos = () => {

    const [userData, setUserData] = useState ([]);
    
    
    useEffect(() => {
        fetchData();
}, []);
    
    
    const fetchData = async () => {
        // setIsLoading(true);
        // setError(null);
        try {
        const response = await userService.getAssoProfil();
        setUserData(response);
        } catch (error) {
        // setError("Failed to fetch meals. Please try again.");
        console.error("Erreur pendant la récupération des information de l'association :", error);
        } 
        // finally {
        //   setIsLoading(false);
        // }
    };
    console.log(userData);



  return (
    <main className="bg-custom-purple">

        <NavAsso></NavAsso>

        <div className="flex flex-col m-auto pb-40 w-2/3 max-w-md mx-auto">
            <h1 className="text-custom-light-purple text-3xl font-bold pt-24 pb-20">Mes informations</h1>

            
                {userData && (
                    userData.map((user : ProfilAssoProps) => (
                        <div>
                            <div className="name flex flex-col">
                               <h5 className="name">Nom de l'association : {user.nameAsso}</h5>
                            </div>

                            <div className="lastname flex flex-col">
                                <h5 className="lastname">Nom du représentant : {user.lastname}</h5>
                            </div>

                            <div className="firstname flex flex-col">
                                <h5 className="firstname">Prénom du représentant : {user.firstname}</h5>
                            </div>

                            <div className="email flex flex-col">
                                <h5 className="email">Email : {user.email} </h5>
                            </div>

                            <div className="password flex flex-col">
                                <h5 className="password">Mot de passe*</h5>
                            </div>

                            <div className="password2 flex flex-col">
                                <h5 className="password2">Vérification mot de passe*</h5>
                            </div>
                            
                            
                            <div className="address flex flex-col">
                                <h5 className="address">Adresse de l'association : {user.address}</h5>
                            </div>
                            

                            <div className="postalCode flex flex-col">
                                <h5 className="postalCode">Code postal :  {user.postalCode}</h5>
                            </div>
                            

                            <div className="city flex flex-col">
                                <h5 className="city">Ville : {user.city}</h5>
                            </div>
                            

                            <div className="phone flex flex-col">
                                <h5 className="phone">Téléphone : {user.phone}</h5>
                            </div>
                            

                            <div className="siret flex flex-col">
                                <h5 className="siret">SIRET : {user.siret}</h5>
                            </div>
                        </div>
                        
                    ))
                )}
                <div className="flex flex-col pt-10">
                  <Button
                        title={'Modifier mes informations'}
                        bgColor={'bg-custom-light-purple'}
                        border={'border border-white'}
                        color={'text-white'}
                        size={'w-fit'}
                        hover={'hover:text-custom-purple  hover:bg-white hover:borderwhite'}
                        padding={'px-6 py-2'}
                        margin={'m-auto'}  
                        action={'modificationInfos'} 
                  />
                  <Button
                        title={'Supprimer mon compte'}
                        bgColor={'bg-custom-light-purple'}
                        border={'border border-white'}
                        color={'text-white'}
                        size={'w-fit'}
                        hover={'hover:text-custom-purple  hover:bg-white hover:borderwhite'}
                        padding={'px-6 py-2'}
                        margin={'m-auto'}  
                        action={''} 
                  />
                </div>
            
        </div>

        <Footer></Footer>
    </main>
    )
   }

export default pageInfos