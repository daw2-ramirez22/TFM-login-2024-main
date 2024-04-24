import {Router} from 'express'
import {login, register, logout, profile, verifyToken} from '../controllers/auth.controller.js'
import {authRequired} from '../middleware/validatetoken.js'
import {validateSchema} from '../middleware/validator.middleware.js'
import {registerSchema, loginSchema} from '../schemas/auth.schema.js'


const router = Router()
//rutas post
//traigo desde middleware la validacion de registro
router.post ('/api/register', validateSchema(registerSchema), register)
//traigo desde middleware la validacion de login
router.post ('/api/login', validateSchema(loginSchema), login)
router.post ('/api/logout', logout)
//rutas get
router.get ('/api/verify', verifyToken)

router.get ('/api/profile', authRequired , profile)




// para exportar los enrutadores de login y register
export default router