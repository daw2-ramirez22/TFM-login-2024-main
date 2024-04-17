import jwt  from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js"

//necesita estos tres parametros que se le pasan para considerarse middleware
export const authRequired = (req, res, next) => {
    //cojo el token de cookies
    const { token } = req.cookies
    if(!token)
        //si hay un error u no me llega el token
        return res.status(401).json({message: "No token, authorization denied"})

        //si hay token pero es invalido
        jwt.verify(token, TOKEN_SECRET, (err, user) => {
            if (err) res.status(403).json({message: "Invalid token"})
            req.user = user         
            next()
        })
}
