import React from 'react'
import Header from './components/Header.jsx'

import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'

function Layout() {
  return (
    <>
    <Outlet />
    <About/>
    <Footer/>
    </>
  )
}

export default Layout