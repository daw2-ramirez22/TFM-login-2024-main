import mongoose from "mongoose"

const DB_USER = 'ramirezsanchezcristian'
const DB_NAME = 'DB_TFG_DAW'
const DB_PASS = '3fGPYris4nJ1aNCC'
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster-tfm.n601a9n.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

export const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log("DB connected")
    } catch (error) {
        console.log(error)
    }
}

