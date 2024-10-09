import { userInterface } from "../interface/userInterface";
import { pool } from "../config/postgrest";
import { encrypt, verified } from "../utils.ts/bcrypt.handle";
import { createAccesToken } from "../utils.ts/jwt";


export const registerNewUser = async (body: userInterface) => {
  const { name, email, password } = body;

  try {
    const checkIs = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );

    if (checkIs.rows.length > 0) return "The email is already in use";

    const hashedPassword = await encrypt(password);
    const userSaved = await pool.query(         
      "INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, hashedPassword]
    );

    const userId = userSaved.rows[0].id;
    const token = await createAccesToken({ id: userId });
    
  
    return {
      userId,
      name,
      email,
      token
    };
  } catch (error) {
    console.error("Error:", error);
    throw new Error("INTERNAL_SERVER_ERROR");
  }
};

export const loginUser = async (body: userInterface) => {
  const { email, password } = body;
  try {
    const checkIs = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );

    if (checkIs.rows.length === 0) return "NOT_FOUND_USER";

    const isMatch = await verified(password, checkIs.rows[0].password);

    if (!isMatch) return "Password incorrect";

    const token = await createAccesToken({ id: checkIs.rows[0].id });

    return {
      id: checkIs.rows[0].id,
      name: checkIs.rows[0].name,
      email: checkIs.rows[0].email,
      token
    };
  } catch (error) {
    console.error(error);
    return "Error al intentar iniciar sesión";
  }
};
