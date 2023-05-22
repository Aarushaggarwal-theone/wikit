import Header from '@/components/Header'
import React from 'react'

function chat() {
  const messages = [
    {
      message: 'Lord Vader....',
      userId: 'gd2BZkgPrHZ1KdCv04bq',
      time: '10:30 AM'
    },
    {
      message: 'Lord Vader....',
      userId: 'gd2BZkgPrHZ1KdCv04bq',
      time: '11:30 AM'
    },
    {
      message: 'Lord Vader....',
      userId: 'gd2BZkgPrHZ1KdCv04bq',
      time: '12:30 AM'
    },
    {
      message: 'Lord Vader....',
      userId: 'gd2BZkgPrHZ1KdCv04bq',
      time: '1:30 PM'
    },
    {
      message: 'Lord Vader....',
      userId: 'gd2BZkgPrHZ1KdCv04bq',
      time: '2:30 PM'
    },
    {
      message: 'Lord Vader....',
      userId: 'gd2BZkgPrHZ1KdCv04bq',
      time: '3:30 PM'
    },]
  return (
    <div className={``}>
      <div className={`mb-8`}>
      <Header />
      </div>
      <div className={`flex h-screen bg-black`}>

      <div className={`flex-1 flex flex-col`}>
        <header className={`bg-black border-b border-violet-500 shadow-md shadow-violet-500 text-white py-4 px-6`}>
          <h1 className={`text-xl font-semibold`}>John Doe</h1>
        </header>
        <div className={`flex-1 bg-black`}>
          <div className={`p-4`}>
            
            <div className={`flex items-start mb-4`}>
              
              <div className={`bg-black border-2 border-violet-500 rounded-lg p-2`}>
                <p className={`text-white mb-1`}>Lord Vader....</p>
                <span className={`text-gray-500 text-sm`}>10:30 AM</span>
              </div>
            </div>
            <div className={`flex items-end justify-end mb-4`}>
              <div className={`bg-black border border-2 border-violet-500  shadow-violet-500 rounded-lg p-2`}>
                <p className={`text-white mb-1`}>What is thy bidding my master?</p>
                <span className={`text-gray500 text-sm`}>10:32 AM</span>
              </div>
              
            </div>
          </div>
        </div>
        <div className={`bg-black py-4 px-6`}>
          <div className={`flex items-center`}>
            <input
              className={`flex-1 bg-black border border-2 border-violet-500 shadow-2xl shadow-violet-500 rounded-full py-2 px-4 mr-2`}
              type="text"
              placeholder="Type a message..."
            />
            <button className={`bg-black border-2 border-violet-500 text-white py-2 px-4 rounded-full`}>Send</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default chat