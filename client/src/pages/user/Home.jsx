import React from 'react'
import FeaturedListings from '../../components/user/FeaturedListings'

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-darkBlack">Welcome to Auto Consult</h1>
      <p className="text-lightBlack mt-4">Your one-stop solution for all things automotive.</p>
      
    <FeaturedListings />
    </div>
  )
}

export default Home
