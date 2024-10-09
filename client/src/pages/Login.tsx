import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/authContext'
import { loginSchema } from '../schema/authSchema'
import { zodResolver } from '@hookform/resolvers/zod'

interface Inputs {
  name: string
  email: string
  password: string
}

export const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ resolver: zodResolver(loginSchema) })

  const { login, isAuthenticate, errors: loginErrors } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (event: any): Promise<void> => {
    try {
      await login(event)
    } catch (error) {
      console.error('Error during handleSubmit:', error)
    }
  }

  useEffect(() => {
    if (isAuthenticate) {
      navigate('/')
    }
  }, [isAuthenticate])

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
            Iniciar Sección
          </h2>
        </div>
        {loginErrors.map((item, i) => (
          <p key={i} className="mx-auto mt-4 text-slate-200 bg-red-500 py-2 px-3 text-sm rounded-sm mb-1 w-full max-w-sm">
            {item}
          </p>
        ))}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-300"
              >
                Correo Electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  {...register('email')}
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                />
                {errors.email?.message && (
                   <p className="text-red-500 text-sm">{errors.email?.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-300"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  {...register('password')}
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                />
                 {errors.password?.message && (
                   <p className="text-red-500 text-sm">{errors.password?.message}</p>
                 )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar Sección
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No tienes una cuenta?
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to="/register"
            >
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
