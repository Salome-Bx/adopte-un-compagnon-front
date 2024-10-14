"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { petService } from "@/app/Services/pet";
import { formService } from "@/app/Services/form";
import { ProfilPetProps } from "@/app/Utils/type";
import { Nav } from "@/app/Components/Nav";
import Footer from "@/app/Components/Footer";
import { useRouter } from 'next/navigation';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from "react-loader-spinner";



const animalProfilPage = ({params}: {params: {id: number}}) => {

    const [petData, setPetData] = useState<ProfilPetProps>();
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {push} = useRouter();
   
   

    useEffect(() => {
      fetchPetProfil();
 
    }, [])

    const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!lastname || !firstname || !email || !postalCode || !phone || !message) {
        toast.error("Veuillez remplir tous les champs");
        
        
      } else {
        
        let formData = {
          lastname : lastname,
          firstname : firstname,
          email : email,
          postalCode : postalCode,
          phone : phone,
          message : message,
          pet_id : params.id,
        
        }
        
        try {
          const response = await formService.newForm(formData);
          toast.success("Formulaire envoyé");
          push("/animauxAdoption");
          
        } catch (error) {
          toast.error("Erreur pendant l'envoi du formulaire");
          push("/animauxAdoption");
        }
      }
    }



    const fetchPetProfil = async () => {
      setIsLoading(true);
      try {
        const repsonse = await petService.getPetById(params.id);
        setPetData(repsonse);
      } catch (error) {
        toast.error("Erreur pendant la récupération de l'animal");
        push("/animauxAdoption");
      }
      finally {
        setIsLoading(false);
      }
    }

    
    

  return (
    <main className="quicksand flex min-h-screen flex-col bg-white w-full">
      <Nav></Nav>

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
                          </div>
                      )}

            {petData && (
                  <div className="informationsEtPhoto flex w-full flex-col lg:flex-row">
                    <div className="bg-custom-cream w-full lg:w-1/2 pl-10">
                      <h3 className="flex nom w-full lg:w-2/3 text-custom-purple text-3xl font-bold pt-10 pb-4">{petData.name}</h3>
                      <div className="flex photo w-full text-custom-purple">
                      <Image
                            src={`/${petData.image}`}
                            width={300}
                            height={200}
                            alt={`picture of ${petData.species}`}
                          />
                      </div>  
                    </div>
                    

                    <div className="flex informations w-3/4 mb-12 text-custom-purple m-auto lg:w-1/2 lg:mr-10">
                      <div className="text w-full lg:w-full sm:m-auto md:m-auto">
                        <h2 className="title text-custom-light-purple text-ml font-medium pb-2 pt-4">Informations</h2>
                        <p className="race">Race : {petData.race}</p>
                        <p className="gender">Genre : {petData.gender}</p>
                        {/* <p className="age">Age : {new Date().getFullYear() - petData.birthyear}</p> */}
                        <p className="withCats">Entente avec les chats : {petData.getAlongCats ? 'Oui' : 'Non'}</p>
                        <p className="withDogs">Entente avec les chiens : {petData.getAlongDogs ? 'Oui' : 'Non'}</p>
                        <p className="withChildren">Entente avec les enfants : {petData.getAlongChildren ? 'Oui' : 'Non'}</p>
                        <p className="sos">SOS : {petData.sos ? 'Oui' : 'Non'}</p>
                        <h2 className="title text-custom-light-purple text-ml font-medium pb-2 pt-4">Description</h2>
                        <p className="description">{petData.description}</p>
                      </div>
                    </div>
              </div>
            )}

            <div className="flex w-full bg-custom-purple m-auto flex-col lg:flex-row">

              <div className="flex lg:w-1/2 lg:ml-14 w-3/4 m-auto form flex-col mt-12">
                  <div className="">
                      <p className="text-custom-light-purple font-medium text-lg">L'association</p>
                      {petData && (
                        <div className="text-white justify-center">
                          <p className="">{petData.asso.nameAsso}</p> 
                          <p className="">{petData.asso.address}</p>
                          <p className="">{petData.asso.postalCode}</p> <p className="">{petData.asso.city}</p>
                          <p className="">{petData.asso.phone}</p>
                          <p className="">{petData.asso.website}</p>
                        </div>
                         
                       )}
                  </div>
              </div>
              <div className="flex lg:w-1/2 w-3/4 m-auto lg:mr-14 form flex-col">

              {petData && (
                <h1 className="text-custom-yellow text-2xl font-bold w-2/3 pt-10">Un coup de cœur pour {petData.name} ?</h1>)}
                
                <p className="text-ml w-fit text-white pt-6">Contactez l’association avec le formuaire ci dessous afin d’avoir des renseignements sur la procédure d’adoption. </p> 
                  
                  <form onSubmit={handleContact} className="text-white text-sm pt-6">

                      <div className="name flex flex-col">
                        <label htmlFor="name">Votre nom</label>
                        <input type="text" name="name" id="name" onChange={(e) => setLastname(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>  
                      </div>

                      <div className="lastname flex flex-col">
                        <label htmlFor="lastname">Votre prénom</label>
                        <input type="text" name="lastname" id="lastname" onChange={(e) => setFirstname(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required />  
                      </div>

                      <div className="firstname flex flex-col">
                        <label htmlFor="firstname">Votre email</label>
                        <input type="text" name="firstname" id="firstname" onChange={(e) => setEmail(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>
                      </div>

                      <div className="postalCode flex flex-col">
                        <label htmlFor="postalCode">Votre code postal</label>
                        <input type="postalCode" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>  
                      </div>

                      <div className="phone flex flex-col">
                        <label htmlFor="phone">Votre téléphone</label>
                        <input type="phone" name="phone" id="phone" onChange={(e) => setPhone(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>  
                      </div>

                      <div className="message flex flex-col">
                        <label htmlFor="message">Votre message</label>
                        <textarea name="message" id="message" onChange={(e) => setMessage(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>  
                      </div>

                      
                      <div className="flex flex-col py-10">
                        
                        <button className="bg-custom-light-purple border border-white w-fit hover:text-custom-purple  hover:bg-white hover:borderwhite px-6 py-2 m-auto" type="submit">Envoyer ma demande</button>
                      </div>

                  </form>
                 
              </div>
             
            </div>


                <Footer></Footer>
        </main>
  )
}

export default animalProfilPage