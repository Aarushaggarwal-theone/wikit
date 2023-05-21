import React from 'react'

function home() {
  return (
<div className={`h-screen mx-auto p-4`}>
      {/* Upcoming Matches */}
      <div className={`mb-8`}>
        <h2 className={`text-2xl font-semibold mb-4`}>Upcoming Matches Today</h2>
        <div className={`grid grid-cols-2 gap-4`}>
          <div className={`bg-white rounded-lg p-4`}>
            <h3 className={`text-xl font-semibold mb-2`}>Match 1</h3>
            <p className={`text-gray-800 mb-4`}>MI vs SRH</p>
            <p className={`text-gray-500`}>Date: Today</p>
            <p className={`text-gray-500`}>Time: 3:30pm</p>
          </div>
          <div className={`bg-white rounded-lg p-4`}>
            <h3 className={`text-xl font-semibold mb-2`}>Match 2</h3>
            <p className={`text-gray-800 mb-4`}>RCB vs GT</p>
            <p className={`text-gray-500`}>Date: Today</p>
            <p className={`text-gray-500`}>Time: 7:30pm</p>
          </div>
        </div>
      </div>

      {/* Buy Tickets */}
      <div className={`mb-8`}>
        <h2 className={`text-2xl font-semibold mb-4`}>Buy Tickets</h2>
        <button className={`bg-green-500 text-white py-2 px-4 rounded-full`}>Buy Now</button>
      </div>

      {/* Graphs and Analytics */}
      <div>
        <h2 className={`text-2xl font-semibold mb-4`}>Team Analytics</h2>
        <div className={`grid grid-cols-2 gap-4`}>
          <div className={`bg-white rounded-lg p-4`}>
            <h3 className={`text-xl font-semibold mb-2`}>Team A</h3>
            {/* Add graph or analytics for Team A */}
          </div>
          <div className={`bg-white rounded-lg p-4`}>
            <h3 className={`text-xl font-semibold mb-2`}>Team B</h3>
            {/* Add graph or analytics for Team B */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default home