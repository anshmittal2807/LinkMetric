import { Navigate } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../context/UserContext"
import LoadingScreen from "../components/shimmer/LoadingScreen"

const ProtectedRoute = ({children}) => {
        const { user , loading  , setUser} = useContext(UserContext);

    if(loading){
        return <LoadingScreen title="Checking access" subtitle="Loading your secure workspace." />
    }
    if(!user){
        return <Navigate to="/login" replace />
    } else{
        return children

    }
}

export default ProtectedRoute