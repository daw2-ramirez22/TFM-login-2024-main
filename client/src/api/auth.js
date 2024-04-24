//importo axios desde mi ruta axios
import axios from "./axios";

//utilizo axios para hacer mis "promesas" para los usuarios
export const registerRequest = (user) => axios.post(`/api/register`, user)
export const loginRequest = (user) => axios.post(`/api/login`, user)
export const vertyTokenRequet = () => axios.get(`/api/verify`)
