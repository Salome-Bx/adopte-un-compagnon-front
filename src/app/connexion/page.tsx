"use client"
import React, { useState } from 'react';
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import { useRouter } from 'next/navigation';


const pageConnexion = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
  

        

  function handleLogin() {
        if (
            !email ||
            !password
                
        ) {
            alert('Merci de remplir tous les champs')
        } else {
            let loginData = {
                email: email,
                password : password,
            }
            console.log(loginData);
            
        }
    }

  return (
    <main className="bg-custom-purple">

        <Nav></Nav>

        <div className="flex flex-col w-1/4 m-auto pb-40">
            <h1 className="text-custom-light-purple text-3xl font-bold pt-24 pb-20">Connexion Association</h1>

            <form action=""  className="text-white text-sm">

                <div className="email flex flex-col">
                  <label htmlFor="email">Email*</label>
                  <input type="email" name="email" id="email" className="border-4 border-white bg-custom-purple rounded-3xl mb-4 pl-2 mt-1" />  
                </div>

                <div className="password flex flex-col">
                  <label htmlFor="password">Mot de passe*</label>
                  <input type="password" name="password" id="password" className="border-4 border-white bg-custom-purple rounded-3xl mb-2 pl-2 mt-1" />  
                  <p className="text-custom-light-purple text-sm justify-end">Mot de passe oublié ?</p>
                </div>

                
                <div className="flex flex-col pt-10">
                  <Button
                       

                        title={'Se connecter'}
                        bgColor={'bg-custom-light-purple'}
                        border={'border border-white'}
                        color={'text-white'}
                        size={'w-fit'}
                        hover={'hover:text-custom-purple  hover:bg-white hover:borderwhite'}
                        padding={'px-6 py-2'}
                        margin={'m-auto'}
                        
                        
                  />
                </div>
                

            </form>

            <p className="text-sm text-white pt-6">* Champs obligatoires</p>

        </div>

        <Footer></Footer>
    </main>
  )
}

export default pageConnexion