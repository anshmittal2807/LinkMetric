import React from 'react'
import FormInput from './FormInput'
import { ArrowRight, LockKeyhole, Mail, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import{handleRegister} from '../services/handleRegister'
import {useState} from 'react' 
import { validateFormData } from '../services/regexValidator'

function Signup() {
  const[formData , setFormData] =  useState({
    name : '',
    userName : '',
    email : '',
    password : ''
  });

  const[error , setError] = useState(false)
  const[errorMessage , setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateFormData(formData.name, formData.userName, formData.email, formData.password);
    if (!validation.isValid) {
      setError(true);
      setErrorMessage(validation.message);
      return;
    }

    try {
      const data  = await handleRegister(formData);
      console.log('Registration successful:', data);
      setError(false);
      setErrorMessage('');
    } catch (error) {
      setError(true);
      console.error('Error during registration:', error);
      setErrorMessage(error.message || 'An error occurred during registration. Please try again.');
    }
  }

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


        <form action="POST" method="POST" className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          <FormInput id="Name"  name="name" label="Full Name" placeholder="Name" icon={UserRound} value={formData.name} onChange = {(e)  => { setFormData({...formData, name: e.target.value}) }} />
          <FormInput id="Username"  name="username" label="Username" placeholder="Username" icon={UserRound} value={formData.userName} onChange = {(e) => { setFormData({...formData, userName: e.target.value}) }} />
          <FormInput id="Email"  name="email" label="Email" type="email" placeholder="Email" icon={Mail} value={formData.email} onChange = {(e) => { setFormData({...formData, email: e.target.value}) }} />
          <FormInput id="Password" name="password"  label="Password" type="password" placeholder="Password" icon={LockKeyhole} value={formData.password} onChange = {(e)  => { setFormData({...formData, password: e.target.value}) }} />
          
          <button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-4 py-3 font-semibold text-white shadow-sm shadow-blue-200/70 transition hover:bg-[#004ac6] hover:shadow-md">
            <span>Register Now</span>
            <ArrowRight className="h-4 w-4" />
          </button>

        {
          error && <p className="text-center text-sm text-red-500">{errorMessage}</p>
        }

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