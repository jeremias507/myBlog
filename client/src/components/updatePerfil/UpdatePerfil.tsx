import { FaRegUserCircle } from 'react-icons/fa'

export const UpdatePerfil = (): JSX.Element => {
  return (
    <form>
      <div className="space-y-12 p-5 mt-16  rounded-2xl max-w-4xl max-h mx-auto border border-gray-800">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-300">
            Perfil
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            Esta información se mostrará públicamente, así que tenga cuidado con
            lo que compartir.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-300"
              >
                Nombre de Usuario
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-300"
              >
                Acerca de Mi
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  placeholder="Soy amigable...."
                  className="bg-transparent block w-full rounded-md border-0 px-1 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                Escribe algunas frases sobre ti.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-300"
              >
                Foto
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <FaRegUserCircle
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-white   ring-gray-300 bg-blue-500 hover:bg-blue-700"
                >
                  Cambiar
                </button>
              </div>
            </div>

            <div className="mt-6  flex    gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold  text-white border border-blue-500 hover:bg-blue-700  rounded-md px-3 py-2"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded-md  bg-blue-500 hover:bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm "
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
