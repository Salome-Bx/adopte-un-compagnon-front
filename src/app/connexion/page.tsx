"use client"
import React, { useState } from 'react';
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import { useRouter } from 'next/navigation';
import { userService } from '../Services/user';
import { loggedService } from '../Services/logged';


const pageConnexion = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

          let formData = {
              email: email,
              password : password,
          }
            
          try {
            const response = await loggedService.login(formData);
            console.log("Connexion réussie", response);
              
          } catch (error) {
              // if (axios.isAxiosError(error) && error.response) {
              //   setError(
              //     error.response.data.message ||
              //       "An error occurred during registration."
              //   );
              // } else {
              //   setError("An unexpected error occurred. Please try again.");
              // }
            console.error("Une erreur est survenue", error);
          }
          
  }
  

  return (
    <main className="bg-custom-purple">

        <Nav></Nav>


      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        
            <h1 className="text-custom-light-purple text-3xl font-bold mb-8 text-center">Connexion Association</h1>

            <form className="w-full max-w-md mx-auto bg-custom-purple rounded-lg p-8">
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email*</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:border-custom-purple focus:ring-2 focus:ring-custom-purple" 
                  placeholder="Entrez votre email" 
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Mot de passe*</label>
                <input 
                  type="password" 
                  id="password" 
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:border-custom-purple focus:ring-2 focus:ring-custom-purple" 
                  placeholder="Entrez votre mot de passe" 
                />
                <p className="mt-2 text-sm text-custom-light-purple justify-end text-right">
                  Mot de passe oublié ?
                </p>
                <p className="mt-2 text-sm text-custom-light-purple justify-end text-right">
                  Déjà un compte ?
                </p>
              </div>

              <div className="flex flex-col items-center mt-6">
                <Button
                  title={'Se connecter'}
                  bgColor={'bg-custom-light-purple'}
                  border={'border border-white'}
                  color={'text-white'}
                  size={'w-full md:w-auto'}
                  hover={'hover:text-custom-purple hover:bg-white hover:border-white'}
                  padding={'px-6 py-2'}
                  margin={'mx-auto'}
                  action={'accueilAsso'}
                />
              </div>
      </form>

        <p className="mt-6 text-sm text-center text-gray-500">* Champs obligatoires</p>
      </div>

        <Footer></Footer>
    </main>
  )
}

export default pageConnexion