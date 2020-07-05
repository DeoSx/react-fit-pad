export function setStorage(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data))
  localStorage.setItem(key, JSON.stringify(data))
}

export function getStorage(key) {
  if (sessionStorage.getItem(key)) {
    return JSON.parse(sessionStorage.getItem(key))
  } else {
    return JSON.parse(localStorage.getItem(key)) || ''
  }
}