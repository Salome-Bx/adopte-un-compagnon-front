"use client"
import { useEffect, useState } from "react";
import { formService } from "../Services/form";
import Image from "next/image";
import { NavAsso } from "../Components/NavAsso";
import Footer from "../Components/Footer";
import { AdoptionFormProps } from "../Utils/type";
import { ButtonStateProps } from "../Utils/type";


const AllFormsPage = () => {
    
    const [formList, setFormList] = useState <AdoptionFormProps>();
    const [isClicked, setIsClicked] = useState(false);
    
    
    useEffect(() => {
        fetchForms();
}, []);
    
    
    const fetchForms = async () => {
        // setIsLoading(true);
        // setError(null);
        try {
        const response = await formService.getAllForms();
        setFormList(response);

        } catch (error) {
        // setError("Failed to fetch meals. Please try again.");
        console.error("Erreur pendant la récupération des formulaires :", error);
        } 
        // finally {
        //   setIsLoading(false);
        // }
    };
    console.log(formList);

    return (
        <main className="bg-custom-purple">

            <NavAsso></NavAsso>

            <div className="w-full flex p-6 pt-20 justify-center text-custom-cream">
                <h3 className="flex text-3xl text-center font-bold">Demandes d'adoption</h3>
                <p></p>
            </div>

            

            <div className="flex flex-wrap cards gap-4 mx-14 md:mx-2 md:gap-8 justify-center">
                {formList && (
                    formList.map((form : AdoptionFormProps) => (
                        
                        
                        <div className={`card flex bg-custom-cream flex-col max-sm:full sm:1/2 md:w-1/3 lg:w-1/4 p-4 `}>
                            <label
                            key={form.id}   
                            >
                            <h4 className="name flex text-lg font-bold text-custom-purple py-2">Demande de : {form.lastname} {form.firstname}</h4>
                            <p className="flex text-sm font-bold text-custom-yellow py-2">{form.date}</p>
                            <p className="flex text-sm font-bold text-custom-light-purple py-2">{form.email}</p>
                            <p className="flex text-sm font-bold text-custom-light-purple">{form.postalCode}</p>
                            <p className="flex text-sm font-bold text-custom-light-purple">{form.phone}</p>
                            <p className="flex text-sm font-bold text-custom-purple py-2">{form.message}</p>
                            <p className="flex text-sm font-bold text-custom-purple py-2">{form.pet_id}</p>
                            </label>

                              
                            
                            
                        </div>
                        
                   

                    ))
                )}
                            
            </div>

        <Footer></Footer>
        </main>
    )
}
    
export default AllFormsPage


    

