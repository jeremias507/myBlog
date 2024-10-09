import { Router } from "express";
import {register,login,verifyToken,logout} from "../controllers/auth"
import { validatorSchema } from "../middlewares/validator.schema";
import { registerSchema,loginSchema } from "../schemas/auth.schema";
const router = Router()

router.post("/register",validatorSchema(registerSchema),register) 
router.post("/login",validatorSchema(loginSchema),login) 
router.get("/verifyToken",verifyToken) 
router.post("/logout", verifyToken, logout);

router.post("/logout")

export {router}