import axios from './axios'

export const registerRequest = async (user: any): Promise<any> => {
  return await axios.post('auth/register', user)
}

export const LoginRequest = async (user: any): Promise<any> => {
  return await axios.post('auth/login', user)
}

export const VerifyToken = async (): Promise<any> => {
  return await axios.get('auth/verifyToken')
}
