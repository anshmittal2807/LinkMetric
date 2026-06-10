import { Navigate } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../context/UserContext"
import { useEffect , useState } from "react"

const ProtectedRoute = ({children}) => {
        const { user , setUser , loading , setLoading} = useContext(UserContext);

    if(loading){
        return <div>Loading...</div>
    }
    if(!user){
        return <Navigate to="/login" replace />
    } else{
        return children

    }
}

export default ProtectedRoute