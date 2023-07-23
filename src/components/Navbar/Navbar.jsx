import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'


const Navbar = () => {



  return (
    <div className='navbar'>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>HOME</NavLink>
        <NavLink to="about" className={({ isActive }) => isActive ? "active" : ""}>ABOUT ME</NavLink>
        <NavLink to="projects" className={({ isActive }) => isActive ? "active" : ""}>MY PROJECTS</NavLink>
        <NavLink to="contact" className={({ isActive }) => isActive ? "active" : ""}>CONTACT</NavLink>
    </div>
  )
}

export default Navbar