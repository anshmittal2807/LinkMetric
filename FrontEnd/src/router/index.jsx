import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashBoardPage'
import Error from '../components/error/Error'
import AllLinkContextProvider from '../context/AllLinkContextProvider'
import ProtectedRoute from './ProtectedRoute'
import AnalyticsPage from '../pages/AnalyticsPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <AllLinkContextProvider>
          <DashboardPage />
        </AllLinkContextProvider>
      </ProtectedRoute>
    ),
    errorElement: <Error />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/error',
    element: <Error />,
  },
  {
    path: '/analytics',
    element: (
      <ProtectedRoute>
        <AnalyticsPage />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
  },
])

export default router