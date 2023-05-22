import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

function store() {
  return (
    <div className={`flex items-center justify-center h-screen bg-black`}>
      <div>
        <Header />
      </div>
      <div>
      <div className={`container mx-auto px-4 py-16 text-white`}>
        <h1 className={`text-7xl font-bold mb-8 text-center`}>Shop Products</h1>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}>
          <div className={`bg-black border border-2 hover:shadow-indigo-500 hover:p-12 shadow-2xl border-violet-500 p-8 shadow rounded-lg`}>
            <h2 className={`text-2xl font-bold mb-4`}>Merchendise</h2>
            <ul className={`text-white`}>
            <Image alt={"pic"} width={500} height={500} src="/cap.png" />
            </ul>
            <Link href="/shopmerch" className={`bg-black border mt-24 justify-center border-1 border-violet-500 shadow-violet-500/50 shadow-xl text-white font-bold py-2 px-4 rounded-md mt-4`}>
              Shop Now
            </Link>
          </div>
          <div className={`bg-black border text-white border-2 hover:shadow-indigo-500 hover:p-12 shadow-2xl border-violet-500 p-8 rounded-lg`}>
            <h2 className={`text-2xl font-bold mb-4`}>Tickets</h2>
            <ul className={`text-white`}>
                <Image alt={"pic"} width={500} height={500} src="/tickets.png" />
            </ul>
            <Link href="/shoptickets" className={`bg-black border border-1 border-violet-500 shadow-violet-500/50 shadow-xl text-white font-bold py-2 px-4 rounded-md mt-4`}>
              Shop Now
            </Link>
          </div>
          <div className={`bg-black border border-2 hover:shadow-indigo-500 shadow-2xl hover:p-12 border-violet-500 rounded-lg p-8`}>
            <h2 className={`text-2xl font-bold mb-4`}>Equipment</h2>
            <ul className={`text-white`}>
                <Image alt={"pic"} height={500} width={500} src="/ball.png" />
            </ul>
            <Link href="/shopequipment" className={`bg-black border border-1 border-violet-500 shadow-violet-500/50 shadow-xl text-white font-bold py-2 px-4 rounded-md mt-4`}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default store