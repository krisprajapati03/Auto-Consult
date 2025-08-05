import React from 'react'
import HighlightText from '../../components/user/HighlightText';

function HeroSection() {
  return (
    <>
      <section className="bg-gradient-to-br from-lightGray to-white min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-darkBlack mb-6">
            Welcome to <HighlightText text="AutoHub" />
          </h1>
          <p className="text-lightBlack text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
            Your one-stop solution for all things automotive. Find your dream
            car with confidence and drive into the future.
          </p>
        </div>
      </section>
    </>
  )
}

export default HeroSection
