import React from 'react'
import './Header.css'

type HeaderType = {
    loggedIn: boolean,
    userLogin: string | null
}

export const Header: React.FC<HeaderType> = ({loggedIn, userLogin}) => {
    return (
        <header className='Header'>
            <div className='Header__container'>
                <div className='Header__user-block'>
                    <span>{loggedIn ? userLogin : ''}</span>
                    <button>logout/login</button>
                </div>
            </div>
        </header>
    )
}
