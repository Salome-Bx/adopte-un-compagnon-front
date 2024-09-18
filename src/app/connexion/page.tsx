"use client"
import React, { useState } from 'react';
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import { userService } from '../Services/user';
import { loggedService } from '../Services/logged';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const pageConnexion = () => {

  const [error, setError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const {push} = useRouter();
  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Veuillez remplir tous les champs");
      
    } else if (password.length < 8) {
      toast.error("Veuillez entrer un mot de passe à 8 caractères ou plus");
      
    } else {
      
      let formData = {
        email: email,
        password : password,
      }
      
      try {
        const response = await loggedService.login(formData);
        console.log("Connexion réussie", response);
        
        const userRole = response.roles[0];
        
        switch(userRole) {
          case 'ROLE_USER':
                push("/accueilAsso");
                break;
              case 'ROLE_ADMIN':
                push("/accueilAdmin");
                break;
              default:
                push("/connexion"); 
            }
            
              
          } catch (error) {
              if (axios.isAxiosError(error) && error.response) {
                setError(
                  error.response.data.message ||
                    "Erreur pendant la connexion."
                );
                push("/connexion");
                
              } else {
                setError("Une erreur a eu lieu, veuillez réessayer.");
                toast.error("Une erreur a eu lieu, veuillez réessayer.");
                push("/connexion");
              }
            console.error("Une erreur est survenue", error);
            push("/connexion");
          }

          
        }
      }

    return (
      <main className="bg-custom-purple">
        <Nav></Nav>

      
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          
              <h1 className="text-custom-light-purple text-3xl font-bold mb-8 text-center">Connexion Association</h1>

              <form onSubmit={handleLogin} className="w-full max-w-md mx-auto bg-custom-purple rounded-lg p-8">
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg text-custom-purple focus:border-custom-purple focus:ring-2 focus:ring-custom-purple" 
                    placeholder="Entrez votre email" 
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Mot de passe*</label>
                  <input 
                    type="password" 
                    id="password" 
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg text-custom-purple focus:border-custom-purple focus:ring-2 focus:ring-custom-purple" 
                    placeholder="Entrez votre mot de passe" 
                    onChange={(e) => setPassword(e.target.value)}
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