import React from 'react'
import Navbar from './components/user/Navbar'
import Footer from './components/user/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-white">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
