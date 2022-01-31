import {
  Suspense,
  lazy
} from 'react'
import { Navigate } from 'react-router'
import type { RouteObject } from 'react-router'
import DashboardLayout from 'src/layouts/DashboardLayout'
import AuthLayout from 'src/layouts/AuthLayout'
import LoadingScreen from 'src/components/LoadingScreen'
import AuthGuard from 'src/components/AuthGuard'
import GuestGuard from 'src/components/GuestGuard'

const Loadable = (Component) => function (props) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )
};

const NotFound = Loadable(lazy(() => import('src/views/error/NotFoundView')))
// const ResetPassword = Loadable(lazy(() => import('src/views/passwordReset/ResetPassword')))
const Login = Loadable(lazy(() => import('src/views/userLogin/Login')))
const AccessKeysList = Loadable(lazy(() => import('src/views/accessKeysList/AccessKeysList')))

const routes: RouteObject[] = [
  {
    path: '/login',
    element: (
      <GuestGuard>
        <AuthLayout />
      </GuestGuard>
    ),
    children: [
      {
        path: '/',
        element: <Login />
      },
    ]
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="/accessKeys" replace />
      },
      {
        path: '/accessKeys',
        element: <AccessKeysList />
      }
    ]
  },
  {
    path: '/errors',
    element: <NotFound />
  }
]

export default routes
