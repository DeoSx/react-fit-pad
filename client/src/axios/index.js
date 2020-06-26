import axios from 'axios'
import storage from './localeAndSessionStorage'

const token = storage()
if (token) {
  axios.defaults.headers.common['Autherization'] = `Bearer ${token}`
}

const _axios = axios.create({
  baseURL: 'http://localhost:5000/api/'
})

export default _axios