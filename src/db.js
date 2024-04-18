import mongoose from "mongoose"
//creo la conexion a mi base de datos con variables por si se perdiera la url por ahi
const DB_USER = 'ramirezsanchezcristian'
const DB_NAME = 'DB_TFG_DAW'
const DB_PASS = '3fGPYris4nJ1aNCC'
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster-tfm.n601a9n.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
//conexion a la bd
export const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log("DB connected")
    } catch (error) {
        console.log(error)
    }
}

