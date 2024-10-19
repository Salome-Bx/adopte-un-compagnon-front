"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";
import { petService } from "../Services/pet";
import { CardPetProps } from "../Utils/type";
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import Button from "../Components/ButtonAction";

const animalsToAdoptPage = () => {
  
  const [petList, setPetList] = useState<CardPetProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sos, setSos] = useState<boolean>(false);
  const [postalCode, setPostalCode] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [filteredPetList, setFilteredPetList] = useState<CardPetProps[]>([]);


  
  useEffect(() => {
    fetchPets();
  }, []);

  useEffect(() => {
    handleFilters();
  }, [sos, postalCode, species]);

  const fetchPets = async () => {
    setIsLoading(true);

    try {
      const response = await petService.getAllPets();
      setPetList(response);
      setFilteredPetList(response);
    } catch (error) {
      toast.error("Erreur pendant la récupération de la liste des animaux");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePostalCodeChange = (e: { target: { value: string } }) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 5) {
      setPostalCode(value);
    }
  };

  const handleFilters = () => {
    let filteredPets = [...petList];

    
    if (species) {
      filteredPets = filteredPets.filter(
        (pet: CardPetProps) => pet.species.name === species
      );
    }

    if (postalCode) {
      filteredPets = filteredPets.filter(
        (pet: CardPetProps) =>
          pet.asso.postalCode && pet.asso.postalCode.startsWith(postalCode)
      );
    }

    if (sos) {
      filteredPets = filteredPets.filter((pet: CardPetProps) => pet.sos);
    }
    setFilteredPetList(filteredPets);
    
  };

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  return (
    <main className="bg-white">
      <Nav></Nav>

      <div className="w-full flex p-6 pt-20 justify-center text-custom-purple">
        <h3 className="flex text-3xl text-center font-bold">
          Animaux à l'adoption
        </h3>
        <p></p>
      </div>

      {/* -------filtre------ */}

      <div className="filter w-full flex justify-center pb-6 m-auto">
        <div className="filterContainer flex-col lg:flex-row w-3/5 flex justify-between text-custom-light-purple">
          <div className="w-full lg:w-1/4 flex lg:justify-end mb-4">
            Rechercher par
          </div>
          <div className="species w-full lg:w-1/4 mb-4 lg:ml-4 flex">
            <select
              className="text-custom-light-purple w-full bg-white border-b-4 border-custom-light-purple focus:outline-none"
              name="pet"
              id="pet"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            >
              <option value="" className="text-custom-light-purple" disabled>
                Espèce
              </option>
              <option value="chat">Chat</option>
              <option value="chien">Chien</option>
            </select>
          </div>

          <div className="search w-full lg:w-1/4  lg:ml-4 mb-4 flex flex-col">
            <input
              type="search"
              id="petSearch"
              name="petSearch"
              className="text-custom-light-purple bg-white border-b-4 border-custom-light-purple focus:outline-none"
              placeholder="Code postal"
              value={postalCode}
              onChange={handlePostalCodeChange}
            />
          </div>

          <div className="sos lg:ml-4 lg:w-1/4 flex">
            <label className="mr-2" htmlFor="isSos">
              SOS
            </label>
            <input
              type="checkbox"
              name="isSos"
              id="isSos"
              className="border-4 border-custom-light-purple rounded-sm accent-custom-light-purple"
              checked={sos}
              onChange={(e) => {
                setSos(e.target.checked);
                handleFilters();
              }}
            />
          </div>
        </div>
      </div>

      {/* ------fin filtre------ */}

      <div className="flex flex-wrap cards gap-4 mx-14 md:mx-2 md:gap-8 justify-center mb-28">
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

        {filteredPetList.map((pet: CardPetProps, index) => {
          const birthDate = typeof pet.birthyear === "string" ? new Date(pet.birthyear) : null;
          const ageInYears = birthDate ? currentYear - birthDate.getFullYear() : null;
          const ageInMonths = birthDate ? (currentMonth - birthDate.getMonth() + (ageInYears! * 12)) : null;

          return (
            <div
              key={"pet_list_" + index}
              className="card flex bg-white flex-col max-sm:full sm:1/2 md:w-1/3 lg:w-1/4"
            >
              <label key={pet.id}>
                <h4 className="name flex text-2xl font-bold text-custom-purple py-2">
                  {pet.name}
                </h4>

                <div className="relative overflow-hidden h-[300px]">
                  <div className="absolute inset-0 flex items-center justify-center w-full">
                    <Image
                      src={`/${pet.image}`}
                      width={300}
                      height={70}
                      alt="photo de l'animal"
                      className="object-contain"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="flex bg-custom-purple h-250 flex-col align-top">
                  <div className="icons flex flex-row w-full justify-center p-2">
                    <div className="flex rounded-full bg-custom-light-purple w-7 h-7 justify-center">
                      <Image
                        src="img/icones/cat-white.svg"
                        width={22}
                        height={22}
                        alt="icon of cat"
                        className="flex items-center"
                      />
                    </div>

                    <p className="ml-2 mr-4 text-white">
                      {" "}
                      {pet.getAlongCats ? "Oui" : "Non"}
                    </p>

                    <div className="flex rounded-full bg-custom-light-purple w-7 h-7 justify-center">
                      <Image
                        src="img/icones/dog-white.svg"
                        width={22}
                        height={22}
                        alt="icon of dog"
                        className="flex items-center"
                      />
                    </div>
                    <p className="ml-2 mr-4 text-white">
                      {" "}
                      {pet.getAlongDogs ? "Oui" : "Non"}
                    </p>

                    <div className="flex rounded-full bg-custom-light-purple w-7 h-7 justify-center">
                      <Image
                        src="img/icones/children-white.svg"
                        width={22}
                        height={22}
                        alt="icon of children"
                        className="flex items-center"
                      />
                    </div>
                    <p className="ml-2 mr-4 text-white">
                      {" "}
                      {pet.getAlongChildren ? "Oui" : "Non"}
                    </p>
                  </div>

                  <hr className="w-4/5 justify-center m-auto" />
                  <div className="flex text w-full h-1/2 flex-col px-5 pb-2">
                    <div className="flex flex-row mt-2 pb-2 justify-between text-white">
                    {ageInYears === 0 && ageInMonths !== null
                        ? `${ageInMonths} mois`
                        : ageInYears !== null
                        ? `${ageInYears} ans`
                        : "N/A"}
                    
                    <p className="flex race text-ml text-white">{pet.race}</p>
                    </div>

                    <p className="text-ml text-white">{pet.quickDescription}</p>
                  </div>
                  <div className="button flex justify-end text-xs pr-2">
                    <Button
                      title={"En savoir plus >"}
                      bgColor={"bg-custom-purple"}
                      border={"border border-white"}
                      color={"text-white font-regular"}
                      size={"w-fit"}
                      hover={
                        "hover:text-custom-light-violet hover:border-custom-light-violet"
                      }
                      padding={"px-2"}
                      margin={"m-2"}
                      action={`animauxAdoption/view/${pet.id}`}
                    />
                  </div>
                </div>
              </label>
            </div>
           );
          })}
      </div>

      <Footer></Footer>
    </main>
  );
};

export default animalsToAdoptPage;
