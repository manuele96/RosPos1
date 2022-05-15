import axios from "axios";
const api = axios.create({
    baseURL:process.env.REACT_APP_API
})
export const userApi =()=>({
    validateToken: async(token) =>{
        return {
            user:{id:3, name:"Manuel Miranda", email:"manuelmirandajr18@gmail.com"}
         };
        const response = await api.post('/validate',{token})
        return response.data;
    },
    login:async (email, password) =>{
        return {
           user:{id:3, name:"Manuel Miranda", email:"manuelmirandajr18@gmail.com"},
            token:"123456789"
        };
        const response = await api.post('/login',{email, password});
        return response.data;
    },logout: async () =>{
        return {status:true}
        const response = await api.post('/logout');
        return response.data;
    }
});