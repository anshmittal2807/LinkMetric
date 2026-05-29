import Signup from '../components/Signup'
import SignupHeader from '../components/SignupHeader'
import { Activity } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import signupImage from '../assets/signupPageimg.png'
import { motion } from 'motion/react'
import {handleRegister} from '../services/handleRegister'


function SignupPage() {

  
  return (
<motion.div
  initial={{ y: -24, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  className="min-h-screen w-full bg-[#f8f9ff]"
>
  <SignupHeader />
  <div className="flex">

    <motion.div
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      className="hidden flex-1 items-center justify-center flex-col backdrop-blur-md sm:flex"
    >
      <div className="w-full max-w-md rounded-2xl p-8 ">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0b1c30]">
          Precision in Every Click,
        </h1>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2563eb]">
          Power in Every Link!
        </h1>


        <p className="mt-4 text-lg text-[#434655] text-justify">
        Join a community of data-driven marketers and experience the power of LinkMetric. Sign up now to unlock the full potential of your links and elevate your marketing strategy to new heights!

        </p>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-xl rounded-2xl p-8 min-h-40 sm:min-h-56">

        <div className="flex gap-4 border border-[#c3c6d7] bg-[#f8f9ff] px-4 py-3 rounded-xl">
          <div className="rounded-xl bg-[#2563eb]/80 p-2 h-10 w-10 flex items-center justify-center">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div> <p className="font-semibold">Real-Time Analytics</p>
          <p className="text-sm text-[#434655]">Track your link performance in real-time and make data-driven decisions to optimize your marketing strategy.</p>
          </div>

        </div>
        
     
        <div className="flex gap-4 border border-[#c3c6d7] bg-[#f8f9ff] px-4 py-3 rounded-xl">
          <div className="rounded-xl bg-[#2563eb]/80 p-2 h-10 w-10 flex items-center justify-center">
            <BadgeCheck className="h-6 w-6 text-white" />
          </div>
          <div> <p className="font-semibold">Trusted By Professionals</p>
          <p className="text-sm text-[#434655]">Join thousands of satisfied professionals who trust LinkMetric for their link management needs.</p>
          </div>

        </div>


          
        <img
          src={signupImage}
          alt=""
          className="w-full max-w-none h-56 sm:h-64 lg:h-72 rounded-xl object-cover"
        />
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
      className="flex flex-1 items-start justify-center px-0 py-6 sm:items-center sm:px-6 sm:py-10 lg:px-8"
    >
        <Signup/>
    </motion.div>
  </div>
</motion.div>
  )
}

export default SignupPage