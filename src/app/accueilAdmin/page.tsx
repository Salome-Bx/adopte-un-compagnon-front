"use client"
import React, { useEffect, useState } from 'react'
import { NavAdmin } from "../Components/NavAdmin";
import Footer from "../Components/Footer";
import { Oval } from 'react-loader-spinner';
import { userService } from '../Services/user';
import { CardAssoProps } from '../Utils/type';
import Image from "next/image";
import toast from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import { TbTrashFilled } from "react-icons/tb";
import { useRouter } from 'next/navigation';


const AccueilAdminPage = () => {

    const [assoList, setAssoList] = useState ([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { push } = useRouter();
    
    
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            toast.error("Accès refusé. Vous devez être un administrateur.");
            push("/connexion");
            return;
        }

        const parsedUser = JSON.parse(user);
        if (!parsedUser.roles.includes("ROLE_ADMIN")) {
            toast.error("Accès refusé. Vous devez être un administrateur.");
            push("/connexion");
        } else {
            fetchAssos();
        }
    }, [push]);
    
    
    const fetchAssos = async () => {
        setIsLoading(true);
        
        try {
            const response = await userService.getAllAssos();

            const onlyAssos = response.filter((asso: CardAssoProps) => {
            return !(asso.roles && Array.isArray(asso.roles) && asso.roles.includes("ROLE_ADMIN"));
            });
            setAssoList(onlyAssos);

        } catch (error) {
            toast.error("Une erreur s'est produite, impossible d'importer les associations");

        } finally {
          setIsLoading(false);
        }
    };
   

    

    const handleDelete = async (id: number) => {
        const confirmed = window.confirm("Voulez-vous vraiment supprimer cette association ?");
        if (confirmed) {
          setIsLoading(true);
          
          try {
            await userService.deleteAssociation(id);
            toast.success("Le compte a été supprimé avec succès.");
            fetchAssos();
              
          } catch (error) {
            toast.error("Erreur lors de la suppression du compte.");

          } finally {
            setIsLoading(false);
          }
        }
      };
    

  return (
    <main className="bg-custom-cream">
        <NavAdmin></NavAdmin>

        <h1 className='text-custom-purple text-3xl mt-14 mb-14 font-medium text-center'>Bienvenue sur votre espace administrateur</h1>

        <h2 className='text-custom-light-purple font-bold text-lg text-center mb-12'>Toutes les associations :</h2>

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


            <div className="flex flex-wrap cards gap-4 mx-14 md:mx-2 md:gap-8 justify-center mb-28">

            {assoList && (
                assoList.map((asso : CardAssoProps, index) => (
                    
                    <div key={"asso_list_" + index} className="card flex bg-custom-purple h-[430px] align-top flex-col max-sm:full sm:1/2 md:w-1/3 lg:w-1/4">

                        <label
                        key={asso.id}>

                            <div className='titreEtSuppr flex flex-row justify-between pl-10 pr-2'>
                                <h4 className="name flex text-2xl w-fit font-bold text-custom-cream py-2">{asso.nameAsso}</h4>

                                <button 
                                    onClick={() => handleDelete(asso.id)} 
                                    className='flex px-2 mt-4 text-lg text-white w-fit h-fit hover:text-custom-light-purple'
                                >
                                    <TbTrashFilled />
                                </button>
                            </div>

                            <div className="relative overflow-hidden h-[230px] mx-10">
                                <div className="absolute inset-0 flex items-center justify-center w-full ">
                                    <Image
                                        src={`/${asso.image}`}
                                        layout="fill" 
                                        objectFit="cover" 
                                        alt="photo de l'association"
                                    />
                                </div>
                            </div>  
                                    
                            <div className="flex text w-full text-center flex-col px-5 mt-2 h-[150px]">
                                <div className="flex flex-row mt-2 font-bold text-center mx-auto">
                                    <p className="flex text-ml text-white"><span className="font-normal mr-2">Située à</span>{asso.city}</p>
                                </div>
                                <div>
                                    <p className="text-ml text-white">{asso.address}</p>
                                    <p className="text-ml text-white pl-2">{asso.postalCode}</p>   
                                </div>
                                <hr  className="w-4/5 justify-center mx-auto mb-2" />
                                <p className="text-ml text-white"><span className="font-normal mr-2">Contact :</span>{asso.phone}</p>
                                <p className="text-ml text-white">{asso.website}</p>
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

export default AccueilAdminPage