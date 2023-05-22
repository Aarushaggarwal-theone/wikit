import React from 'react'
import Header from '@/components/Header'
import Link from 'next/link'
function home() {
  const games = [
    {
      gameType: 'Playoff 1',
      teamNames: 'GT vs CSK ',
      date: 'Today',
      time: "7:30pm"
    },
    {
      gameType: 'Playoff 2',
      teamNames: 'LSG vs MI ',
      date: 'Wed, 24 May',
      time: "7:30pm"
    }
    
  ]
  return (
<div className={`h-screen mx-auto p-4`}>
    <div className={`mb-8`}>
      <Header />
      </div>
      <div className={`mb-8`}>
        <h2 className={`text-2xl font-semibold mb-4`}>Next Matches</h2>

        <div className={`grid grid-cols-2 gap-4`}>
           {games.map((game, index) => (
        <div key={index} className={`bg-purple-500 rounded-lg p-8 hover:bg-purple-300 hover:transition-ease hover:shadow-purple-500`}>
          <h3 className={`text-xl font-semibold mb-2 text-black`}>{game.gameType}</h3>
          <p className={`text-gray-800 mb-4`}>{game.teamNames}</p>
          <p className={`text-gray-50`}>Date: {game.date}</p>
          <p className={`text-gray-50`}>Time: {game.time}</p>
        </div>
      ))}
        </div>
      </div>

      {/* Buy Tickets */}
      <div className={`mb-8`}>

        <Link href="/shoptickets" className={`bg-green-500 text-white py-2 px-4 rounded-full`}>Buy Now</Link>
      </div>

      {/* Graphs and Analytics */}
    
    </div>
  )
}

export default home