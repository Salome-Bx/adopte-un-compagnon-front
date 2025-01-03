"use client"
import React, { useEffect, useState } from 'react'
import { NavAsso } from "../Components/NavAsso";
import Footer from "../Components/Footer";
import Button from "../Components/ButtonAction";
import { petService } from '../Services/pet';
import { EditProfilPetProps } from '../Utils/type';
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import toast from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';
import { useRouter } from 'next/navigation';
import { decode } from 'html-entities';


const AccueilAssoPage = () => {
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [petsByAssoList, setPetsByAssoList] = useState<EditProfilPetProps>();
    const [userExists, setUserExists] = useState<boolean>(false);
    const {push} = useRouter();
    
    const formatDate = (dateString : string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear(); 
        return `${day} ${month} ${year}`; 
    };

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            toast.error("Vous devez être connecté pour accéder à cette page.");
            push('/connexion');
        } else {
            setUserExists(true);
            fetchPetsByAsso();
        }
    }, []);

    const fetchPetsByAsso = async () => {

        setIsLoading(true);
        
        try {
        const response = await petService.getPetsByAsso();
        setPetsByAssoList(response);

        } catch (error) {
        toast.error("Erreur pendant la récupération de la liste des animaux");
        
        } finally {
          setIsLoading(false);
        }
    };
    
    
    

    

  return (
    <main className="bg-custom-purple w-full ">
        <NavAsso></NavAsso>
        
            <h3 className="text-3xl font-bold text-white mt-12 ml-12 text-center">Bienvenue sur votre espace</h3>
            
            <h5 className="text-custom-light-violet mt-10 mb-6 ml-12 font-bold text-3xl text-center">Les profils de vos pensionnaires :</h5>

            

            <div className="flex flex-wrap cards gap-4 mx-14 md:mx-2 md:gap-8 justify-center mb-32">
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

                    <div className='w-full text-center'>
                        <Button 
                           title={'Créer un animal'}
                            bgColor={'bg-custom-purple'}
                            border={'border border-white'}
                            color={'text-white font-regular'}
                            size={'w-fit'}
                            hover={'hover:text-custom-yellow hover:border-custom-yellow'}
                            padding={'px-2'}
                            margin={'m-2'} 
                            action={`creationAnimal`}
                        />
                    </div>

                {petsByAssoList && (
                    petsByAssoList.map((pet : EditProfilPetProps) => (


                        <div className="card flexflex-col border-4 border-white rounded-2xl max-sm:full sm:1/2 md:w-1/3 lg:w-1/4">
                            

                            <label
                            key={pet.id}   
                            >
                                <div className="flex place-items-center">
                                    <h4 className="name ml-2 flex text-2xl font-bold text-white py-2">{pet.name}</h4
                                    >
                                    {pet.categorisedDog && (
                                        <p className="text-custom-light-violet flex ml-2 text-sm mt-2">Chien catégorisé</p>
                                    )}     
                                </div>
                                

                                <div className="relative overflow-hidden h-[300px]">
                                    <div className="absolute inset-0 flex items-center justify-center w-full">
                                        {pet.image.startsWith('img/') ? (
                                            <Image
                                                src={`/${pet.image}`}
                                                width={300}
                                                height={70}
                                                alt="photo de l'animal"
                                                className="object-contain"
                                                style={{ width: '100%' }}
                                            />
                                        ) : (
                                            <Image
                                                src={pet.image.replace(/&amp;/g, '&')}
                                                width={300}
                                                height={70}
                                                alt="photo de l'animal"
                                                className="object-contain"
                                                style={{ width: '100%' }}
                                            />
                                        )}

                                    </div>
                                </div>

                                <div className="flex bg-custom-purple h-250 flex-col align-top">
                                        
                                    <div className="icons flex flex-row w-full justify-center p-2">
                                        <div className="flex rounded-full bg-custom-light-purple w-7 h-7 justify-center">
                                            <Image
                                                src="img/icones/cat-white.svg"
                                                width={22}
                                                height={22}
                                                alt="icon of cat"
                                                className="flex items-center"
                                            />
                                        </div>

                                        <p className="ml-2 mr-4 text-white"> {pet.getAlongCats ? "Oui" : "Non"}</p>

                                        <div className="flex rounded-full bg-custom-light-purple w-7 h-7 justify-center">
                                            <Image
                                                src="img/icones/dog-white.svg"
                                                width={22}
                                                height={22}
                                                alt="icon of dog"
                                                className="flex items-center" 
                                            /> 
                                        </div>
                                        <p className="ml-2 mr-4 text-white"> {pet.getAlongDogs ? "Oui" : "Non"}</p>

                                        <div className="flex rounded-full bg-custom-light-purple w-7 h-7 justify-center">
                                            <Image
                                                src="img/icones/children-white.svg"
                                                width={22}
                                                height={22}
                                                alt="icon of children"
                                                className="flex items-center"
                                            />    
                                        </div>
                                        <p className="ml-2 mr-4 text-white"> {pet.getAlongChildren ? "Oui" : "Non"}</p>

                                    </div>

                                    <hr className="w-4/5 justify-center m-auto"/>
                                    <div className="flex text w-full h-1/2 flex-col px-5 pb-2 text-white text-sm">
                                        <div className="flex flex-row mt-2 pb-2 justify-between font-bold">
                                            <p className="flex age text-ml text-white">Né le {formatDate(pet.birthyear)}</p> 
                                            <p  className="flex race text-ml text-white">{pet.race}</p>   
                                        </div>
                                        <p className="font-bold mb-2 mt-4 text-custom-light-violet">Description rapide :</p>    
                                        <p className="">{decode(pet.quickDescription)}</p>
                                        <p className="font-bold my-2 mt-4 text-custom-light-violet">Description :</p>
                                        <p className="">{decode(pet.description)}</p>
                                    </div> 
                                    <div className="button flex justify-end text-xs pr-2">
                                        <Button 
                                            title={'Modifier'}
                                            bgColor={'bg-custom-purple'}
                                            border={'border border-white'}
                                            color={'text-white font-regular'}
                                            size={'w-fit'}
                                            hover={'hover:text-custom-yellow hover:border-custom-yellow'}
                                            padding={'px-2'}
                                            margin={'m-2'} 
                                            action={`accueilAsso/${pet.id}`}
                                        />
                                        
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))
                )}
            </div>    
            <Footer></Footer>
            
    </main>
  )
}

export default AccueilAssoPage