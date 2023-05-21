import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className={`pb-10`}>
        <header className={`fixed top-0 asbolute left-0 right-0 bg-black shadow-violet-500 shadow-sm text-white py-4 z-10`}>
      <div className={`container mx-auto flex items-center justify-between px-4`}>
        <div className={`flex items-center space-x-4`}>
          <img className={`h-10 w-15`} src="https://media.discordapp.net/attachments/1109362091841835030/1109708619429204069/logo.png?width=1000&height=300" alt="Logo" />
          
        </div>
        <nav className={`space-x-4`}>
          <Link className={`text-gray-300 hover:text-white`} href="home">Home</Link>
          <Link className={`text-gray-300 hover:text-white`} href="/shop">Shop</Link>
          <Link className={`text-gray-300 hover:text-white`} href="/chat">Group Chat</Link>
          <Link className={`text-gray-300 hover:text-white`} href="/pricing">Pricing</Link>
        </nav>
        <div className={`space-x-4`}>
        <Link href="/login" className={`bg-violet-500 border border-1 border-violet-500 shadow-violet-500/50  text-white font-bold py-2 px-4 rounded-md mt-4`}>
              Login
            </Link>
          <Link href="/register" className={`bg-transparent border border-violet-500 text-white p-10 py-2 px-4 rounded-lg`}>Register</Link>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header