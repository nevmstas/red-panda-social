import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props) =>{
    return(
            <nav>
                <ul>
                    <li>
                        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                    </li>

                    <li>
                        <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
                    </li>
                    <li>Search</li>
                    <li>
                        <NavLink to='/users' activeClassName={s.active}>Find users</NavLink>
                    </li>
                    <li className={s.push}>
                        { props.isAuth ? 'User: ' + props.login : <NavLink to='/login' activeClassName={s.active}>Login</NavLink> }
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar