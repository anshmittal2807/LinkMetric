import React, { use, useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {



  return (
    <div className="antialiased min-h-screen flex items-center justify-center p-4 bg-white text-slate-900">
      <div className="w-full max-w-[400px]">

        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-blue-700 text-3xl">
              account_balance_wallet
            </span>
            <span className="text-xl font-semibold tracking-tight">
              ExpenseTracker
            </span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Create your account
          </h1>
          <p className="text-slate-500 mt-2">
            Start managing your Links simply
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              required
              className="w-full h-11 px-3.5 border rounded"
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1.5">
              Username
            </label>
            <input
              id="username"
              name="userName"
              type="text"
              placeholder="jane_doe"
              required
              className="w-full h-11 px-3.5 border rounded"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              required
              className="w-full h-11 px-3.5 border rounded"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1.5">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full h-11 px-3.5 border rounded"
            />
            <p className="text-xs text-slate-400 mt-2">
              Must be at least 8 characters long.
            </p>
          </div>

         

          {success && (
            <p className="text-green-600 text-sm font-medium">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="w-full h-11 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded"
          >
            Register Account
          </button>

        </form>

        <div className="mt-10 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Aldready a member?
            <Link
              to="/login"
              className="text-primary font-bold hover:text-blue-700 ml-1"
            >
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignUp;