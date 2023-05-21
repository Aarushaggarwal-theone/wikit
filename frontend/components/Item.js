import React from 'react'

function Item() {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg m-4`}>
      <div className={`px-6 py-4`}>
        <div className={`font-bold text-xl mb-2`}></div>
        <p className={`text-gray-700 text-base mb-2`}>Price:</p>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default Item