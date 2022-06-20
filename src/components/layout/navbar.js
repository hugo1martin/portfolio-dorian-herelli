import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar flex row space-between v-center'>
      <img src='iku-studio-logo.png' alt='iku-studio-logo' />
      <div>
        <NavLink to='/' exact>
          <span>À propos de moi</span>
        </NavLink>
        <NavLink to='/portfolio' exact>
          <span>Portfolio</span>
        </NavLink>
        <a href='mailto:d.herelli.pro@gmail.com'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
