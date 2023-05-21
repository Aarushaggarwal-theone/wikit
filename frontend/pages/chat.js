import Header from '@/components/Header'
import React from 'react'

function chat() {
  return (
    <div className={``}>
      <div className={`flex h-screen bg-black`}>
      <div className={`w-1/4 bg-black text-white border-r border-violet-500 relative`}>
        {/* Contacts List */}
        <div className={`p-4`}>
          <h1 className={`text-lg font-semibold mb-4`}>Chats</h1>
          <ul className={`space-y-2`}>
            <li className={`flex shadow-2xl shadow-violet-500 items-center border border-violet-500 border-2 rounded-md p-2 pb-2`}>
              {/* <img className={`w-10 h-10 rounded-full mr-4`} src="contact1.png" alt="Contact" /> */}
              <p className={`text-white`}>Your Master</p>
            </li>
            {/* Add more contacts */}
          </ul>
        </div>
        {/* End of Contacts List */}
      </div>
      <div className={`flex-1 flex flex-col`}>
        <header className={`bg-black border-b border-violet-500 shadow-md shadow-violet-500 text-white py-4 px-6`}>
          <h1 className={`text-xl font-semibold`}>Your Master</h1>
        </header>
        <div className={`flex-1 bg-black`}>
          <div className={`p-4`}>
            {/* Chat messages */}
            <div className={`flex items-start mb-4`}>
              {/* <img className={`w-10 h-10 rounded-full mr-4`} src="user1.png" alt="User" /> */}
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
              {/* <img className={`w-10 h-10 rounded-full ml-4`} src="user2.png" alt="User" /> */}
            </div>
            {/* End of chat messages */}
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