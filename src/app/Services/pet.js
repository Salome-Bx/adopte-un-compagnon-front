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

}