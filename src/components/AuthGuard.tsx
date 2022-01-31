import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

interface AuthGuardProps {
  children?: ReactNode
}

function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

export default AuthGuard
