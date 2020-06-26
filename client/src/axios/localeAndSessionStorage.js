export default function storage() {
  if (sessionStorage.getItem('token')) {
    return sessionStorage.getItem('token')
  } else {
    return localStorage.getItem('token') || ''
  }
}