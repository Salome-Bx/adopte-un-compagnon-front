"use client"
import { useEffect, useState } from "react";
import { formService } from "../Services/form";
import { NavAsso } from "../Components/NavAsso";
import Footer from "../Components/Footer";
import { AdoptionFormProps } from "../Utils/type";
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

        } catch {
            toast.error("Une erreur s'est produite");

        } finally {
            setIsLoading(false);
        }
    };
    

    

    return (
        <main className="bg-custom-purple">

            <NavAsso></NavAsso>

            <div className="w-full flex p-6 pt-20 justify-center text-custom-cream">
                <h3 className="flex text-3xl text-center font-bold">Demandes d'adoption</h3>
                <p></p>
            </div>


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
                        
                        
                        {form.form.map((item: AdoptionFormProps, itemIndex: number) => (
                            <div className="pb-6 pt-4 border-b border-black-400">
                            <p>M ou Mme : <span className="font-bold">{item.firstname} {item.lastname}</span> </p>
                            <p className="mt-2"><span className="text-custom-light-purple">Date de la demande : </span> 
                                {new Date(item.dateForm).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</p>
                            <p className="mt-2"><span className="text-custom-light-purple">Email : </span>{item.email}</p>
                            <p className="mt-2"><span className="text-custom-light-purple">Code postal :</span> {item.postalCode}</p>
                            <p className="mt-2"><span className="text-custom-light-purple">Téléphone :</span> {item.phone}</p>
                            <p className="mt-2"><span className="text-custom-light-purple">Message :</span>{item.message}</p>
                            
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


    

