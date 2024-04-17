import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, vertyTokenRequet } from "../api/auth.js";
import Cookies from "js-cookie";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
  };
export const AuthProvider = ({ children }) => {

const [user, setUser] = useState(null)
const [isAuthenticated, setIsAuthenticated] = useState(false)
const [ errors, setErrors] = useState([])
const [loading, setLoading] = useState(true)

const signup = async (user) => {

    try {
        const res = await registerRequest(user)
        console.log(res.data)
        setUser(res.data)
        setIsAuthenticated(true)
    } catch (error) {
        setErrors(error.response.data)
    }

}

const signin = async (user) => {
    try {
        const res = await loginRequest(user)
        setIsAuthenticated(true)
        setUser(res.data)
    } catch (error) {
        if(Array.isArray(error.response.data)){
            return setErrors(error.response.data)
        }

        setErrors([error.response.data.message])
    }
}

const logout =  () => {
   Cookies.remove("token")
   setIsAuthenticated(false)
   setUser(null)
}

useEffect(() => {
    if(errors.length > 0) {
        const timer = setTimeout(() => {
            setErrors([])
        }, 5000);
        return () => clearTimeout(timer)
    }
}, [errors])

useEffect(() => {
    async function  checkLogin() {
        const cookies = Cookies.get()
        // primero comprueba si no hay token
        if(!cookies.token){
            //si no hay le digo que la autenticacion esta en falso
            setIsAuthenticated(false)
            //no esta cargando
            setLoading(false)
            //usuario esta en null
            return setUser(null)  
        }
        try {
            //si hay un token verificalo enviadolo al backend para que no se pueda introducir manualmente en el navegador
            const res = await vertyTokenRequet(cookies.token)
            //si no me responde ningun dato ponlo en falso y devuelvelo
            if (!res.data){
                setLoading(false)
                setIsAuthenticated(false)
                return
            } 
            //si me devuelve datos es que si que esta el usuario entonces lo pongo en true y lo pongo de cargar
            setIsAuthenticated(true)   
            setUser(res.data)                 
            setLoading(false)
        } catch (error) {
            //si me dio un error lo pongo en autenticado en false usuario null y digo que termino de cargar uu no hay nada
            setIsAuthenticated(false)
            setUser(null)
            setLoading(false)
        }  
    }  
    checkLogin()
}, [])


    return(
    <AuthContext.Provider value={{
        signup,
        signin,
        logout,
        loading,
        user,
        isAuthenticated,
        errors
    }}>
        {children}
    </AuthContext.Provider>
    )
}