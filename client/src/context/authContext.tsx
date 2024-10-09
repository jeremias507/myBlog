import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode
} from 'react'
import { registerRequest, LoginRequest, VerifyToken } from '../api/auth'
import { toast } from 'react-hot-toast'
import Cookies from 'js-cookie'
import { set } from 'react-hook-form'

interface AuthContextType {
  user: User | null
  isAuthenticate: true | false
  login: (user: any) => Promise<void>
  logout: () => any
  signup: (user: any) => Promise<void>
  errors: string[]
  loading: boolean
}

interface User {
  name: string
  email: string
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

function isUser (data: any): data is User {
  return data !== null && data !== undefined && typeof data.name === 'string'
  // Añade más validaciones según los campos que tenga User
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticate, setIsAuthenticate] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const signup = async (user: any): Promise<void> => {
    try {
      const res = await registerRequest(user)
      const data: unknown = res.data
      if (res.status === 200) {
        if (isUser(data)) {
          setUser(data)
          setIsAuthenticate(true)
          toast.success('Usuario creado!', {
            position: 'bottom-right'
          })
        }
      } else {
        console.error('Invalid response data:', res)
        throw new Error('Failed to sign up: Invalid response data')
      }
    } catch (error: any) {
      console.error('Error during signup:', error)
      setErrors(error.response.data.message)
    }
  }

  const login = async (user: any): Promise<void> => {
    try {
      const res = await LoginRequest(user)
      const data: unknown = res.data
      if (res.status === 200) {
        if (isUser(data)) {
          setUser(data)
          setIsAuthenticate(true)
          toast.success('Bienvenido!!', {
            position: 'bottom-right'
          })
        }
      }
    } catch (error) {
      console.error('Error during signup:', error)
      setErrors(error.response.data.message)
    }
  }

  const logout = (): any => {
    Cookies.remove('token')
    setUser(null)
    setIsAuthenticate(false)
  }

  
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([])
      }, 5000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [errors])

  useEffect(() => {
    const checkLogin = async (): Promise<any> => {
      const cookies = Cookies.get()

      if (!cookies.token) {
        setIsAuthenticate(false)
        setLoading(false)
        return
      }
      try {
        const res = await VerifyToken(cookies.token)
        if (!res.data) {
          setIsAuthenticate(false)
        }
        setIsAuthenticate(true)
        setUser(res.data)
        setLoading(false)
      } catch (error) {
        setIsAuthenticate(false)
        setLoading(false)
      }
    }

    checkLogin()
  }, [])

  const authContextValue: AuthContextType = {
    signup,
    login,
    logout,
    isAuthenticate,
    user,
    errors,
    loading
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}
