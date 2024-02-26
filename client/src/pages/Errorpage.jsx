import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    
    <section className="flex flex-col items-center justify-center h-screen bg-gray-200">
  <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops! Error 404</h2>
  <p className="text-lg text-gray-600 mb-6">Sorry, the page you're looking for cannot be found.</p>
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out">
   <Link to='/' >Go Back Home</Link>
  </button>
</section>
  )
}

export default Errorpage