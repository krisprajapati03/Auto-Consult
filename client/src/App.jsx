import React from 'react'
import Layout from './Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/user/Home'
import About from './pages/user/About'
import Inventory from './pages/user/Inventory' 
import LoanCalculator from './pages/user/LoanCalculator'
import Contact from './pages/user/Contact'
import Sold from './pages/user/Sold'
import ManuItems from './pages/user/ManuItems'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='inventory' element={<Inventory />} />
      <Route path='loan-calculator' element={<LoanCalculator />} />
      <Route path='contact' element={<Contact />} />
      <Route path='menu-items' element={<ManuItems />} />
      <Route path='sold' element={<Sold />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App