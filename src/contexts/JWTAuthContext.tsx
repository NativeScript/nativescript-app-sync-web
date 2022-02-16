/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  useEffect,
  useState
} from 'react'
import type { ReactNode } from 'react'
import { isLoggedIn, setToken } from 'src/utils/auth'
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
      setToken(results.tokens)

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
    setToken('')
    setState({
      ...state,
      isInitialized: true,
      isAuthenticated: false,
      user: null
    })
  }

  useEffect(() => {
    const isValidLogin = isLoggedIn()
    if (isValidLogin) {
      api.authenticated().then((t) => {
        setState({
          ...state,
          isInitialized: true,
          isAuthenticated: Boolean(t.data?.authenticated),
          user: t.data?.user
        })
      })
        .catch(() => setState({
          ...state,
          isInitialized: true,
          isAuthenticated: false,
          user: null
        }))
    } else {
      setState({
        ...state,
        isInitialized: true,
        isAuthenticated: false
      })
    }
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
