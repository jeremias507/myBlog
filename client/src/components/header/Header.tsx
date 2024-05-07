import { Link } from 'react-router-dom'
import React, { useState, type ReactNode, Fragment } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
// import { IoMdClose } from 'react-icons/io'
import './header.scss'
import classNames from 'classnames'
import { ButtonWrite } from '../UI/ButtonWrite'
import { AiOutlineBell as BellIcon } from 'react-icons/ai'
import { Menu, Transition } from '@headlessui/react'
import { type HeaderInterface } from '../../interface/header'
import { headerData } from '../../data/headerData'
import { ProfileData } from '../../data/ProfileData'
import { SearchPanel } from '../UI/SearchPanel'
import { type ProfileInterface } from '../../interface/Profile'

interface HeaderProps {
  children?: ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  const [isAutenticate, setIsAutenticate] = useState<boolean>(false)

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
      }}
      className="bg-color-#020617 w-full h-19 flex items-center justify-center text-white pb-3 pt-4"
      style={{ borderBottom: '1px solid rgb(24, 33, 52)' }}
    >
      <header className=" fixed top-0 left-0 w-full flex items-center justify-between px-7 py-3 bg-opacity-90  bg-#020617 backdrop-blur-md border-b border-gray-800">
        <div className="logo-menu flex justify-center items-center gap-x-4">
          <i className="block  md:hidden cursor-pointer ">
            <RxHamburgerMenu style={{ fontSize: '23px' }} />
          </i>
          <h1
            className="cursor-pointer font-bold w-40 h-full"
            style={{ fontSize: '30px' }}
          >
            <Link to="/"> Myblog</Link>
          </h1>
        </div>
        <div className="hidden      md:h-full md:flex-1 md:flex md:justify-center md:items-center z-10  ">
          {/* <div className="flex justify-between items-center p-3 border-b border-gray-800">
            <h1
              className="cursor-pointer font-bold w-40 h-full"
              style={{ fontSize: '30px' }}
            >
              <Link to="/"> Myblog</Link>
            </h1>
            <i className="block  md:hidden cursor-pointer mr-2">
              <IoMdClose style={{ fontSize: '25px' }} />
            </i>
          </div> */}
          {headerData.map((item: HeaderInterface) => (
            <ul key={item.id} className="list-none ">
              <li className="block mr-4 py-2 px-4 rounded-full border-transparent  hover:border border-gray-   ">
                <a href={item.path} className="text-gray-300 text-sm ">
                  {item.title}
                </a>
              </li>
            </ul>
          ))}
        </div>

        {isAutenticate
          ? (
          <div className=" gap-3 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
            <SearchPanel />
            <div className="mr-2">
              <ButtonWrite
                onClick={() => {
                  setIsAutenticate(false)
                }}
              >
                Escribir
              </ButtonWrite>
            </div>
            <button
              type="button"
              className="relative rounded-full  p-2 text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-7 w-7" aria-hidden="true" />
            </button>
            <Menu as="div">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-11 w-11 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  style={{ background: '#020617' }}
                  className="mr-8 border  border-gray-800 absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-700' : '',
                          'block px-4 py-5 text-sm text-white   border-b border-gray-800  '
                        )}
                      >
                        <Menu.Button>
                          <Link
                            to="/perfil"
                            className=" flex items-center gap-3  rounded-full  text-sm focus:outline-none "
                          >
                            <img
                              className="h-11 w-11 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                            <div className="flex flex-col items-start ">
                              <span className="font-bold text-base">
                                Jeremias Barrios
                              </span>
                              <span className="">@TheJuniorCode</span>
                            </div>
                          </Link>
                        </Menu.Button>
                      </a>
                    )}
                  </Menu.Item>
                  {ProfileData.map((item: ProfileInterface) => (
                    <Menu.Item key={item.id}>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-700' : '',
                            item.name === 'Ajustes'
                              ? 'border-b border-gray-800'
                              : '',
                            'px-4 py-3 mb-1 text-white flex items-center gap-2'
                          )}
                        >
                          <i
                            style={{ fontSize: '18px' }}
                            className={classNames(
                              item.color === 'red' ? 'text-red-500' : ''
                            )}
                          >
                            {item.icon}
                          </i>
                          <div
                            className={classNames(
                              item.color === 'red' ? 'text-red-500' : '',
                              'text-sm'
                            )}
                          >
                            {item.name}
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
            )
          : (
          <div className="flex items-center gap-2">
            <div className="login cursor-pointer py-2 px-4">
              {' '}
              <Link to="/login"> Log in</Link>
            </div>
            <ButtonWrite
              onClick={() => {
                setIsAutenticate(true)
              }}
            >
              <Link to="#"> Crear Cuenta</Link>
            </ButtonWrite>
          </div>
            )}
      </header>
      {children}{' '}
      {/* Aquí renderizamos cualquier contenido adicional que se deba mostrar en el header */}
    </div>
  )
}
