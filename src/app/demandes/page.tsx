"use client"
import { useEffect, useState } from "react";
import { formService } from "../Services/form";
import Image from "next/image";
import { NavAsso } from "../Components/NavAsso";
import Footer from "../Components/Footer";
import { AdoptionFormProps } from "../Utils/type";
import { ButtonStateProps } from "../Utils/type";
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from "react-loader-spinner";

const FormsByAssoPage = () => {
    
    const [formList, setFormList] = useState <AdoptionFormProps>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    useEffect(() => {
        fetchForms();
}, []);
    
    
    const fetchForms = async () => {
        setIsLoading(true);
        // setError(null);
        try {
        const response = await formService.getFormsByAsso();
        setFormList(response);

        } catch (error) {
        // setError("Failed to fetch meals. Please try again.");
        console.error("Erreur pendant la récupération des formulaires :", error);
        } 
        finally {
          setIsLoading(false);
        }
    };
    console.log(formList);

    if (isLoading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <Oval
              height={80}
              width={80}
              color="#FF8DDC"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#333333"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        );
      }

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
                            
            </div>

        <Footer></Footer>
        </main>
    )
}
    
export default FormsByAssoPage


    

