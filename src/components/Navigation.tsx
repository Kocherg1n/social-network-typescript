import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

export const Navigation: React.FC = () => {
    return (
        <nav className='Nav' style={{display: 'flex', flexDirection: 'column'}}>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/messages'>Messages</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </nav>
    );
};
