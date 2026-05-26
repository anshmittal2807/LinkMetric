import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import './index.css'
function AppRouter() {
  return (
    <Router>
        <Routes >
            <Route path="/Signup" element={<SignUp/>} />
            <Route path="/" element={<h1>Hello world</h1>} />

        </Routes>
    </Router>
  )
}

export default AppRouter