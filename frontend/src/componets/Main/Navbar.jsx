import React from 'react'
import './Navbar.css'

const Navbar = () => {
    const name="Instagram Clone"
  return (
  <>
      <nav class="navbar">
        <div class="container">
            <a href="#" class="logo">{name}</a>
            <button class="toggle-btn" aria-label="Toggle navigation">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
  </>
  )
}

export default Navbar