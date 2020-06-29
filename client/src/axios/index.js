import axios from 'axios'
import storage from './localeAndSessionStorage'

const auth = storage()

const _axios = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${auth.token}`
  }
})

export default _axios
