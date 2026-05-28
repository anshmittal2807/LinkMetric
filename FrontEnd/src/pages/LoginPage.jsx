import Login from '../components/Login'
import LoginHeader from '../components/LoginHeader'
import { LogIn, ShieldCheck, TrendingUp } from 'lucide-react'
import loginImage from '../assets/signupPageimg.png'

function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#f8f9ff]">
      <LoginHeader />

      <div className="flex min-h-[calc(100vh-4.5rem)] flex-col lg:flex-row">
        <div className="hidden flex-1 flex-col items-center justify-center backdrop-blur-md sm:flex">
          <div className="flex w-full max-w-xl flex-col gap-6 px-8 py-10 xl:px-10">
            <div className="space-y-4">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c3c6d7] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0053db]">
                <LogIn className="h-4 w-4" />
                Secure access
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-[#0b1c30] xl:text-5xl">
                Return to your dashboard in seconds.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-[#434655]">
                Pick up where you left off with fast access to performance insights, campaign links, and optimization tools.
              </p>
            </div>

            <div className="grid w-full gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#c3c6d7] bg-[#f8f9ff] p-4">
                <ShieldCheck className="mb-3 h-6 w-6 text-[#2563eb]" />
                <p className="font-semibold text-[#0b1c30]">Protected account access</p>
                <p className="mt-1 text-sm leading-6 text-[#434655]">Keep your link data secure with a clean, private sign-in flow.</p>
              </div>

              <div className="rounded-2xl border border-[#c3c6d7] bg-[#f8f9ff] p-4">
                <TrendingUp className="mb-3 h-6 w-6 text-[#2563eb]" />
                <p className="font-semibold text-[#0b1c30]">Move faster</p>
                <p className="mt-1 text-sm leading-6 text-[#434655]">Get back to tracking clicks, views, and conversions without extra steps.</p>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-3xl bg-white/70 ring-1 ring-[#d8def0]/70">
              <img src={loginImage} alt="LinkMetric dashboard preview" className="h-64 w-full object-cover object-center xl:h-72" />
              <img
                src="/favicon.svg"
                alt="LinkMetric mark"
                className="absolute right-4 top-4 h-10 w-10 rounded-full bg-white p-1.5 shadow-[0_10px_24px_-14px_rgba(15,23,42,0.5)]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-start justify-center px-0 py-6 sm:items-center sm:px-6 sm:py-10 lg:px-8">
          <Login />
        </div>
      </div>
    </div>
  )
}

export default LoginPage