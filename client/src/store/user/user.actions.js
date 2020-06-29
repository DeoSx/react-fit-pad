import { USER_INFO } from '../constants'

export function getUserAction(payload) {
  return {
    type: USER_INFO,
    payload
  }
}