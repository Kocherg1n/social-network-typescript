import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {Messages} from '../pages/Messages'
import {Profile} from '../pages/Profile'
import {Users} from '../pages/Users'

export const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Profile}/>
            <Route path='/messages' component={Messages}/>
            <Route path='/users' component={Users}/>
        </Switch>
    )
}
