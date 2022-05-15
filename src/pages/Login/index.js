import { useState,useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
export const Login = ()=>{
    const auth = useContext(AuthContext);
    const navigate =useNavigate();
    const[email, setEmail]=useState();
    const[password, setPassword]=useState();
    const handlerLogin =async () =>{
        if(email && password){
            const isLogged= await auth.login(email, password);
            if(isLogged){
                navigate('/private')
            }else{
                alert("Não deu certo")
            }
        }
    }
    const handlerLogut= async() =>{
        await auth.logout();
    }
     return(<div>
        Página Fechada
        <input 
        type="text" 
        name="email" 
        onChange={e =>setEmail(e.target.value)}  
        placeholder="Email :"
        />
        <input 
        type="password" 
        name="password" 
        onChange={e => setPassword(e.target.value)}  
        placeholder="Password :"/>
        <button onClick={handlerLogin}>Fazer Login</button>
    </div>)
}