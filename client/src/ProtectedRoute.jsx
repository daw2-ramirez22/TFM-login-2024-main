import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext"

function ProtectedRoute() {

    const {loading , isAuthenticated} = useAuth()

    //si no esta autenticado esta cargando 
    if(loading) return <h1>loading ...</h1>
    //si no esta autenticado y esta cargando mandalo al login de vuelta
    if(!loading && !isAuthenticated) return <Navigate to='/login'></Navigate>

    return (
        <Outlet></Outlet>
    )
}
export default ProtectedRoute