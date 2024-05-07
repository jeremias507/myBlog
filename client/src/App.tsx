import 'tailwindcss/tailwind.css'
import { Home } from './pages/Home'
import { MyRoutes } from './routers/MyRoutes'
import { Login } from './pages/Login'
export const App = (): JSX.Element => {
  return (
    <MyRoutes>
      <Home />
      <Login />
    </MyRoutes>
  )
}

export default App
