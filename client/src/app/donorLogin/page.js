import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const donorLogin = () => {
  return (
    <>
    
    <Head>
        <title>Login | Jatra</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl relative overflow-hidden">
          {/* Soft background effect */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-300 via-white to-gray-300 z-0"></div>

          {/* Logo */}
          <div className="flex justify-center mb-6 z-10 relative">
            <Image
              src="/jatra.jpg" // Update path based on where you store it
              alt="Jatra Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>

          <h2 className="mb-6 text-center text-2xl font-bold text-orange-600 z-10 relative">
            Sign in to Jatra
          </h2>

          <form className="space-y-5 z-10 relative">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex justify-end text-sm">
              <a href="#" className="text-orange-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-orange-500 px-4 py-2 text-white font-semibold shadow-md hover:bg-orange-600 transition-all duration-300"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600 z-10 relative">
            Don't have an account?{" "}
            <a href="/donorRegister" className="text-orange-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default donorLogin
