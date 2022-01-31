/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  useEffect,
  useState
} from 'react'
import type { ReactNode } from 'react'
import jwtDecode from 'jwt-decode'
import { getToken, setTokens } from 'src/utils/auth'
import type { User } from 'src/types/user'
import * as api from 'src/api'

interface AuthState {
  isInitialized: boolean
  isAuthenticated: boolean
  user: User | null
}

interface SignIn {
  email: string
  password: string
}

interface AuthContextValue extends AuthState {
  login: (data: SignIn) => Promise<{ token: string }>,
  logout: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
}

const isValidToken = (accessToken: string): boolean => {
  if (!accessToken) {
    return false
  }

  const decoded = jwtDecode<{ exp: number }>(accessToken)
  const currentTime = Date.now() / 1000

  return decoded.exp > currentTime
}

const AuthContext = createContext<AuthContextValue>({
  ...initialAuthState,
  login: () => Promise.resolve({ token: '' }),
  logout: () => { }
})

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>({
    isInitialized: false,
    isAuthenticated: false,
    user: null
  })

  const login = async (p: SignIn) => {
    const { data: { results, status } } = await api.login(p.email, p.password)

    if (status === 'ERROR') { return null }

    if (results.tokens) {
      setTokens(results.tokens)

      const auth = {
        ...state,
        isAuthenticated: true,
        user: null,
      }

      setState(auth)
      return { token: results.tokens }
    }

    return { token: results.tokens }
  }

  const logout = () => {
    setTokens('')
    setState({
      ...state,
      isInitialized: true,
      isAuthenticated: false,
      user: null
    })
  }

  useEffect(() => {
    const initialise = () => {
      const accessToken = getToken()

      if (accessToken && isValidToken(accessToken)) {
        // TODO implement a getCurrentUser
        // client.query<GetCurrentUserQuery>({
        //   query: QUERY_GET_CURRENT_USER,
        //   fetchPolicy: 'no-cache'
        // }).then((t) => {
        //   // Token most likely valid but not for the server
        //   if (!t.data.getCurrentUser) {
        //     setState({
        //       ...state,
        //       isInitialized: true,
        //       isAuthenticated: false
        //     })
        //   } else {
        //     setState({
        //       ...state,
        //       isInitialized: true,
        //       isAuthenticated: true,
        //       user: t.data.getCurrentUser
        //     })
        //   }
        // })
        //   .catch(() => {
        //     setState({
        //       ...state,
        //       isInitialized: true,
        //       isAuthenticated: false
        //     })
        //   })
        setState({
          ...state,
          isInitialized: true,
          isAuthenticated: true,
          user: null
        })
      } else {
        setState({
          ...state,
          isInitialized: true,
          isAuthenticated: false
        })
      }
    }

    initialise()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
