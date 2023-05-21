import Header from '@/components/Header'
import React from 'react'

function register() {
  return (
    <div className={`flex items-center justify-center min-h-screen bg-black`}>
      <Header />
      <div className={`bg-black border border-2 border-violet-500 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full`}>
        <h2 className={`text-4xl font-bold mb-4 text-center text-white`}>Register</h2>
        <form>
          <div className={`mb-4`}>
            <label className={`block text-gray-700 text-sm font-bold mb-2 text-white`} htmlFor="name">
              Name
            </label>
            <input
              className={`shadow-2xl shadow-violet-500 bg-black appearance-none border border-2 border-violet-500 rounded-xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline`}
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={`mb-4`}>
            <label className={`block text-gray-700 text-sm font-bold mb-2 text-white`} htmlFor="email">
              Email
            </label>
            <input
              className={`shadow-2xl shadow-violet-500 appearance-none border border-2 border-violet-500 bg-black rounded-xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={`mb-6`}>
            <label className={`block text-gray-700 text-sm font-bold mb-2 text-white`} htmlFor="password">
              Password
            </label>
            <input
              className={`shadow-2xl bg-black shadow-violet-500 appearance-none border border-2 border-violet-500 rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className={`flex items-center justify-between`}>
          <button className={`bg-black border border-1 border-violet-500 shadow-violet-500/50 shadow-xl text-white font-bold py-2 px-4 rounded-md mt-4`}>
              Login
            </button>
            <a
              className={`inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800`}
              href="#"
            >
              Already have an account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default register