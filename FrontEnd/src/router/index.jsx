import { BrowserRouter, Navigate, Route, Routes , createBrowserRouter } from 'react-router-dom'
import UserContextProvider from '../context/UserContextProvider'
import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'



const router  = createBrowserRouter([
  {
    path : '/',
    element : <HomePage />
  },
  {
    path : '/signup', 
    element : <SignupPage />
  },
  { 
    path : '/login',
    element : <LoginPage />
  },
  {
    path : '*',
    element : <Navigate to='/' replace />
  }
])


export default router;