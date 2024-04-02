//import de app que se ejecutara en index desde el fichero app.js
import app from './app.js'



// import bd y conexion a la base de datos de mongo
import {connectDB} from './db.js'
connectDB()


app.listen(4000)

console.log('Server on port', 4000)