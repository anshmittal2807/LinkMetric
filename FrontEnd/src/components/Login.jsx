import React from 'react'
import FormInput from './FormInput'
import { ArrowRight, LockKeyhole, Mail, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

function Login() {
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

        <form action="POST" method="POST" className="flex w-full flex-col gap-4">
          <FormInput id="email" label="Email" type="email" placeholder="you@example.com" icon={Mail} />
          <FormInput id="password" label="Password" type="password" placeholder="Enter your password" icon={LockKeyhole} />

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

          <button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-4 py-3 font-semibold text-white shadow-sm shadow-blue-200/70 transition hover:bg-[#004ac6] hover:shadow-md">
            <span>Login</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="text-center text-sm text-[#434655]">
            Don’t have an account?{' '}
            <Link to="/" className="font-semibold text-[#004ac6] hover:text-[#2563eb]">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login