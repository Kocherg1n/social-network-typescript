import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {MessagesPage} from '../pages/Messages'
import {ProfilePage} from '../pages/Profile'
import {UsersPage} from '../pages/Users'
import {Login} from '../pages/Login'


export const Routes: React.FC = () => {

    return (
        <Switch>
            {/*<Route path='/' exact component={ProfilePage}/>*/}
            <Route path='/profile/:userId?' component={ProfilePage}/>
            <Route path='/messages' component={MessagesPage}/>
            <Route path='/users' component={UsersPage}/>
            <Route path='/login' component={Login}/>
        </Switch>
    )
}
