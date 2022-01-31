import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';

interface GuestGuardProps {
  children: ReactNode;
}

function GuestGuard({ children }: GuestGuardProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

export default GuestGuard;
