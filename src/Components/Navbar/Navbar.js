import React from 'react'
import s from './Navbar.module.css'

const Navbar = (props) =>{
    return(
        <nav>
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>Search</li>
                <li>Logout</li>
            </ul>
        </nav>
    )
}

export default Navbar