import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main>{props}</main>
      <Footer />
    </>
  )
}

export default Layout
