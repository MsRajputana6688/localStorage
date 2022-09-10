import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'


const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <NavLink to='/'>
                    <span className='link'>Home</span>
                </NavLink>
                <NavLink to='./Form/Form'>
                    <span className='link'>Form</span>
                </NavLink>
            </div>
        </>
    )
}

export default Navbar