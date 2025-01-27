import React from 'react'
import './Logo.css'
import logo from '../../assets/imgs/logo.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <aside className='logo'>
      <Link to="/" className='logo'>
        <img src={logo} alt="logo" />
      </Link>
    </aside>
  )
}

export default Logo
