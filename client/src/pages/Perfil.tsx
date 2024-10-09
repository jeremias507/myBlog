import { PencilIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export const Perfil = (): JSX.Element => {
  const { user } = useAuth()

  return (
    <div className="p-5 mt-16  rounded-2xl max-w-4xl max-h mx-auto border border-gray-800">
      <div className="flex">
        <div className="flex-2 mr-6">
          <img
            className="w-20 h-20 object-cover rounded-full cursor-pointer"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="flex flex-1  justify-between">
          <div>
            <h2 className="text-white cursor-pointer ">{user?.name}</h2>
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold text-white"
            >
             <Link to="/updatePerfil" className='flex'>
             <PencilIcon
                className="-ml-0.5 mr-1.5 h-5 w-5 text-white"
                aria-hidden="true"
              />
              Editar
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className=" flex justify-center items-center flex-col max-w-2xl  rounded-sm  mx-auto border border-gray-800 px-4 py-2">
          <h2 className="text-white p-1">Hacerca de Mi</h2>
          <p className='text-gray-300 text-sm text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In vel accusantium voluptatem hic et reiciendis sequi molestiae esse! Libero recusandae iure, explicabo magnam consequatur, eum fugiat dolore dicta reprehenderit eos accusantium quod, perferendis accusamus molestiae dolor et ipsum velit! A ea nulla earum! Itaque quia dignissimos esse reiciendis praesentium culpa voluptates, eaque, tenetur inventore pariatur quisquam, sunt modi vel perferendis ratione officia totam? Facilis dignissimos voluptatem ipsum eligendi maiores veritatis incidunt suscipit. Praesentium vitae iusto numquam velit quo deserunt! Hic, accusamus! Sit voluptatibus in distinctio officia cum maiores culpa quasi doloremque, est velit eveniet soluta vitae animi aliquam, veniam nostrum.</p>
        </div>
        <div className="flex justify-center items-center mt-3 flex-col max-w-2xl  rounded-sm  mx-auto border border-gray-800 px-4 py-2">
          <h2 className="text-white p-1">Publicaciones</h2>

        </div>
        <div></div>
      </div>
    </div>
  )
}
