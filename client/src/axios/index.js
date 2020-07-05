import axios from 'axios'
import { getStorage } from '../helpers/storage'

const auth = getStorage('auth')

const _axios = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${auth.token}`
  }
})

export default _axios
