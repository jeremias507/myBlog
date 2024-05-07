import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { type ReactNode } from 'react'
import { Header } from '../components/header/Header'
import { Register } from '../pages/Register'
import { Perfil } from '../pages/Perfil'
import { UpdatePerfil } from '../components/updatePerfil/UpdatePerfil'

interface ChildrenLayout {
  children: ReactNode
}

interface MyRoutesProps {
  children: ReactNode
}

const Layout: React.FC<ChildrenLayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export const MyRoutes: React.FC<MyRoutesProps> = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Layout> <Home /> </Layout>}/>
      <Route path="/Perfil" element={ <Layout> <Perfil /> </Layout>}/>
      <Route path="/updatePerfil" element={ <Layout> <UpdatePerfil/> </Layout>}/>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  </BrowserRouter>
  )
}
