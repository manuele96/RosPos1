import React, { useEffect } from 'react';
import { userApi } from '../Hook/useApi';
export const  AuthContext = React.createContext({});
export const AuthProvider = (props) =>{
    const[user, setUser] =React.useState(null);
    const api = userApi();
    useEffect(()=>{
        const validateToken = async()=>{
            const storageData = localStorage.getItem("authToken");
            if(storageData){
                const data = await api.validateToken(storageData)
                if(data.user){
                    setUser(data.user)
                }
            }
        };
        validateToken();
    },[api])
    const login = async(email, password)=>{
        const data = await api.login(email, password);
        if(data.user && data.token){
            setUser(data.user);
            //setToken(data.token)
            return true;
        }
        return false;
    };
    const logout =async  ()=>{
        setToken("")
        await api.logout();
        setUser(null)
    }
    const setToken = (token)=>{
        localStorage.setItem("authToken", token)
    }
    return(<AuthContext.Provider value={{user, setUser, login, logout}}>
        {props.children}
    </AuthContext.Provider>)
}