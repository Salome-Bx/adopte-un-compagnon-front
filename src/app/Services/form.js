import axios from "axios";

let url = process.env.NEXT_PUBLIC_API_URL;
let axiosConfig = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    },
});


export let formService = {
    getAllForms: async () => {
        try {
            const response = await axiosConfig.get("/forms");
            return response.data;
        } catch (error) {
            throw new Error("Impossible d'importer les animaux");
        }
    },

    deleteForm: async () => {}

}