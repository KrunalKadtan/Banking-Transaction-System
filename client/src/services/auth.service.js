import axios from 'axios'
axios.defaults.withCredentials = true

export const registerUser = async (userData) => {
  const response = await axios.post('/api/auth/register', userData)
  return response.data
}

export const loginUser = async (userData) => {
  const response = await axios.post('/api/auth/login', userData)
  return response.data
}

export const logoutUser = async (userData) => {
  const response = await axios.post('api/auth/logout')
  return response.data
}
