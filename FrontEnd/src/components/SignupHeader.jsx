import React from 'react'
import { Link2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'


function SignupHeader() {
  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="hidden border-b border-[#d8def0] bg-[#f8f9ff]/90 backdrop-blur-xl sm:block"
    >

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2563eb]/10 text-[#2563eb] shadow-sm shadow-blue-100">
            <Link2 className="h-5 w-5" />
          </div>

          <div className="leading-tight">
            <h1 className="text-lg font-semibold tracking-tight text-[#0b1c30]">LinkMetric</h1>
            <p className="text-xs text-[#5b6275]">Link smarter. Grow faster.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-[#434655]">
          <span className="hidden sm:inline">Already have an account?</span>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-full border border-[#c3c6d7] bg-white px-4 py-2 font-medium text-[#004ac6] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b4c5ff] hover:bg-[#e5eeff]"
          >
            Login
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default SignupHeader