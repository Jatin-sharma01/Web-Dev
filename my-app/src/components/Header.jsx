import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="main">
    <div className='navbar'>
        <div className="logo" ><Link className="logoclass" to = "/">Logo</Link></div>
        <div className="list">
            <Link className='headerList' to ="/student-signup" >Student</Link>
        <Link className='headerList' to ="/teacher-signup">Teacher</Link>
        <Link className='headerList' to ="/student-signup">Admin</Link>
        </div>
    </div>
    </div>
  )
}

export default Header