import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { type ReactNode } from 'react'
import { Header } from '../components/header/Header'
import { Register } from '../pages/Register'
import { Perfil } from '../pages/Perfil'
import { UpdatePerfil } from '../components/updatePerfil/UpdatePerfil'
import { ProtectedRoute } from '../ProtectedRoute'

import { Toaster } from 'react-hot-toast'
interface ChildrenLayout {
  children: ReactNode
}

const Layout: React.FC<ChildrenLayout> = ({ children }) => {
  return (
    <>
      <Header />
     <main>
     {children}
     </main>
    </>
  )
}

export const MyRoutes = (): any => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Layout> <Home /> </Layout>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

       <Route element={<ProtectedRoute/>}>
         <Route path="/perfil" element={ <Layout> <Perfil /> </Layout>}/>
         <Route path="/updatePerfil" element={ <Layout> <UpdatePerfil/> </Layout>}/>
       </Route>

    </Routes>
   <Toaster/>
  </BrowserRouter>
  )
}
