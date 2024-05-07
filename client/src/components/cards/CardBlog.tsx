import { FaRegComments } from 'react-icons/fa'
import { BsBookmarks } from 'react-icons/bs'

export const CardBlog: React.FC = () => {
  return (
    <div className="mx-2 ">
      <article className="mb-5 max-w-3xl mx-auto flex-col border border-gray-800 p-7 rounded-2xl">
        <section className="">
          <div className="flex items-center gap-3">
            <img
              className="h-11 w-11 rounded-full "
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex-col">
              <div>
                <span className="text-sm">Carlos ALvarado</span>
              </div>
              <span className="text-sm text-gray-500">
                carlos.Work - hace 5 horas
              </span>
            </div>
          </div>
          <div className="md:flex md:justify-center md:items-center md:gap-4 ">
            <div className="text-left ">
              <div className="font-bold text-xl text-gray-300 my-3 ">
                <h2>
                  Acceso eficientemente a archivos específicos en los
                  repositorios de GitHub: Guía para los chequeos esparcedores
                </h2>
              </div>
              <div className="text-gray-500  hidden md:block">
                <p>
                  Introducción En el vasto universo de GitHub, los
                  desarrolladores a menudo encuentran un escenario común: la....
                </p>
              </div>
            </div>
            <div className="w-full  ">
              <img
                style={{ objectFit: 'cover' }}
                className="rounded-lg  "
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1705572439802/1e2f5cd3-032a-4f9b-99fb-8550a6cbb080.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between mt-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem' }} className="text-gray-300">
                <FaRegComments />
              </i>
              <span> Comentarios - 11 likes</span>
            </div>
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem', cursor: 'pointer' }} className="text-gray-300">
                <BsBookmarks />
              </i>
            </div>
          </div>
        </section>
      </article>

      <article className="flex-col border border-gray-800 p-7 rounded-2xl max-w-3xl mx-auto">
        <section>
          <div className="flex items-center gap-3">
            <img
              className="h-11 w-11 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex-col">
              <div>
                <span className="text-sm">Carlos ALvarado</span>
              </div>
              <span className="text-sm text-gray-500">
                carlos.Work - hace 5 horas
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="text-left ">
              <div className="font-bold text-xl text-gray-300 my-3 ">
                <h2>
                  Acceso eficientemente a archivos específicos en los
                  repositorios de GitHub: Guía para los chequeos esparcedores
                </h2>
              </div>
              <div className="text-gray-500">
                <p>
                  Introducción En el vasto universo de GitHub, los
                  desarrolladores a menudo encuentran un escenario común: la....
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem' }} className="text-gray-300">
                <FaRegComments />
              </i>
              <span> Comentarios - 11 likes</span>
            </div>
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem' }} className="text-gray-300">
                <BsBookmarks />
              </i>
            </div>
          </div>
        </section>
      </article>

      <article className="mb-5 max-w-3xl mx-auto flex-col border border-gray-800 p-7 rounded-2xl">
        <section className="">
          <div className="flex items-center gap-3">
            <img
              className="h-11 w-11 rounded-full "
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex-col">
              <div>
                <span className="text-sm">Carlos ALvarado</span>
              </div>
              <span className="text-sm text-gray-500">
                carlos.Work - hace 5 horas
              </span>
            </div>
          </div>
          <div className="md:flex md:justify-center md:items-center md:gap-4 ">
            <div className="text-left ">
              <div className="font-bold text-xl text-gray-300 my-3 ">
                <h2>
                  Acceso eficientemente a archivos específicos en los
                  repositorios de GitHub: Guía para los chequeos esparcedores
                </h2>
              </div>
              <div className="text-gray-500  hidden md:block">
                <p>
                  Introducción En el vasto universo de GitHub, los
                  desarrolladores a menudo encuentran un escenario común: la....
                </p>
              </div>
            </div>
            <div className="w-full  ">
              <img
                style={{ objectFit: 'cover' }}
                className="rounded-lg  "
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1705572439802/1e2f5cd3-032a-4f9b-99fb-8550a6cbb080.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between mt-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem' }} className="text-gray-300">
                <FaRegComments />
              </i>
              <span> Comentarios - 11 likes</span>
            </div>
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem', cursor: 'pointer' }} className="text-gray-300">
                <BsBookmarks />
              </i>
            </div>
          </div>
        </section>
      </article>

      <article className="mb-5 max-w-3xl mx-auto flex-col border border-gray-800 p-7 rounded-2xl">
        <section className="">
          <div className="flex items-center gap-3">
            <img
              className="h-11 w-11 rounded-full "
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex-col">
              <div>
                <span className="text-sm">Carlos ALvarado</span>
              </div>
              <span className="text-sm text-gray-500">
                carlos.Work - hace 5 horas
              </span>
            </div>
          </div>
          <div className="md:flex md:justify-center md:items-center md:gap-4 ">
            <div className="text-left ">
              <div className="font-bold text-xl text-gray-300 my-3 ">
                <h2>
                  Acceso eficientemente a archivos específicos en los
                  repositorios de GitHub: Guía para los chequeos esparcedores
                </h2>
              </div>
              <div className="text-gray-500  hidden md:block">
                <p>
                  Introducción En el vasto universo de GitHub, los
                  desarrolladores a menudo encuentran un escenario común: la....
                </p>
              </div>
            </div>
            <div className="w-full  ">
              <img
                style={{ objectFit: 'cover' }}
                className="rounded-lg  "
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1705572439802/1e2f5cd3-032a-4f9b-99fb-8550a6cbb080.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between mt-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem' }} className="text-gray-300">
                <FaRegComments />
              </i>
              <span> Comentarios - 11 likes</span>
            </div>
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem', cursor: 'pointer' }} className="text-gray-300">
                <BsBookmarks />
              </i>
            </div>
          </div>
        </section>
      </article>

      <article className="mb-5 max-w-3xl mx-auto flex-col border border-gray-800 p-7 rounded-2xl">
        <section className="">
          <div className="flex items-center gap-3">
            <img
              className="h-11 w-11 rounded-full "
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex-col">
              <div>
                <span className="text-sm">Carlos ALvarado</span>
              </div>
              <span className="text-sm text-gray-500">
                carlos.Work - hace 5 horas
              </span>
            </div>
          </div>
          <div className="md:flex md:justify-center md:items-center md:gap-4 ">
            <div className="text-left ">
              <div className="font-bold text-xl text-gray-300 my-3 ">
                <h2>
                  Acceso eficientemente a archivos específicos en los
                  repositorios de GitHub: Guía para los chequeos esparcedores
                </h2>
              </div>
              <div className="text-gray-500  hidden md:block">
                <p>
                  Introducción En el vasto universo de GitHub, los
                  desarrolladores a menudo encuentran un escenario común: la....
                </p>
              </div>
            </div>
            <div className="w-full  ">
              <img
                style={{ objectFit: 'cover' }}
                className="rounded-lg  "
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1705572439802/1e2f5cd3-032a-4f9b-99fb-8550a6cbb080.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between mt-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem' }} className="text-gray-300">
                <FaRegComments />
              </i>
              <span> Comentarios - 11 likes</span>
            </div>
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem', cursor: 'pointer' }} className="text-gray-300">
                <BsBookmarks />
              </i>
            </div>
          </div>
        </section>
      </article>


      <article className="mb-5 max-w-3xl mx-auto flex-col border border-gray-800 p-7 rounded-2xl">
        <section className="">
          <div className="flex items-center gap-3">
            <img
              className="h-11 w-11 rounded-full "
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex-col">
              <div>
                <span className="text-sm">Carlos ALvarado</span>
              </div>
              <span className="text-sm text-gray-500">
                carlos.Work - hace 5 horas
              </span>
            </div>
          </div>
          <div className="md:flex md:justify-center md:items-center md:gap-4 ">
            <div className="text-left ">
              <div className="font-bold text-xl text-gray-300 my-3 ">
                <h2>
                  Acceso eficientemente a archivos específicos en los
                  repositorios de GitHub: Guía para los chequeos esparcedores
                </h2>
              </div>
              <div className="text-gray-500  hidden md:block">
                <p>
                  Introducción En el vasto universo de GitHub, los
                  desarrolladores a menudo encuentran un escenario común: la....
                </p>
              </div>
            </div>
            <div className="w-full  ">
              <img
                style={{ objectFit: 'cover' }}
                className="rounded-lg  "
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1705572439802/1e2f5cd3-032a-4f9b-99fb-8550a6cbb080.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between mt-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem' }} className="text-gray-300">
                <FaRegComments />
              </i>
              <span> Comentarios - 11 likes</span>
            </div>
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem', cursor: 'pointer' }} className="text-gray-300">
                <BsBookmarks />
              </i>
            </div>
          </div>
        </section>
      </article>

      <article className="mb-5 max-w-3xl mx-auto flex-col border border-gray-800 p-7 rounded-2xl">
        <section className="">
          <div className="flex items-center gap-3">
            <img
              className="h-11 w-11 rounded-full "
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex-col">
              <div>
                <span className="text-sm">Carlos ALvarado</span>
              </div>
              <span className="text-sm text-gray-500">
                carlos.Work - hace 5 horas
              </span>
            </div>
          </div>
          <div className="md:flex md:justify-center md:items-center md:gap-4 ">
            <div className="text-left ">
              <div className="font-bold text-xl text-gray-300 my-3 ">
                <h2>
                  Acceso eficientemente a archivos específicos en los
                  repositorios de GitHub: Guía para los chequeos esparcedores
                </h2>
              </div>
              <div className="text-gray-500  hidden md:block">
                <p>
                  Introducción En el vasto universo de GitHub, los
                  desarrolladores a menudo encuentran un escenario común: la....
                </p>
              </div>
            </div>
            <div className="w-full  ">
              <img
                style={{ objectFit: 'cover' }}
                className="rounded-lg  "
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1705572439802/1e2f5cd3-032a-4f9b-99fb-8550a6cbb080.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between mt-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem' }} className="text-gray-300">
                <FaRegComments />
              </i>
              <span> Comentarios - 11 likes</span>
            </div>
            <div className="flex items-center gap-2">
              <i style={{ fontSize: '1rem', cursor: 'pointer' }} className="text-gray-300">
                <BsBookmarks />
              </i>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
