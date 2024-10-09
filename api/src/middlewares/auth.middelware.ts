import { NextFunction,Request,Response } from "express";
import jwt from 'jsonwebtoken'
interface Req extends Request{
    user:string
}

export const verifyToken = async (req:Req,res:Response,next:NextFunction) =>{
try {
    const {token} = req.cookies
    if(!token) {
        return res.status(401).json({message:"No token, authorization denied"})
    }
    jwt.verify(token,"2424242dfss",(error:any,user:any)=>{
        if(error){
            return res.status(401).json({message:"Token is not valid"})
        }
        req.user = user 
        next()
    })
} catch (error:any) {
    return res.status(500).json({ message: error.message });
    
}
}