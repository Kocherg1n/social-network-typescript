import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation: React.FC = () => {
    return (
        <nav style={{display: 'flex', flexDirection: 'column'}}>
            <NavLink exact to='/'>Profile</NavLink>
            <NavLink to='/messages'>Messages</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/music'>null</NavLink>
        </nav>
    );
};
