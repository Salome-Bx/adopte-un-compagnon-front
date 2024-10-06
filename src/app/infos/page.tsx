"use client"
import React, { useEffect, useState } from 'react'
import Footer from "../Components/Footer";
import Button from "../Components/ButtonAction";
import { NavAsso } from '../Components/NavAsso';
import { userService } from '../Services/user';
import { CardAssoProps, ProfilAssoProps } from '../Utils/type';
import { Oval } from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';
import toast from 'react-hot-toast';


const pageInfos = () => {

   
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [userData, setUserData] = useState<ProfilAssoProps | null>(null); 
    
    
    useEffect(() => {
        fetchData();
}, []);
    
    
    const fetchData = async () => {
        setIsLoading(true);
        // setError(null);
        try {
        const response = await userService.getAssoById();
        setUserData(response);
        } catch (error) {
        // setError("Failed to fetch meals. Please try again.");
        toast.error("Erreur pendant la récupération des information de l'association");
        } 
        finally {
          setIsLoading(false);
        }
    };

  return (
    <main className="bg-custom-purple">

        <NavAsso></NavAsso>

        <div className="flex flex-col m-auto pb-40 w-2/3 max-w-md mx-auto">
            <h1 className="text-custom-light-purple text-3xl font-bold pt-24 pb-20">Mes informations</h1>
                
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
            
                {userData && (
                    <div className="text-white w-full">
                        <div className="name flex flex-col border-b border-white pt-6">
                            <h5 className="name">
                                <span className="font-bold">Nom de l'association :</span> {userData.nameAsso}
                            </h5>
                        </div>

                        <div className="lastname flex flex-col border-b border-white pt-6">
                            <h5 className="lastname">
                                <span className="font-bold">Nom du représentant :</span> {userData.lastname}
                            </h5>
                        </div>

                        <div className="firstname flex flex-col border-b border-white pt-6">
                            <h5 className="firstname">
                                <span className="font-bold">Prénom du représentant :</span> {userData.firstname}
                            </h5>
                        </div>

                        <div className="email flex flex-col border-b border-white pt-6">
                            <h5 className="email">
                                <span className="font-bold">Email :</span> {userData.email}
                            </h5>
                        </div>

                        <div className="address flex flex-col border-b border-white pt-6">
                            <h5 className="address">
                                <span className="font-bold">Adresse de l'association :</span> {userData.address}
                            </h5>
                        </div>

                        <div className="postalCode flex flex-col border-b border-white pt-6">
                            <h5 className="postalCode">
                                <span className="font-bold">Code postal :</span> {userData.postalCode}
                            </h5>
                        </div>

                        <div className="city flex flex-col border-b border-white pt-6">
                            <h5 className="city">
                                <span className="font-bold">Ville :</span> {userData.city}
                            </h5>
                        </div>

                        <div className="phone flex flex-col border-b border-white pt-6">
                            <h5 className="phone">
                                <span className="font-bold">Téléphone :</span> {userData.phone}
                            </h5>
                        </div>

                        <div className="siret flex flex-col border-b border-white pt-6">
                            <h5 className="siret">
                                <span className="font-bold">SIRET :</span> {userData.siret}
                            </h5>
                        </div>
                        <div className="flex flex-col pt-10">
                    </div>

                    <Button
                            title={'Modifier mes informations'}
                            bgColor={'bg-custom-light-purple'}
                            border={'border border-white'}
                            color={'text-white'}
                            size={'w-fit'}
                            hover={'hover:text-custom-purple  hover:bg-white hover:borderwhite'}
                            padding={'px-6 py-2'}
                            margin={'m-auto mt-4'}  
                            action={`modificationInfos/${userData.id}`} 
                    />
                    <Button
                            title={'Supprimer mon compte'}
                            bgColor={'bg-custom-light-purple'}
                            border={'border border-white'}
                            color={'text-white'}
                            size={'w-fit'}
                            hover={'hover:text-custom-purple  hover:bg-white hover:borderwhite'}
                            padding={'px-6 py-2'}
                            margin={'m-auto mt-4'}  
                            action={"connexion"} 
                    />
                </div>
                )}

                
                
            
        </div>

        <Footer></Footer>
    </main>
    )
   }

export default pageInfos