import { type ProfileInterface } from '../interface/Profile'
import { LuLogOut } from 'react-icons/lu'
import { FaRegCircleUser } from 'react-icons/fa6'
import { FiFileText } from 'react-icons/fi'
import { BsBookmarks, BsJournalRichtext } from 'react-icons/bs'

export const ProfileData: ProfileInterface[] = [

  {
    id: 1,
    name: 'Mis borradores',
    path: '/',
    icon: <FiFileText />
  },
  {
    id: 2,
    name: 'Marcas',
    path: '/',
    icon: <BsBookmarks />
  },
  {
    id: 3,
    name: 'Configuracion de cuenta',
    path: '/',
    icon: <FaRegCircleUser />
  },
  {
    id: 4,
    name: 'Administra tus blogs',
    path: '/',
    icon: <BsJournalRichtext />
  },
  {
    id: 5,
    name: 'Cerrar sección',
    path: '/',
    icon: <LuLogOut />,
    color: 'red'
  }
]
