
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
function pricing() {
  return (
    <div className={`flex items-center justify-center h-screen bg-black`}>
      <div>
        <Header />
      </div>
      <div>
      <div className={`container mx-auto px-4 py-16 text-white`}>
        <h1 className={`text-4xl font-bold mb-8 text-center`}>Pricing</h1>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}>
          <div className={`bg-black border border-2 shadow-indigo-500 shadow-2xl border-violet-500 p-8 shadow rounded-lg`}>
            <h2 className={`text-2xl font-bold mb-4`}>Free</h2>
            <p className={`mb-4 text-gray-300`}>Free Forever</p>
            <p className={`text-3xl font-bold mb-4`}>₹0.0</p>
            <ul className={`text-white`}>
              <li className={`mb-2`}>➡️Chat and connect with other fans.</li>
              <li className={`mb-2`}>➡️Analytics and Statistics</li>
              <li className={`mb-2`}>➡️Purchase merchendise</li>
              <li className={`mb-2`}>➡️Purchase tickets</li>
            </ul>
            <button className={`bg-black border border-1 border-violet-500 shadow-violet-500/50 shadow-xl text-white font-bold py-2 px-4 rounded-md mt-4`}>
              Buy Now
            </button>
          </div>
          <div className={`bg-black border text-white border-2 shadow-indigo-500 shadow-2xl border-violet-500 p-8 rounded-lg`}>
            <h2 className={`text-2xl font-bold mb-4`}>Pro</h2>
            <p className={`text-white mb-4`}>Save 5% with yearly subcription</p>
            <p className={`text-3xl font-bold mb-4`}>₹129/month</p>
            <ul className={`text-white`}>
              <li className={`mb-2`}>➡️Everything in the free plan</li>
              <li className={`mb-2`}>➡️10% Discount on merchendise</li>
              <li className={`mb-2`}>➡️10% Discount on tickets</li>
              <li className={`mb-2`}>➡️Access to meetups</li>
            </ul>
            <button className={`bg-black border border-1 border-violet-500 shadow-violet-500/50 shadow-xl text-white font-bold py-2 px-4 rounded-md mt-4`}>
              Buy Now
            </button>
          </div>
          <div className={`bg-black border border-2 shadow-indigo-500 shadow-2xl border-violet-500 rounded-lg p-8`}>
            <h2 className={`text-2xl font-bold mb-4`}>Premium</h2>
            <p className={`text-white mb-4`}>Save 7% with yearly subcription</p>
            <p className={`text-3xl font-bold mb-4`}>₹179/month</p>
            <ul className={`text-white`}>
              <li className={`mb-2`}>➡️Everything in the pro plan</li>
              <li className={`mb-2`}>➡️Upto 50% Discount on merchendise</li>
              <li className={`mb-2`}>➡️Upto 50% Discount on tickets</li>
              <li className={`mb-2`}>➡️Access to friendly fan tornaments</li>
            </ul>
            <button className={`bg-black border border-1 border-violet-500 shadow-violet-500/50 shadow-xl text-white font-bold py-2 px-4 rounded-md mt-4`}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default pricing