import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <UserContextProvider>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </UserContextProvider>

        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter