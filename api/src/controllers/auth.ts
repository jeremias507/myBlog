import { Request, Response, response } from "express";
import { registerNewUser, loginUser } from "../services/auth";
import { UserResponse } from "../interface/userInterface";
import { pool } from "../config/postgrest";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    const response = await registerNewUser(req.body);

    if (response == "The email is already in use") {
      res.status(400).json({ message: ["The email is already in use"] });
    } else {
      const { token, ...responseData } = response;
      res.cookie("token", token,);

      res
        .status(200)
        .json({
          id: responseData.userId,
          name: responseData.name,
          email: responseData.email,
        });
    }
  } catch (error: any) {
    console.log("error al enviar los datos");
    res.status(500).json({ message: [error.message] });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const response = await loginUser(req.body);
    if (response === "NOT_FOUND_USER") {
      res.status(400).json({ message: ["Email no existe"] });
    } else if (response === "Password incorrect") {
      res.status(400).json({ message: ["Password incorrecto"] });
    } else {
      const { token, ...responseData } = response as UserResponse;
      res.cookie("token", token);
      res
        .status(200)
        .json({
          id: responseData.id,
          name: responseData.name,
          email: responseData.email,
        });
    }
  } catch (error: any) {
    return res.status(500).json({ message: [error.message] });
  }
};

export const verifyToken = async (req: Request, res: Response) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).send("Token not found");

  try {
    const user: any = jwt.verify(token, "2424242dfss");
    
    const userFound = await pool.query("SELECT * FROM usuarios WHERE id = $1", [
      user.id,
    ]);

    if (userFound.rows.length === 0) return res.status(401).send("User not found");

    res.json({
      id: userFound.rows[0].id,
      name: userFound.rows[0].name,
      email: userFound.rows[0].email,
    });
  } catch (error) {
    return res.status(401).send(error);
  }
};

export const logout = async (req:Request, res:Response) =>{
res.cookie("token","",{
  expires: new Date(0)
})

return res.sendStatus(200)
}