import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter