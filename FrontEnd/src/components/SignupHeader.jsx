import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import BrandMark from './BrandMark'


function SignupHeader() {
  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="hidden border-b border-[#d8def0] bg-[#f8f9ff]/90 backdrop-blur-xl sm:block"
    >

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandMark
        />

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