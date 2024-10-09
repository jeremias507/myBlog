import 'tailwindcss/tailwind.css'
import { MyRoutes } from './routers/MyRoutes'
import { AuthProvider } from './context/authContext'

export const App = (): JSX.Element => {
  return (
    <AuthProvider>
      <MyRoutes/>
    </AuthProvider>
  )
}

export default App
