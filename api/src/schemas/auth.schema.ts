import {z} from "zod"

export const registerSchema = z.object({
    name: z.string({
        required_error: "Nombre es requerido"
    }),
    email: z.string({
        required_error: "Email es requerido"
    }).email({
        message: "Email no es valido"
    }),
    password: z.string({
        required_error: "Password is required"
    }).min(6, { message: "Password must be at least 6 characters" })
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});


