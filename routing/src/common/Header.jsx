import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <h1>Header part</h1>
        <nav>
            <ul>
                <li> <Link to={'/'}>Home</Link> </li>
                <li> <Link to={'/about-us'}>About</Link> </li>
                <li> <Link to={'/course'}>Course</Link> </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header