"use client"
import React, { useState } from 'react'
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import ButtonAction from "../Components/ButtonAction";
import { useRouter } from 'next/navigation';
import { userService } from '../Services/user';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const pageInscription = () => {


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

  const [error, setError] = useState<string | null>(null);
  const {push} = useRouter();

  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

            if (!email || !password || !lastname || !firstname || !address || !city || !postalCode ||!phone || !nameAsso || !siret || !website || !image ) {

              toast.error("Veuillez remplir tous les champs");

            } else if (password.valueOf() !== passwordConfirm.valueOf()) {
              toast.error("Les mots de passes sont différents");

            } else if (password.length < 8) {
              toast.error("Veuillez entrer un mot de passe à 8 caractères ou plus");

            } else if (!/^\d{14}$/.test(siret)) {
              toast.error("Le SIRET doit contenir 14 chiffres");

            } else if (!/^\d{5}$/.test(postalCode)) {
              toast.error("Le code postal doit contenir 5 chiffres");

            } else if (!/^\d{10}$/.test(phone)) {
              toast.error("Le téléphone doit contenir 10 chiffres");

            } else {
        
            let formData = {
                email: email,
                password : password,
                lastname: lastname,
                firstname: firstname,
                address: address,
                city: city,
                postalCode: postalCode,
                phone: phone,
                nameAsso: nameAsso,
                siret: siret,
                website: website,
                image: image,
                
            }
            
            try {
              const response = await userService.registration(formData);
              toast.success("Votre compte a été crée !");
              push("/connexion");

            } 
          

            catch (error) {
              if (axios.isAxiosError(error) && error.response) {
                const errorMessage = error.response.data.message;
                
                switch (errorMessage) {
                  case 'Email déjà utilisé':
                    setError('L\'email est déjà utilisé. Veuillez utiliser un autre email.');
                    toast.error("L'email est déjà utilisé");
                    break;
                  default:
                    setError("Une erreur s'est produite lors de l'enregistrement.");
                    toast.error("Une erreur s'est produite lors de l'enregistrement.");
                }
              } else {
                setError("Une erreur inattendue s'est produite. Veuillez réessayer.");
                toast.error("Une erreur inattendue s'est produite. Veuillez réessayer.");
              }
              console.error("Une erreur est survenue", error);
            }
          
        }
        
      }
    


  return (
    <main className="bg-custom-purple">

        <Nav></Nav>
      
        <div className="flex flex-col w-1/3 m-auto pb-40">
            <h1 className="text-custom-light-purple text-3xl font-bold pt-24 pb-20">Inscription Association</h1>

            <form onSubmit={handleRegistration}  className="text-white text-sm">

                <div className="name flex flex-col">
                  <label htmlFor="name">Nom de l'association*</label>
                  <input type="text" name="name" id="name" onChange={(e) => setNameAsso(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>  
                </div>

                <div className="lastname flex flex-col">
                  <label htmlFor="lastname">Nom du représentant*</label>
                  <input type="text" name="lastname" id="lastname" onChange={(e) => setLastname(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required />  
                </div>

                <div className="firstname flex flex-col">
                  <label htmlFor="firstname">Prénom du représentant*</label>
                  <input type="text" name="firstname" id="firstname" onChange={(e) => setFirstname(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>
                </div>

                <div className="email flex flex-col">
                  <label htmlFor="email">Email*</label>
                  <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>  
                </div>

                <div className="password flex flex-col">
                  <label htmlFor="password">Mot de passe*</label>
                  <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>  
                </div>

                <div className="passwordConfirm flex flex-col">
                  <label htmlFor="passwordConfirm">Vérification mot de passe*</label>
                  <input type="password" name="passwordConfirm" id="passwordConfirm" onChange={(e) => setPasswordConfirm(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>
                </div>
                
                
                <div className="address flex flex-col">
                  <label htmlFor="address">Adresse de l'association*</label>
                  <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>  
                </div>
                

                <div className="postalCode flex flex-col">
                  <label htmlFor="postalCode">Code postal*</label>
                  <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>  
                </div>
                

                <div className="city flex flex-col">
                  <label htmlFor="city">Ville*</label>
                  <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>  
                </div>
                

                <div className="phone flex flex-col">
                  <label htmlFor="phone">Téléphone*</label>
                  <input type="tel" name="phone" id="phone" onChange={(e) => setPhone(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>  
                </div>
                

                <div className="siret flex flex-col">
                  <label htmlFor="siret">SIRET*</label>
                  <input type="text" name="siret" id="siret" onChange={(e) => setSiret(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" required/>  
                </div>

                <div className="website flex flex-col">
                  <label htmlFor="website">Site internet</label>
                  <input type="text" name="website" id="website" onChange={(e) => setWebsite(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" />  
                </div>

                <div className="website flex flex-col">
                  <label htmlFor="website">Image</label>
                  <input type="text" name="website" id="website" onChange={(e) => setImage(e.target.value)} className="border-4 border-white bg-custom-purple rounded-3xl mb-4 py-2 mt-1 pl-2" />  
                </div>
                
                <div className="flex flex-col pt-10">
                  
                  <button className="bg-custom-light-purple border border-white w-fit hover:text-custom-purple  hover:bg-white hover:borderwhite px-6 py-2 m-auto" type="submit">Je crée mon compte</button>
                </div>
            
            </form>

            <p className="text-sm text-white pt-6">* Champs obligatoires</p>
            <p className="text-sm text-white pt-6">En cliquant sur "Je crée mon compte", vous acceptez de vous conformer à la politique et aux conditions générales d’Adopte un Compagnon.</p>

        </div>

        <Footer></Footer>
    </main>
  )
}

export default pageInscription