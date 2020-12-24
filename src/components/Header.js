import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <ul className='header'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About US</Link></li>
                <li><Link to='/list'>List</Link></li>
            </ul>

        </div>
    )
}

export default Header
