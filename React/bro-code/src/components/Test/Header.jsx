import React from 'react'

function Header() {
  return (
    <div className='main-header-parent'>
      <div className="Navbar-logo">

      <h1>Logo</h1>
      </div>
      <div className="Navbar-links">
        <ul>
          <li><a href="#">Home</a> </li>
          <li><a href="#">About</a> </li>
          <li><a href="#">Services</a> </li>
          <li><a href="#">Contact</a> </li>
        </ul>
      </div>
    <hr></hr>
    </div>
  )
}

export default Header