import React from 'react'

function SignupHeader() {
  return (
    <nav className="hidden border-b border-[#c3c6d7] bg-[#f8f9ff]/90 backdrop-blur-md sm:block">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
         
          <div className="leading-tight">
            <h1 className="text-base font-semibold tracking-tight text-[#0b1c30]">LinkMetric</h1>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-[#434655]">
          <span className="hidden sm:inline">Already have an account?</span>
          <a
            href="/login"
            className="rounded-full border border-[#c3c6d7] bg-white px-4 py-2 font-medium text-[#004ac6] transition hover:border-[#b4c5ff] hover:bg-[#e5eeff]"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}

export default SignupHeader