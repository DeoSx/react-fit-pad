import _axios from 'axios'
import { getStorage } from '../helpers/storage'

const auth = getStorage('auth')

const axios = _axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: auth && `Bearer ${auth.token}`
  }
})

axios.interceptors.request.use((config) => {
  const requestConfig = { ...config }
  const token = getStorage('auth').token
  if (token) {
    requestConfig.headers.Authorization = `Bearer ${token}`
    return requestConfig
  }
  return requestConfig
})

export default axios
