import React from 'react'
import { useRouteError, useNavigate, Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import {motion} from 'framer-motion'

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    console.error(error)

    const status = error?.status || 'Error'
    const message = error?.statusText || error?.message || 'Something went wrong.'

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-white via-[#f3f7ff] to-[#eef4ff] px-6">
            <div className="max-w-3xl w-full">
                <div className="rounded-2xl border border-[#e6ecff] bg-white p-8 shadow-lg">
                    <div className="flex items-start gap-6">
                        <motion.div 
                        animate = {
                            {
                                y :[-10 , 10,-10],
                                }
                        }
                            transition = {
                                {
                                    duration : 1.5,
                                    repeat : Infinity,
                                    ease: 'easeInOut'
                                }}

                        className="rounded-full bg-[#2563eb]/10 p-4 text-[#2563eb]">
                            <AlertTriangle className="h-8 w-8" />
                        </motion.div>

                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-[#0b1c30]">Unexpected error</h1>
                            <p className="mt-2 text-sm text-[#495670]">We couldn't load the page you requested.</p>

                            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-center">
                                <div className="sm:col-span-2">
                                    <p className="text-xs font-semibold text-[#6b7280]">Status</p>
                                    <p className="mt-1 text-lg font-mono text-[#0b1c30]">{status}</p>

                                    <p className="mt-4 text-sm text-[#374151]">{message}</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <button
                                        onClick={() => navigate(-1)}
                                        className="rounded-lg border border-[#c3c6d7] px-4 py-2 text-sm font-semibold text-[#0b1c30] bg-white hover:bg-[#f8fafc]"
                                    >
                                        Go back
                                    </button>

                                    <Link
                                        to="/"
                                        className="inline-flex items-center justify-center rounded-lg bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#004ac6]"
                                    >
                                        Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    )
}

export default Error