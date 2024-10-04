import axios from "axios";

let url = process.env.NEXT_PUBLIC_API_URL;
let axiosConfig = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    },
});

export let userService = {
    getAllAssos: async () => {
        try {
            const response = await axiosConfig.get("/users");
            return response.data;
        } catch (error) {
            throw new Error("Impossible d'importer les associations");
        }
    },



    registration: async (data) => {
        try {
            const response = await axiosConfig.post("/user/register", data);
            const user = response.data.user;
            localStorage.setItem("user", JSON.stringify(user));
            return user;
        } catch (error) {
            console.error("Erreur lors de l'enregistrement", error);
            throw error;
        }
    },


    getAssoById: async () => {
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            const response = await axiosConfig.get(`/user/informations/${user.id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            throw new Error("Impossible d'importer l'utilisateur");
        }
    },
    
    

    editUser: async (id, data) => {
        try {
            const response = await axiosConfig.put(`/user/${id}/edit`, data);
            const user = response.data;
            localStorage.setItem("user", JSON.stringify(user));
            return user;
        } catch (error) {
            console.error("Erreur lors de la modification des informations", error);
            throw error;
        }
    },

    
    

    deleteUser: async (data) => {

    },

    
    

    

   






}