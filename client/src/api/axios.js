//importo axios desde la biblioteca de axios
import axios from "axios";

//creo la instancia base de todas las promesas luego la importare en axios en task y auth directamente desde aqui
const instance = axios.create({
    baseURL: "https://tfm-login-2024-main.onrender.com",
    withCredentials: true
})
export default instance