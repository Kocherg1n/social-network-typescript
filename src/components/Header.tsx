import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Header.css'
import {useDispatch} from 'react-redux';
import { setUserLogOut } from '../redux/middleware';

type HeaderType = {
    loggedIn: boolean,
    userLogin: string | null
}

export const Header: React.FC<HeaderType> = ({loggedIn, userLogin}) => {
    const dispatch = useDispatch()
    const logOutHandler = () => {
        dispatch(setUserLogOut())
        return <Redirect to='login'/>
    }

    return (
        <header className='Header'>
            <div className='Header__container'>
                <div className='Header__user-block'>
                    <span>{loggedIn ? userLogin : ''}</span>
                    {
                        loggedIn
                            ? <button onClick={logOutHandler}>logOut</button>
                            : <Link to='/login'><button>logIn</button></Link>
                    }
                </div>
            </div>
        </header>
    )
}
