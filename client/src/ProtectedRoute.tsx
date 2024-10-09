import { useAuth } from './context/authContext'
import { Navigate, Outlet } from 'react-router-dom'
export const ProtectedRoute = (): any => {
  const { loading, isAuthenticate } = useAuth()
  if (loading) return <h1> loading</h1>
  if (!loading && !isAuthenticate) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
