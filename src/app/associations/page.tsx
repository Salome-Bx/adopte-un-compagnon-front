"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import { CardAssoProps } from "../Utils/type";
import { userService } from "../Services/user";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';


const associationsPage = () => {
    
    const [assoList, setAssoList] = useState ([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [postalCode, setPostalCode] = useState<string>("");
    const [filteredAssoList, setFilteredAssoList] = useState<CardAssoProps[]>([]);

    
    useEffect(() => {
        fetchAssos();
    }, []);

    useEffect(() => {
        handleFilterByPostalCode();
    }, [postalCode]);
    
    
    const fetchAssos = async () => {
        setIsLoading(true);
       
        try {
        const response = await userService.getAllAssos();
            setAssoList(response);
            setFilteredAssoList(response);

        } catch (err) {
        toast.error("Erreur pendant la récupération de la liste des associations");
        
        } finally {
          setIsLoading(false);
        }
    };
    
    const handlePostalCodeChange = (e: { target: { value: any } }) => {
        const value = e.target.value;
        
        if (/^\d*$/.test(value) && value.length <= 5) {
            setPostalCode(value);
        }
    };

    const handleFilterByPostalCode = () => {
        let filteredAssos = [...assoList];
        if(postalCode) {
            filteredAssos = filteredAssos.filter(
            (asso: CardAssoProps) =>
            asso.postalCode && asso.postalCode.startsWith(postalCode)
            ); 
        }
          
        setFilteredAssoList(filteredAssos);
        console.log("filtre :",filteredAssoList);
    };


    return (
        <main className="bg-white ">
            <Nav></Nav>
            <div className="w-full flex p-6 pt-20 justify-center text-custom-purple">
                <h3 className="flex text-3xl text-center font-bold pb-4">Retrouvez les associations près de chez vous</h3>
            </div>

            {/* -------filtre------ */}

            <div className="filter w-full flex justify-center pb-6 m-auto">
                <div className="filterContainer flex-col lg:flex-row lg:justify-center w-3/5 flex  text-custom-light-purple">
                    <div className="w-full lg:w-fit flex lg:justify-end mb-4">Rechercher par</div>
                    
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

                </div>
            </div>
            
            {/* ------fin filtre------ */}

            <div className="flex flex-wrap cards gap-4 mx-14 md:mx-2 md:gap-8 justify-center mb-28">

            {isLoading && (
                    <div className="flex card w-1/5 h-fit items-center justify-center">      
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

                {filteredAssoList && (
                    filteredAssoList.map((asso : CardAssoProps, index) => (

                        
                        <div key={"asso_list_" + index} className="card flex bg-custom-purple h-[430px] align-top flex-col max-sm:full sm:1/2 md:w-1/3 lg:w-1/4">

                            <label
                            key={asso.id}>
                                <h4 className="name flex text-2xl font-bold text-custom-cream py-2 pl-2">{asso.nameAsso}</h4>
                                <div className="relative overflow-hidden h-[230px] mx-10">
                                    <div className="absolute inset-0 flex items-center justify-center w-full ">
                                    <Image
                                        src={`/${asso.image}`}
                                        layout="fill" 
                                        objectFit="cover" 
                                        alt="photo de l'association"
                                    />
                                    </div>
                                </div>  
                                
                                <div className="flex text w-full text-center flex-col px-5 mt-2 h-[150px]">
                                    <div className="flex flex-row mt-2 font-bold text-center mx-auto">
                                        <p className="flex text-ml text-white"><span className="font-normal mr-2">Située à</span>{asso.city}</p>
                                    </div>
                                    <div>
                                        <p className="text-ml text-white">{asso.address}</p>
                                        <p className="text-ml text-white pl-2">{asso.postalCode}</p>   
                                    </div>
                                    <hr  className="w-4/5 justify-center mx-auto mb-2" />
                                    <p className="text-ml text-white"><span className="font-normal mr-2">Contact :</span>{asso.phone}</p>
                                    <p className="text-ml text-white">{asso.website}</p>
                                </div>

                            </label>

                        </div>

                        ))
                )}
                            
            </div>

        <Footer></Footer>
        </main>
    )
}
    
export default associationsPage


    

