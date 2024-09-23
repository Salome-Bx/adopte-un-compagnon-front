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
            console.log(user)
            return user;
        } catch (error) {
            console.error("Erreur lors de l'enregistrement", error);
            throw error;
        }
    },

    
      

    login: async (data) => {
        try {
            const response = await axiosConfig.post("/user/login", data);
            const user = response.data.user;
            localStorage.setItem("user", JSON.stringify(user));
            console.log(user)
            return user;
        } catch (error) {
            console.error("Erreur lors de l'enregistrement", error);
            throw error;
        }
    },

    getAssoProfil: async (id) => {
        try {
            const response = await axiosConfig.get(`user/${id}`);
            return response.data;
        } catch (error) {
            throw new Error("Impossible d'importer l'utilisateur");
        }
    },

    editUser: async (data) => {
        try {
            const response = await axiosConfig.post("/user/edit", data);
            const user = response.data.user;
            localStorage.setItem("user", JSON.stringify(user));
            console.log(user)
            return user;
        } catch (error) {
            console.error("Erreur lors de la modification des informations", error);
            throw error;
        }
    },

    deleteUser: async (data) => {

    },

    
    

    

   






}