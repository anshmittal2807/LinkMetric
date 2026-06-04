import { BrowserRouter, Navigate, Route, Routes , createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashBoardPage'
import Error from '../components/error/Error'


const router  = createBrowserRouter([
  {
    path : '/',
    element : <HomePage />,
    errorElement: <Error />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    errorElement: <Error />
  },
  {
    path : '/signup', 
    element : <SignupPage />
  },
  { 
    path : '/login',

    element : <LoginPage />
  }  
])


export default router;