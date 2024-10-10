"use client"
import { useEffect, useState } from "react";
import { formService } from "../Services/form";
import Image from "next/image";
import { NavAsso } from "../Components/NavAsso";
import Footer from "../Components/Footer";
import { AdoptionFormProps } from "../Utils/type";
import { ButtonStateProps } from "../Utils/type";
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';


const FormsByAssoPage = () => {
    
    const [formList, setFormList] = useState<AdoptionFormProps | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { push } = useRouter();
    
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            toast.error("Vous devez être connecté pour accéder à cette page.");
            push("/connexion");
        } else {
            fetchForms();
        }
    }, [push]);
    
    
    const fetchForms = async () => {
        setIsLoading(true);
      
        try {
        const response = await formService.getFormsByAsso();
        toast.success("Formulaire envoyé");
        setFormList(response);

        } catch (error) {
        
        console.error("Erreur pendant la récupération des formulaires :", error);
        toast.success("Une erreur s'est produite");
        } 
        finally {
          setIsLoading(false);
        }
    };
    console.log(formList);

    

    return (
        <main className="bg-custom-purple">

            <NavAsso></NavAsso>

            <div className="w-full flex p-6 pt-20 justify-center text-custom-cream">
                <h3 className="flex text-3xl text-center font-bold">Demandes d'adoption</h3>
                <p></p>
            </div>

            

            {/* <div className="flex flex-wrap cards gap-4 mx-14 md:mx-2 md:gap-8 justify-center">
                {formList && (
                    formList.map((form : AdoptionFormProps) => (
                        
                        
                        <div className={`card flex bg-custom-cream flex-col max-sm:full sm:1/2 md:w-1/3 lg:w-1/4 p-4 `}>
                            <label
                            key={form.id}   
                            >
                            
                            <h4 className="name flex text-lg font-bold text-custom-purple py-2">Demandes pour {form.name}</h4> 
                            <p>de : {form.form.map((f: { lastname: string; }) => f.lastname).join(' ')} {form.form.map((f: { firstname: string; }) => f.firstname).join(' ')} </p>

                            <p>date de la demande : {form.form.map((f: { date: string; }) => f.date)} </p>

                            <p> {form.form.map((f: { email: string; }) => f.email)} </p>

                            <p> {form.form.map((f: { postalCode: string; }) => f.postalCode)} </p>

                            <p> {form.form.map((f: { phone: string; }) => f.phone)} </p>

                            <p> {form.form.map((f: { message: string; }) => f.message)} </p>

                            <p> {form.form.map((f: { pet_id: string; }) => f.pet_id)} </p>

                            
                            </label>
  
                        </div>

                        
                        
                   

                    ))
                )}
                            
            </div> */}

            <div className="flex flex-wrap cards  gap-4 mx-14 md:mx-2 md:gap-8 justify-center">

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

                {formList && formList.map((form: AdoptionFormProps) => (

                    <div className={`card flex bg-custom-cream p-4 pb-6 m-4 flex-col max-sm:full sm:1/2 md:w-1/3 lg:w-1/4 `} key={formList.id}>
                        <label key={form.id}>

                        <h4 className="name flex text-lg font-bold text-custom-light-purple py-2">Demandes pour {form.name}</h4> 
                        
                        {/* Display individual form details */}
                        {form.form.map((item: AdoptionFormProps, itemIndex: number) => (
                            <div className="pb-6 pt-4 border-b border-black-400">
                            <p>M ou Mme : <span className="font-bold">{item.firstname} {item.lastname}</span> </p>
                            <p>Date de la demande : {item.dateForm}</p>
                            <p>Email : {item.email}</p>
                            <p>Code postal : {item.postalCode}</p>
                            <p>Téléphone : {item.phone}</p>
                            <p>Message : {item.message}</p>
                            <p>Pet ID : {item.pet_id}</p>
                            </div>
                        ))}
                        </label>
                        
                    </div>
                ))}

            </div>


        <Footer></Footer>
        </main>
    )
}
    
export default FormsByAssoPage


    

