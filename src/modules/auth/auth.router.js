import { Router } from "express";
import { handleLogin, handleRegister, login, register } from "./auth.controller.js";


export const authRouter = Router()
authRouter.get('/login',login)
authRouter.get('/register',register)
authRouter.post('/handleLogin',handleLogin)
authRouter.post('/handleRegister',handleRegister)
export default authRouter