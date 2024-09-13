import axios from "axios"; 

let url = process.env.NEXT_PUBLIC_API_URL;
let axiosConfig = axios.create({
    baseURL: url,
    headers: {
        'Authorization': 'Bearer <VOTRE_TOKEN>',
        "Content-Type": "application/json",
    },
});


    export let loggedService = {
        
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
    }