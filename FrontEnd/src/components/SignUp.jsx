import React from 'react'
import FormInput from './FormInput'
import { ArrowRight, LockKeyhole, Mail, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="w-full max-w-md rounded-3xl border border-[#c3c6d7] bg-white/90 px-4 py-6 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex flex-col items-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563eb]/10 text-[#2563eb]">
            <UserRound className="h-6 w-6" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0053db]">Link Metric</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#0b1c30] sm:text-4xl">Create your account</h1>
          <h3 className="text-sm text-[#434655]">Start optimizing your links today.</h3>
        </div>


        <form action="POST" method="POST" className="flex w-full flex-col gap-4">
          <FormInput id="Name" label="Full Name" placeholder="Name" icon={UserRound} />
          <FormInput id="Username" label="Username" placeholder="Username" icon={UserRound} />
          <FormInput id="Email" label="Email" type="email" placeholder="Email" icon={Mail} />
          <FormInput id="Password" label="Password" type="password" placeholder="Password" icon={LockKeyhole} />

          <button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-4 py-3 font-semibold text-white shadow-sm shadow-blue-200/70 transition hover:bg-[#004ac6] hover:shadow-md">
            <span>Register Now</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="text-center text-sm text-[#434655]">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-[#004ac6] hover:text-[#2563eb]">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup