import decodeJwt from 'jwt-decode'
import { fromUnixTime, isBefore } from 'date-fns'

export const TOKEN = 'auth'

export const setToken = (token: string) => {
  sessionStorage.setItem(TOKEN, token)
}

export const getToken = () => sessionStorage.getItem(TOKEN)

interface decodeJwtResult {
  exp: number
}

export const isLoggedIn = () => {
  const token = sessionStorage.getItem(TOKEN)
  if (!token) {
    return false
  }

  // const decodedToken = decodeJwt(token) as any
  const decodedRefreshToken = decodeJwt<decodeJwtResult>(token)

  // const tokenTime = moment(decodedToken.exp).utc()

  if (isBefore(fromUnixTime(decodedRefreshToken.exp), new Date())) return false

  return true
}
