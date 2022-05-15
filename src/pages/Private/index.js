import { useContext } from "react"
import { AuthContext } from "../../Auth/AuthContext"

export const Private = () =>{
    const auth = useContext(AuthContext)

    return(<div>Privada
        <p>{auth.user.name }</p>
    </div>)
}
