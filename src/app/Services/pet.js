import axios from "axios";

let url = process.env.NEXT_PUBLIC_API_URL;
let axiosConfig = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    },
});




export let petService = {
    getAllPets: async () => {
        try {
            const response = await axiosConfig.get("/pets");
            return response.data;
        } catch (error) {
            throw new Error("Impossible d'importer les animaux");
        }
    },

    getSosPets: async () => {
        try {
            const response = await axiosConfig.get("pet/sos");
            return response.data;
        } catch (error) {
            throw new Error("Impossible d'importer les animaux de la catégorie SOS");
        }
    },

    getPetById: async (id) => {
        try {
            
            const response = await axiosConfig.get(`pet/${id}`);
            return response.data;
        } catch (error) {
            throw new Error("Impossible d'importer l'animal");
        }
    },

    getPetsByAsso: async () => {
        try {
            const id = JSON.parse(localStorage.getItem("user")).id
            const response = await axiosConfig.get(`user/${id}/home/asso/pets`);
            return response.data;
        } catch (error) {
            throw new Error("Impossible d'importer les animaux");
        }
    },

    createPet: async (data) => {
        try {
            const response = await axiosConfig.post("/pet/new", data);
            console.log(response);
            const pet = response.data.pet;
            localStorage.setItem("pet", JSON.stringify(pet));
            return pet;
        } catch (error) {
            throw new Error("Erreur lors de l'enregistrement");
        }
    },

    editPet: async (id, data) => {
        try {
            const response = await axiosConfig.put(`/pet/${id}/edit`, data);
            const pet = response.data;
            return pet;
        } catch (error) {
            throw new Error("Erreur lors de la modification des informations de l'animal");
        }
    },

    deletePet: async (id) => {
        try {
            const response = await axiosConfig.delete(`/pet/${id}/delete`);
            return response;
            
        } catch (error) {
            throw new Error("Erreur lors de la suppression");
        }
    },
    

    

}