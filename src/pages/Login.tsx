import React, {useEffect} from 'react'
import {LoginForm} from '../components/LoginForm'
import {shallowEqual, useSelector} from 'react-redux'
import {RootState} from '../redux/store/store'
import {Redirect} from 'react-router-dom'



export const Login: React.FC = () => {
    const { userLoggedIn } = useSelector((state: RootState) => state.auth)
    console.log('Login-render !')


    if (userLoggedIn) {
        return <Redirect to='/profile'/>
    }

    return (
        <div>
            <LoginForm/>
        </div>
    )
}
