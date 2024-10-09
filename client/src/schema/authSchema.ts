import { z } from 'zod'

export const registerSchema = z
  .object({
    name: z
      .string({
        required_error: 'Name es requerido'
      })
      .min(3, {
        message: 'Name debe tener 3 carateres'
      }),
    email: z.string().email({
      message: 'Introduzca un correo valido'
    }),
    password: z.string().min(6, {
      message: 'Password debe tener 6 caracteres'
    })
  })

export const loginSchema = z
  .object({
    email: z.string().email({
      message: 'Introduzca un email correcto'
    }),
    password: z.string().min(6, {
      message: 'Password debe tener 6 caracteres'
    })
  })
