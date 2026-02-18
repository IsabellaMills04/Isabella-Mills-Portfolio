import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftSide">
            <p>Isabella Mills</p>
        </div>

        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            {/* <button>
              <ReorderIcon/>
            </button> */}
        </div>
    </div>
  )
}

export default Navbar
