import jwt from "jsonwebtoken"

export const createAccesToken= async (payload:any)=>{
    return new Promise((resolve, reject) => {
        jwt.sign(payload, "2424242dfss", { expiresIn: "1d" }, (err, token) => {
          if (err) reject(err);
          resolve(token);
        });
      });
}