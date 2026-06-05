import React, { useState, useContext } from 'react'
import FormInput from '../FormInput'
import { ArrowRight, LockKeyhole, Mail, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { login } from '../../services/authService'
import { validateUsername, validatePassword } from '../../services/regexValidator'
import UserContext from '../../context/UserContext'

function Login() {
  const [form, setForm] = useState({ userName: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { user, setUser } = useContext(UserContext)


  const validate = () => {
    const uvalid = validateUsername(form.userName)
    if (!uvalid) return 'Username must be at least 3 characters (letters, numbers, underscore)'
    const pvalid = validatePassword(form.password)
    if (!pvalid) return 'Password must be at least 8 characters, include upper/lowercase, number and special char'
    return null
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const v = validate()
    if (v) {
      setError(v)
      return
    }

    setLoading(true)
    try {
      const data = await login(form)
      // `login` already logs the token; you can also access it here
      console.log('Login response:', data)
      setUser(data.user) // Update user context with logged-in user info
      window.location.href = '/' // Redirect to dashboard after successful login
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex w-full flex-1 items-center justify-center px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="w-full max-w-md rounded-3xl border border-[#c3c6d7] bg-white/90 px-4 py-6 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex flex-col items-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563eb]/10 text-[#2563eb]">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0053db]">Link Metric</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#0b1c30] sm:text-4xl">Welcome back</h1>
          <h3 className="text-sm text-[#434655]">Sign in to manage and optimize your links.</h3>
        </div>

        <form action="POST" method="POST" className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          <FormInput id="userName" name="userName" label="Username" placeholder="Username" icon={Mail} value={form.userName} onChange={(e) => setForm({ ...form, userName: e.target.value })} />
          <FormInput id="password" name="password" label="Password" type="password" placeholder="Enter your password" icon={LockKeyhole} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />

          <div className="flex items-center justify-between gap-3 text-sm text-[#434655]">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-[#c3c6d7] text-[#2563eb] focus:ring-[#b4c5ff]"
              />
              <span>Remember me</span>
            </label>

            <a href="#" className="font-semibold text-[#004ac6] hover:text-[#2563eb]">
              Forgot password?
            </a>
          </div>

          <button disabled={loading} type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-4 py-3 font-semibold text-white shadow-sm shadow-blue-200/70 transition hover:bg-[#004ac6] hover:shadow-md disabled:opacity-60">
            <span>{loading ? 'Signing in...' : 'Login'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {error && <p className="text-center text-sm text-red-500">{error}</p>}

          <p className="text-center text-sm text-[#434655]">
            Don’t have an account?{' '}
            <Link to="/signup" className="font-semibold text-[#004ac6] hover:text-[#2563eb]">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
