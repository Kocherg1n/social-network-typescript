import React from 'react'
import {useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {RootState} from '../redux/store/store';

export const MessagesPage: React.FC = () => {
    const {userLoggedIn} = useSelector((state: RootState) => ({
        userLoggedIn: state.auth.userLoggedIn,
    }))

    if (!userLoggedIn) {
        return <Redirect to='login'/>
    }

    return (
        <div>messages</div>
    )
}
