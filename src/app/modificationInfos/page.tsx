"use client"
import React, { useEffect, useState } from 'react'
import Footer from "../Components/Footer";
import Button from "../Components/ButtonAction";
import { NavAsso } from '../Components/NavAsso';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';
import { useRouter } from 'next/navigation';
import { userService } from '@/app/Services/user';
import axios from 'axios';


const pageModificationInfos = () => {
 
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [passwordConfirm, setPasswordConfirm] = useState('')
      const [lastname, setLastname] = useState('')
      const [firstname, setFirstname] = useState('')
      const [address, setAddress] = useState('')
      const [city, setCity] = useState('')
      const [postalCode, setPostalCode] = useState('')
      const [phone, setPhone] = useState('')
      const [nameAsso, setNameAsso] = useState('')
      const [siret, setSiret] = useState('')
      const [website, setWebsite] = useState('')
      const [image, setImage] = useState('')
      const [id, setId] = useState<number | null>(null);

      const [isLoading, setIsLoading] = useState<boolean>(false);
      const [error, setError] = useState<string | null>(null);
      const {push} = useRouter();

      useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        
        if (user) {
            setId(user.id);
            setEmail(user.email);
            setLastname(user.lastname);
            setFirstname(user.firstname);
            setAddress(user.address);
            setCity(user.city);
            setPostalCode(user.postalCode);
            setPhone(user.phone);
            setNameAsso(user.nameAsso);
            setSiret(user.siret);
            setWebsite(user.website);
            setImage(user.image);
        }
      }, []);

      

      const handleUserInfosEdit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
      
      if (!lastname || !firstname || !address || !city || !postalCode || !phone || !website || !image  ) {

        toast.error("Veuillez remplir tous les champs");
      
      } else if (password.valueOf() !== passwordConfirm.valueOf()) {
        toast.error("Les mots de passes sont différents");

      } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)) {
        toast.error("Veuillez entrer un mot de passe à 8 caractères contenant au moins un chiffre et une majuscule et un caractère spécial");

      } else if (!/^\d{14}$/.test(siret)) {
        toast.error("Le SIRET doit contenir 14 chiffres");

      } else if (!/^\d{5}$/.test(postalCode)) {
        toast.error("Le code postal doit contenir 5 chiffres");

      } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)) {
        toast.error("Le téléphone doit contenir 10 chiffres");

      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log("no bueno");
        toast.error("L'email doit être au bon format");

      } else {

        let data = {
          
          lastname: lastname,
          firstname : firstname,
          address : address,
          city : city,
          postalCode : postalCode,
          phone : phone,
          website : website,
          image : image,
         
      }

      try {
        const response = await userService.editUser(data);
        toast.success("Vos informations ont bien été modifiées !");
        push(`/accueilAsso/${id}`);
      } 
    
      catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const errorMessage = error.response.data.message;
          
          switch (errorMessage) {
            case 'Animal déjà crée':
              setError('L\'animal a déjà été crée');
              toast.error('L\'animal a déjà été crée');
              break;
            default:
              setError("Une erreur s'est produite lors de l'enregistrement.");
              toast.error("Une erreur s'est produite lors de l'enregistrement.");
          }
        } else {
          setError("Une erreur inattendue s'est produite. Veuillez réessayer.");
          toast.error("Une erreur inattendue s'est produite. Veuillez réessayer.");
        }
        
      }
      finally {
        setIsLoading(false);
      }
  }
      
  }  

  return (
  

    <main className="bg-custom-purple">

        <NavAsso></NavAsso>

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

        <div className="flex flex-col m-auto pb-40 w-2/3 max-w-md mx-auto">
            <h1 className="text-custom-light-purple text-3xl font-bold pt-24 pb-20">Modifier mes informations</h1>

            <form onSubmit={handleUserInfosEdit}  className="text-white text-sm">

                <div className="name flex flex-col text-violet-400">
                  <label htmlFor="name">Nom de l'association</label>
                  <input type="text" name="name" id="name" value={nameAsso} readOnly className="border-4 text-violet-400 border-violet-400 bg-custom-purple rounded-3xl mb-4 p-2 mt-1" /> 

                </div>

                <div className="lastname flex flex-col">
                  <label htmlFor="lastname">Nom du représentant</label>
                  <input type="text" name="lastname" id="lastname" value={lastname}  onChange={(e) => setLastname(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="firstname flex flex-col">
                  <label htmlFor="firstname">Prénom du représentant</label>
                  <input type="text" name="firstname" id="firstname"  value={firstname} onChange={(e) => setFirstname(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />
                </div>

                <div className="email flex flex-col text-violet-400">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email"  value={email}  readOnly className="border-4 text-violet-400 border-violet-400 bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="password flex flex-col">
                  <label htmlFor="password">Mot de passe</label>
                  <input type="password" name="password" id="password" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="password2 flex flex-col">
                  <label htmlFor="password2">Vérification mot de passe</label>
                  <input type="password" name="password2" id="password2" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />
                </div>
                
                
                <div className="address flex flex-col">
                  <label htmlFor="address">Adresse de l'association</label>
                  <input type="text" name="address" id="address"  value={address} onChange={(e) => setAddress(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1"/>  
                </div>
                

                <div className="postalCode flex flex-col">
                  <label htmlFor="postalCode">Code postal</label>
                  <input type="text" name="postalCode" id="postalCode" value={postalCode}  onChange={(e) => setPostalCode(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>
                

                <div className="city flex flex-col">
                  <label htmlFor="city">Ville</label>
                  <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>
                

                <div className="phone flex flex-col">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="phone" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>
                

                <div className="siret flex flex-col text-violet-400">
                  <label htmlFor="siret">SIRET</label>
                  <input type="text" name="siret" id="siret" value={siret} readOnly className="border-4 text-violet-400 border-violet-400 bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>
                
                <div className="image flex flex-col">
                  <label htmlFor="image">Image</label>
                  <input type="text" name="image" id="image" value={image} className="border-4  border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>

                <div className="website flex flex-col">
                  <label htmlFor="website">Site web</label>
                  <input type="text" name="website" id="website" value={website} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 p-2 mt-1" />  
                </div>


                <div className="flex flex-col pt-10">
                  <Button
                        title={'Enregistrer mes modifications'}
                        bgColor={'bg-custom-light-purple'}
                        border={'border border-white'}
                        color={'text-white'}
                        size={'w-fit'}
                        hover={'hover:text-custom-purple  hover:bg-white hover:borderwhite'}
                        padding={'px-6 py-2'}
                        margin={'m-auto'}  
                        action={'accueilAsso'} 
                  />
                </div>
            </form>
        </div>
        <Footer></Footer>
    </main>
  )

}
export default pageModificationInfos