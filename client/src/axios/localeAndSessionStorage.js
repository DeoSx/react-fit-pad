export default function storage() {
  if (sessionStorage.getItem('auth')) {
    return JSON.parse(sessionStorage.getItem('auth'))
  } else {
    return JSON.parse(localStorage.getItem('auth')) || ''
  }
}