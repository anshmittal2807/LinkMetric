import { BrowserRouter, Navigate, Route, Routes , createBrowserRouter } from 'react-router-dom'
import UserContextProvider from '../context/UserContextProvider'
import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashBoardPage'
import Error from '../components/error/Error'


const router  = createBrowserRouter([
  {
    path : '/',
    element : <UserContextProvider><HomePage /></UserContextProvider>,
    errorElement: <Error />
  },
  {
    path: '/dashboard',
    element: <UserContextProvider><DashboardPage /></UserContextProvider>,
    errorElement: <Error />
  },
  {
    path : '/signup', 
    element : <SignupPage />
  },
  { 
    path : '/login',

    element : <UserContextProvider><LoginPage /></UserContextProvider>
  }  
])


export default router;