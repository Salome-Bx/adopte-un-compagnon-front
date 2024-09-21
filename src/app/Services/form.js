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
            throw new Error("Impossible d'importer les formualires");
        }
    },


    

    deleteForm: async () => {

    },

    newForm: async (data) => {
        try {
            const response = await axiosConfig.post("/form/new", data);
            const pet = response.data.form;
        } catch (error) {
            console.error("Erreur lors de l'envoi", error);
            throw error;
        }
    },





}