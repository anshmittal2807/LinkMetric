import { Navigate } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../context/UserContext"

const ProtectedRoute = ({children}) => {
    const user = useContext(UserContext)?.user;

    if(!user){
        return <Navigate to="/login" replace />
    } else{
        return children

    }
}

export default ProtectedRoute